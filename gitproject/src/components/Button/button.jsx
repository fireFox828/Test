import { useState } from "react"
import Clik from "../clik/clik"
import styles from './style.module.css'

const Button = () => {
    const [data,setData] = useState(false)

    return(
        <div className={styles.fon}>
            <button className={styles. button} onClick={() => setData(!data)}>{data ? "Скрыть" : "Расскрыть"}</button>
           {data &&(
            <Clik/>
           )} 
           <br />
           
        </div>
        

    )
}
export default Button