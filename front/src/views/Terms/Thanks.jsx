import React from 'react';

import Header from "./Header";
import axios from 'axios';
import { parseCommandLine } from 'typescript';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000/course";

class Thanks extends React.Component {
    componentDidMount()
    {
    
    let participant = JSON.parse(localStorage.getItem('participant'));
    axios.post(baseUrl+'/createParticipant', participant)
    .then( resp => 
    {
        let i, req=[];
        for(i=1;i<=3;i++)
        {
            let survey = JSON.parse(localStorage.getItem('survey'+i));
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
        })
        )
        .catch(error=>{
            console.log(error);
        })
     })
    .catch(error=> console.log(error));
  
    }
    render(){
        return(
            <div>
                <Header/>
                <center>
                    <p style={{color: "#000000", fontSize: '22px'}}>Este é o final da pesquisa. Muito obrigado pela colaboração!</p>
                </center>
            </div>
        )
    }

}

export default Thanks;