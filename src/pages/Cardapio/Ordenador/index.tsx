import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import React,{ useState } from 'react';
import classNames from 'classnames';
import {MdKeyboardArrowUp , MdKeyboardArrowDown} from 'react-icons/md';

interface Props{
    ordenador:string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}


export default function Ordenador ({
  ordenador,
  setOrdenador
}: Props){
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome; //Nesse const estamos buscado dentro de opcoes.json o nome do ordenador e nao seu value
  return(
    <button 
      className={classNames({
        [styles.ordenador]:true,
        [styles['ordenador--ativo']]: ordenador !=='', /* O ordenador só vai ficar ativo caso a string estaja vazia */ 
      })} 
      onClick={() => setAberto(!aberto)} /*Por ser boolean ao clicar ele vai sempre fazer o contrario do que esta colocado, se for false vai ser true e se for true vai ser false */ 
      onBlur={()=> setAberto(false)}
    > 
      <span>{nomeOrdenador || 'Ordenar por' /* Aqui quando o nenhum item do ordenador tiver selecionado ele vai mostrar o texto */}  </span>  
      { aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> /* O ponto de interrogação é para se ele estiver aberto e o dois pontos para caso ele estiver fechado ou seja ? e : seria como true e flase nesse quesito*/
      } 
      <div className={classNames({
        [styles.ordenador__options]:true,
        [styles['ordenador__options--ativo']]: aberto, /* Definimos para buscar o estilo de --ativo somente quanod o ordenador tive raberto */
      })}>
        {opcoes.map((opcao) =>(
          <div 
            className={styles.ordenador__option} 
            key={opcao.value}
            onClick ={()=> setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}