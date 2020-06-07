import React from "react";
import {Link} from "react-router-dom";

import axios from 'axios';

import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

class Classroom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          classroom:[]
        }
    }
    
    componentDidMount(){
        const teacherId = this.props.teacherId;
        const courseId = this.props.courseId;
        const url = baseUrl+"/course/getClassroom/"+teacherId+"/"+courseId;
        axios.get(url)
        .then(res=>{
          if (res.data) {
            const data = res.data;
            this.setState({
             classroom:data
            })
          }
          else {
            alert("Error web service");
          }
        })
        .catch(error=>{
          alert("Error server "+error);
        })
    }

    render() { 
      let participant_info = JSON.parse(sessionStorage.getItem('participant'));
      return (
        <div>
          <Modal isOpen={this.props.modalIsOpen} toggle={this.props.toggleModal.bind(this)} >
            <ModalHeader >Selecione uma Turma:</ModalHeader>
              <ModalBody>
                <Col>
                  {this.state.classroom.map(data => (
                    <Card key={data.id}  style={{width: '10rem'}} > 
                    <CardBody>
                      <CardTitle > 
                        <Link to={{pathname:"/admin/classDashboard_" + participant_info.dashboard_sequence[0] + "/" + data.id + "/" + this.props.teacherId + "/" + this.props.courseId}}>{data.name}</Link> 
                      </CardTitle>                      
                    </CardBody>                                     
                    </Card>
                  ))}
                </Col>
              </ModalBody>
          </Modal> 
        </div>
      )
    }
}

export default Classroom;