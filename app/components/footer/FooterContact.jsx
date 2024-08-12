import Link from "../primitives/Link";

const FooterContact = ({ data }) => {
  return (
    <div>
      <h2 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Contact
      </h2>
      <ul>
        {data.map((item) => {
          if (
            item.title ===
            "2 - Sanders Parade, Greyhound Lane, Streatham, London, SW16 5NL United Kingdom"
          ) {
            return (
              <li
                className="mb-2 flex text-sm items-center justify-center md:justify-start"
                key={item.id}
              >
                <span className="me-2 text-2xl text-red-900">{item.icon}</span>
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          } else {
            return (
              <li
                className="mb-2 flex items-center justify-center md:justify-start"
                key={item.id}
              >
                <span className="me-3 text-xl text-red-900">{item.icon}</span>
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default FooterContact;
