export default function Header({ total }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-200">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-slate-800">Job Tracker</h1>
          <p className="text-slate-500 mt-1">
            Track all the jobs you apply for
          </p>
        </div>

        <div className="bg-blue-50 text-blue-700 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base">
          Total Applications: {total}
        </div>
      </div>
    </div>
  );
}