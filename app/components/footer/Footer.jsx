import {
  siteMapData,
  Copyright,
  FooterContact,
  FooterLogo,
  SiteMap,
  SocialIcons,
  useFullLinkData,
  UsefulLink,
  contactData,
} from "./index";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-100 text-center text-surface/75  lg:text-left">
        <SocialIcons />
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FooterLogo />
            <SiteMap data={siteMapData} />
            <UsefulLink data={useFullLinkData} />
            <FooterContact data={contactData} />
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
