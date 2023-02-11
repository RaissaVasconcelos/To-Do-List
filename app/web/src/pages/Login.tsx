import { useForm, SubmitHandler } from 'react-hook-form'

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
    <form onSubmit={handleSubmit(handleLogin)}>
      <label htmlFor='id_user'>
        <input 
          type='text'
          placeholder='user'
          id='id_user'
          {...register('user')}
        />
      </label>
      <label htmlFor='id_password'>
        <input
          type='text'
          placeholder='passaword'
          id='id_password'
          {...register('password')}
        />
      </label>
      <button type='submit'>Send</button>
    </form>
  );
};
