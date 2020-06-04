import React from 'react';
import { Redirect } from 'react-router-dom';

import {
  Form,
  Button
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
              q16: '',
              q17: '',
              q18: '',
              q19: '',
              q20: '',
              q21: '',
              q22: '',
              q23: '',
              q24: '',
              openQuestion1: '',
              openQuestion2: '',
              
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
            q17: '',
            q18: '',
            q19: '',
            q20: '',
            q21: '',
            q22: '',
            q23: '',
            q24: '',
            openQuestion1: '',
            openQuestion2: '',
          },

          q1Valid: false,
          q2Valid: false,
          q3Valid: false,
          q4Valid: false,
          q5Valid: false,
          q6Valid: false,
          q7Valid: false,
          q8Valid: false,
          q9Valid: false,
          q10Valid: false,
          q11Valid: false,
          q12Valid: false,
          q13Valid: false,
          q14Valid: false,
          q15Valid: false,
          q16Valid: false,
          q17Valide: false,
          q18Valide: false,
          q19Valide: false,
          q20Valide: false,
          q21Valide: false,
          q22Valide: false,
          q23Valide: false,
          q24Valide: false,
          openQuestion1Valid: true,
          openQuestion2Valid: true,
          redirect: false,
          formValid: false,
          possibleOptions: ['Discordo totalmente', 'Discordo', 'Discordo Parcialmente', 'Neutro', 'Concordo Parcialmente', 'Concordo', 'Concordo totalmente'],
          ratingOptions: ['1','2','3','4','5','6','7','8','9', '10'],
          user_package:{}
        }
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleGenericCheckbox = this.handleGenericCheckbox.bind(this);
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
      let q17AnswerValid = this.state.q17Valid;
      let q18AnswerValid = this.state.q18Valid;
      let q19AnswerValid = this.state.q19Valid;
      let q20AnswerValid = this.state.q20Valid;
      let q21AnswerValid = this.state.q21Valid;
      let q22AnswerValid = this.state.q22Valid;
      let q23AnswerValid = this.state.q23Valid;
      let q24AnswerValid = this.state.q24Valid;
      

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
          case 'q17':
          q17AnswerValid = value.length>0 ? true : false;
          fieldValidationErrors.q17 = q17AnswerValid ? '' : 'notValid';
          break;
          case 'q18':
          q18AnswerValid = value.length>0 ? true : false;
          fieldValidationErrors.q18 = q18AnswerValid ? '' : 'notValid';
          break;
          case 'q19':
          q19AnswerValid = value.length>0 ? true : false;
          fieldValidationErrors.q19 = q19AnswerValid ? '' : 'notValid';
          break;
          case 'q20':
          q20AnswerValid = value.length>0 ? true : false;
          fieldValidationErrors.q20 = q20AnswerValid ? '' : 'notValid';
          break;
          case 'q21':
          q21AnswerValid = value.length>0 ? true : false;
          fieldValidationErrors.q21 = q21AnswerValid ? '' : 'notValid';
          break;
          case 'q22':
          q22AnswerValid = value.length>0 ? true : false;
          fieldValidationErrors.q22 = q22AnswerValid ? '' : 'notValid';
          break;
          case 'q23':
          q23AnswerValid = value.length>0 ? true : false;
          fieldValidationErrors.q23 = q23AnswerValid ? '' : 'notValid';
          break;
          case 'q24':
          q24AnswerValid = value.length>0 ? true : false;
          fieldValidationErrors.q24 = q24AnswerValid ? '' : 'notValid';
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
                      q17Valid: q17AnswerValid, 
                      q18Valid: q18AnswerValid, 
                      q19Valid: q19AnswerValid, 
                      q20Valid: q20AnswerValid, 
                      q21Valid: q21AnswerValid, 
                      q22Valid: q22AnswerValid, 
                      q23Valid: q23AnswerValid, 
                      q24Valid: q24AnswerValid,
                    }, this.validateForm);
    }
    handleTextArea(e) {
      let name = e.target.name;
      let value = e.target.value;
      this.setState(prevState => ({ 
        questionAnswers : {
            ...prevState.questionAnswers, [name]: [value]
        } 
    }),()=> {this.validateField(name,value)});
      
    }

    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
    handleGenericCheckbox(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState( prevState => ({ questionAnswers : 
            {...prevState.questionAnswers, [name]: [value]
            }
          }), ()=>{this.validateField(name,value)});
    }
    validateForm()
    {
      this.setState({formValid: (this.state.openQuestion1Valid && this.state.openQuestion2Valid && this.state.q1Valid && this.state.q2Valid && this.state.q3Valid && this.state.q4Valid && this.state.q5Valid && this.state.q6Valid && this.state.q7Valid && this.state.q8Valid
        && this.state.q9Valid && this.state.q10Valid && this.state.q11Valid && this.state.q12Valid && this.state.q13Valid && this.state.q14Valid && this.state.q15Valid && this.state.q16Valid && this.state.q17Valid && this.state.q18Valid && this.state.q19Valid && this.state.q20Valid && this.state.q21Valid && this.state.q22Valid && this.state.q23Valid && this.state.q24Valid)});
    }
    redirect()
    {
      let user = JSON.parse(localStorage.getItem('user'));
      let questionAnswers = this.state.questionAnswers;
      let user_package = {user : user, questionAnswers: questionAnswers};
      this.setState({user_package: user_package});
      this.setState({redirect: true});
      let json = {
        name: user_package.user.name,
        age: user_package.user.age,
        gender: user_package.user.gender,
        studyDomain: user_package.user.studyDomain,
        educationalLevel: user_package.user.educationalLevel,
        q1: user_package.questionAnswers.q1.toString(),
        q2: user_package.questionAnswers.q2.toString(),
        q3: user_package.questionAnswers.q3.toString(),
        q4: user_package.questionAnswers.q4.toString(),
        q5: user_package.questionAnswers.q5.toString(),
        q6: user_package.questionAnswers.q6.toString(),
        q7: user_package.questionAnswers.q7.toString(),
        q8: user_package.questionAnswers.q8.toString(),
        q9: user_package.questionAnswers.q9.toString(),
        q10: user_package.questionAnswers.q10.toString(),
        q11: user_package.questionAnswers.q11.toString(),
        q12: user_package.questionAnswers.q12.toString(),
        q13: user_package.questionAnswers.q13.toString(),
        q14: user_package.questionAnswers.q14.toString(),
        q15: user_package.questionAnswers.q15.toString(),
        q16: user_package.questionAnswers.q16.toString(),
        q17: user_package.questionAnswers.q17.toString(),
        q18: user_package.questionAnswers.q18.toString(),
        q19: user_package.questionAnswers.q19.toString(),
        q20: user_package.questionAnswers.q20.toString(),
        q21: user_package.questionAnswers.q21.toString(),
        q22: user_package.questionAnswers.q22.toString(),
        q23: user_package.questionAnswers.q23.toString(),
        q24: user_package.questionAnswers.q24.toString(),
        openQuestion1: user_package.questionAnswers.openQuestion1.toString(),
        openQuestion2: user_package.questionAnswers.openQuestion2.toString()
      }
      localStorage.setItem('finalpackage', JSON.stringify(json));
    }

    render()
    {
        return(
            <div>
            <Header/>
            <p className= " text-center font-weight-bold " style={{fontFamily: 'Calibri', fontSize: '25px'}}> Questionário sobre a Ferramenta baseada no modelo de monitoramento e adaptação do design da gamificação de ambientes educacionais para professores </p> <br/> 
            <Form className="container" >
       
                <Checkbox title={'Questão 1: Usar a ferramenta melhora o meu desempenho em lidar com problemas de engajamento dos meus estudantes.'}
                  name={'q1'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q1}
                  value = {this.state.questionAnswers.q1}
                  handleChange={this.handleGenericCheckbox}/> 

                <br/>
           
                <Checkbox title={'Questão 2: Usar a ferramenta aumenta minha produtividade.'}
                  name={'q2'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q2}
                  value = {this.state.questionAnswers.q2}
                  handleChange={this.handleGenericCheckbox}/> 
            
                <br/>

                <Checkbox title={'Questão 3: A utilização da ferramenta aumenta minha efetividade no processo de  lidar com problemas de engajamento dos meus estudantes.'}
                  name={'q3'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q3}
                  value = {this.state.questionAnswers.q3}
                  handleChange={this.handleGenericCheckbox}/> 
            
                <br/>

                <Checkbox title={'Questão 4: Eu constato que a ferramenta é útil no processo de  lidar com problemas de engajamento dos meus estudantes.'}
                  name={'q4'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q4}
                  value = {this.state.questionAnswers.q4}
                  handleChange={this.handleGenericCheckbox}/> 
            
                <br/>

                <Checkbox title={'Questão 5: A utilização da ferramenta foi clara e compreensível.'}
                  name={'q5'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q5}
                  value = {this.state.questionAnswers.q5}
                  handleChange={this.handleGenericCheckbox}/> 
                
                <br/>

                <Checkbox title={'Questão 6: A interação com a ferramenta não requer muito do meu esforço mental.'}
                  name={'q6'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q6}
                  value = {this.state.questionAnswers.q6}
                  handleChange={this.handleGenericCheckbox}/> 
           
                <br/>

                <Checkbox title={'Questão 7: Eu constato que a ferramenta é fácil de usar.'}
                  name={'q7'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q7}
                  value = {this.state.questionAnswers.q7}
                  handleChange={this.handleGenericCheckbox}/> 
           
                <br/>

                <Checkbox title={'Questão 8: Eu constato que é fácil interagir com a ferramenta para fazer o que eu quero.'}
                  name={'q8'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q8}
                  value = {this.state.questionAnswers.q8}
                  handleChange={this.handleGenericCheckbox}/> 
            
                <br/> 

                <Checkbox title={'Questão 9: Supondo que tenho acesso a ferramenta, pretendo usá-la.'}
                  name={'q9'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q9}
                  value = {this.state.questionAnswers.q9}
                  handleChange={this.handleGenericCheckbox}/> 
            
                <br/>

                <Checkbox title={'Questão 10: Dado que tenho acesso a ferramenta, prevejo que eu vou usá-la.'}
                  name={'q10'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q10}
                  value = {this.state.questionAnswers.q10}
                  handleChange={this.handleGenericCheckbox}/> 
           
                <br/>

                <Checkbox title={'Questão 11: No processo de lidar com problemas de engajamento dos meus estudantes, o uso  da ferramenta é importante.'}
                  name={'q11'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q11}
                  value = {this.state.questionAnswers.q11}
                  handleChange={this.handleGenericCheckbox}/> 
            
                <br/>

                <Checkbox title={'Questão 12: No processo de lidar com problemas de engajamento dos meus estudantes, o uso  da ferramenta é relevante.'}
                  name={'q12'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q12}
                  value = {this.state.questionAnswers.q12}
                  handleChange={this.handleGenericCheckbox}/> 

                <br/>
                
                <Checkbox title={'Questão 13: Eu constato que usar a ferramenta é agradável.'}
                  name={'q13'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q13}
                  value = {this.state.questionAnswers.q13}
                  handleChange={this.handleGenericCheckbox}/> 

                <br/>

                <Checkbox title={'Questão 14: O processo atual de usar a  ferramenta é agradável.'}
                  name={'q14'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q14}
                  value = {this.state.questionAnswers.q14}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                <Checkbox title={'Questão 15: Eu me diverti usando a  ferramenta.'}
                  name={'q15'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q15}
                  value = {this.state.questionAnswers.q15}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                  <Checkbox title={'Questão 16: Pretendo utilizar a ferramenta nos próximos meses.'}
                  name={'q16'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q16}
                  value = {this.state.questionAnswers.q16}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>


                  <Checkbox title={'Questão 17: O uso da ferramenta é pertinente para várias situações.'}
                  name={'q17'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q17}
                  value = {this.state.questionAnswers.q17}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                  <Checkbox title={'Questão 18: Não posso completar a utilização da ferramenta se não houver ninguém por perto para me dizer o que fazer.'}
                  name={'q18'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q18}
                  value = {this.state.questionAnswers.q18}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                  <Checkbox title={'Questão 19: Não posso completar a utilização da ferramenta se alguém não me mostrar como fazer isso primeiro.'}
                  name={'q19'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q19}
                  value = {this.state.questionAnswers.q19}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                  <Checkbox title={'Questão 20: Não poderia completar a utilização da ferramenta se eu não tivesse usado ferramentas similares antes dessa atividade.'}
                  name={'q20'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q20}
                  value = {this.state.questionAnswers.q20}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                  <Checkbox title={'Questão 21: Usar a ferramenta não me assusta nada.'}
                  name={'q21'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q21}
                  value = {this.state.questionAnswers.q21}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                  <Checkbox title={'Questão 22: Trabalhar com a ferramenta me deixa nervoso.'}
                  name={'q22'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q22}
                  value = {this.state.questionAnswers.q22}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>


                  <Checkbox title={'Questão 23: Usar a ferramenta me faz sentir desconfortável.'}
                  name={'q23'}
                  options= {this.state.possibleOptions}
                  selectedOptions = {this.state.questionAnswers.q23}
                  value = {this.state.questionAnswers.q23}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                  <Checkbox title={'Questão 24: Por favor, indique de 1 a 10, a credibilidade da ferramenta apresentada:'}
                  name={'q24'}
                  options= {this.state.ratingOptions}
                  selectedOptions = {this.state.questionAnswers.q24}
                  value = {this.state.questionAnswers.q24}
                  handleChange={this.handleGenericCheckbox}/> 

                  <br/>

                <LargeTextArea
                  title={'Por favor, descreva aqui pontos negativos sobre esta versão da ferramenta.'}
                  rows={3}
                  value={this.state.questionAnswers.openQuestion1}
                  name={'openQuestion1'}
                  handleChange={this.handleTextArea}/>

                  <br/>

                  <LargeTextArea
                  title={'Por favor, descreva aqui pontos positivos sobre esta versão da ferramenta.'}
                  rows={3}
                  value={this.state.questionAnswers.openQuestion2}
                  name={'openQuestion2'}
                  handleChange={this.handleTextArea}/>

                  <br/><br/>
                  <center>
                  <Button color = "#C0B283" disabled={!this.state.formValid} onClick={() => this.redirect()}> Submeter </Button>
                  {this.state.redirect ? (<Redirect to={{pathname:'/thanks', state: this.state.user_package}}/>) : (<div></div>)}
                  </center>
            </Form>
              </div>          
        )      
    }
}
export default FinalQuestsContainer;