import React from "react";
import Link from "../primitives/Link";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black/5 p-2 text-center">
      <Link href="/copyright">
        <span>
          &copy; {currentYear} GlobalTech Web and Graphics Designer | IT
          Experts. All Rights Reserved.
        </span>
      </Link>
    </div>
  );
};
export default Copyright;
