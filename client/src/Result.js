export function Result({ book, buttonLabel, buttonAction }) {
  const { title, authors, description, image, link } = book;

  return (
    <div className="content rounded-md bg-white shadow-md p-5 flex flex-col w-full">
      <div className="flex justify-between">
        <a href={link} className="text-lg font-semibold hover:underline">
          {title}
        </a>
        <button
          className="bg-blue-800 text-white py-1 px-3 rounded"
          onClick={() => {
            buttonAction(book);
          }}
        >
          {buttonLabel}
        </button>
      </div>
      {authors ? (
        <div className="text-gray-600">Written by {authors.join(", ")}</div>
      ) : null}
      <div className="flex pt-5 gap-5">
        <img src={image} className="self-start rounded-md" />
        <div>{description}</div>
      </div>
    </div>
  );
}
