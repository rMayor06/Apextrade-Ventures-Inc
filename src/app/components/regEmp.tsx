"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid'
import { Infos } from "../../../types/infos"

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}
interface IFormInput {
    info: Infos;
}
export default function RegEmployee() {
    const clnm  = "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white";
    const { register, handleSubmit, setValue } = useForm<IFormInput>();
    const [employeeData, setEmployeeData] = useState<IFormInput | null>(null);
    
    const submitEmployeeData: SubmitHandler<IFormInput> = async (data) => {
    //setEmployeeData(data);

    const response = await fetch(`http://localhost:7000/einfo`, {
          method: 'POST',
          body: JSON.stringify({
            id: uuidv4(),
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            extname: data.extname,
            empnumber: data.empnumber,
            email: data.email,
            cnumber: data.cnumber,
            gender: data.gender,
            address: data.address,
            age: data.age,
            mstatus: data.mstatus,
            datebirth: data.datebirth,
            placebirth: data.placebirth,
            department: data.department,
            designation: data.designation,
            salary: data.salary,
            datestarted: data.datestarted,
            education: data.education,
            contact: data.contact,
            contactperson: data.contactperson,
            relationship: data.relationship,
            sss: data.sss,
            pagibig: data.pagibig,
            tin: data.tin,
            phealth: data.phealth,
            sched: data.empstatus,
            dependencies: data.dependencies,
            maidenname: data.maidenname,
            branch: data.branch,
            lastupdated: "",
        }),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const responseData = await response.json();
        console.log(responseData);
        setValue('fname', ""); setValue('lname', ""); setValue('mname', ""); setValue('extname', "");
        setValue('empnumber', ""); setValue('email', ""); setValue('cnumber', ""); setValue('gender', "");
        setValue('address', ""); setValue('age', ""); setValue('mstatus', ""); setValue('datebirth', "");
        setValue('placebirth', ""); setValue('department', ""); setValue('designation', ""); setValue('salary', "");
        setValue('datestarted', ""); setValue('education', ""); setValue('contact', ""); setValue('contactperson', "");
        setValue('relationship', ""); setValue('sss', ""); setValue('pagibig', ""); setValue('tin', "");
        setValue('phealth', ""); setValue('sched', ""); setValue('dependencies', ""); setValue('maidenname', "");
        setValue('branch', ""); setValue('lastupdated', "");
  };    

  return (
    <div className="bg-gray-400 ml-10 mr-10 mt-5 rounded-3xl shadow-2xl ">
        <div>
            <form onSubmit={handleSubmit(submitEmployeeData)}>
                    <div className="ml-10 mr-10 columns-2 ...">
                        <h3 className='font-bold text-lg col-2 mt-4 text-gray-800'>Register New Employee</h3>
                    </div>
                <table className="mr-10 w-full">
                    <tbody>
                        <tr>
                            <td>
                                <div className="grid grid-cols-4 gap-4">
                                    <div><input {...register("fname")} className={clnm} placeholder="First Name" required/></div>
                                    <div><input {...register("mname")} className={clnm} placeholder="Middle Name" required/></div>
                                    <div><input {...register("lname")} className={clnm} placeholder="Last Name" required/></div>
                                    <div><input {...register("extname")} className={clnm} placeholder="Extension Name"/></div>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div><select {...register("gender")} className={clnm} defaultValue="Gender">
                                            <option value="">Gender</option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                        </select>
                                    </div>
                                    <div><input {...register("email")} className={clnm} placeholder="Email"/></div>
                                    <div><input {...register("empnumber")} className={clnm} placeholder="Employee Number"/></div>
                                    <div><input {...register("cnumber")} className={clnm} placeholder="Contact Number"/></div>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div><input {...register("address")} className={clnm} placeholder="Permanent Address"/></div>
                                    <div><input {...register("age")} className={clnm} placeholder="Age"/></div>
                                    <div><select {...register("mstatus")} className={clnm} defaultValue="Marital Status">
                                            <option value=''>Marital Status</option>
                                            <option value='Single'>Single</option>
                                            <option value='Married'>Married</option>
                                        </select>
                                    </div>
                                    <div><input {...register("designation")} className={clnm} placeholder="Designation"/></div>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="text-right mt-3 italic font-bold">Date of Birth</div>
                                        <div><input type='date' {...register("datebirth")} className={clnm} placeholder="Place of Birth"/></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div><select {...register("empstatus")} className={clnm} defaultValue="Employee Status">
                                            <option>Employee Status</option>
                                            <option value="Regular">Regular</option>
                                            <option value="Probationary">Probationary</option>
                                            </select>
                                        </div>
                                        <div><input {...register("placebirth")} className={clnm} placeholder="Place of Birth"/></div>
                                    </div>
                                    <div><input {...register("department")} className={clnm} placeholder="Department"/></div>
                                    <div><input {...register("salary")} className={clnm} placeholder="Basic Salary"/></div>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="text-right mt-3 italic font-bold">Hiring Date</div>
                                        <div><input type="date" {...register("datestarted")} className={clnm} placeholder="Hiring Date"/></div>
                                    </div>
                                    <div><input {...register("contact")} className={clnm} placeholder="Emergency Contact Number"/></div>
                                    <div><input {...register("contactperson")} className={clnm} placeholder="Emergency Contact Person"/></div>
                                    <div><input {...register("relationship")} className={clnm} placeholder="Relationship"/></div>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div><input {...register("education")} className={clnm} placeholder="Education"/></div>
                                    <div><input {...register("sss")} className={clnm} placeholder="SSS Number"/></div>
                                    <div><input {...register("pagibig")} className={clnm} placeholder="Pagibig Number"/></div>
                                    <div><input {...register("tin")} className={clnm} placeholder="TIN Number"/></div>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div><input {...register("phealth")} className={clnm} placeholder="PhilHealth Number"/></div>
                                    <div><input {...register("dependencies")} className={clnm} placeholder="Number of Dependencies"/></div>
                                    <div><input {...register("maidenname")} className={clnm} placeholder="Maiden Name"/></div>
                                    <div><input {...register("branch")} className={clnm} placeholder="Branch"/></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                    <div className="ml-5 mr-5 columns-2 ...">
                        <div className=" ml-5 mr-5">
                            <input type="submit" 
                                className="bg-blue-700 mb-2 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            />
                        </div>
                    </div>
            </form>
        </div>
    </div>
  );
}
