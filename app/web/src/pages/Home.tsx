import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Task from '../Componentes/Task'
import styles from './Home.module.css'
import { Header } from '../Componentes/Header'

const InputSchema = z.object({
  input: z.string().min(3, { message: 'Required min 3 letters' })
})

type Input = z.infer<typeof InputSchema>

const TaskSchema = z.object({
  id: z.number(),
  task: z.string().min(3),
  completed: z.boolean()
})

type TaskI = z.infer<typeof TaskSchema>

export default function Home() {
  const { register, handleSubmit, reset } = useForm<Input>({
    resolver: zodResolver(InputSchema)
  })

  const [task, setTask] = useState<TaskI[]>([])

  const addTask = (input: string) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000 + 1000),
      task: input,
      completed: false
    }
    setTask([...task, newTask])
  }

  const completedTask = (id: number) => {
    const arrChecks = task.filter((item) => {
      if (item.id === id) {
        if (item.completed) {
          item.completed = false
        } else {
          item.completed = true
        }
      }
      return true
    })
    setTask(arrChecks)
  }

  const deleteTask = (id: number) => {
    const arrChecks = task.filter((item) => item.id !== id)
    setTask(arrChecks)
  }

  const tasksCompleted = () => {
    const arrCompleted = task.filter((item) => item.completed === true).length
    return arrCompleted;
  }

  const onSubmit: SubmitHandler<Input> = (data: Input) =>  {
    const { input } = data
    addTask(input)
    reset({ input: '' })
  }

  useEffect(() => {
    tasksCompleted()
  }, [task])

  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.section}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="input_id" className={styles.input_single} >
              <input
                type='text'
                placeholder='Adicionar uma nova tarefa'
                id='input_id'
                { ...register('input') }
              />
            </label>
          </form>
        </div>
        <button type='submit' className={styles.button} >Criar</button>
      </section>
      <section>
      <p>Tarefas Criadas {task.length} </p>
      <p>Tarefas Concluidas {tasksCompleted()} / {task.length}</p>
      { task.length > 0 ? (
       <div>
        { task.map((task) => (
          <Task
          key={task.id}
          todo={task}
          onCompleteTask={completedTask}
          onDeleteTask={deleteTask}
          />
        )) }
       </div>
      ) : <p>Você não tem tarefas cadastradas</p> }
      </section>
    </main>
  )
}
