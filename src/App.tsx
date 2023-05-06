import { Header } from './components/Header'
import {useState, ChangeEvent} from "react"

import styles from "./App.module.css"
import './global.css'
import { ListTasks } from './components/ListTasks'
import { Search } from './components/Search'
import { objectListTasks } from './components/ListTasks'

export function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<objectListTasks[]>([])
  const [checkedTasks, setCheckedTasks] = useState<objectListTasks[]>([])

  function handleCreateNewTask(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    setTasks((state) =>{
      return [...state, {id: crypto.randomUUID(), content: newTask, checked: false}]
    })
    setNewTask('');
  }
  // Adicionando o valor em tempo real
  function handleNewTask(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity("")
    setNewTask(event.target.value)
  }

  function handleDeleteTask(taskDeleted:string){
    const newListTasks = tasks.filter((task)=>{
      return task.id!=taskDeleted;
    }) 
    setTasks((state)=>{
      state = newListTasks;
      handleCheckedTask(state)
      return state
    });
  }

  function handleCheckedTask(listTasks:objectListTasks[]){
    const newListCheckedTasks = listTasks.filter((task)=>{
      return task.checked == true;
    })
    setCheckedTasks(newListCheckedTasks);
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
        <ListTasks 
          listTasks={tasks}
          removingTask={handleDeleteTask}
          onCheckedTasks={handleCheckedTask}
          totalCheckedTasks={checkedTasks}
        />
      </div>
    </>
  )
}
