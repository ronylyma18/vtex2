import React, {useState,useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';

interface Iproduct {
    id: number;
    nome: string;
    photo: string;
    description:string;
    price:number;

}

const Home: React.FC = () => {
    const [ data,setData ] = useState<Iproduct[]>([]);
    
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    },[])

    const handleCart =  (index: number ) => {
        const productStore = JSON.stringify(data[index]);
        localStorage.setItem(`@Produto-${index}`, productStore)

      
    }

  

  return (
    <Container>
        <div className="logo">
            <img className="Imgc" src="https://logodownload.org/wp-content/uploads/2019/07/mini-logo-0.png" width="150px" />
        </div>
        <section>
             {data.map( (prod,index) => (
                <div className="product-content" key={prod.id}>
                <img src={prod.photo} width="100px"></img>
                <h4>{prod.nome}</h4>
                <span>{prod.description}</span>
                <h6>{prod.price}</h6>
            
                <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
                
                </div>
            ) )}
        
        </section>
      
        
    </Container>
  );
}

export default Home;
