import React, { Component } from "react";
import Validator from '../Validator';
import axios from 'axios';
import PopUp from '../PopUp';

import {
    Checkbox,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@material-ui/core';

import HelpIcon from "../../components/HelpIcon/HelpIcon.jsx";

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter
} from "reactstrap";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

class TableMissions extends Component {
    constructor(props) {
        super(props);

        this.validator = new Validator([
            {
                campo: 'name_missions',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Informe um nome válido para a missão'
            },
            {
                campo: 'initial_date',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Defina uma data inicial para a missão'
            },
            {
                campo: 'ending_date',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Defina uma data final para a missão'
            }
        ]);

        this.stateInitial = {
            students: [],
            students_resources: [],
            resources: [],
            array_selected: [],
            name_missions: '',
            initial_date: '',
            ending_date: '',
            experience: '',
            grade: '',
            experience_bool: true,
            grade_bool: false,
            validacao: this.validator.valido(),
        }

        this.state = this.stateInitial;

        this.TableHead = this.TableHead.bind(this);
        this.TableBody = this.TableBody.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, row, col) {
        var array = this.state.array_selected;

        array[row][col] = event.target.checked;

        this.setState({
            array_selected: array
        });
    }   

    handleSubmit(event) {
        event.preventDefault();

        var mission_name = this.name_mission.value;
        var start_date = this.start_date.value;
        var end_date = this.end_date.value;
        var experience = this.state.experience_bool  ? this.experience.value : 0;
        var grade = this.state.grade_bool  ? this.grade.value : 0;

        var Submit = false;
    
        this.setState({
            name_missions: mission_name,
            initial_date: start_date,
            ending_date: end_date,
            experience: experience,
            grade: grade
        }, () => {
            const validacao = this.validator.validatingForm(this.state);

            if(!validacao.isValid){
                const {name_missions, initial_date, ending_date} = validacao;
                const campos = [name_missions, initial_date, ending_date];
                // console.log(campos);

                let camposInvalidos = campos.filter(elem => {
                    return elem.isInvalid;
                });

                camposInvalidos.forEach(campo => {
                    // console.log(campo.message);
                    PopUp.showMessage("error", campo.message);
                });
            }

            start_date = new Date(start_date.replace(/-/g, '/'));
            end_date = new Date(end_date.replace(/-/g, '/'));

            if(mission_name && this.have_selected() && (experience || grade) && (start_date.getTime() < end_date.getTime())){
                Submit = true;
            }

            if(Submit) {
                // console.log(this.state);
                
                PopUp.showMessage("success", "Missão cadastrada com sucesso");
            } else {
                if(!this.state.name_missions){
                    PopUp.showMessage("error", "Informe um nome válido para a missão");
                }

                if(!this.state.experience || !this.state.grade){
                    PopUp.showMessage("error", "Determine pelo menos uma recompensa aos estudantes que completarem a missão com sucesso");
                }

                if(!this.have_selected()){
                    PopUp.showMessage("error", "Determine pelo menos um estudante e um recurso para compor a missão");
                }
        
                if(start_date.getTime() >= end_date.getTime()){
                    // console.log("Data inicial está depois da data final");
                    PopUp.showMessage("error", "A data final deve ser posterior a data inicial definida");
                }
                //Se ocorrer algum erro.
            }
        });
    }

