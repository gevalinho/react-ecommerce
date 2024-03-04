import React from "react";

const shapes = {
  round: "rounded",
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
} as const;
const variants = {
  outline: {
    black_900_66: "border-black-900_66 border border-solid text-black-900_02",
    black_900_7f: "border-black-900_7f border border-solid text-black-900_02",
  },
  fill: {
    green_A400: "bg-green-A400 text-gray-50",
    black_900_02: "bg-black-900_02 text-white-A700",
    red_600: "bg-red-600 text-gray-50",
    white_A700: "bg-white-A700",
  },
} as const;
const sizes = {
  "4xl": "h-[44px] px-[35px] text-base",
  "5xl": "h-[44px] px-[34px] text-xl",
  xl: "h-[40px] px-2.5",
  md: "h-[32px] px-1.5 text-sm",
  "3xl": "h-[41px] px-[35px] text-base",
  "2xl": "h-[41px] px-[35px] text-xs",
  "6xl": "h-[46px] px-[11px]",
  "8xl": "h-[62px]",
  "7xl": "h-[56px] px-[35px] text-base",
  sm: "h-[26px] px-3 text-xs",
  xs: "h-[24px] px-[5px]",
  lg: "h-[34px] px-[5px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "circle",
  variant = "fill",
  size = "lg",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
