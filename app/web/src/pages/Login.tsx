import { useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Content, Form, Input, Title } from './Login.style'

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
    <Container>
      <Content>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <label htmlFor='id_user'>
            <Input 
              type='text'
              placeholder='user'
              id='id_user'
              required
              {...register('user')}
            />
            {errors.user?.message && <p>{errors.user?.message}</p>}
          </label>
          <label htmlFor='id_password'>
            <Input
              type='text'
              placeholder='password'
              id='id_password'
              required
              {...register('password')}
            />
            {errors.password?.message && <p>{errors.password?.message}</p>}
          </label>
          <Button type='submit'>Send</Button>
        </Form>
      </Content>
    </Container>
  );
};
