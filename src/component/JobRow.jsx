import React from "react";

export default function JobRow({ job }) {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50 transition duration-200">
      <td className="px-6 py-4 font-medium text-slate-800">
        {job.Company}
      </td>
      <td className="px-6 py-4 text-slate-600">
        {job.role}
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {job.status}
        </span>
      </td>
      <td className="px-6 py-4 text-slate-600">
        {job.AppliedDate}
      </td>
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
    </tr>
  );
}