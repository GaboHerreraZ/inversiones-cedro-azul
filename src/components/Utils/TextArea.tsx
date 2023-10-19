import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string;
  className?: string;
  error?: string;
  required?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, IProps>(
  ({ labelText, className, error, required, ...props }, ref) => {
    return (
      <>
        <div className="relative mt-6 border w-full inline-flex justify-center ">
          <textarea
            ref={ref}
            {...props}
            className="w-full text-white p-2 bg-transparent peer focus:ring-0 border-transparent focus:border-transparent focus:outline-none "
            id="name"
            placeholder=" "
          />
          <div className="border-cedro-500  absolute top-full transition-all duration-300 bg-cedro-500 w-0 h-[2px]  peer-focus:w-full"></div>
          <label
            className="absolute -left-1 transform -translate-y-5  transition-all font-bold peer-placeholder-shown:font-normal  px-1 duration-200 peer-placeholder-shown:scale-100  peer-placeholder-shown:left-1 ml-1 peer-placeholder-shown:text-white peer-focus:text-white peer-placeholder-shown:translate-y-2 text-xs text-white peer-placeholder-shown:text-sm"
            htmlFor="name"
          >
            {labelText}
            {required && <span className="text-red-500">*</span>}
          </label>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </>
    );
  }
);

export default TextArea;
