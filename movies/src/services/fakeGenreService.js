export const genres = [
    { _id: "a1", name: "Action" },
    { _id: "b2", name: "Comedy" },
    { _id: "c3", name: "Thriller" }
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }