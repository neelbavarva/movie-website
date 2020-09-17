from bs4 import BeautifulSoup
from urllib.request import urlopen
from tabulate import tabulate

def response_await(url):
    response = urlopen(url)
    data = response.read()
    soup = BeautifulSoup(data, 'lxml')
    return soup

def browseOptions(category, data):
    url = data[category-1][2]
    Category = data[category-1][1]
    content_details = []
    count = 1
    Titles = []
    soup = response_await(url)
    cards_list = soup.find_all('section',{'class':'nm-collections-row'})
    for card in cards_list:
        try:
            Title = card.find('h1').text
            Temp_list = []
            item_list = card.find_all('li')
            movie_count = 1
            for item in item_list:
                try:
                    heading = item.find('span',{'class':'nm-collections-title-name'}).text
                    #image_link = item.find('img').get('src')
                    movie_link = item.find('a').get('href')
                    Temp_list.append([movie_count, heading, movie_link])
                    movie_count += 1
                except:
                    pass
            Titles.append(Title)
            content_details.append(Temp_list)
            count += 1
        except:
            pass
    for i in range(0, count-1):
        print(Titles[i])
        print(tabulate(content_details[i], headers=["Index", "Name", "Movie Link"], tablefmt="grid"))
def getOptions(base_url):
    soup = response_await(base_url)
    card_list = soup.find_all('section',{'class':'nm-collections-row'})
    result=[]
    count = 1
    for card in card_list:
        try:
            Title = card.find('span', {'class':'nm-collections-row-name'}).text
            link = card.find('a').get('href')
            result.append([count, Title, link])
            count += 1
        except:
            pass
    return result


def main():
    base_url = "https://www.netflix.com/in/browse/genre/839338"
    result = getOptions(base_url)
    print("Please select one of the categories")
    print(tabulate(result, headers=["Index", "Name", "Link"], tablefmt="grid"))
    choice = int(input('\n\n Please Enter your Choice: \n'))
    browseOptions(choice, result)
    #browseOptions(1, result)
if __name__ == '__main__':
    main()