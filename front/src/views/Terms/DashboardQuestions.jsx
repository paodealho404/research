import React from 'react';
//import { Redirect } from 'react-router-dom';

import {
  Form,
  //Button
} from 'reactstrap';

import Checkbox from "./Checkbox";
import Header from "./Header";
import LargeTextArea from "./LargeTextArea";

class FinalQuestsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionAnswers: {
                q1: '',
                q2: '',
                q3: '',
                q4: '',
                q5: '',
                q6: '',
                q7: '',
                q8: '',
                q9: '',
                q10: '',
                q11: '',
                q12: '',
                q13: '',
                q14: '',
                q15: '',
                q16: ''
            },
            credibility: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            possibleOptions:
             ['Discordo totalmente', 'Discordo', 'Discordo Parcialmente', 'Neutro', 'Concordo Parcialmente', 'Concordo', 'Concordo totalmente']
        } 

    }  

    render()
    {
        return(
            <div>
            <Header/>
            <p className= " text-center font-weight-bold " style={{fontFamily: 'Calibri', fontSize: '25px'}}> Responda as seguintes questões sobre a sua experiência com o painel apresentado: </p> <br/> 
            <Form className="container" >
                <Checkbox title={'O painel apresentado anteriormente pode me ajudar a mudar as estratégias de gerenciamento de recursos para a turma.'} 
                    name={'q1'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q1}
                    value = {this.state.questionAnswers.q1}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'Usar a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores aumenta a minha produtividade.'} 
                    name={'q2'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q2}
                    value = {this.state.questionAnswers.q2}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'A utilização da ferramenta baseada no modelo de monitoramento e adaptação do design da  gamificação de ambientes educacionais para professores aumenta minha efetividade no processo de lidar com problemas de engajamento dos meus estudantes.'} 
                    name={'q3'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q3}
                    value = {this.state.questionAnswers.q3}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>
                
                <Checkbox title={'Eu constato que a ferramenta baseada no modelo de monitoramento e adaptação do design gamificação de ambientes educacionais para professores é útil no processo de lidar com problemas de engajamento dos meus estudates.'} 
                    name={'q4'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q4}
                    value = {this.state.questionAnswers.q4}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'A utilização de ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores foi clara e compreensível'} 
                    name={'q5'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q5}
                    value = {this.state.questionAnswers.q5}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'A interação com a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores não requer muito do meu esforço mental.'} 
                    name={'q6'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q6}
                    value = {this.state.questionAnswers.q6}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>
                
                <Checkbox title={'Eu constato que a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é fácil de usar.'} 
                    name={'q7'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q7}
                    value = {this.state.questionAnswers.q7}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'Eu constato que é fácil interagir com a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores para fazer o que eu quero.'} 
                    name={'q8'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q8}
                    value = {this.state.questionAnswers.q8}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'Supondo que tenho acesso a ferramenta no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores, pretendo usá-la.'} 
                    name={'q9'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q9}
                    value = {this.state.questionAnswers.q9}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'Dado que tenho acesso a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores, prevejo que eu vou usá-la.'} 
                    name={'q10'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q10}
                    value = {this.state.questionAnswers.q10}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'No processo de lidar com problemas de engajamento dos meus estudantes, o uso da ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é importante.'} 
                    name={'q11'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q11}
                    value = {this.state.questionAnswers.q11}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'No processo de lidar com problemas de engajamentos dos meus estudantes, o uso da ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é relevante.'} 
                    name={'q12'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q12}
                    value = {this.state.questionAnswers.q12}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'Eu constato que usar a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é agradável.'} 
                    name={'q13'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q13}
                    value = {this.state.questionAnswers.q13}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'O processo atual de usar a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é agradável.'} 
                    name={'q14'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q14}
                    value = {this.state.questionAnswers.q14}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'Eu me diverti usando a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores.'} 
                    name={'q15'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q15}
                    value = {this.state.questionAnswers.q15}
                    handleChange = {this.handleGenericCheckbox}/>

                <br/>

                <Checkbox title={'Por favor, indique de 1 a 9, a credibilidade da ferramenta apresentada: '} 
                    name={'q16'}
                    options={this.state.credibility}
                    selectedOptions = {this.state.questionAnswers.q16}
                    value = {this.state.questionAnswers.q16}
                    handleChange = {this.handleGenericCheckbox}
                    displaystyle = {{display: 'inline', marginRight: '2.5em'}}
                    />
                    
                <br/>

                <LargeTextArea
                  title={'Por favor, descreva aqui um ponto negativo sobre esta versão da ferramenta apresenta.'}
                  rows={3}
                  name={'openQuestion2'}
                  handleChange={this.handleTextArea}/>

                <br/>

                <LargeTextArea
                  title={'Por favor, descreva aqui um ponto positivo sobre esta versão da ferramenta apresenta.'}
                  rows={3}
                  name={'openQuestion2'}
                  handleChange={this.handleTextArea}/>

                <br/>
            </Form>
              </div>          
        )      
    }
}
export default FinalQuestsContainer;