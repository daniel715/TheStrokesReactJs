import React from 'react'
import '../assets/css/ComponenteBarra.css';
import * as data from '../catalogo.json';

class ComponenteBarra extends React.Component
{
    constructor(props)
    {
        super(props);
        this.actualizarState = this.actualizarState.bind(this);
        this.state = { albumActual : data[0]  } 
    }

    actualizarState(e)
    {
        var img = e.target.alt;
        console.log(img)
        var indice = this.indexarAlbumes(img);    
        console.log(indice)
        this.setState
        (
            {
                albumActual : data[indice]
            }   
        );
    }

    indexarAlbumes(a)
    {
        var indice;
        switch(a)
        {
            case 'isthisit' : indice = 0;break;
            case 'roomonfire' : indice =1;break;
            case 'firstimpressionsofearth' : indice = 2;break;
            case 'angles' : indice =3;break;
            case 'comedownmachine' : indice = 4;break;
            case 'futurepresentpast' : indice =5;break;
            case 'thenewabnormal' : indice = 6;break;
            default : indice = 0;
        }
        return indice;
    }
  
    render()
    {
        return(
        <div id='barra'>
                <table>
                    <thead>
                        <td colSpan='7'>
                            <h1 id='tituloDeBarra' > ALBUMES </h1>
                        </td>
                    </thead>
                    <tbody>
                    <tr>
                        <td> 
                            <button onClick={this.actualizarState}>
                                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/09/The_Strokes_-_Is_This_It_cover.png/220px-The_Strokes_-_Is_This_It_cover.png' alt='isthisit' />
                            </button>
                       </td>

                       <td>
                           <button onClick={this.actualizarState}>
                                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Room_on_Fire_cover.jpg/220px-Room_on_Fire_cover.jpg' alt='roomonfire' />
                           </button>
                       </td>

                       <td > 
                            <button onClick={this.actualizarState}>
                                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FIOEstrokes.jpg/220px-FIOEstrokes.jpg' alt='firstimpressionsofearth' />
                            </button> 
                       </td>

                       <td >
                           <button onClick={this.actualizarState}>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Strokes_1.jpg/220px-Strokes_1.jpg' alt='angles' />
                           </button >
                       </td>
                    
                       <td > 
                            <button onClick={this.actualizarState}>
                                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_Strokes_-_Comedown_Machine.jpg/220px-The_Strokes_-_Comedown_Machine.jpg' alt='comedownmachine' />
                            </button> 
                       </td>

                       <td >
                           <button onClick={this.actualizarState}>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/The-Strokes-Future-Present-Past-EP.jpg/220px-The-Strokes-Future-Present-Past-EP.jpg' alt='futurepresentpast' />
                           </button>
                       </td>
                       
                       <td >
                           <button onClick={this.actualizarState}>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/The_Strokes_-_The_New_Abnormal.png/220px-The_Strokes_-_The_New_Abnormal.png' alt='thenewabnormal' />
                           </button>
                       </td>   
                    </tr>
                    </tbody>
                </table>
           
                <table id='tableinfo'>
                    <thead>
                            <td id='titulotabla' colSpan='2'> INFORMACION DEL ALBUM </td>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='celda' > Nombre: </td>
                            <td className='celda' > {this.state.albumActual.nombre} 
                            </td>
                        </tr>

                        <tr>
                            <td className='celda'> Año de Lanzamiento: </td>
                            <td className='celda'> {this.state.albumActual.ano} </td>
                        </tr>

                        <tr>
                            <td className='celda'> Genero: </td>
                            <td className='celda'>   {this.state.albumActual.genre} </td>
                        </tr>
                        <tr>
                            <td className='celda'> Disquera: </td>
                            <td className='celda'>   {this.state.albumActual.label} </td>
                        </tr>
                        <tr>
                            <td className='celda'> Lugar: </td>
                            <td className='celda'>  {this.state.albumActual.lugar}  </td>
                        </tr>
                        <tr>
                            <td className='celda'> Portada: </td>
                            <td className='celda'> <img src={this.state.albumActual.portada}  alt='foto' /> </td>
                        </tr>
                        <tr>
                            <td className='celda'> Descripcion: </td>
                            <td className='celda'> {this.state.albumActual.descripcion} </td>
                        </tr>
                        <tr>
                         <td className='celda'> Canciones: </td>
                            <td className='celda'> 
                            <ul>
                                    {
                                    !this.state.albumActual.canciones
                                        ? null
                                        : this.state.albumActual.canciones.map(e => {
                                        return (
                                            <li>{e.numero}: {e.titulo}</li>
                                        )
                                        })
                                    }
                             </ul>
                            </td>
                        </tr>
                    </tbody>    
                </table>
        </div>      
        )   
    }
}

export default ComponenteBarra;