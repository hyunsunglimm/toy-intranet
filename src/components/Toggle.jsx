import React from "react";

function Toggle({ checked, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        className="peer sr-only opacity-0"
        id="toggle"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor="toggle"
        className={`relative flex h-6 w-11 cursor-pointer items-center rounded-full px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 ${
          checked ? "bg-green-500 before:translate-x-full" : "bg-gray-400"
        }`}
      ></label>
    </div>
  );
}

export default Toggle;
