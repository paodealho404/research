import React from "react";
import axios from 'axios';

import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

class AverageStudentsPoints extends React.Component {

    constructor(props) {
        super(props);
        this.cancelTokenSource = new axios.CancelToken.source();
        this.state = {

        }
    }

    componentDidMount() {
        const courseId = this.props.courseId;
        const curriculumId = this.props.curriculumId;
        const classroomId = this.props.classroomId;

        const url = baseUrl + "/course/getExpectedDate/" + curriculumId + "/" + courseId + "/" + classroomId;

        axios.get(url, { cancelToken: this.cancelTokenSource.token })
            .then(res => {
                if (res.data) {

                } else {
                    alert("Error web service");
                }
            })
            .catch(error => {
                //alert("Error server " + error);
                if (axios.isCancel(error)) {
                    console.log('Request canceled');
                } else {
                    console.log("Error server " + error);
                }
            })
    }

    componentWillUnmount() {
        this.cancelTokenSource.cancel();
    }

    render() {
        const { Date } = this.state;
        return (
            <Card className="card-stats">
                <CardBody>
                    <Row>
                        <Col md="3" xs="5">
                            <div className="icon-big text-center icon-warning">
                                <i className="fas fa-video" />
                            </div>
                        </Col>
                        <Col md="9" xs="5">
                            <div className="numbers">
                                <p className="card-category">Média aritmética da pontuação dos Alunos da Turma</p>
                                <div style={{ fontSize: 45 }}>
                                    <CardTitle tag="p">Média Aqui</CardTitle>
                                </div>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                </CardFooter>
            </Card>
        )
    }
}

export default AverageStudentsPoints;
