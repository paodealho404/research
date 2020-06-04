import React from "react";

import axios from 'axios';

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import Curriculum from '../ClassDashboard/Curriculum';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

class StudentDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      student: [],
      typeDashboard: "studentDashboard"
    }
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    const url = baseUrl + "/course/getStudentGamification/" + studentId;
    axios.get(url)
      .then(res => {
        if (res.data) {
          const data = res.data;
          this.setState({
            student: data
          })
        }
        else {
          alert("Error web service");
        }
      })
      .catch(error => {
        alert("Error server " + error);
      })
  }

  render() {
    let teacherId = localStorage.getItem('teacherId');
    let courseId = localStorage.getItem('courseId');
    let classroomId = localStorage.getItem('classroomId');
    return (
      <>
        <div className="content" style={{paddingBottom: "15px"}}>
          <Row></Row>
          <Row></Row>
          <Row> <Col><h2>Dashboard Estudante</h2></Col></Row>
          <div>
            <Row>
              <Col sm={{ size: 12 }}>
                {this.state.student.map(data => (
                  <Card key={data.level_}>
                    <br />
                    <CardTitle key={data.id} className="text-center">
                      <strong>Informação do Estudante</strong>
                    </CardTitle>
                    <CardBody>
                      <strong>Nome: </strong>{data.name}
                      <br />
                      <strong>Email: </strong>{data.email}
                      <br />
                      <strong>Pontuação: </strong>{data.currentPoints}
                      <br />
                      <strong>Nível: </strong>{data.level_}
                      <br />
                    </CardBody>
                  </Card>
                ))}
              </Col>
            </Row>
          </div>
          <Curriculum studentId={this.props.match.params.studentId} teacherId={teacherId} classroomId={classroomId} courseId={courseId} type={this.state.typeDashboard} renderDate={true} />
          <br />
        </div>
      </>
    );
  }
}

export default StudentDashboard;
