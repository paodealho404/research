import React from "react";
import {
    Button,
    Col
  } from "reactstrap";
import { Redirect } from 'react-router-dom';
import Header from "./Header";
import YouTube from 'react-youtube';

class ProjectTutorial extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            user:{},
            redirect: false
        }

        this.redirect = this.redirect.bind(this);
        this._onReady = this._onReady.bind(this);
    }

    redirect(){
        this.setState({redirect: true});
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        }

        return(
            <div>
            <Header/>
            <Col sm="50" md={{ size: 8, offset: 2 }} className="text-justify">
            <p className= " text-center font-weight-bold " style={{fontFamily: 'Calibri', fontSize: '30px'}}>Tutorial da Ferramenta</p>
            <center><p>Por favor, assista o seguinte vídeo tutorial referente a utilização da ferramenta a qual se baseia no modelo explicado anteriormente.</p></center>
            <br/>
            <center>
                <YouTube
                     videoId="oZpnWOCI0L0"
                     opts={opts}
                />
            </center>
            <br/>

            <center>
                <Button color ="#C0B283" type="button" onClick={this.redirect}> 
                    Visualizar Ferramenta
                </Button>
                {this.state.redirect ? (<Redirect to={{ pathname:"/admin/classes"}}/>) : (<div></div>)}
            </center>
            <br/>
            </Col>
            </div>
        );
    }
}

export default ProjectTutorial;