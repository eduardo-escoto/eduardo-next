import * as React from "react";

function OutLink({ children, href, ...props }) {
  return (
    <a
      {...props}
      href={href}
      className="link-secondary text-decoration-none"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default OutLink;
