import Link from "../primitives/Link";

const UsefulLink = ({ data }) => {
  return (
    <div>
      <h2 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Useful Links
      </h2>
      <ul>
        {data.map((items) => {
          return (
            <li key={items.id} className="mb-2">
              <Link href={items.href}>{items.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsefulLink;
