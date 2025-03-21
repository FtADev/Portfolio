import { UserRound } from "lucide-react";
import React, { ReactElement } from "react";
import { HiAtSymbol } from "react-icons/hi";

interface InputProps {
    label: string
    id: string
    register: any
    errors: any
    icon: ReactElement
    
}

const InputField = ({label, id, register, errors, icon}: InputProps) => {
  return (
    <div className="w-full text-start">
                      <label
                        className="mb-3 mt-5 block text-sm font-semibold text-gray-900"
                        htmlFor={id}
                      >
                        {label}
                      </label>
                      <div className="relative">
                        <input
                          className="peer block w-full rounded-md border border-gray-200 py-3 ps-10 text-sm outline-2 placeholder:text-gray-500 focus:outline-bgPink"
                          id={id}
                          {...register(id)}
                          placeholder={`Enter Your ${label}`}
                          required
                        />
                        <div className="pointer-events-none absolute start-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-bgPink">
                        {icon}
                        </div>
                      </div>
                      {errors}
                    </div>
  );
};

export default InputField;
