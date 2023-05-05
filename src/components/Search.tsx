import { PlusCircle } from "phosphor-react"
import styles from "./Search.module.css"
import {useState, ChangeEvent} from "react"

export function Search(){
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  function handleCreateNewTask(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    setTasks((state) =>{
      return [...state, newTask]
    })
  }
  // Adicionando o valor em tempo real
  function handleNewTask(event: ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value)
  }

  return(
    <form onSubmit={handleCreateNewTask} className={styles.formContent}>
      <input 
        className={styles.inputField} 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTask}
        value={newTask}
      />
      <button className={styles.createButton} type="submit">
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}