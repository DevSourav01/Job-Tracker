import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./Firebase";

const jobRef = collection(db, "appliedJobs");

export const addJobToFirestore = async (jobData) => {
  await addDoc(jobRef, {
    company: jobData.company,
    role: jobData.role,
    status: jobData.status,
    appliedDate: jobData.appliedDate,
    platform: jobData.platform,
    link: jobData.link,
    createdAt: serverTimestamp(),
  });
};

export const subscribeToJobs = (callback) => {
  const q = query(jobRef, orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const jobs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(jobs);
  });
};

export const deleteJobFromFirestore = async (id) => {
  await deleteDoc(doc(db, "appliedJobs", id));
};