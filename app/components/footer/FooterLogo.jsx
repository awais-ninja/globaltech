import Logo from "../primitives/Logo";

const FooterLogo = () => {
  return (
    <div className="pr-2">
      <div className="mb-2 flex  items-center justify-center md:justify-start">
        <Logo />
      </div>
      <p className="text-justify text-">
        GlobalTech is a leading provider of website design and development,
        graphics design, ecommerce website, ecommerce solutions and IT
        solutions, committed to delivering innovative and customized services to
        help businesses thrive in the digital age.
      </p>
    </div>
  );
};
export default FooterLogo;
