import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { message = "", label, type = "text" },
  ref
) {
  return (
    <div>
      <p className="mb-2 text-gray-400">{label}</p>
      <input
        className="border-2 focus:border-blue-300 outline-none w-full rounded-md py-1 px-2"
        ref={ref}
        type={type}
        required
      />
      {message && (
        <p className="text-center mt-2 text-sm bg-red-200 p-1 text-red-400 rounded-lg">
          {message}
        </p>
      )}
    </div>
  );
});

export default Input;
