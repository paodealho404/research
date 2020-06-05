import React from 'react';
import axios from 'axios';
import Header from "./Header";

const baseUrl =  process.env.REACT_APP_API_URL+"/course/createParticipant/" || "http://localhost:4000"+"/course/createParticipant/";

class Thanks extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            age:'',
            educationalLevel:'',
            gender:'',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
            q11: '',
            q12: '',
            q13: '',
            q14: '',
            q15: '',
            q16: '',
            q17: '',
            q18: '',
            q19: '',
            q20: '',
            q21: '',
            q22: '',
            q23: '',
            q24: '',
            openQuestion1: '',
            openQuestion2: '',
        }
    }
    componentDidMount()
    {
        let user = JSON.parse(localStorage.getItem('finalpackage'));
        let name = user.name;
        let gender = user.gender;
        let educationalLevel = user.educationalLevel;
        let studyDomain = user.studyDomain;
        let age = user.age;
        let Q1 = user.q1.toString();
        let Q2 = user.q2.toString();
        let Q3 = user.q3.toString();
        let Q4 = user.q4.toString();
        let Q5 = user.q5.toString();
        let Q6 = user.q6.toString();
        let Q7 = user.q7.toString();
        let Q8 = user.q8.toString();
        let Q9 = user.q9.toString();
        let Q10 = user.q10.toString();
        let Q11 = user.q11.toString();
        let Q12 = user.q12.toString();
        let Q13 = user.q13.toString();
        let Q14 = user.q14.toString();
        let Q15 = user.q15.toString();
        let Q16 = user.q16.toString();
        let Q17 = user.q17.toString();
        let Q18 = user.q18.toString();
        let Q19 = user.q19.toString();
        let Q20 = user.q20.toString();
        let Q21 = user.q21.toString();
        let Q22 = user.q22.toString();
        let Q23 = user.q23.toString();
        let Q24 = user.q24.toString();
        let openQuestion1 = user.openQuestion1.toString();
        let openQuestion2 = user.openQuestion2.toString();
        let participant = {
            name, age, gender, educationalLevel, studyDomain, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, openQuestion1, openQuestion2, Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q24
        }
        // console.log(participant);
        axios.post(baseUrl, participant).then(res => {
            // console.log(res);
            let resp = res.data;
            if(resp.erro === 0){
              console.log("Ocorreu um erro inesperado");
            }
          }).catch(error => console.log(error));
    }

    render(){
        return(
            <div>
                <Header/>
                <center>
                    <p style={{color: "#000000", fontSize: '22px'}}>Muito obrigada pela sua participação!</p>
                </center>
            </div>
        )
    }

}

export default Thanks;