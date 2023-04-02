import React from "react";
import {Container} from 'reactstrap';
import './assets/css/headers.css';
import Data from './componentes/data_mes.js';

class Headers extends React.Component{
    render(){
        //const data = '00/00/00'

        return (
            
            <div className="d-flex flex border border-warning border-2 estilo_headers">
                    <div className="container-fluid w-50">
                    <h4 className="pt-4 text-left">Lista de Compras - (minha compras)</h4>
                    </div>

                    <div className="container-fluid w-50">
                    <h5 className="pt-4 mt-1 text-end">Data do pedido: <Data/> </h5>
                    </div>
                         
            </div>
        )
    }
}

export default Headers;