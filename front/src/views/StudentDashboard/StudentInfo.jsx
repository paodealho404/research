import React from "react";
import { NavLink } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  ButtonGroup
} from "reactstrap";

import Resources from "../Resources.jsx";
import HelpIcon from "../../components/HelpIcon/HelpIcon.jsx"
import { PerformanceChartStudent } from "./Chart/PerformanceChartStudent/PerformanceChartStudent.jsx"

class Students extends React.Component{
  render(){
    const { courseId, classroomId, curriculumId, studentId } = this.props;
    return(  
      <React.Fragment>     
        <Row>
          <Col lg="4" md="6" sm="9">           
          </Col>
          <Col md="12">
            <Card tag = "h5">
              <CardHeader>
                <CardTitle>
                  <div className = "d-flex justify-content-end mx-3"> 
                    <div className = "mr-auto p-2">
                        Progresso de Interação do Estudante com os Recursos
                    </div>
                    <div className = "p-2">
                        <ButtonGroup>
                            <Col>
                              <HelpIcon id = "1" icon = "fa fa-info-circle" 
                              help = {
                                  "Este gráfico mostra o progresso do aluno com o passar do tempo e o impacto das missões criadas na porcentagem da interação do aluno com os recursos."
                              }/>
                            </Col>
                            <Col>
                              <HelpIcon id = "2" icon = "fa fa-exclamation-triangle" 
                              help = {
                                  "Mensagem de alerta do Sistema!"
                              }/>
                            </Col>
                        </ButtonGroup>
                    </div>  
                  </div>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div style = {{ borderTop: "0.1em solid grey", opacity: "0.3", margin: "0 0.5em 1em 0.5em" }}></div>
                  <div>
                    <PerformanceChartStudent studentId={ studentId } classroomId={ classroomId } curriculumId={ curriculumId } courseId={ courseId }/>
                  </div>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>  
        </Row>
      <Resources courseId= { courseId } curriculumId={ curriculumId } studentId={ studentId } classroomId={ classroomId }/>
      <center>
            <NavLink className="text-dark" to={{pathname:"/admin/missions/"+this.props.classroomId+"/"+this.props.teacherId+"/"+this.props.courseId}} > 
            <button type="button" className="btn btn-success" >
              Criar Missão
            </button>
            </NavLink>
      </center>                       
      </React.Fragment>          
    );
  }
}

export default Students;