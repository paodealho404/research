import React from "react";
import axios from 'axios';
import { Row, Col } from "reactstrap";
import logo_succeeded from '../../assets/img/green.png';
import logo_not_succeeded from '../../assets/img/yellow.png';
import logo_waiting_interaction from '../../assets/img/grey.png';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

const TableResources = props => {
  const columns = (student, student_resource, resource) => resource.map((resource, index) => {

  const interactions = student_resource.find(element => element.resource_id === resource.resource_id)
  if(interactions){ 
    if(interactions.correctly_done.data[0]===1){  
      return(
        <React.Fragment>
            <Row className="row align-items-center">
                <Col className="text-center">
                  <h5>{resource.resource_type}</h5>
                </Col>
                <Col>
                  <h5>{resource.titleProblems}</h5>
                </Col>
                <Col className="text-center">
                  <img src= {logo_succeeded} alt="resource logo" height="40" width="40" className="fas fa-users fa-4x align-self-center"/>
                </Col>
            </Row>
        </React.Fragment>)
    }else{
      return(
        <React.Fragment>
            <Row className="row align-items-center">
              <Col className="text-center">
                <h5>{resource.resource_type}</h5>
              </Col>
              <Col>
                <h5>{resource.titleProblems}</h5>
              </Col>
              <Col className="text-center">
                <img src= {logo_not_succeeded} alt="resource logo" height="40" width="40" className="fas fa-users fa-4x align-self-center"/>
              </Col>
            </Row>
        </React.Fragment>)
    }
  } else {
    if(resource.resource_type !== 'assessment'){
      return(
        <React.Fragment>
            <Row className="row align-items-center">
              <Col className="text-center">
                <h5>{resource.resource_type}</h5>
              </Col>
              <Col>
                <h5>{resource.titleResources}</h5>
              </Col>
              <Col  className="text-center">
                <img src= {logo_waiting_interaction} alt="resource logo" height="40" width="40" className="fas fa-users fa-4x align-self-center"/>
              </Col>
            </Row>
        </React.Fragment>)
    } 
  }
  });

  const rows = props =>{
      return(
        columns(props.student, props.students_resources, props.resources) 
      );
  };

  return (    
       rows(props)
  );
}

class AllResources extends React.Component{    
    constructor(props){
            super(props);
            this.state = {
                students: [],
                students_resources: [],
                resources: [],
                problem_resources: []
            };
    }

    componentDidMount() {
      this.fetchData(this.props.curriculumId);
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.curriculumId !== prevProps.curriculumId) {
          this.fetchData(this.props.curriculumId);
      }
    }

    fetchData(curriculumId) {
      const classroomId = this.props.classroomId;
      const studentId = this.props.studentId;
      const url_students_resources = baseUrl+"/course/getStudentStatusProblems/"+studentId+"/"+classroomId+"/"+curriculumId;
      const url_resources =  baseUrl+"/course/getResourcesByCurriculum/"+curriculumId;
      axios.all([
          axios.get(url_students_resources),
          axios.get(url_resources)
      ])
      .then(axios.spread((students_resources, resources)=>{
          if (students_resources.data && resources.data) {
              let students_resources_data = students_resources.data;
              let resources_data = resources.data;
              this.setState({
                  students_resources: students_resources_data,
                  resources: resources_data
              });
      } else {
          alert("Error web service");
      }
      }))
      .catch(error=>{
          alert("Error server "+error);
      })
    }

    render(){
        return (
          <React.Fragment>
            <Row>
              <Col className="text-center font-weight-bold"><img src= {logo_succeeded} alt="resource logo" height="20" width="20" className="fas fa-users fa-4x align-self-center"/>&nbsp; Interagiu com sucesso com o recurso</Col>
              <Col className="text-center font-weight-bold"><img src= {logo_not_succeeded} alt="resource logo" height="20" width="20" className="fas fa-users fa-4x align-self-center"/>&nbsp; Não interagiu com sucesso com o recurso</Col>
              <Col className="text-center font-weight-bold"><img src= {logo_waiting_interaction} alt="resource logo" height="20" width="20" className="fas fa-users fa-4x align-self-center"/>&nbsp; Ainda não interagiu com o recurso</Col>
            </Row>
            <Row> 
              <Col md ="4" className="text-center">
                <h4>
                  <div className="font-weight-bold">Tipo</div>
                </h4>
              </Col>
              <Col sm="4" className="text-center">
                <h4>
                  <div className="font-weight-bold">Recurso</div>
                </h4>
              </Col>
              <Col className="text-center" sm={{size: 2, offset: 1}}>
                <h4>
                  <div className="font-weight-bold">Estado</div>
                </h4>
              </Col>
            </Row>
            <TableResources student={ this.props.studentId} resources={ this.state.resources } students_resources={ this.state.students_resources } />
          </React.Fragment>
        );
    }
}
export default AllResources;