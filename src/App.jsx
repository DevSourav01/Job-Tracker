import JobForm from "./Component/JobForm";
import JobTable from "./Component/JobTable";
import Headers from "./Component/Header";
import { useEffect, useState } from "react";
import { addJobToFirestore, deleteJobFromFirestore, subscribeToJobs } from "../firebaseService";

export default function App() {
  const [jobs, setJobs] = useState([]);
  // const addJob = (newJob) => {
  //   setJobs((prevJobs) => [
  //     ...prevJobs,
  //     {
  //       id: Date.now(),
  //       ...newJob,
  //     },
  //   ]);
  // };

  useEffect(() => {
    const unsubscribe = subscribeToJobs(setJobs);
    return () => unsubscribe();
  }, []);

  const addJob = async (jobData) => {
    console.log(jobData)
    try {
      await addJobToFirestore(jobData);
      console.log("Job added successfully");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };
 const deleteJob = async (id) => {
    try {
      await deleteJobFromFirestore(id);
      console.log("Job deleted successfully");
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <Headers total={jobs.length} />
        <JobForm addJob={addJob} />
        <JobTable jobs={jobs} deleteJob={deleteJob} />
      </div>
    </div>
  );
}
