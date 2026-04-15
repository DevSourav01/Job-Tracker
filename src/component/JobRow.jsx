import React from "react";

export default function JobRow({ job, deleteJob }) {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50 transition duration-200">
      <td className="px-6 py-4 font-medium text-slate-800">{job.company}</td>
      <td className="px-6 py-4 text-slate-600">{job.role}</td>
      <td className="px-6 py-4">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {job.status}
        </span>
      </td>
      <td className="px-6 py-4 text-slate-600">{job.appliedDate}</td>
      <td className="px-6 py-4">
        <a
          href={job.link}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
        >
          View
        </a>
      </td>
      <td>
        {" "}
        <button
          onClick={() => deleteJob(job.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
