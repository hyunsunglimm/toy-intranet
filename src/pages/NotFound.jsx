export default function NotFound() {
  const contentHeight = `${window.innerHeight - 80}px`;

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: contentHeight }}
    >
      <div className="uppercase text-[24px] text-slate-300/50 font-bold">
        404 not found
      </div>
    </div>
  );
}
