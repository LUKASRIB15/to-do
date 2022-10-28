import {PlusCircle} from 'phosphor-react';
import { useState, FormEvent, ChangeEvent } from 'react';
import EachTask from './EachTask'
import ClipBoard from '../assets/ClipBoard'
import styles from './Task.module.css'
interface tasksProps{
    id: number;
    content: string;
}
export default function Task(){
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState('')
    const [createTask, setCreateTask] = useState(0)
    const [completedTask, setCompletedTask] = useState(0)
    
    function HandleCreateNewTask(event:FormEvent){
        event.preventDefault()

        setTasks([...tasks,{id:createTask+1, content:newTasks}])
        setCreateTask((state)=>{
            return state + 1
        })
        setNewTasks('')
    }

    function HandleNewTask(event:ChangeEvent<HTMLTextAreaElement>){
        setNewTasks(event.target.value)
    }

    function DeleteTask(taskDelete:number){
        let newListTasks = tasks.filter((task)=>{
            return task.id!=taskDelete
        })

        setTasks(newListTasks)
        setCreateTask((state)=>{
            return state - 1 
        })
    }

    function CompletedTask(){
        setCompletedTask((state)=>{
            return state + 1;
        })
    }

    function NoCompletedTask(){
        setCompletedTask((state)=>{
            return state - 1;
        })
    }
    return (
        <main className={styles.task}>
            <form onSubmit={HandleCreateNewTask} className={styles.addTask}>
                <textarea 
                    placeholder="Adicione uma nova tarefa"
                    value={newTasks}
                    onChange={HandleNewTask}
                    required
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={16}/>  
                </button>
            </form>
            <div className={styles.content}>
                <div className={styles.taskCreate}>
                    <p>Tarefas criadas</p>
                    <div className={styles.countCreate}>{createTask}</div>
                </div>
                <div className={styles.taskCompleted}>
                    <p>Concluídas</p>
                    {
                        tasks.length == 0 ?
                            <div className={styles.countCompleted}>0</div>
                        :
                            <div className={styles.countCompleted}>{completedTask} de {createTask}</div>
                    }
                </div>
            </div>
            
            {
                tasks.length == 0 ?
                    <div className={styles.contentTaskEmpty}>
                        <ClipBoard/>
                        <div>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                : 
                    <div className={styles.contentTask}>
                        {tasks.map(({id,content}:tasksProps)=>{
                        return <EachTask 
                                key={id} 
                                id={id} 
                                content={content} 
                                deleteTask={DeleteTask} 
                                completedTask={CompletedTask}
                                noCompletedTask = {NoCompletedTask}
                            />
                        })}
                    </div>
            }
        </main>
    )
}