import React, { Component } from "react";
import './assets/css/article.css';

import Headers from "./componentes/lista_header.json";
import Lista from "./componentes/lista_itens.json";

export class Article extends Component {
    render() {
        
        var soma = 0 

        var preco = Lista.lista_itens.map(p=> p.quant * p.preco)

        for (let i = 0; i < preco.length; i++) {
            var soma = soma + parseFloat(preco[i]) 
            
        }
            
    

console.log(soma)

        return (
            <>
                <div>
                    <table id="tab" className="table">
                        <thead> 
                            {Headers.cabecalho.map((hd, i) => (
                                <tr key={i}>
                                    <th>{hd.cod}</th>
                                    <th>{hd.desc}</th>
                                    <th>{hd.quant}</th>
                                    <th>{hd.medida}</th>
                                    <th>{hd.preco}</th>
                                    <th>{hd.subtotal}</th>
                                </tr>
                            ))}
                        </thead>

                        <tbody>
                            {Lista.lista_itens.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.cod}</td>
                                    <td>{item.desc}</td>
                                    <td>{parseFloat(item.quant).toFixed(2)}</td>
                                    <td>{item.medida}</td>
                                    <td>{item.preco}</td>
                                    <td>{parseFloat(item.quant*item.preco).toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{fontWeight: "bold"}}>Total R$</td>
                                <td style={{fontWeight: "bold"}}>{soma.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}


export default Article