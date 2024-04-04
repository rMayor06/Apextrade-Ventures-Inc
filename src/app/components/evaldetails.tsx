"use client"
import { EvaluatedList } from "../../../types/infos"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from "./Modal"
import { deleteEva } from "@/../api"

interface EvalProps{
    list: EvaluatedList;
}
const Evaldetails: React.FC<EvalProps> = ({list}) => {
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const router = useRouter();
    const handleDeleteTask = async (id: string) => {
        await deleteEva(id);
        setOpenModalDeleted(false);
        router.refresh();
    }
    return(
        <tr key={list.id} className="odd:bg-white odd:dark:bg-gray-200 even:bg-gray-900 even:dark:bg-gray-100 border-b dark:border-gray-900">
            <th scope="row" className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                <Link href={`list/${list.id}`}> {list.rateelname}, {list.rateefname} {list.rateemname}</Link>
            </th>
            <td className="px-6 py-4"> {list.rateeposition}</td>
            <td className="px-6 py-4 text-center">{list.totalscore}</td>
            <td className="px-6 py-4 text-center">{list.dateevaluated}</td>
            <td className="px-6 py-4 text-center">{list.purpose}</td>
            <td className="px-6 py-4 text-center">{list.ratername}</td>
            <td className="px-6 py-4"><Link href={`evaluated/${list.id}`}>Full Details</Link></td>
            <td className="text-center">
                <FiTrash2 onClick={()=>setOpenModalDeleted(true)} cursor="pointer" className="text-red-500 mx-auto" size={25}/>
                <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
                    <h3 className="text-lg text-gray-300">Are you sure you want to delete {list.rateelname}, {list.rateefname} {list.rateemname} from evaluated lists?</h3>
                    <div className="modal-action">
                        <button className="btn text-gray-300 content-center"
                                onClick={()=>handleDeleteTask(list.id)}>Yes
                        </button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
}
export default Evaldetails;