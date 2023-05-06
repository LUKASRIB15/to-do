import * as Checkbox from "@radix-ui/react-checkbox";

import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { objectListTasks } from "./ListTasks";

interface TaskProps{
  onDeleteTask: (taskDeleted:string)=>void;
  onCheckedTask: (listTasks:objectListTasks[])=>void;
  arrayTasks: objectListTasks[];
  objectTask: {
    id: string;
    content: string;
    checked: boolean;
  };
}

export function Task({onDeleteTask, objectTask, onCheckedTask, arrayTasks}: TaskProps){
  function deleteTask(id:string){
    onDeleteTask(id)
  }

  function checkedTask(){
    if(objectTask.checked){
      objectTask.checked = false;
    }else{
      objectTask.checked = true;
    }
    onCheckedTask(arrayTasks)
  }
  return(
    <div className={styles.taskComponent}>
      <Checkbox.Root className={styles.checkboxInput} onCheckedChange={checkedTask}>
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <Check size={15} weight="bold"/>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p>{objectTask.content}</p>
      <button className={styles.removeButton} onClick={()=>deleteTask(objectTask.id)}>
        <Trash size={18}/>
      </button>
    </div>
  )
}