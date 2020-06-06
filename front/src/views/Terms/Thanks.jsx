import React from 'react';

import Header from "./Header";

class Thanks extends React.Component {
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