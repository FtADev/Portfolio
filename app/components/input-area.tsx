import React from "react";

interface InputProps {
  label: string;
  id: string;
  register: any;
  errors: any;
}

const InputTextArea = ({ label, id, register, errors }: InputProps) => {
  return (
    <div className="mt-4 text-start w-full">
      <label
        className="mb-3 mt-5 block text-sm font-semibold text-gray-900"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <textarea
          className="peer max-h-52 min-h-48 block w-full rounded-md border border-gray-200 py-[9px] px-5 text-sm outline-2 placeholder:text-gray-500 resize-none focus:outline-bgPink"
          id={id}
          {...register(id)}
          placeholder={`Enter Your ${id}`}
          required
        />
        {/* <KeyRoundIcon className="pointer-events-none absolute start-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-bgPink" /> */}
      </div>
    </div>
  );
};

export default InputTextArea;
