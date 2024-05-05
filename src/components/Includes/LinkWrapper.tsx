import { ReactNode, AnchorHTMLAttributes } from "react";

interface LinkWrapperProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: ReactNode;
}

const LinkWrapper = ({ href, children, ...props }:
  LinkWrapperProps
) => {
  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <>
        {children}
      </>
    );
  }
};

export default LinkWrapper;
