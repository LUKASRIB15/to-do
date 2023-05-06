import { PlusCircle } from "phosphor-react"
import styles from "./Search.module.css"
import {ChangeEvent, InvalidEvent} from "react"

interface SearchProps{
  onCreateNewTask: (event:ChangeEvent<HTMLFormElement>)=>void;
  onNewTask: (event:ChangeEvent<HTMLInputElement>)=>void;
  valueInput: string;
}

export function Search({onCreateNewTask, onNewTask, valueInput}:SearchProps){
  const buttonCreateIsDisabled = valueInput.length == 0;

  function handleTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Campo obrigatório!")
  }

  return(
    <form onSubmit={onCreateNewTask} className={styles.formContent}>
      <input 
        className={styles.inputField} 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        onChange={onNewTask}
        value={valueInput}
        onInvalid={handleTaskInvalid}
        required
      />
      <button className={styles.createButton} disabled={buttonCreateIsDisabled} type="submit">
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}