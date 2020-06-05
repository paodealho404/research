import React from "react";

import axios from 'axios';

import {
    Col,
    FormGroup,
    Label
} from "reactstrap";

import Select from 'react-select';
import ClassInfo from './ClassInfo';
//import StudentInfo from '../StudentDashboard/StudentInfo.jsx';
//import TableMissions from '../Missions/TableMissions';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

const styleSelect = {
    option: (styles, { data, isDisabled, isFocused, isSelected  }) => {
    return {
        ...styles,
        
        backgroundColor: isDisabled
            ? null
            : isSelected
            ? data.selected
            : isFocused
            ? data.focus
            : data.color,

        ':active': {
            ...styles[':active'],
                backgroundColor: !isDisabled && (isSelected ? data.color : data.focus),
            },
        };
    }
};

class Curriculum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curriculum: [],
            selectedOption: null,
            date: ''
        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });

        // console.log(`Option selected:`, selectedOption);
    };

    componentDidMount() {
        const courseId = this.props.courseId;
        const classroomId = this.props.classroomId;

        const url = baseUrl + "/course/getCurriculum/" + courseId + "/" + classroomId;

        axios.get(url).then(res => {
            if (res.data) {
                const data = res.data;

                //var date = new Date().getDate();
                //var month = new Date().getMonth() + 1;

                for (let i = 0; i < data.length; i++) {
                    if(data[i].name === "Dinâmicas"){
                        data[i] = { ...data[i], color: "#FBAAAA", selected: "#FBAAAA", focus: "#FBAAAA" }
                    } else {
                        data[i] = { ...data[i], color: "WHITE", selected: "#2684FF", focus: "#B2D4FF" }
                    }
                }

                this.setState({
                    curriculum: data,
                    //date: date + '/' + month
                });
            } else {
                alert("Error web service");
            }
        })
        .catch(error => {
            alert("Error server " + error);
        })
    }

    render() {
        const { selectedOption, curriculum } = this.state;
        const { classroomId, courseId, teacherId, /* studentId, type, */ renderDate } = this.props;
        return (
            <div>
                <FormGroup>
                    <Label className="d-flex justify-content-between" for="exampleSelect" style={{ alignItems: "center" }}>
                        <div>
                            Selecione um assunto:
                        </div>
                        {renderDate ? (
                            <div style={{ fontSize: "20px" }}>
                                Data atual: 23/11
                                {/*"Data atual: " + date */}
                            </div>
                        ) : (
                            null
                        )}
                    </Label>
                    <Col sm={{ size: 5 }} style={{ padding: 0 }}>
                        <Select
                            placeholder="--"
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={curriculum.map(data => ({ label: data.name, value: data.id, color: data.color, selected: data.selected, focus: data.focus }))}
                            styles={styleSelect}
                        />
                    </Col>
                </FormGroup>
                {(() => {
                    if (selectedOption /* && type === "classDashboard" */) {
                        return <ClassInfo key={selectedOption.value} classroomId={classroomId} courseId={courseId} teacherId={teacherId} curriculumId={selectedOption.value} optionSelected={selectedOption.label} />;
                    }/* if (selectedOption && type === "studentDashboard") {
                        return <StudentInfo studentId={studentId} classroomId={classroomId} courseId={courseId} teacherId={teacherId} curriculumId={selectedOption.value} />;
                    } if (selectedOption && type === "mission") {
                        return <TableMissions classroomId={classroomId} courseId={courseId} teacherId={teacherId} curriculumId={selectedOption.value} />;
                    } */
                })()}
            </div>
        )
    }
}

export default Curriculum;