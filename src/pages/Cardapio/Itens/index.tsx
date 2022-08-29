import cardapio from './itens.json'
import Item from './Item'
import styles from './itens.module.scss'
import { useEffect, useState } from 'react';

interface Props{
    busca:string;
    filtro: number | null
    ordenador: string
}

export default function Itens(props: Props){
    const[lista,setLista] = useState(cardapio) //Para fazer o react compreender que quando atualizarmos a pagina ele mostra o que queremos temos que usar o useState 
    const {busca,filtro,ordenador} = props

    function testaBusca(title: string){
        const regex = new RegExp(busca,'i' /* Usamos o 'i' no RegExp() para comunicar que não importa se no buscador estara letra maiuscula ou minuscula */)         //Expressão regular ou "Regex" provê uma forma concisa e flexível de identificar cadeias de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres
        return regex.test(title)
    }

    function testaFiltro(id: number) {
        if(filtro !== null) return filtro === id //Se o id for igual ao filtro ele mostra o resultado certo na tela
        return true
    }

    function ordenar(novaLista: typeof cardapio){
        switch(ordenador){
            case 'porcao':
                return novaLista.sort /*Usamos o sort para ordenar itens na pagina */ ((a,b)=> a.size > b.size ? 1 : -1);
            case 'qtde_pessoas':
                return novaLista.sort ((a,b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return novaLista.sort ((a,b) => a.price > b.price ? 1 : -1)
            default:
                return novaLista
        }
    }


    useEffect(() =>{ //Usamos nesse casa o useEffect para atulizar os elementos
        const novaLista = cardapio.filter(item=>testaBusca(item.title)&&  //Filtramos direto do cardapio pois lá a lista de itens sempre esta completa
        testaFiltro(item.category.id))
        setLista(ordenar(novaLista))              
    },[busca,filtro,ordenador])

    return(
        <div className={styles.itens}>
            {lista.map((item)=>(
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}