import React from "react";

class data extends React.Component{
    render(){
       
        const hoje = new Date();

        var nomeMes = [
            "Janeiro", "Fevereiro", "Março",
            "Abril", "Maio", "Junho", "Julho",
            "Agosto", "Setembro", "Outubro",
            "Novembro", "Dezembro"
          ];

          var dia = hoje.getDate();
          var mesIndex = hoje.getMonth();
          var ano = hoje.getFullYear();

          const Mes = dia + ' ' + nomeMes[mesIndex] + ' ' + ano;
          
          return(
            Mes
        )
        

    }
}

export default data;
