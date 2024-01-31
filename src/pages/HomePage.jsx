import AbsenceEmployees from "../components/AbsenceEmployees";
import WorkingEmployees from "../components/WorkingEmployees";

export default function HomePage() {
  return (
    <div className="p-8 w-full flex flex-col gap-8">
      <div className="bg-blue-100 h-[400px] rounded-lg flex justify-center items-center">
        기업 공지 모음 갤러리
      </div>
      <WorkingEmployees />
      <AbsenceEmployees />
    </div>
  );
}
