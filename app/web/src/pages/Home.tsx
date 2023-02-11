import { useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const InputSchema = z.object({
  input: z.string().min(3, { message: 'Required min 3 letters' })
})

type Input = z.infer<typeof InputSchema>

export default function Home() {
  const { register, handleSubmit } = useForm<Input>({ resolver: zodResolver(InputSchema) })

  const onSubmit: SubmitHandler<Input> = (data: Input) =>  {
    console.log(data)
  }

  return (
    <main>
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
      </form>
    </main>
  )
}
