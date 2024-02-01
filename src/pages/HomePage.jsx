import AbsenceEmployees from "../components/AbsenceEmployees";
import NoticeGallery from "../components/NoticeGallery";
import WorkingEmployees from "../components/WorkingEmployees";

export default function HomePage() {
  return (
    <div className="p-8 w-full flex flex-col gap-8">
      <NoticeGallery />
      <WorkingEmployees />
      <AbsenceEmployees />
    </div>
  );
}
