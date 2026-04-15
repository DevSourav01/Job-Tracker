import React from "react";

export default function JobRow({ job, deleteJob }) {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50 transition duration-200">
      <td className="px-3 py-2 font-medium text-slate-800">{job.company}</td>
      <td className="px-3 py-2  text-slate-600">{job.role}</td>
      <td className="px-3 py-2 ">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            job.status === "Applied"
              ? "bg-blue-100 text-blue-700"
              : job.status === "Interview"
                ? "bg-yellow-100 text-yellow-700"
                : job.status === "Rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
          }`}
        >
          {job.status}
        </span>
      </td>
      <td className="px-3 py-2  text-slate-600">{job.appliedDate}</td>
      <td className="px-3 py-2 ">
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
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg hover:cursor-pointer"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
