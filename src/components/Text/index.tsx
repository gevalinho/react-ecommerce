import React from "react";

const sizes = {
  xs: "text-xs font-medium leading-[18px]",
  lg: "text-xl font-medium leading-[30px]",
  s: "text-sm font-normal leading-[21px]",
  "2xl": "text-[32px] font-medium leading-[39px]",
  "3xl": "text-4xl font-medium leading-[44px]",
  "4xl": "text-[110px] font-medium leading-[134px]",
  xl: "text-2xl font-normal leading-[30px]",
  md: "text-base font-normal leading-6",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_02 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
