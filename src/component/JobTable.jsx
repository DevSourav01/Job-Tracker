import React from "react";
import JobRow from "./JobRow";

export default function JobTable({ jobs }) {
  return (
    <div className="bg-white shadow-md rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-semibold text-slate-800">
          Job Applications
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm text-slate-600">
          <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-semibold">Company</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Applied Date</th>
              <th className="px-6 py-4 font-semibold">Link</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {jobs.length > 0 ? (
              jobs.map((job) => <JobRow key={job.id} job={job} />)
            ) : (
              <tr>
                <td
                  colSpan="5"
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