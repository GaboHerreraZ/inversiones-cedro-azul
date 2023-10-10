import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  className?: string;
  type?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(
  ({ labelText, className, error, type, ...props }, ref) => {
    console.log("error", error);
    return (
      <>
        <div className="relative border-b-2 w-full inline-flex justify-center">
          <input
            ref={ref}
            {...props}
            className="w-full  peer focus:ring-0 border-transparent focus:border-transparent focus:outline-none"
            id="name"
            placeholder=" "
            type={type}
          />
          <div className="border-cedro-900 absolute top-full transition-all duration-300 bg-cedro-900 w-0 h-[2px]  peer-focus:w-full"></div>
          <label
            className="absolute -left-1 transform -translate-y-4  transition-all font-bold peer-placeholder-shown:font-normal  px-1 duration-200 peer-placeholder-shown:scale-100  peer-placeholder-shown:-left-1 ml-1 peer-placeholder-shown:text-slate-500  peer-focus:text-cedro-900 peer-placeholder-shown:translate-y-0 text-xs text-cedro-900 peer-placeholder-shown:text-sm"
            htmlFor="name"
          >
            {labelText}
          </label>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </>
    );
  }
);

export default Input;
