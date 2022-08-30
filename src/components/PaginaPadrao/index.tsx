import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom'; //Faz a mesma função que children do react mas sem ter que multiplicar os codigos
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao(){
  return(
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}