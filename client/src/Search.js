import { useState } from "react";
import { saveBook, searchBooks } from "./api";
import { Result } from "./Result";

export function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  return (
    <div className="flex flex-col gap-5">
      <form
        className="content flex gap-3 justify-center"
        onSubmit={(event) => {
          event.preventDefault();

          searchBooks(query).then((data) => {
            setResults(data);
          });
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-60 rounded px-3"
        />
        <button
          type="submit"
          className="bg-blue-800 text-white py-2 px-6 rounded"
        >
          Search
        </button>
      </form>
      <div className="flex flex-col gap-5">
        {results
          ? results.map((result, index) => (
              <Result
                key={index}
                book={result}
                buttonLabel="Save"
                buttonAction={saveBook}
              />
            ))
          : null}
      </div>
    </div>
  );
}
