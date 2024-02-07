export default function SkeletonEmployeeCard() {
  return (
    <li className="rounded-md h-[230px] md:h-[342px] bg-white/10 border-[1px] border-slate-400/30 hover:bg-white/20 relative transition">
      <div className="animate-pulse flex flex-col h-full justify-center">
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover mx-auto bg-gray-400" />
        <div className="w-full mx-auto mt-4 flex flex-col items-center gap-3">
          <div className="bg-gray-400 w-[110px] h-[18px] md:h-[24px] rounded-md"></div>
          <div className="hidden md:block bg-gray-400 w-[200px] h-[18px] md:h-[21px] rounded-md"></div>
          <div className="bg-gray-400 w-[50px] h-[18px] md:h-[21px] rounded-md"></div>
          <div className="bg-gray-400 w-[80px] h-[18px] md:h-[21px] rounded-md"></div>
          <div className="bg-gray-400 w-[100px] h-[18px] md:h-[21px] rounded-md"></div>
        </div>
      </div>
    </li>
  );
}
