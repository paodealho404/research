import React from "react";
import { Row, Col, Jumbotron, Container } from "reactstrap";
import Exams from "./StudentDashboard/Exams.jsx"
import AllResources from "./StudentDashboard/AllResources.jsx"
import Exercises from "./StudentDashboard/Exercises.jsx"

class Resources extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      classB1: "btn-link text-dark font-weight-bold border-bottom border-dark",
      classB2: "btn-link text-muted",
      classB3: "btn-link text-muted",
      stateB1: true,
      stateB2: false,
      stateB3: false,
    }
  }
  handleB1(event)
  {
    this.setState(
      {
        classB1: "btn-link text-dark font-weight-bold border-bottom border-dark",
        classB2: "btn-link text-muted",
        classB3: "btn-link text-muted",
        stateB1: true,
        stateB2: false,
        stateB3: false 
      }
    );
  }
  handleB2(event)
  {
    this.setState(
      {
        classB1: "btn-link text-muted",
        classB2: "btn-link text-dark font-weight-bold border-bottom border-dark",
        classB3: "btn-link text-muted",
        stateB1: false,
        stateB2: true,
        stateB3: false 
      }
    );
  }
  handleB3(event)
  {
    this.setState(
      {
        classB1: "btn-link text-muted",
        classB2: "btn-link text-muted",
        classB3: "btn-link text-dark font-weight-bold border-bottom border-dark",
        stateB1: false,
        stateB2: false,
        stateB3: true 
      });

    
  }
render()
{
  let component_to_render;
  if(this.state.stateB1)
  {
    component_to_render = <AllResources curriculumId={this.props.curriculumId} studentId={this.props.studentId} classroomId={this.props.classroomId} courseId={this.props.courseId}/>
  }
  if(this.state.stateB2)
  {
    component_to_render = <Exercises/>
  }
  if(this.state.stateB3)
  {
    component_to_render = <Exams curriculumId={this.props.curriculumId} studentId={this.props.studentId} classroomId={this.props.classroomId} courseId={this.props.courseId}/>
  }
  
    return(
        <Jumbotron fluid className="bg-white border rounded">
          <Container fluid>
          <Row className="border-bottom text-center">
              <Col>
                <button type="button" className = {this.state.classB1} active={this.stateB1} onClick= {() => this.handleB1()}>Recursos</button>
              </Col>
              <Col>
                <button type="button" className = {this.state.classB2} active={this.stateB2} onClick= {() => this.handleB2()}>Exercícios</button>
              </Col>
              <Col>
                <button type="button" className = {this.state.classB3} active={this.stateB3} onClick = {() => this.handleB3()}>Provas</button>
              </Col>
              </Row> 
              <div>
              <br/>
              {component_to_render}
              </div>
          </Container>
        </Jumbotron>

        );
    }
}

export default Resources;