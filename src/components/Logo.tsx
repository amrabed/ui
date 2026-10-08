import React from "react";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

export function Logo({
  size = 32,
  title = "Amr Abed",
  className,
  ...props
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-label={title}
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        d="
          M 86,50
          L 86,80.5
          L 75.9,75
          A 36 36 0 1 1 86 50
          Z
          M 50,32
          A 18 18 0 1 0 50,68
          A 18 18 0 1 0 50,32
          Z
        "
      />
    </svg>
  );
}

export default Logo;
