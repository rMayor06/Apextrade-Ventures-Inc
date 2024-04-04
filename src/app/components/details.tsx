"use client";
import { Infos } from "../../../types/infos";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { FormEventHandler, useEffect, useState } from "react";
import Modal from "./Modal";
import Modall from "./Modal2";
import { useRouter } from "next/navigation";
import { editInfo, deleteInfo } from "@/../api";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  return `${month}/${date}/${year} ${hours}:${minutes}`;
}
interface IFormInput {
  info: Infos;
}
const Details: React.FC<IFormInput> = ({ info }) => {
  const { register, handleSubmit, setValue } = useForm<IFormInput>();
  const [employeeData, setEmployeeData] = useState<IFormInput | null>(null);
  const clnm =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const clnm2 = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const currentdate = getDate();

  const handleSubmitEditTodo: SubmitHandler<IFormInput> = async (data) => {
    //e.preventDefault();
    // await editInfo({
    //     id: info.id, fname: data.fname, mname: data.mname, lname: data.lname, extname: data.extname,
    //     empnumber: data.empnumber, email: data.email, cnumber: data.cnumber, gender: data.gender,
    //     address: data.address, age: data.age, mstatus: data.mstatus, datebirth: data.datebirth,
    //     placebirth: data.placebirth, department: data.department, designation: data.designation,
    //     salary: data.salary, datestarted: data.datestarted, education: data.education,
    //     contact: data.contact, contactperson: data.contactperson, relationship: data.relationship,
    //     sss: data.sss, pagibig: data.pagibig, tin: data.tin, phealth: data.phealth, sched: data.sched,
    //     dependencies: data.dependencies, maidenname: data.maidenname, branch: data.branch, lastupdated: currentdate,
    // });
    await editInfo({
      id: info.id,
      ...data,
      lastupdated: currentdate,
    });
    router.refresh();
    window.location.reload();
  };
  // useEffect(() => {
  //     setValue('fname', info.fname);
  //     setValue('lname', info.lname);
  //     setValue('mname', info.mname);
  // }, [info]);
  useEffect(() => {
    [
      "fname",
      "lname",
      "mname",
      "extname",
      "email",
      "empnumber",
      "cnumber",
      "gender",
      "address",
      "age",
      "mstatus",
      "datebirth",
      "placebirth",
      "department",
      "designation",
      "salary",
      "datestarted",
      "education",
      "contact",
      "contactperson",
      "relationship",
      "sss",
      "pagibig",
      "tin",
      "phealth",
      "sched",
      "dependencies",
      "maidenname",
      "branch",
      "lastupdated",
    ].forEach((field) => setValue(field, info[field]));
  }, [info]);

  const handleDeleteTask = async (id: string) => {
    await deleteInfo(id);
    setOpenModalDeleted(false);
    router.refresh();
    window.location.reload();
  };
  return (
    <tr
      key={info.id}
      className="odd:bg-white odd:dark:bg-gray-200 even:bg-gray-900 even:dark:bg-gray-100 border-b dark:border-gray-900"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black"
      >
        <Link href={`list/${info.id}`}>
          {info.lname}, {info.fname} {info.mname}
        </Link>
      </th>
      <td className="px-6 py-4">{info.designation}</td>
      <td className="px-6 py-4 text-center">{info.empnumber}</td>
      <td className="px-6 py-4 text-center">{info.cnumber}</td>
      <td className="px-6 py-4 text-center">{info.email}</td>
      <td className="px-6 py-4 text-center">{info.lastupdated}</td>
      <td className="px-6 py-4">
        <div className="flex gap-5 w-full">
          <FiEdit
            onClick={() => setOpenModalEdit(true)}
            cursor="pointer"
            className="text-blue-500"
            size={25}
          />
          <Modall modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmit(handleSubmitEditTodo)}>
              <h3 className="font-bold text-lg text-white">
                Update Employee Info
              </h3>
              <div className="modal-action w-full">
                <div className="grid gap-6 mb-6 md:grid-cols-1 w-full">
                  <div>
                    <label className={clnm2}>First Name</label>
                    <input {...register("fname")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Middle Name</label>
                    <input {...register("mname")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Last Name</label>
                    <input {...register("lname")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Extension Name</label>
                    <input {...register("extname")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Email</label>
                    <input {...register("email")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Employee Number</label>
                    <input
                      {...register("empnumber")}
                      className={clnm}
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Contact Number</label>
                    <input {...register("cnumber")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Gender</label>
                    <select
                      {...register("gender")}
                      className={clnm}
                      required
                      defaultValue={info.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className={clnm2}>Address</label>
                    <input {...register("address")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Age</label>
                    <input {...register("age")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>mstatus</label>
                    <select
                      {...register("mstatus")}
                      className={clnm}
                      required
                      defaultValue={info.mstatus}
                    >
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>
                  <div>
                    <label className={clnm2}>Date of Birth</label>
                    <input
                      {...register("datebirth")}
                      className={clnm}
                      type="date"
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Place of Birth</label>
                    <input
                      {...register("placebirth")}
                      className={clnm}
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Department</label>
                    <input
                      {...register("department")}
                      className={clnm}
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Designation</label>
                    <select
                      {...register("designation")}
                      className={clnm}
                      required
                      defaultValue={info.designation}
                    >
                      <option value="Manager">Manager</option>
                      <option value="Technical Support Agent">
                        Technical Support Agent
                      </option>
                      <option value="Team Leader">Team Leader</option>
                      <option value="IT Staff">IT Staff</option>
                    </select>
                  </div>
                  <div>
                    <label className={clnm2}>Employee Status</label>
                    <select
                      {...register("sched")}
                      className={clnm}
                      required
                      defaultValue={info.sched}
                    >
                      <option>Regular</option>
                      <option>Probational</option>
                    </select>
                  </div>
                  <div>
                    <label className={clnm2}>Basic Salary</label>
                    <input {...register("salary")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Hiring Date</label>
                    <input
                      {...register("datestarted")}
                      className={clnm}
                      type="date"
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Education</label>
                    <input
                      {...register("education")}
                      className={clnm}
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Emergency Contact Number</label>
                    <input {...register("contact")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Emergency Contact Person</label>
                    <input
                      {...register("contactperson")}
                      className={clnm}
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Relationship</label>
                    <input
                      {...register("relationship")}
                      className={clnm}
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>SSS Number</label>
                    <input {...register("sss")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Pagibig Number</label>
                    <input {...register("pagibig")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>TIN Number</label>
                    <input {...register("tin")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>PhilHealth Number</label>
                    <input {...register("phealth")} className={clnm} required />
                  </div>
                  <div>
                    <label className={clnm2}>Number of Dependencies</label>
                    <input
                      {...register("dependencies")}
                      className={clnm}
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Maiden Name</label>
                    <input
                      {...register("maidenname")}
                      className={clnm}
                      required
                    />
                  </div>
                  <div>
                    <label className={clnm2}>Branch</label>
                    <input {...register("branch")} className={clnm} required />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modall>
          <FiTrash2
            onClick={() => setOpenModalDeleted(true)}
            cursor="pointer"
            className="text-red-500"
            size={25}
          />
          <Modal
            modalOpen={openModalDeleted}
            setModalOpen={setOpenModalDeleted}
          >
            <h3 className="text-lg text-gray-300">
              Are you sure you want to delete {info.lname}, {info.fname}{" "}
              {info.mname}?
            </h3>
            <div className="modal-action">
              <button
                className="btn text-gray-300 content-center"
                onClick={() => handleDeleteTask(info.id)}
              >
                Yes
              </button>
            </div>
          </Modal>
        </div>
      </td>
    </tr>
  );
};
export default Details;
