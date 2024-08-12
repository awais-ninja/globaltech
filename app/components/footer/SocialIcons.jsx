import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "../primitives/Link";

const data = [
  { title: "facebook logo", icon: <FaFacebook /> },
  { title: "instagram logo", icon: <FaInstagramSquare /> },
  { title: "google logo", icon: <FaGoogle /> },
  { title: "linkedin logo", icon: <FaLinkedin /> },
];

const SocialIcons = () => {
  return (
    <div className="bg-slate-100 border-b-2 border-red-900 flex font-semibold items-center justify-center border-red p-4 text-black lg:justify-between">
      <div className="me-12 text-xl lg:block">
        <span>Get connected with us on social networks:</span>
      </div>

      <div className="flex justify-center">
        {data.map((items) => {
          return (
            <Link
              href="/"
              className="me-6 text-red-900 text-xl"
              key={items.title}
            >
              {items.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcons;
