import Link from 'next/link'
import Evaluated from "../../app/components/evaList"
import { getEvaluated } from "@/../api"

export default async function List(){
    const evaluated = await getEvaluated();

    return (
      <>
            <div>
                  < Evaluated evalist={evaluated}/>
            </div>
      </>
    )
}
