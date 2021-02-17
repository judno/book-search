import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "./api";
import { Result } from "./Result";

export function Saved() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    getBooks().then((books) => setResults(books));
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {results
          ? results.map((result, index) => (
              <Result
                key={index}
                book={result}
                buttonLabel="Delete"
                buttonAction={({ _id }) => {
                  deleteBook(_id).then(() => {
                    getBooks().then((books) => setResults(books));
                  });
                }}
              />
            ))
          : null}
      </div>
    </div>
  );
}
