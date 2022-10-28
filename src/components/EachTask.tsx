import Checkbox from './Checkbox'
import {Trash} from 'phosphor-react'
import styles from './EachTask.module.css'
import { useState } from 'react'

interface EachTaskProps{
    id: number;
    content: string;
    deleteTask:(task:number) => void
    completedTask: ()=>void
    noCompletedTask:()=>void
}
export default function EachTask({id, content, deleteTask, completedTask, noCompletedTask}: EachTaskProps){
    const[check, setCheck] = useState(false)

    function ValidateCheck(){
        setCheck((state)=>{
            state = !check    
            return state
        })

        if(check == false){
            completedTask()
        }else{
            noCompletedTask()
        }
    }

    function HandleDeleteTask(){
        deleteTask(id)
        if(check==true){
            noCompletedTask()
        }else{
            return;
        }
    }
    return(
        <div className={styles.eachTask}>
            <div className={styles.content}>
                <div>
                    <Checkbox validateChecked={ValidateCheck}/>
                </div>
                <div className={check ? styles.commentTaskEnd : styles.commentTask}>
                    <p>{content}</p>
                </div>   
            
                <button onClick={HandleDeleteTask} type="submit" className={styles.deleteTask}>
                    <Trash size={18}/>
                </button>
            </div>
        </div>
    )
}