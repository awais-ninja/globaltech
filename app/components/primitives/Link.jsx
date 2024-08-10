import N from "next/link";

const Link = ({ href, children, ...rest }) => {
  const external = href.startsWith("http") || href.startsWith("https");
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <N href={href} {...rest}>
      {children}
    </N>
  );
};

export default Link;
