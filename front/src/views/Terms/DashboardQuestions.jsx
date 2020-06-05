import React from 'react';
//import { Redirect } from 'react-router-dom';

import {
  Form,
  Button,
  Col
} from 'reactstrap';

import Checkbox from "./Checkbox";
import Header from "./Header";
import LargeTextArea from "./LargeTextArea";

class DashboardQuestions extends React.Component {
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
                q16: '',
                openQuestion1: '',
                openQuestion2: ''
            },
            formErrors: { 
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
                q16: '',
                openQuestion1: '',
                openQuestion2: '',
            },
            credibility: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            possibleOptions:
             ['Discordo totalmente', 'Discordo', 'Discordo Parcialmente', 'Neutro', 'Concordo Parcialmente', 'Concordo', 'Concordo totalmente']
        } 

        this.handleChange = this.handleChange.bind(this);
    }  

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
  
        let openAnswer1Valid = this.state.openQuestion1Valid;
        let openAnswer2Valid = this.state.openQuestion2Valid;
        let q1AnswerValid = this.state.q1Valid;
        let q2AnswerValid = this.state.q2Valid;
        let q3AnswerValid = this.state.q3Valid;
        let q4AnswerValid = this.state.q4Valid;
        let q5AnswerValid = this.state.q5Valid;
        let q6AnswerValid = this.state.q6Valid;
        let q7AnswerValid = this.state.q7Valid;
        let q8AnswerValid = this.state.q8Valid;
        let q9AnswerValid = this.state.q9Valid;
        let q10AnswerValid = this.state.q10Valid;
        let q11AnswerValid = this.state.q11Valid;
        let q12AnswerValid = this.state.q12Valid;
        let q13AnswerValid = this.state.q13Valid;
        let q14AnswerValid = this.state.q14Valid;
        let q15AnswerValid = this.state.q15Valid;
        let q16AnswerValid = this.state.q16Valid;
  
        switch(fieldName) {
          case 'openQuestion1':
            openAnswer1Valid = value.length > 0;
            fieldValidationErrors.openAnswer1 = openAnswer1Valid ? '' : 'notValid';
            break;
          case 'openQuestion2':
            openAnswer2Valid = value.length > 0;
            fieldValidationErrors.openAnswer2 = openAnswer2Valid ? '': 'notValid';
            break;
          case 'q1':
            q1AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q1 = q1AnswerValid ? '' : 'notValid';
            break;
          case 'q2':
              q2AnswerValid = value.length>0 ? true : false;
              fieldValidationErrors.q2 = q2AnswerValid ? '' : 'notValid';
              break;
            case 'q3':
              q3AnswerValid = value.length>0 ? true : false;
              fieldValidationErrors.q3 = q3AnswerValid ? '' : 'notValid';
              break;
            case 'q4':
            q4AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q4 = q4AnswerValid ? '' : 'notValid';
            break;
            case 'q5':
            q5AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q5 = q5AnswerValid ? '' : 'notValid';
            break;
            case 'q6':
            q6AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q6 = q6AnswerValid ? '' : 'notValid';
            break;
            case 'q7':
            q7AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q7 = q7AnswerValid ? '' : 'notValid';
            break;
            case 'q8':
            q8AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q8 = q8AnswerValid ? '' : 'notValid';
            break;
            case 'q9':
            q9AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q9 = q9AnswerValid ? '' : 'notValid';
            break;
            case 'q10':
            q10AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q10 = q10AnswerValid ? '' : 'notValid';
            break;
            case 'q11':
            q11AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q11 = q11AnswerValid ? '' : 'notValid';
            break;
            case 'q12':
            q12AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q12 = q12AnswerValid ? '' : 'notValid';
            break;
  
            case 'q13':
            q13AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q13 = q13AnswerValid ? '' : 'notValid';
            break;
            case 'q14':
            q14AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q14 = q14AnswerValid ? '' : 'notValid';
            break;
            case 'q15':
            q15AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q15 = q15AnswerValid ? '' : 'notValid';
            break;
            case 'q16':
            q16AnswerValid = value.length>0 ? true : false;
            fieldValidationErrors.q16 = q16AnswerValid ? '' : 'notValid';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        openQuestion1Valid: openAnswer1Valid,
                        openQuestion2Valid: openAnswer2Valid,
                        q1Valid: q1AnswerValid, 
                        q2Valid: q2AnswerValid, 
                        q3Valid: q3AnswerValid, 
                        q4Valid: q4AnswerValid, 
                        q5Valid: q5AnswerValid, 
                        q6Valid: q6AnswerValid, 
                        q7Valid: q7AnswerValid, 
                        q8Valid: q8AnswerValid, 
                        q9Valid: q9AnswerValid, 
                        q10Valid: q10AnswerValid, 
                        q11Valid: q11AnswerValid, 
                        q12Valid: q12AnswerValid, 
                        q13Valid: q13AnswerValid, 
                        q14Valid: q14AnswerValid, 
                        q15Valid: q15AnswerValid, 
                        q16Valid: q16AnswerValid, 
                      }, this.validateForm);
    }
    
    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState( prevState => ({ questionAnswers : 
            {...prevState.questionAnswers, [name]: [value]
            }
          }), ()=>{this.validateField(name,value)});
    }

    validateForm()
    {
      this.setState({formValid: (this.state.openQuestion1Valid && this.state.openQuestion2Valid && this.state.q1Valid && this.state.q2Valid && this.state.q3Valid && this.state.q4Valid && this.state.q5Valid && this.state.q6Valid && this.state.q7Valid && this.state.q8Valid
        && this.state.q9Valid && this.state.q10Valid && this.state.q11Valid && this.state.q12Valid && this.state.q13Valid && this.state.q14Valid && this.state.q15Valid && this.state.q16Valid)});
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
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'Usar a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores aumenta a minha produtividade.'} 
                    name={'q2'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q2}
                    value = {this.state.questionAnswers.q2}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'A utilização da ferramenta baseada no modelo de monitoramento e adaptação do design da  gamificação de ambientes educacionais para professores aumenta minha efetividade no processo de lidar com problemas de engajamento dos meus estudantes.'} 
                    name={'q3'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q3}
                    value = {this.state.questionAnswers.q3}
                    handleChange = {this.handleChange}/>

                <br/>
                
                <Checkbox title={'Eu constato que a ferramenta baseada no modelo de monitoramento e adaptação do design gamificação de ambientes educacionais para professores é útil no processo de lidar com problemas de engajamento dos meus estudates.'} 
                    name={'q4'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q4}
                    value = {this.state.questionAnswers.q4}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'A utilização de ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores foi clara e compreensível'} 
                    name={'q5'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q5}
                    value = {this.state.questionAnswers.q5}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'A interação com a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores não requer muito do meu esforço mental.'} 
                    name={'q6'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q6}
                    value = {this.state.questionAnswers.q6}
                    handleChange = {this.handleChange}/>

                <br/>
                
                <Checkbox title={'Eu constato que a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é fácil de usar.'} 
                    name={'q7'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q7}
                    value = {this.state.questionAnswers.q7}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'Eu constato que é fácil interagir com a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores para fazer o que eu quero.'} 
                    name={'q8'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q8}
                    value = {this.state.questionAnswers.q8}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'Supondo que tenho acesso a ferramenta no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores, pretendo usá-la.'} 
                    name={'q9'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q9}
                    value = {this.state.questionAnswers.q9}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'Dado que tenho acesso a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores, prevejo que eu vou usá-la.'} 
                    name={'q10'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q10}
                    value = {this.state.questionAnswers.q10}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'No processo de lidar com problemas de engajamento dos meus estudantes, o uso da ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é importante.'} 
                    name={'q11'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q11}
                    value = {this.state.questionAnswers.q11}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'No processo de lidar com problemas de engajamentos dos meus estudantes, o uso da ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é relevante.'} 
                    name={'q12'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q12}
                    value = {this.state.questionAnswers.q12}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'Eu constato que usar a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é agradável.'} 
                    name={'q13'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q13}
                    value = {this.state.questionAnswers.q13}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'O processo atual de usar a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores é agradável.'} 
                    name={'q14'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q14}
                    value = {this.state.questionAnswers.q14}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'Eu me diverti usando a ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores.'} 
                    name={'q15'}
                    options={this.state.possibleOptions}
                    selectedOptions = {this.state.questionAnswers.q15}
                    value = {this.state.questionAnswers.q15}
                    handleChange = {this.handleChange}/>

                <br/>

                <Checkbox title={'Por favor, indique de 1 a 9, a credibilidade da ferramenta apresentada: '} 
                    name={'q16'}
                    options={this.state.credibility}
                    selectedOptions = {this.state.questionAnswers.q16}
                    value = {this.state.questionAnswers.q16}
                    handleChange = {this.handleChange}
                    displaystyle = {{display: 'inline', marginRight: '2.5em'}}
                    />
                    
                <br/>

                <LargeTextArea
                  title={'Por favor, descreva aqui um ponto negativo sobre esta versão da ferramenta apresenta.'}
                  rows={3}
                  value={this.state.questionAnswers.openQuestion1}
                  name={'openQuestion1'}
                  handleChange={this.handleChange}/>

                <br/>

                <LargeTextArea
                  title={'Por favor, descreva aqui um ponto positivo sobre esta versão da ferramenta apresenta.'}
                  rows={3}
                  value={this.state.questionAnswers.openQuestion2}
                  name={'openQuestion2'}
                  handleChange={this.handleChange}/>

                <br/>

                <Col sm={{ span: 10, offset: 5 }}>
                <Button color="#C0B283" /*disabled={!this.state.formValid} onClick={() => this.redirect()}*/> 
                         <span className="text-white"> Submeter </span>       
                    </Button>
                </Col>

            </Form>
              </div>          
        )      
    }
}
export default DashboardQuestions;