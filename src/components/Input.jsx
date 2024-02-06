import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { message = "", label, type = "text" },
  ref
) {
  return (
    <div>
      <p className="mb-2 text-slate-300">{label}</p>
      <input
        className="border-[1px] border-slate-400/30 outline-none w-full rounded-md py-1 px-2 bg-white/0 text-slate-300"
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
