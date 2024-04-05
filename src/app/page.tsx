import Image from "next/image";
import EmpList from "./components/empList";

export default async function Home() {
  return (
    <>
      <div className="bg-blue-300 mb-7">
        <img
          src="/favicon.ico"
          width={500}
          height={500}
          className="stroke-cyan-500 mx-auto mt-7"
        />
        <h1 className="text-3xl font-bold whitespace-nowrap dark:text-black text-center">
          APEXTRADE VENTURES INC.
        </h1>
      </div>
    </>
  );
}
