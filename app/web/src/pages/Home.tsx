import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Task from '../Componentes/Task'
import styles from './Home.module.css'

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
  const { register, handleSubmit, reset } = useForm<Input>({ resolver: zodResolver(InputSchema) })
  const [task, setTask] = useState<TaskI[]>([])

  const addTask = (input: string) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000 + 1000),
      task: input,
      completed: false
    }

    setTask([...task, newTask])
    console.log(task);
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
    console.log(arrChecks);
    setTask(arrChecks)
  }

  // const deleteTask = (task: any) => {
  //   console.log(task);
  //   const arr = todo.filter((item) => item !== task)
  //   setTodo(arr)
  // }

  const onSubmit: SubmitHandler<Input> = (data: Input) =>  {
    const { input } = data
    addTask(input)
    reset({ input: '' })
  }

  return (
    <main className={styles.container}>
      <section>
        <h2>To Do</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="input_id">
            <input
              type='text'
              placeholder='Adicionar uma nova tarefa'
              id='input_id'
              { ...register('input') }
            />
          </label>
          <button type='submit'>Added</button>
        </form>
      </section>
      <section>
      <p>Tarefas Criadas {task.length} </p>
      <p>Tarefas Concluidas </p>
      { task.length > 0 ? (
       <div>
        { task.map((task) => (
          <Task
          key={task.id}
          todo={task}
          onCompleteTask={completedTask}
          />
        )) }
       </div>
      ) : <p>Nada</p> }
      </section>
    </main>
  )
}
