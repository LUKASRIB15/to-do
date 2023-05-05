import { PlusCircle } from "phosphor-react"
import styles from "./Search.module.css"
import {ChangeEvent} from "react"

interface SearchProps{
  onCreateNewTask: (event:ChangeEvent<HTMLFormElement>)=>void;
  onNewTask: (event:ChangeEvent<HTMLInputElement>)=>void;
  valueInput: string;
}

export function Search({onCreateNewTask, onNewTask, valueInput}:SearchProps){
  return(
    <form onSubmit={onCreateNewTask} className={styles.formContent}>
      <input 
        className={styles.inputField} 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        onChange={onNewTask}
        value={valueInput}
      />
      <button className={styles.createButton} type="submit">
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}