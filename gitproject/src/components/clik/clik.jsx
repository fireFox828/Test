import { useState } from "react"
import styles from './style.module.css'

const Clik = () => {
    const [count, setCount] = useState(0)
    

    return(
        
        <div>
            <h1 className={styles.num}>{count}</h1>
            <button onClick={() => setCount(count+1)}>Кликни</button>
        </div>
    )
}
export default Clik