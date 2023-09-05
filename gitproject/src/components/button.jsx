import { useState } from "react"
import Clik from "./clik"

const Button = () => {
    const [data,setData] = useState(false)

    return(
        <div>
           {data &&(
            <Clik/>
           )} 
           <br />
           <button onClick={() => setData(!data)}>{data ? "Скрыть" : "Расскрыть"}</button>
        </div>
        

    )
}
export default Button