import React from "react";
import {NavLink} from "react-router-dom";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

class Students extends React.Component{

  constructor(props){
    super(props);
    this.state={
      students: []
    };
  } 

  componentDidMount(){
    let courseId = localStorage.getItem('courseId');
    let classroomId = localStorage.getItem('classroomId');
    const url = baseUrl+"/course/getStudents/"+courseId+"/"+classroomId;
    axios.get(url)
    .then(res=>{
      if (res.data) {
        const data = res.data;
        this.setState({
          students:data
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

  render(){
    return( 
      <Card>  
        <CardHeader>
          <CardTitle tag="h5">Estudantes</CardTitle>
        </CardHeader>
        <br/>
        <div  className="overflow-auto" style={{ maxHeight: "22em" }}>
        <Row> 
          {this.state.students.map(data => ( 
            <Col sm="2" key={ data.id }> 
              <div className="d-flex flex-column" style={{ margin: "1em 0 0 0" }}>
                <i className="far fa-user-circle fa-3x align-self-center"/>
                <div className="align-self-center" style={{ fontSize: "1.0em" }}> 
                  <NavLink to={{ 
                    pathname:"/admin/studentDashboard/"+data.id
                  }} className="text-dark border-info"> {data.name}
                  </NavLink>  
                </div>
              </div>
            </Col>
          ))}
        </Row>
        </div>
        <CardFooter> 
        </CardFooter>
      </Card>   
    );
  }
}

export default Students;