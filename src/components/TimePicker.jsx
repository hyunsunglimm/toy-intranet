import { useRef } from "react";

export default function TimePicker({ label, timeChangeHandler, pickTime }) {
  const timeRef = useRef();
  return (
    <div className="w-full sm:w-min">
      <div
        onClick={() => timeRef.current.showPicker()}
        className="flex justify-between items-center border-[1px] border-slate-400/30 rounded-md h-[34px] px-4 w-full sm:w-[200px] cursor-pointer md:hover:bg-white/10"
      >
        <label className="text-slate-300 text-sm sm:text-[16px]">{label}</label>
        <p className="text-slate-300">{pickTime}</p>
        {!pickTime && (
          <p className="text-[10px] sm:text-sm text-slate-300">
            시간을 선택하세요.
          </p>
        )}
      </div>
      <input
        className="opacity-0"
        type="time"
        ref={timeRef}
        onChange={(e) => timeChangeHandler(label.toLowerCase(), e)}
        required
      />
    </div>
  );
}
