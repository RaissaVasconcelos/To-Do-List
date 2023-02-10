export default function Login() {
  return(
    <form>
      <label htmlFor='id_user'>
        <input 
          type='text'
          placeholder='user'
          id='id_user'
        />
      </label>
      <label htmlFor='id_password'>
        <input
          type='text'
          placeholder='passaword'
          id='id_password'
        />
      </label>
      <button type='submit'>Send</button>
    </form>
  );
};
