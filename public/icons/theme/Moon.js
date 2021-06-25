import * as React from "react";

function SvgMoon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 578.725 578.725"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M397.86 377.194c-128.34-.149-232.35-104.153-232.5-232.5a230.07 230.07 0 0113.052-76.875c-80.074 45.203-123.073 135.876-107.4 226.483 15.68 90.603 86.637 161.566 177.244 177.24 90.603 15.674 181.277-27.322 226.48-107.4a229.824 229.824 0 01-76.876 13.052zm0 0"
        data-original="#000000"
      />
    </svg>
  );
}

export default SvgMoon;
