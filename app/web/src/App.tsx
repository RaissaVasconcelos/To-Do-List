import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/themes/default'
import { GlobalStyle } from './style/global'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import { Header } from "./Componentes/Header";

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <Routes>
        <Route path='/' element={ <Login /> }/>
        <Route path='/home' element={ <Home /> } />
      </Routes>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
