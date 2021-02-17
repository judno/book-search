const GOOGLE_API_KEY = "AIzaSyBnVNXBoGCfFUMwWg9H3Q7dvK1hL-4joVw";

export function searchBooks(query) {
  const url = `https://www.googleapis.com/books/v1/volumes?key=${GOOGLE_API_KEY}&q=${query}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const results = data.items.map((item) => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        link: item.volumeInfo.infoLink,
        image: item.volumeInfo.imageLinks?.thumbnail,
      }));

      return results;
    });
}

export function saveBook(book) {
  return fetch(`/api/books`, {
    method: "POST",
    body: JSON.stringify(book),
    headers: { "Content-Type": "application/json" },
  });
}

export function getBooks() {
  return fetch(`/api/books`).then((res) => res.json());
}

export function deleteBook(bookId) {
  return fetch(`/api/books/${bookId}`, {
    method: "DELETE",
  });
}
