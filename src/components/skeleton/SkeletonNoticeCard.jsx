export default function SkeletonNoticeCard() {
  return (
    <div className="bg-white/10 border-[1px] border-slate-400/30 rounded-md overflow-hidden cursor-pointer">
      <div className="animate-pulse w-full h-[286px] bg-gray-400"></div>
      <div className="text-center p-4">
        <div className="animate-pulse w-full h-6 block bg-gray-400 rounded-md"></div>
      </div>
    </div>
  );
}
