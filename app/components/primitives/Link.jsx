import N from "next/link";

const Link = ({ href, children, ...rest }) => {
  // Ensure href is defined before using startsWith
  const external =
    href && (href.startsWith("http") || href.startsWith("https"));

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...rest}>
        {children}
      </a>
    );
  }

  if (href && (href.startsWith("tel:") || href.startsWith("mailto:"))) {
    return (
      <a href={href} {...rest}>
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
