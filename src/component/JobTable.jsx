import React, { useState } from "react";
import JobRow from "./JobRow";

export default function JobTable({ jobs, deleteJob }) {
  const [search, setSearch] = useState("");
  const filteredJobs = jobs.filter((job) =>
    job.company.trim().toLowerCase().includes(search.trim().toLowerCase()),
  );
  return (
    <div className="bg-white shadow-md rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <div className="flex justify-between gap-10 items-center">
          <h2 className="text-md md:text-2xl  font-semibold text-slate-800">
            Applications
          </h2>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-sm rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm text-slate-600">
          <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-semibold">Company</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">Applied Date</th>
              <th className="px-6 py-4 font-semibold">Link</th>
              <th className="px-6 py-4 font-semibold">Remove</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobRow key={job.id} job={job} deleteJob={deleteJob} />
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-8 text-center text-slate-500"
                >
                  No job applications added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
