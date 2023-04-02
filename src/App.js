import React from "react";
import Headers from "./Headers";
import Article from "./Article";
import Footer from "./Footer";
import {Button} from 'reactstrap';


function App(props){
  return(
    <div>
    <Headers />
    <Article/>
    <Footer/>
    <Button color="light" className="ms-4 btn btn-outline-secondary">Confirmar!</Button>
  </div>
    
 )
};

export default App;
