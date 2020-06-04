import React, { Component } from "react";
import {
    Row,
    Col,
} from "reactstrap";
import Curriculum from '../ClassDashboard/Curriculum';

class Missions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curriculum: [],
            selectedOption: null,
            typeDashboard: "mission"
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="content" style={{paddingBottom: "15px"}}>
                    <Row>
                        <Col>
                            <h2 style={{ margin: "0.5em 0 0 0" }}>Criar Missão</h2>
                        </Col>
                    </Row>
                    <br />
                    <Curriculum classroomId={this.props.match.params.id} courseId={this.props.match.params.courseId} teacherId={this.props.match.params.teacherId} type={this.state.typeDashboard} renderDate={false} />
                </div>
            </React.Fragment>
        );
    }
}

export default Missions;