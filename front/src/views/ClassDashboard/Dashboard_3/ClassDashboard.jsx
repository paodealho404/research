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

    render() {
        return (
            <>
                <div className="content" style={{paddingBottom: "15px"}}>
                <Row></Row>
                <Row></Row>
                <Row> <Col><h2>Painel - Interação com os Recursos de Aprendizagem e Elementos de Jogos</h2></Col></Row> 
                <Row className = "border-bottom">
                    <Col>
                        <button className="btn-link text-dark font-weight-bold border-bottom border-dark">Turma</button>
                    </Col>
                </Row>
                <Row></Row>
                <br/>
                <div>
                    <Curriculum teacherId={this.props.match.params.teacherId} classroomId = {this.props.match.params.id} courseId = {this.props.match.params.courseId} renderDate={true} DashboardID={3}/>
                </div>
                <br/>
                </div>
            </>
        );
    }
}
export default ClassDashboard;