import React, { useState } from "react";

export default function JobForm({ addJob }) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    platform: "",
    link: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.company.trim() ||
      !formData.role.trim() ||
      !formData.status.trim() ||
      !formData.appliedDate.trim() ||
      !formData.link.trim()
    )
      return;

    addJob(formData);
    setFormData({
      company: "",
      role: "",
      status: "Applied",
      appliedDate: "",
      link: "",
      platform: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">
        Add New Job
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={formData.role}
          onChange={handleChange}
           required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
           required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>
        <input
          type="date"
          name="appliedDate"
          value={formData.appliedDate}
          onChange={handleChange}
           required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="platform"
          value={formData.platform}
          onChange={handleChange}
           required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Platform</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Naukri">Naukri</option>
          <option value="Indeed">Indeed</option>
          <option value="Foundit">Foundit</option>
          <option value="Internshala">Internshala</option>
          <option value="Company Website">Company Website</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="url"
          name="link"
          placeholder="Job Link"
          value={formData.link}
          onChange={handleChange}
           required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition hover:cursor-pointer"
        >
          Add Job
        </button>
      </form>
    </div>
  );
}
