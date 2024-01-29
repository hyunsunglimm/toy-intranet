export default function HomePage() {
  return (
    <div className="p-8 w-full flex flex-col gap-8">
      <div className="bg-red-100 h-[400px] rounded-lg flex justify-center items-center">
        기업 공지 모음 갤러리
      </div>
      <div className="bg-red-100 h-[400px] rounded-lg flex justify-center items-center">
        근무중인 전 직원 조회
      </div>
      <div className="bg-red-100 h-[400px] rounded-lg flex justify-center items-center">
        부재중인 직원 중 부재 항목에 따른 카테고리 메뉴로 데이터 필터링 기능
        구현
      </div>
    </div>
  );
}
