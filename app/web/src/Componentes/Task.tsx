import { useState } from "react"

type Props = {
  id: number
  task: string
}


export default function Task({ id, task }: Props) {
  const [check, setCheck] = useState(false)

  const handleCompleteTask = () => {
    setCheck(!check)
  }

  return (
    <label
      htmlFor={`checkbox - ${id}`}
      key={id}>
        <input
          type='checkbox'
          id={`checkbox - ${id}`}
          value={task}
          checked={check}
          onChange={handleCompleteTask}
        />
      {task}
    </label>
  )
}