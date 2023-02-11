import { useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './Login.module.css'

const InputSchema = z.object({
  user: z.string().min(3, { message: 'Required min 3 letters' }),
  password: z.string().min(3, { message: 'Required min 3 letters' })
})

type Inputs = z.infer<typeof InputSchema>

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(InputSchema),
  });

  const handleLogin: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return(
    <main className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
          <label htmlFor='id_user' className={styles.input_single}>
            <input 
              type='text'
              placeholder='user'
              id='id_user'
              required
              {...register('user')}
            />
            {errors.user?.message && <p>{errors.user?.message}</p>}
          </label>
          <label htmlFor='id_password' className={styles.input_single}>
            <input
              type='text'
              placeholder='password'
              id='id_password'
              required
              {...register('password')}
            />
            {errors.password?.message && <p>{errors.password?.message}</p>}
          </label>
          <button type='submit' className={styles.button}>Send</button>
        </form>
      </div>
    </main>
  );
};
