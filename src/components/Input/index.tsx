import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded",
} as const;
const variants = {
  underline: {
    black_900_02: "text-black-900_7e border-b border-black-900_02 border-solid",
  },
  outline: {
    black_900_02: "border-black-900_02 border border-solid text-black-900_87",
    gray_50: "border-gray-50 border border-solid text-gray-50_7e",
  },
  fill: {
    gray_100: "bg-gray-100 text-black-900_87",
  },
} as const;
const sizes = {
  xl: "h-[56px] pl-6 pr-[35px] text-base",
  xs: "h-[32px] pr-[35px] text-base",
  lg: "h-[50px] px-4",
  sm: "h-[38px] px-[18px] text-xs",
  md: "h-[48px] px-4 text-base",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "md",
      color = "gray_100",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
