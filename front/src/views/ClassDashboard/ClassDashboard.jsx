import React from "react";

import {
    Row,
    Col
} from "reactstrap";

import Curriculum from "./Curriculum.jsx";
//import Students from "../StudentDashboard/Students.jsx";

class ClassDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classroomId: "",
            teacherId: "",
            courseId: "",
            /* isSelected: false,
            typeDashboard: "classDashboard",
            colorB1: "btn-link text-dark font-weight-bold border-bottom border-dark",
            colorB2: "btn-link text-muted" */
        }
        /* this.handleB1 = this.handleB1.bind(this);
        this.handleB2 = this.handleB2.bind(this); */
    }

    /* handleB1(event) {

        this.setState({
            colorB1: "btn-link text-dark font-weight-bold border-bottom border-dark",
            colorB2: " btn-link text-muted",
            isSelected: false,
            
        });

    }
    handleB2(event) {
        if (this.state.isSelected === false) {
            this.setState({
                colorB2: "btn-link text-dark font-weight-bold border-bottom border-dark",
                colorB1: "btn-link text-muted",
                isSelected: true,
            });
        }

    } */

    componentDidMount()
    {
        localStorage.setItem('classroomId', this.props.match.params.id);
        localStorage.setItem('teacherId', this.props.match.params.teacherId);
        localStorage.setItem('courseId', this.props.match.params.courseId);
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
                        <button /*className = {this.state.colorB1}*/ className="btn-link text-dark font-weight-bold border-bottom border-dark">Turma</button>
                        {/* <button className = {this.state.colorB2} onClick= {() => this.handleB2() }>Estudantes</button> */}
                    </Col>
                </Row>
                <Row></Row>
                <br/>
                <div>
                    {/*this.state.isSelected ? (<Students teacherId={this.props.match.params.teacherId} classroomId = {this.props.match.params.id} courseId = {this.props.match.params.courseId}/>) : (<Curriculum teacherId={this.props.match.params.teacherId} classroomId = {this.props.match.params.id} courseId = {this.props.match.params.courseId} type={this.state.typeDashboard} renderDate={true}/>)*/}
                    <Curriculum teacherId={this.props.match.params.teacherId} classroomId = {this.props.match.params.id} courseId = {this.props.match.params.courseId} renderDate={true}/>
                </div>
                <br/>
                </div>
            </>
        );
    }
}
export default ClassDashboard;