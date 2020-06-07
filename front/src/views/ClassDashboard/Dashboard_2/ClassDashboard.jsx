import React from "react";

import {
    Row,
    Col
} from "reactstrap";

import Curriculum from "../Curriculum.jsx";

class ClassDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classroomId: "",
            teacherId: "",
            courseId: ""
        }
    }

    componentDidMount()
    {
        sessionStorage.setItem('classroomId', this.props.match.params.id);
        sessionStorage.setItem('teacherId', this.props.match.params.teacherId);
        sessionStorage.setItem('courseId', this.props.match.params.courseId);
    }

    render() {
        return (
            <>
                <div className="content" style={{paddingBottom: "15px"}}>
                <Row></Row>
                <Row></Row>
                <Row> <Col><h2>Painel - Interação com os Elementos de Jogos</h2></Col></Row> 
                <Row className = "border-bottom">
                    <Col>
                        <button className="btn-link text-dark font-weight-bold border-bottom border-dark">Turma</button>
                    </Col>
                </Row>
                <Row></Row>
                <br/>
                <div>
                    <Curriculum teacherId={this.props.match.params.teacherId} classroomId = {this.props.match.params.id} courseId = {this.props.match.params.courseId} renderDate={true} DashboardID={2}/>
                </div>
                <br/>
                </div>
            </>
        );
    }
}
export default ClassDashboard;