import React from 'react';

import { Redirect } from 'react-router-dom';

import {
  Col, 
  Form,
  Button
} from 'reactstrap';

import Checkbox from "./Checkbox";
import TextArea from "./TextArea";
import Header from "./Header";
import axios from 'axios';
const baseUrl =  process.env.REACT_APP_API_URL || "http://localhost:4000/course";
class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          participant: {
            gender: '',
            age: '',
            educational_level: '',
            state: ''
          },
          redirect: false,
          age_valid: false,
          gender_valid:false,
          educational_level_valid :false,
          state_valid:false,
          formErrors: {state: '', age:'', educational_level:'', gender: ''},
          formValid: false,
          ageOptions: ['Inferior a 18 anos', '18 a 25 anos', '26 a 40 anos', '41 a 65 anos', 'Superior a 65 anos'],
          genderOptions: ['Feminino', 'Masculino', 'Outros'],
          educational_levelOptions: ['Ensino Médio', 'Ensino Técnico', 'Ensino Superior', 'Mestrado', 'Doutorado'],
        }
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleCheckBoxAge = this.handleCheckBoxAge.bind(this);
        this.handleCheckBoxGender = this.handleCheckBoxGender.bind(this);
        this.handleCheckBoxEducacationalLevel = this.handleCheckBoxEducacationalLevel.bind(this);
    }

    handleCheckBoxAge(e) {
        const value = e.target.value;
        this.setState( prevState => ({ participant : 
            {...prevState.participant, age: value
            }
          }), ()=>{ this.validateField('age', value) })
    }

    handleCheckBoxGender(e) {
        const value = e.target.value;
        this.setState( prevState => ({ participant : 
            {...prevState.participant, gender: value
            }
          }), ()=>{ this.validateField('gender', value) })
    }

    handleCheckBoxEducacationalLevel(e) {
        const value = e.target.value;
        this.setState( prevState => ({ participant : 
            {...prevState.participant, educational_level: value
            }
          }), ()=>{this.validateField('educational_level', value) })
    }

    handleTextArea(e) {
      let name = e.target.name;
      let value = e.target.value;
      this.setState(prevState => ({
        participant: {
          ...prevState.participant, [name]: value
        }
        }), ()=>{ this.validateField(name, value) });
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      //let nameValid = this.state.nameValid;
      let age_valid = this.state.age_valid;
      let gender_valid = this.state.gender_valid;
      let educational_level_valid = this.state.educational_level_valid ;
      let state_valid = this.state.state_valid;
      switch(fieldName) {
        case 'age':
          age_valid = value.length > 0;
          fieldValidationErrors.age = age_valid ? '': 'notValid';
          break;
        case 'gender':
          gender_valid = value.length > 0;
          fieldValidationErrors.gender = gender_valid ? '': 'notValid';
          break;
        case 'educational_level':
          educational_level_valid = value.length > 0;
          fieldValidationErrors.educational_level = educational_level_valid  ? '': 'notValid';
          break;
        case 'state':
          state_valid = value.length > 0;
          fieldValidationErrors.state_valid = state_valid ? '':'notValid';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      //nameValid: nameValid,
                      age_valid: age_valid,
                      educational_level_valid : educational_level_valid ,
                      state_valid: state_valid,
                      gender_valid: gender_valid
                    }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: 
        //this.state.nameValid && 
        this.state.educational_level_valid && this.state.age_valid && this.state.gender_valid && this.state.state_valid})
    }

    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
    redirect()
    {
      localStorage.setItem('participant', JSON.stringify(this.state.participant));
      let participant = JSON.parse(localStorage.getItem('participant'));
      console.log(participant);
      axios.post(baseUrl+'/createParticipant', participant)
      .then(res=>{
        console.log(res);
      })
      .catch(error=>{
        return error;
      })
      this.setState({redirect: true});
    }
    render(){
        return(
          <div>
            <Header/>
            <Col>
            <p className= " text-center font-weight-bold " style={{fontFamily: 'Calibri', fontSize: '25px', color: '#6c757d'}}> Questionário Demográfico </p> <br/> 
            <Form className="container" >
            <div className="panel panel-default">
              {/* <FormErrors formErrors={this.state.formErrors} /> */}
            </div>
            {/* <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                <TextArea
                  title={'Informe seu nome:'}
                  rows={1}
                  value={this.state.participant.name}
                  name={'name'}
                  handleChange={this.handleTextArea}/>
            </div> */}
                <Checkbox title={'Informe sua idade:'}
                  name={'age'}
                  options={this.state.ageOptions}
                  selectedOptions = {this.state.participant.age}
                  value = {this.state.participant.age}
                  handleChange={this.handleCheckBoxAge}/>  
                  <br/><br/>
                <Checkbox title={'Selecione seu gênero:'}
                  name={'gender'}
                  options={this.state.genderOptions}
                  selectedOptions = {this.state.participant.gender}
                  value = {this.state.participant.gender}
                  handleChange={this.handleCheckBoxGender}/>  
                  <br/><br/>
                <TextArea 
                  title={'Informe qual nível educacional você leciona:'}
                  rows={1}
                  name={'educational_level'}
                  // value={this.state.educational_levelOptions}
                  // selectedOptions = {this.state.participant.educational_level}
                  value = {this.state.participant.educational_level}
                  handleChange={this.handleCheckBoxEducacationalLevel}/> 
                  <br/><br/>
              <br/><br/>
              <TextArea 
                  title={'Informe seu Estado: '}
                  rows={1}
                  name={'state'}
                  // value={this.state.educational_levelOptions}
                  // selectedOptions = {this.state.participant.educational_level}
                  value = {this.state.participant.state}
                  handleChange={this.handleTextArea}/> 
                  <br/><br/>
                <Col sm={{ span: 10, offset: 5 }}>
                    <Button color="#C0B283" disabled={!this.state.formValid} onClick={() => this.redirect()}> 
                         <span className="text-white"> Próxima Etapa </span>       
                    </Button>

                    {this.state.redirect ? (<Redirect to={{ pathname:"/projectdescription"}}/>) : (<div></div>)}
                </Col>
            </Form>
            </Col>
        </div>)
    }

}

export default FormContainer;