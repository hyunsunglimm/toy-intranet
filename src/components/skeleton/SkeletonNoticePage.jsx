export default function SkeletonNoticePage() {
  return (
    <div className="py-8">
      <div className="bg-white/10 rounded-lg overflow-hidden relative">
        {/* 이미지를 위한 스켈레톤 */}
        <div className="w-full h-[500px] bg-gray-300 animate-pulse"></div>

        <div className="p-8">
          {/* 제목을 위한 스켈레톤 */}
          <div className="h-8 bg-gray-400 animate-pulse mb-10 mx-auto w-1/2 rounded-md"></div>

          {/* 설명을 위한 스켈레톤 */}
          <div className="space-y-4">
            <div className="h-7 bg-gray-400 animate-pulse w-[250px] rounded-md"></div>
            <div className="h-7 bg-gray-400 animate-pulse w-1/2 rounded-md"></div>
            <div className="h-7 bg-gray-400 animate-pulse w-[30%] rounded-md"></div>

            <div className="h-7 bg-gray-400 animate-pulse w-1/2 rounded-md"></div>
            <div className="h-7 bg-gray-400 animate-pulse w-3/4 rounded-md"></div>
            <div className="h-7 bg-gray-400 animate-pulse w-2/3 rounded-md"></div>

            <div className="h-7 bg-gray-400 animate-pulse w-3/4 rounded-md"></div>
            <div className="h-7 bg-gray-400 animate-pulse w-2/3 rounded-md"></div>
            <div className="h-7 bg-gray-400 animate-pulse w-3/4 rounded-md"></div>

            <div className="h-7 bg-gray-400 animate-pulse w-2/3 rounded-md"></div>
            <div className="h-7 bg-gray-400 animate-pulse w-3/4 rounded-md"></div>

            <div className="h-7 bg-gray-400 animate-pulse w-2/3 rounded-md mb-8"></div>
            <div className="h-7 bg-gray-400 animate-pulse w-[30%] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
