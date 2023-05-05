import * as Checkbox from "@radix-ui/react-checkbox";

import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps{
  content: string;
}

export function Task({content}: TaskProps){
  return(
    <div className={styles.taskComponent}>
      <Checkbox.Root className={styles.checkboxInput}>
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <Check size={15} weight="bold"/>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p>{content}</p>
      <button className={styles.removeButton}>
        <Trash size={18}/>
      </button>
    </div>
  )
}