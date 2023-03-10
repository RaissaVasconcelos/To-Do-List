// import { useState } from "react"
interface TaskInterface {
  id: number;
  task: string;
  completed: boolean;
}

type Props = {
  todo: TaskInterface
  onCompleteTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export default function Task({ todo, onCompleteTask, onDeleteTask }: Props) {

  const handleCheck = () => {
    onCompleteTask(todo.id)
  }

  const handleDelete = () => {
    onDeleteTask(todo.id)
  } 

  return (
    <>
      <label
        htmlFor={`checkbox - ${todo.id}`}
        key={todo.id}>
          <input
            type='checkbox'
            id={String(todo.id)}
            value={todo.task}
            checked={todo.completed}
            onChange={handleCheck}
          />
        {todo.task}
      </label>
      <button
        type='button'
        onClick={handleDelete}
      >
        Excluir
      </button>
    </>
  )
}