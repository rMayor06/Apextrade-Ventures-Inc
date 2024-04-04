import Link from 'next/link'
import EmpList from "../../app/components/schedList"
import { getSched } from "@/../api"

export default async function SchedList(){
    const evaluated = await getSched();

    return (
      <>
            <div>
                  < EmpList emplist={evaluated}/>
            </div>
      </>
    )
}
