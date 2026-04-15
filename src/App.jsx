import  { useState } from 'react'
import JobForm from './component/JobForm';
import JobTable from './component/JobTable';
import Headers from './component/Header';

export default function App() {
    const[jobs,setJobs]=useState([])
    const addJob = (newJob) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      {
        id: Date.now(),
        ...newJob,
      },
    ]);
  };
  return (
    <div className="min-h-screen min-w-screen bg-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <Headers total={jobs.length} />
        <JobForm addJob={addJob} />
        <JobTable jobs={jobs} />
      </div>
    </div>
  )
}
