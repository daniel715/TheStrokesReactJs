import React from 'react';
import '../assets/css/ComponenteIntegrantes.css';

class ComponenteIntegrantes extends React.Component 
{
    render() {

        let arreglo = this.props.user;

        var OtroArreglo = arreglo.map( (item,i,n) => { return (
        <div >
            <Nombre > <h1 className='nombre' >  {item.name} </h1></Nombre>
            <Apellido  > <h2 className='nombre '> {item.apellido}</h2> </Apellido>
            <Avatar  > <img className='foto' src={item.avatar} alt='Nombre de Integrante' />  </Avatar>
        </div>
            ) } ) 
        
            
        return (
                <div id='componenteIntegrantes'> 
                    {OtroArreglo}
                </div>
            );
        }
}



const Nombre    = props => <div > {props.children} </div> 
const Apellido  = props => <div > {props.children} </div>
const Avatar    = props => <div > {props.children} </div> 

export default ComponenteIntegrantes;
