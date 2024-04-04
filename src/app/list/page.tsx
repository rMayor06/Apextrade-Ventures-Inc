import Link from 'next/link'
import EmpList from "../../app/components/empList"
import { getInfos } from "@/../api"

export default async function List(){
    const infos = await getInfos();

    return (
      <>
            <div>
                  < EmpList emplist={infos}/>
            </div>
      </>
    )
}
