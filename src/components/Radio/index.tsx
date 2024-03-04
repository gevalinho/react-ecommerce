import React from "react";

const variants = {
  primary: "checked:border-black-900_02 checked:border border-black-900_02 border border-solid",
} as const;
const sizes = {
  xs: "h-[24px] w-[24px] text-base",
  sm: "h-[25px] w-[24px] text-base rounded-[12px]",
} as const;

export type RadioProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className = "", name = "", label = "", id = "radio_id", variant = "primary", size = "xs", ...restProps }, ref) => {
    return (
      <label className={className + " flex items-center justify-center gap-[5px] cursor-pointer"}>
        <input
          className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  },
);

export { Radio };
