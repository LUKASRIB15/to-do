import { Header } from './components/Header'
import {useState, ChangeEvent} from "react"

import styles from "./App.module.css"
import './global.css'
import { ListTasks } from './components/ListTasks'
import { Search } from './components/Search'

export function App() {
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
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Search 
          onCreateNewTask={handleCreateNewTask} 
          onNewTask={handleNewTask} 
          valueInput={newTask}
        />
        <ListTasks listTasks={tasks}/>
      </div>
    </>
  )
}
