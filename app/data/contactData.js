import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const contactData = [
  {
    title:
      "2 - Sanders Parade,Greyhound Lane, Streatham, London, SW16 5NL United Kingdom",
    icon: <FaHome />,
    id: "001",
    href: "https://shorturl.at/tnrO2",
  },
  {
    title: "info@brainloggers.co.uk",
    icon: <MdEmail />,
    id: "002",
    href: "mailto:info@brainloggers.co.uk",
  },
  {
    title: "awais.brainloggers@gmail.com",
    icon: <MdEmail />,
    id: "003",
    href: "mailto:awais.brainloggers@gmail.com",
  },
  {
    title: "+44 7391 157590",
    icon: <BsTelephoneFill />,
    id: "004",
    href: "tel:+44 7391 157590",
  },

  {
    title: "+92 304 9978288",
    icon: <IoLogoWhatsapp />,
    id: "005",
    href: "https://wa.me/923049978288",
  },
];

export default contactData;
