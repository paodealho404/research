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

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          newUser: {
            //name:'',
            age: '',
            gender: '',
            educationalLevel: '',
            studyDomain: '',
          },
          redirect: false,
          //nameValid:false,
          ageValid:false,
          genderValid:false,
          educationalLevelValid:false,
          studyDomainValid:false,
          formErrors: {name: '', studyDomain: '', age:'', educationalLevel:'', gender: ''},
          formValid: false,
          ageOptions: ['Inferior a 18 anos', '18 a 25 anos', '26 a 40 anos', '41 a 65 anos', 'Superior a 65 anos'],
          genderOptions: ['Feminino', 'Masculino', 'Outros'],
          educationalLevelOptions: ['Ensino Médio', 'Ensino Técnico', 'Ensino Superior', 'Mestrado', 'Doutorado'],
        }
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleCheckBoxAge = this.handleCheckBoxAge.bind(this);
        this.handleCheckBoxGender = this.handleCheckBoxGender.bind(this);
        this.handleCheckBoxEducacationalLevel = this.handleCheckBoxEducacationalLevel.bind(this);
    }

    handleCheckBoxAge(e) {
        const value = e.target.value;
        this.setState( prevState => ({ newUser : 
            {...prevState.newUser, age: value
            }
          }), ()=>{ this.validateField('age', value) })
    }

    handleCheckBoxGender(e) {
        const value = e.target.value;
        this.setState( prevState => ({ newUser : 
            {...prevState.newUser, gender: value
            }
          }), ()=>{ this.validateField('gender', value) })
    }

    handleCheckBoxEducacationalLevel(e) {
        const value = e.target.value;
        this.setState( prevState => ({ newUser : 
            {...prevState.newUser, educationalLevel: value
            }
          }), ()=>{this.validateField('educationalLevel', value) })
    }

    handleTextArea(e) {
      let name = e.target.name;
      let value = e.target.value;
      this.setState(prevState => ({
        newUser: {
          ...prevState.newUser, [name]: value
        }
        }), ()=>{ this.validateField(name, value) });
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      //let nameValid = this.state.nameValid;
      let studyDomainValid = this.state.studyDomainValid;
      let ageValid = this.state.ageValid;
      let genderValid = this.state.genderValid;
      let educationalLevelValid = this.state.educationalLevelValid;

      switch(fieldName) {
        // case 'name':
        //   nameValid = value.length > 0;
        //   fieldValidationErrors.name = nameValid ? '' : 'notValid';
        //   break;
        case 'studyDomain':
          studyDomainValid = value.length > 0;
          fieldValidationErrors.studyDomain = studyDomainValid ? '': 'notValid';
          break;
        case 'age':
          ageValid = value.length > 0;
          fieldValidationErrors.age = ageValid ? '': 'notValid';
          break;
        case 'gender':
          genderValid = value.length > 0;
          fieldValidationErrors.gender = genderValid ? '': 'notValid';
          break;
        case 'educationalLevel':
          educationalLevelValid = value.length > 0;
          fieldValidationErrors.educationalLevel = educationalLevelValid ? '': 'notValid';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      //nameValid: nameValid,
                      studyDomainValid: studyDomainValid,
                      ageValid: ageValid,
                      educationalLevelValid: educationalLevelValid,
                      genderValid: genderValid
                    }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: 
        //this.state.nameValid && 
        this.state.studyDomainValid && this.state.educationalLevelValid && this.state.ageValid && this.state.genderValid});
    }

    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
    redirect()
    {
      localStorage.setItem('user', JSON.stringify(this.state.newUser));
      // localStorage.setItem('teacherName', this.state.newUser.name);
      // localStorage.setItem('teacherGender', this.state.newUser.gender);
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
                  value={this.state.newUser.name}
                  name={'name'}
                  handleChange={this.handleTextArea}/>
            </div> */}
                <Checkbox title={'Informe sua idade:'}
                  name={'age'}
                  options={this.state.ageOptions}
                  selectedOptions = {this.state.newUser.age}
                  value = {this.state.newUser.age}
                  handleChange={this.handleCheckBoxAge}/>  
                  <br/><br/>
                <Checkbox title={'Selecione seu gênero:'}
                  name={'gender'}
                  options={this.state.genderOptions}
                  selectedOptions = {this.state.newUser.gender}
                  value = {this.state.newUser.gender}
                  handleChange={this.handleCheckBoxGender}/>  
                  <br/><br/>
                <TextArea 
                  title={'Informe qual nível educacional você leciona:'}
                  rows={1}
                  name={'educationalLevel'}
                  // value={this.state.educationalLevelOptions}
                  // selectedOptions = {this.state.newUser.educationalLevel}
                  value = {this.state.newUser.educationalLevel}
                  handleChange={this.handleCheckBoxEducacationalLevel}/> 
                  <br/><br/>
              <div className={`form-group ${this.errorClass(this.state.formErrors.studyDomain)}`}>
                <TextArea
                  title={'Informe qual área de domínio você leciona:'}
                  rows={1}
                  value={this.state.newUser.studyDomain}
                  name={'studyDomain'}
                  handleChange={this.handleTextArea}/>
              </div>
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