import React from 'react';

import {
  Row, Col
} from 'reactstrap';
  
import logo_ufal from "../../assets/img/logo_ufal_.png";
import logo_nees from "../../assets/img/nees.png";

class Header extends React.Component {
    render(){
        return(
            <div>
            <Row>
            <Col >
            <br/><br/>
            <p style={{color:'#C0B283', fontSize: '40px', textAlign:'center'}} >
            <strong>Monitoramento e Adaptação do Design da Gamificação de Ambientes Educacionais Gamificados por Professores</strong>
            <img src={logo_nees} alt="nees-logo"align="right" width="110" height="100" hspace="20"/>
            <img src={logo_ufal} alt="ufal-logo" align="right" width="60" height="100"/>
            &nbsp;
            <br/>
            </p>
            <br/>
            </Col>
            <br/>
            </Row>
            <hr style={{backgroundColor: "#C0B283"}}/>
            <br/>
            </div>
        )
    }
}

export default Header;