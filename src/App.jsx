import JobForm from "./component/JobForm";
import JobTable from "./component/JobTable";
import Headers from "./component/Header";
import useLocalStorage from "./component/UseLocalstorage";

export default function App() {
  const [jobs, setJobs] = useLocalStorage("jobs", []);
  const addJob = (newJob) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      {
        id: Date.now(),
        ...newJob,
      },
    ]);
  };

  const deleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };
  return (
    <div className="min-h-screen min-w-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <Headers total={jobs.length} />
        <JobForm addJob={addJob} />
        <JobTable jobs={jobs} deleteJob={deleteJob} />
      </div>
    </div>
  );
}
