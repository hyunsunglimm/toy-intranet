export default function SkeletonEmployeeCard() {
  return (
    <li className="flex flex-col p-4 rounded-md bg-white overflow-hidden">
      <div className="animate-pulse">
        <div className="w-[100px] h-[100px] rounded-full object-cover mx-auto mt-4 bg-gray-100 dark:bg-gray-400"></div>
        <div className="w-full mx-auto mt-4 flex flex-col gap-2 items-center">
          <div className="w-24 h-6 block bg-gray-100 dark:bg-gray-400 rounded-md mt-[2px]"></div>
          <div className="w-36 h-5 block bg-gray-100 dark:bg-gray-400 rounded-md"></div>
          <div className="w-8 h-5 block bg-gray-100 dark:bg-gray-400 rounded-md"></div>
          <div className="w-20 h-5 block bg-gray-100 dark:bg-gray-400 rounded-md"></div>
          <div className="w-20 h-5 block bg-gray-100 dark:bg-gray-400 rounded-md"></div>
          <div className="w-full h-8 block bg-gray-100 dark:bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </li>
  );
}
