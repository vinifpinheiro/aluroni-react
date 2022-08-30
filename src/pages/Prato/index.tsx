import styles from './Prato.module.scss';
import {useParams} from 'react-router-dom'; //Função de localizar elementos especificos pelo id

export default function Prato(){
  console.log(useParams());
  return(
    <div>
        prato
    </div>
  );
}