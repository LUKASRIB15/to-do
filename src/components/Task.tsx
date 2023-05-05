import * as Checkbox from "@radix-ui/react-checkbox";

import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps{
  content: string;
  onDeleteTask: (taskDeleted:string)=>void;
}

export function Task({content, onDeleteTask}: TaskProps){
  function deleteTask(text:string){
    onDeleteTask(text)
  }
  return(
    <div className={styles.taskComponent}>
      <Checkbox.Root className={styles.checkboxInput}>
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <Check size={15} weight="bold"/>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p>{content}</p>
      <button className={styles.removeButton} onClick={()=>deleteTask(content)}>
        <Trash size={18}/>
      </button>
    </div>
  )
}