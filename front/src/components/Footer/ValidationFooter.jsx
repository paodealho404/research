import React from "react";

import { Button, Navbar, NavbarBrand, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Row, Col } from "reactstrap";

class ValidationFooter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        let user = this.props.currentState;
        this.setState({user: user});
    }       
    
    render() {
        return(
            <React.Fragment>
                <Navbar fixed="bottom" color="white" style={{ margin: 0 }}>
                    <Container>
                        <Row> 
                            <Col> 
                            <NavLink to= {{ pathname:"/projecttutorial"}} > 
                                <Button className="black"> 
                                    <NavbarBrand style={{color: 'white'}}> 
                                        &lt;&lt; Rever o Vídeo Tutorial 
                                    </NavbarBrand> 
                                </Button> 
                            </NavLink>
                            </Col>
                            <Col md="4"> 
                                <p className= "text-center" >Monitore as interações da classe com os recursos de aprendizagem e elementos de jogos, crie uma missão e avalie a ferramenta após a interação.</p>
                            </Col>
                            <Col>
                            <NavLink to= {{ pathname:"/finalquests"}} > 
                                <Button className="black" > 
                                    <NavbarBrand style={{color: 'white'}}> 
                                        Avaliar a Ferramenta &gt;&gt; 
                                    </NavbarBrand> 
                                </Button> 
                            </NavLink>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default ValidationFooter;