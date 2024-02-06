import AbsenceEmployees from "../components/AbsenceEmployees";
import NoticeGallery from "../components/NoticeGallery";
import WorkingEmployees from "../components/WorkingEmployees";

export default function HomePage() {
  return (
    <div className="py-8 flex flex-col gap-8">
      <NoticeGallery />
      <WorkingEmployees />
      <AbsenceEmployees />
    </div>
  );
}
