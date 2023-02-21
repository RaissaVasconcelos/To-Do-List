import style from './Header.module.css'

export function Header() {
  return(
    <header className={style.content}>
      <img className={style.logo} src="../../public/Logo.svg" alt="Logo ToDo"/>
    </header>
  )
}