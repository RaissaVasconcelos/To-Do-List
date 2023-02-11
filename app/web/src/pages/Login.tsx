import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './Login.module.css'

interface Inputs {
  user: String,
  password: String,
};

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>();

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
          </label>
          <label htmlFor='id_password' className={styles.input_single}>
            <input
              type='text'
              placeholder='password'
              id='id_password'
              required
              {...register('password')}
            />
          </label>
          <button type='submit' className={styles.button}>Send</button>
        </form>
      </div>
    </main>
  );
};
