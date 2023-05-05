import styles from "./ListTasks.module.css"
import Clipboard from "../assets/clipboard.svg";
import { Task } from "./Task";

interface ListTasksProps{
  listTasks: string[];
}

export function ListTasks({listTasks}:ListTasksProps){
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
              return <Task content={task}/>
            })}
          </>
        }
      </main>
    </main>
    </>
  )
}