import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: vw;
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid black;
  width: 46rem;
  height: 4rem;
  position: absolute;
  top: 240px;
`

export const Form = styled.form`
  width: 70%;
  border: 1px solid rgb(241, 5, 5);
  margin: 10px;
`

export const InputText = styled.input`
  cursor: text;
  font-size: 1rem;
  padding: 0.8rem;
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  gap: 0.5 rem;
  background-color: #1E6F9F;
  color: #eee;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 5px 5px 5px #eee;
`