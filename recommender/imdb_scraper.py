from bs4 import BeautifulSoup
from urllib.request import urlopen
from tabulate import tabulate

def response_await(url):
    response = urlopen(url)
    data = response.read()
    soup = BeautifulSoup(data, 'lxml')
    return soup

def choices():
    options_map = {
        1: ('Top movies' , 'top'),
        2: ('Most Popular Movies' , 'moviemeter'),
        3: ('Top English Movies' , 'top-english-movies'),
        4: ('Top TV Shows' , 'toptv'),
        5: ('Most Popular TV Shows' , 'tvmeter'),
        6: ('Low Rated Movies', 'bottom'),
        7: ('Top Box Office collection', 'boxoffice')
    }
    
    for i, option in enumerate(options_map, 1):
        print("{}) {} ".format(i, options_map[option][0]))
        
    choice = int(input('\n\n Please Enter your Choice: \n'))
    while(choice<1 or choice>len(options_map)):
        print("\n Invalid Choice")
        choice = int(input('\n\n Please Enter your Choice: \n'))
        
    return options_map[choice][1]

def getData(base_url, option):
    complete_url =base_url + option
    soup = response_await(complete_url)
    card_list = soup.find_all('span',{'class':'media-body media-vertical-align'})
    result=[]
    count = 1
    for card in card_list:
        try:
            name = card.find('h4').text.replace("\n"," ").lstrip("0123456789. ")
        except:
            pass
        try:
            rating = card.find('p').text.strip()
        except:
            pass
        
        result.append([count, name, rating])
        count += 1
        
    print(tabulate(result, headers=["Index", "Name", "Ratings"], tablefmt="grid"))
    

def main():
    base_url = "http://m.imdb.com/chart/"
    choice = choices()
    getData(base_url, choice)
    
if __name__ == '__main__':
    main()
