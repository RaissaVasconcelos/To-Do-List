import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 6px;
`

export const Title = styled.h2 `
  display: flex;
  justify-content: center;
  font-family: sans-serif;
`

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Input = styled.input `
  cursor: text;
  font-size: 1rem;
  padding: 0.5rem;
  border: 0;
  border-bottom: 2px solid rgb(200, 200, 200);
  outline: 0;
`

// .input_single input:focus {
//   border-bottom: 2px solid cornflowerblue;
// }

export const Button = styled.button `
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #0066A2;
  color: #eee;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #eee;
  border-radius: 6px;
  box-shadow: 5px 5px 5px #eee;
`

// .button:hover {
//   margin-top: 0.5rem;
//   padding: 0.5rem;
//   background-color: #013858;
//   color: #eee;
//   font-size: 1rem;
//   font-weight: bold;
//   border: 1px solid #eee;
//   border-radius: 6px;
//   box-shadow: 5px 5px 5px #eee;
// }