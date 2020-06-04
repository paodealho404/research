import React from "react";

import axios from 'axios';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  CardFooter
} from "reactstrap";

import Classroom from "./ClassDashboard/Classroom";

import turma_ic from '../assets/img/turma.svg';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
  
class Classes extends React.Component{
  constructor(props){
    super(props);
    this.state={
      course: [],
      teacherId: '345', 
      modalIsOpen:false, 
      courseId: ''
    };
  } 

  toggleModal(id){
    this.setState({
        modalIsOpen:!this.state.modalIsOpen,
        courseId:id
    });
  }

  componentDidMount(){
    const url1 = baseUrl+"/course/get/"+this.state.teacherId;
    axios.get(url1)
    .then(res => {
      if(res.data){
        const data = res.data;
        this.setState({ course:data });
      }else {
        alert("Erro");
      }
    })
    .catch(error => {
      alert(error)
    });
  }

      render()
      {
          return (
            <>
            <div className="content" style={{paddingBottom: "15px"}}>
            <Card>  
              <CardHeader>
                <CardTitle tag="h2">Minhas Disciplinas</CardTitle> 
              </CardHeader>
              <CardBody>
              <div >
                <Row sm = "1"> 
                {this.state.course.map(data => (
                      <Col sm = "2" key={data.name}>
                        <div className="d-flex flex-column" style={{ margin: "1em 0 0 0" }}>
                        <img src= {turma_ic} alt="turma logo" height="100" width="100" className="fas fa-users fa-4x align-self-center"/>
                        <div className="text-center align-self-center" style={{ fontSize: "1.0em" }}> 
                            <a href="#" onClick={() => this.toggleModal(data.id)} className="text-dark border-info">{data.name}</a>
                              {this.state.modalIsOpen &&  <Classroom
                                  modalIsOpen={this.state.modalIsOpen}
                                  toggleModal={this.toggleModal.bind(this)}
                                  courseId={this.state.courseId}
                                  teacherId={this.state.teacherId}
                            /> }
                        </div>
                        </div>
                      </Col>
                ))}  
                </Row>
              </div>
              </CardBody>
              <CardFooter />
            </Card> 
            </div> 
            </>
          );
      } 
  }

  export default Classes;