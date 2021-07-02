import * as React from "react";

function SvgError({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M256 0C114.844 0 0 114.844 0 256s114.844 256 256 256 256-114.844 256-256S397.156 0 256 0zm0 448c-105.865 0-192-86.135-192-192 0-40.406 12.25-78.604 35.542-111.198l267.656 267.656C334.604 435.75 296.406 448 256 448zm156.458-80.802L144.802 99.542C177.396 76.25 215.594 64 256 64c105.865 0 192 86.135 192 192 0 40.406-12.25 78.604-35.542 111.198z" />
    </svg>
  );
}

export default SvgError;
