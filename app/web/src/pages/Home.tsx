import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from './Home.module.css'

const InputSchema = z.object({
  input: z.string().min(3, { message: 'Required min 3 letters' })
})

type Input = z.infer<typeof InputSchema>

export default function Home() {
  const { register, handleSubmit, reset } = useForm<Input>({ resolver: zodResolver(InputSchema) })
  const [todo, setTodo] = useState(['correr'])

  const addTask = (task: string) => {
    setTodo([...todo, task])
  }

  const deleteTask = (task: string) => {
    console.log(task)
    const arr = todo.filter((item) => item !== task)
    setTodo(arr)
  }

  const onSubmit: SubmitHandler<Input> = (data: Input) =>  {
    const { input } = data
    addTask(input)
    reset({ input: '' })
  }

  return (
    <main className={styles.container}>
      <h2>To Do</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input_id">
          <input
            type='text'
            placeholder='tasks'
            id='input_id'
            { ...register('input') }
          />
        </label>
        <button type='submit'>Added</button>
        <br></br>
        { todo.map((task) => (
          <>
            <label htmlFor={task} key={task}>
              <input
                type='checkbox'
                id={task}
                value={task}
              />
            {task}
            </label>
            <button
              onClick={() => deleteTask(task)}
            >
              Delete
            </button>
            <br />
          </>
        )) }
        <br></br>
      </form>
    </main>
  )
}
