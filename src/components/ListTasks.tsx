import styles from "./ListTasks.module.css"
import Clipboard from "../assets/clipboard.svg";
import { Task } from "./Task";

export interface objectListTasks{
  id: string;
  content: string;
};

interface ListTasksProps{
  listTasks: objectListTasks[];
  removingTask: (taskDeleted:string)=>void;
}

export function ListTasks({listTasks, removingTask}:ListTasksProps){
  return(
    <>
    <main className={styles.listTasks}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>
      <main className={
        listTasks.length==0?
        styles.listContentWithOutTask
        :
        styles.listContentWithTask
      }>
        {
          listTasks.length==0?
          <>
              <img src={Clipboard} alt="ícone de Clipboard"/>
              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </>
          :
          <>
            {listTasks.map((task)=>{
              return <Task 
                        key={task.id}
                        content={task.content} 
                        onDeleteTask={removingTask}
                      />
            })}
          </>
        }
      </main>
    </main>
    </>
  )
}