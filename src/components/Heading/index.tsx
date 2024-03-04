import React from "react";

const sizes = {
  "3xl": "text-5xl font-semibold leading-[60px]",
  "2xl": "text-4xl font-semibold leading-[44px]",
  xl: "text-[32px] font-bold leading-[39px]",
  "4xl": "text-[54px] font-semibold leading-[66px]",
  s: "text-base font-semibold leading-[25px]",
  md: "text-xl font-semibold leading-[30px]",
  xs: "text-sm font-semibold leading-[21px]",
  lg: "text-2xl font-semibold leading-[30px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_02 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
