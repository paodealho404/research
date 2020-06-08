import React from 'react';

import { Redirect } from 'react-router-dom';

import axios from 'axios';

import Header from "./components/Header";

import { parseCommandLine } from 'typescript';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000/course";

class Thanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
        }
    }

    componentDidMount() {
        if(sessionStorage.getItem('participant') !== null && sessionStorage.getItem('survey1') !== null && sessionStorage.getItem('survey2') !== null && sessionStorage.getItem('survey3') !== null) {
            let participant = JSON.parse(sessionStorage.getItem('participant'));

            axios.post(baseUrl + '/createParticipant', participant)
            .then( resp => 
            {
                let i, req = [];
                for(i = 1; i <= 3; i++)
                {
                    let survey = JSON.parse(sessionStorage.getItem('survey' + i));
                    let promise = axios({
                        method: 'post',
                        url: baseUrl+'/createSurvey',
                        data: survey
                    })
                    req.push(promise);
                }
                axios.all(req)
                .then(axios.spread((...responses)=>{
                    responses.forEach(res=> console.log('Saved'));

                    sessionStorage.clear();
                }))
                .catch(error=>{
                    console.log(error);
                })
            })
            .catch(error=> console.log(error));
        } else {
            this.redirect();
        }
    }

    redirect() {
        this.setState({
            redirect: true
        });
    }

    render() {
        return(
            <div>
                <Header/>
                <center className="col" style={{height: '585px', flexDirection: 'column', justifyContent: 'center', display: 'flex'}}>
                    <p style={{color: "#000000", fontSize: '22px'}}>Este é o final da pesquisa. Muito obrigado pela colaboração!</p>
                    {this.state.redirect ? (<Redirect to={{ pathname:"/"}}/>) : <div></div>}
                </center>
            </div>
        )
    }

}

export default Thanks;