    select_allstudents(event) {
        var array = this.state.array_selected;

        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array[i].length; j++){
                if(array[i][j] != null)
                    array[i][j] = event.target.checked;
            }
        }

        this.setState({
            array_selected: array
        });
    }

    select_per_resource(event, col) {
        var array = this.state.array_selected;

        for(let i = 0; i < array.length; i++){
            if(array[i][col] != null)
                array[i][col] = event.target.checked;
        }

        this.setState({
            array_selected: array
        });
    }

    select_per_students(event, row) {
        var array = this.state.array_selected;

        for(let j = 0; j < array[row].length; j++){
            if(array[row][j] != null)
                array[row][j] = event.target.checked;
        }

        this.setState({
            array_selected: array
        });
    }

    have_selected() {
        var array = this.state.array_selected;

        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array[i].length; j++){
                if(array[i][j] === true)
                    return true;
            }
        }

        return false;
    }

    check_row_and_col(row, col) {
        var array = this.state.array_selected;
        var many_enables = 0;

        if(row === -1){
            for(let i = 0; i < array.length; i++){
                if(array[i][col] === false)
                    return false;
                else if(array[i][col] === true)
                    many_enables += 1;
            }
        } else if (col === -1) {
            for(let j = 0; j < array[row].length; j++){
                if(array[row][j] === false)
                    return false;
                else if(array[row][j] === true)
                    many_enables += 1;
            }
        }

        if(many_enables > 0)
            return true;
        else
            return false;
    }

    TableHead() {
        const columns = this.state.resources.map((resource, index) => {
            if (index === 0) {
                return (
                    <TableCell scope="col" key={"table_head_element-" + index} style={{ textAlign: "center", borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                        {resource}
                        <br/>
                        <Checkbox id="allStudents" onChange={event => this.select_allstudents(event)} color="default"/>
                    </TableCell>
                );
            } else {
                return (
                    <TableCell scope="col" key={"table_head_element-" + index} style={{ textAlign: "center", borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                        {resource.resource_type} {resource.resource_id}
                        <br/>
                        <Checkbox id={"resourceOnMission-" + index} checked={this.check_row_and_col(-1, index - 1)} onChange={event => this.select_per_resource(event, index - 1)} color="default"/>
                    </TableCell>
                );
            }
        });
    
        return (
            <TableHead key="table_head"><TableRow>{columns}</TableRow></TableHead>
        );
    }
    
    TableBody() {
        const columns = (student, resource, index_row) => resource.map((resource, index_col) => {
            if (index_col === 0) {
                return (<TableCell scope="row" style={{ textAlign: "center" }} key={"table_body_element-" + index_col}>
                    <div className="d-flex flex-column" style={{ margin: "1em 0 0 0" }}>
                        <i className="far fa-user-circle fa-2x align-self-center"/>
                        <div className="align-self-center" style={{ fontSize: "0.85em", marginLeft: 3 }}>
                            {student.name}
                            <Checkbox checked={this.check_row_and_col(index_row, -1)} onChange={event => this.select_per_students(event, index_row)} color="default" style={{ padding: 3 }}/>
                        </div>
                    </div>
                </TableCell>);
            } else {
                let current = this.state.array_selected[index_row][index_col - 1];
    
                if (current != null) {
                    return (<TableCell style={{ textAlign: "center" }} key={"table_body_element-" + index_col}>
                        <div className="d-flex flex-column" style={{ margin: "1em 0 0 0" }}>
                            <i className="fas fa-circle fa-2x" style={{ color: "#34495E" }}></i>
                            <div className="align-self-center" style={{ fontSize: "0.85em" }}>
                                <Checkbox checked={this.state.array_selected[index_row][index_col - 1]} onChange={event => this.handleChange(event, index_row, index_col - 1)} color="default" style={{ padding: 3 }}/>
                            </div>
                        </div>
                    </TableCell>);
                } else {
                    return (<TableCell style={{ textAlign: "center" }} key={"table_body_element-" + index_col}>
                        <div className="d-flex flex-column" style={{ margin: "1em 0 0 0" }}>
                            <i className="fas fa-circle fa-2x" style={{ color: "#52bf90" }}></i>
                        </div>
                    </TableCell>);
                }
            }
        });
    
        const rows = this.state.students.map((student, index) => {
            return (
                <TableRow key={"table_body-" + index}>{columns(student, this.state.resources, index)}</TableRow>
            );
        });

        return (
            <TableBody>{rows}</TableBody>
        );
    }

    fetchData(curriculumId) {
        const courseId = this.props.courseId;
        const classroomId = this.props.classroomId;

        const url_students = baseUrl + "/course/getStudents/" + courseId + "/" + classroomId;
        const url_students_resources = baseUrl + "/course/getStudentsInteractionResources/" + curriculumId + "/" + classroomId;
        const url_resources = baseUrl + "/course/getResourcesByCurriculum/" + curriculumId;

        axios.all([
            axios.get(url_students),
            axios.get(url_students_resources),
            axios.get(url_resources)
        ])
            .then(axios.spread((students, students_resources, resources) => {
                if (students.data && students_resources.data && resources.data) {
                    var students_data = students.data;
                    var students_resources_data = students_resources.data;
                    var resources_data = resources.data;
                    var array_selection = [];

                    for(let i = 0; i < students_data.length; i++){
                        array_selection[i] = new Array(resources_data.length);
                        for(let j = 0; j < resources_data.length; j++){
                            let current = students_resources_data.find(element => (element.name === students_data[i].name) && (element.resource_id === resources_data[j].resource_id));
                            
                            if(current){
                                array_selection[i][j] = null;
                            } else {
                                array_selection[i][j] = false;
                            }
                        }
                    }

                    resources_data.unshift("Alunos");

                    //console.log(array_selection);

                    this.setState({
                        students: students_data,
                        students_resources: students_resources_data,
                        resources: resources_data,
                        array_selected: array_selection
                    });
                } else {
                    alert("Error web service");
                }
            }))
            .catch(error => {
                alert("Error server " + error);
            })
    }

    componentDidMount() {
        this.fetchData(this.props.curriculumId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.curriculumId !== prevProps.curriculumId) {
            this.fetchData(this.props.curriculumId);
        }
    }

    render() {
        const { experience_bool, grade_bool } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm="6">
                            <label htmlFor="inputMissionName" className="">Nome da Missão</label>
                            <input name="inputMission" className="form-control " type="text" id="inputMission" ref={x => this.name_mission = x} style={{ height: "calc(1.5em + 0.75rem + 2px)" }} />
                        </Col>
                        <Col sm="3">
                            <label htmlFor="inputMissionInitialDate">Início da Missão</label>
                            <input name="inputMissionInitialDate" className="form-control" type="date" id="inputMissionInitialDate" ref={x => this.start_date = x} />
                        </Col>
                        <Col sm="3">
                            <label htmlFor="inputMissionEndDate">Final da Missão</label>
                            <input name="inputMissionEndingDate" className="form-control" type="date" id="inputMissionEndingDate" ref={x => this.end_date = x} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h5">
                                        <div className="d-flex justify-content-start">
                                            <div style={{ margin: "0 1em 0 0.75em" }}>
                                                <div>Seleção de Alunos e Recursos</div>
                                            </div>
                                            <div>
                                                <HelpIcon id="1" icon="fa fa-info-circle"
                                                    help={
                                                        <div>
                                                            Através desta tabela
                                                            é possível selecionar
                                                            quais recursos irão compor
                                                            esta missão e quais serão
                                                            os alunos alvos da missão.
                                                        </div>
                                                    }/>
                                            </div>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="overflow-auto" style={{ maxHeight: "28em" }}>
                                        <Table aria-label="simple table">
                                            <this.TableHead/>
                                            <this.TableBody/>
                                        </Table>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <div className="form-row">
                        <div className="custom-control custom-radio form-group col-md-6">
                            <Checkbox id="XP" name="student-xp" checked={experience_bool} onChange={event => this.setState({ experience_bool: event.target.checked, grade_bool: grade_bool ? (grade_bool) : (!event.target.checked) })} color="default"/>
                            <label className="custom-label" htmlFor="customControlValidation1" style={{ verticalAlign: "-webkit-baseline-middle" }}>Pontuação em XP: </label>
                            <input type="number" min="0" className="form-control" id="ExperienceValue" disabled={!experience_bool} ref={x => this.experience = x}/>
                        </div>

                        <div className="custom-control custom-radio form-group col-md-6">
                            <Checkbox id="Grade" name="student-grade" checked={grade_bool} onChange={event => this.setState({ experience_bool: experience_bool ? (experience_bool) : (!event.target.checked), grade_bool: event.target.checked })} color="default"/>
                            <label className="custom-label" htmlFor="customControlValidation2" style={{ verticalAlign: "-webkit-baseline-middle" }}>Pontuação na nota: </label>
                            <input type="number" min="0" className="form-control" id="GradeValue" disabled={!grade_bool} ref={x => this.grade = x}/>
                        </div>
                    </div>
                    <br />
                    <div className="col text-center">
                        <button className="btn btn-success text-align center" id="submit" type="submit">Criar Missão</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TableMissions;