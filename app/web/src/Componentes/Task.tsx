type Props = {
  id: number
  task: string
}

export default function Task({ id, task }: Props) {
  return (
    <label
      htmlFor={task}
      key={id}>
        <input
          type='checkbox'
          id={task}
          value={task}
        />
      {task}
    </label>
  )
}