export default function SkeletonEmployeePage() {
  return (
    <div
      className="flex items-center justify-center text-slate-300"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {" "}
      {/* contentHeight 대신 '100vh'를 사용하여 전체 뷰포트 높이를 채움 */}
      <div className="w-[600px] bg-white/10 rounded-md border-[1px] border-slate-400/30 p-8 relative animate-pulse">
        <div className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 bg-slate-300 h-[140px] w-[140px] rounded-full"></div>
        <div className="mt-[60px]">
          <div className="text-center mb-3">
            <div className="h-6 bg-slate-400 rounded-md w-[130px] mx-auto"></div>
            <div className="h-4 bg-slate-400 rounded-md w-[100px] mx-auto mt-2 mb-[30px]"></div>
          </div>
          <div className="bg-white/10 rounded-md border-[1px] border-slate-400/30 p-4">
            <div className="h-5 bg-slate-400 rounded-md w-1/2 mx-auto mb-4"></div>
            <div className="h-5 bg-slate-400 rounded-md w-4/5 mx-auto "></div>
            <div className="h-5 bg-slate-400 rounded-md w-4/5 mx-auto m-1"></div>
            <div className="h-5 bg-slate-400 rounded-md w-4/5 mx-auto m-1"></div>
          </div>
          <div className="mt-10">
            <div className="h-5 bg-slate-400 rounded-md w-3/4 mx-auto mb-[55px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
