import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
  const navigate = useNavigate();
  return(
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)} /* Como o Router funciona como pilha ao fazer os historicos das paginas ao colocar -1 ele remove um da pilha */> 
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}