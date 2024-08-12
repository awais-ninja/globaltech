import Link from "./Link";
import logo from "@/public/globaltech.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logo} width={200} height={200} alt="GlobalTech Logo" />
      </Link>
    </div>
  );
};

export default Logo;
