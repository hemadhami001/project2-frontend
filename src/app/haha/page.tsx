"use client";

import { useAppSelector } from "@/lib/store/hooks";

function Haha() {
  const { teacherName, teacherPassword } = useAppSelector((store) => store.teacher)
  console.log(data.teacherName, data.teacherPassword);
  return (
    <div>
      <h1>Hello! I am Hema Dhami.</h1>
      <p>Welcome to haha page!</p>
    </div>
  );
}

export default Haha;