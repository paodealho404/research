import React from "react";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import axios from 'axios';

import { Col } from "reactstrap";

const baseUrl = process.env.REACT_APP_API_URL  || "http://localhost:4000";

/* 
    * Component responsible for updating and rendering Student Interaction Progress with Resources 
    *
    * @version 0.1
*/
class PerformanceChartStudent extends React.Component {
    // construtor(props) to use this.state where the chart is built using Highcharts
    constructor(props) {
        super(props);
        this.state = {
            // Chart Settings
            chartOptions: {
                chart: {
                    type: "areaspline"
                },
                title: {
                    text: ""
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    tickInterval: 25,
                    title: {
                        text: ""
                        //'Média das Porcentages de Interação do Estudante com os Recursos do Assunto',
                    },
                    labels: {
                        formatter: function () {
                            return this.value + "%";
                        }
                    }
                },
                tooltip: {
                    shared: false,
                    formatter: function (tooltip) {
                        if (
                            this.series.name === "Período previsto para o domínio desse assunto"
                        ) {
                            return (
                                "<b>" +
                                "<br>" +
                                '<span style="color:{series.color}">' +
                                this.series.name +
                                "</span> <b>" +
                                "</b>" +
                                "<br/>"
                            );
                        } else {
                            return (
                                "<b>" +
                                "<br>" +
                                '<span style="color:{series.color}">' +
                                this.series.name +
                                "</span>: <b>" +
                                this.point.y +
                                "</b>" +
                                "%" +
                                "<br/>"
                            );
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false
                        }
                    },
                    column: {
                        stacking: "percent",
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    line: {
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                series: [
                    {
                        name: "Porcentagem mínima necessária para avançar para o próximo assunto",
                        lineWidth: 3,
                        color: "#52bf90",
                        //dashStyle: 'ShortDashDot',
                        data: []
                    },
                    {
                        name: "Porcentagem atual de interação do aluno",
                        dataLabels: {
                            enabled: true,
                            format: "{y}%"
                        },
                        lineWidth: 3,
                        data: [],
                        color: "#273746"
                    },
                    {
                        name: "Período previsto para o domínio desse assunto",
                        data: [],
                        lineWidth: 7,
                        color: "#ffdc73"
                    }
                ]
            },
            Render: true
        }
    }

    /** @param start: Chart start date */
    /** @param end: Chart end date */
    /** @param startExpectedDate: Beginning of expected date for student to master a subject */
    /** @param endExpectedDate: End of expected date for student to master a subject */
    /** @param cumulativeAvg_Student: Array with days when the student interacted with the resources of a subject */
    /** @return returns a array with three sub-arrays, 
     * where the first is the text below the graph with the days and month, 
     * the second is the predicted period for the subject domain, 
     * and the last is the graph itself with the percentages of each day. */
    getDateArray(start, end, startExpectedDate, endExpectedDate, cumulativeAvg_Student) {
        // Arrays that will be returned
        var dateArray = [], expectedArray = [], cumulativeArray_Student = [];
        // Loop Variables
        var currentDate = start, position_cumulative = 0;

        // Interaction with each day of the date range
        while (currentDate <= end) {
            // Pushes a string into each array in day / month format
            dateArray.push({ string: currentDate.getDate() + "/" + (currentDate.getMonth() + 1), date: new Date(currentDate) });

            // Check if array is empty in position "i"
            if (cumulativeAvg_Student[position_cumulative] && cumulativeAvg_Student.length > 0) {
                // Creates a date variable for the last interaction day
                let lastdate = new Date(cumulativeAvg_Student[cumulativeAvg_Student.length - 1].DATE.replace(/-/g, '/'));
                // Creates a date variable for the current interaction day
                let currentDateCumulative = new Date(cumulativeAvg_Student[position_cumulative].DATE.replace(/-/g, '/'))

                // If interacted on the current day, then add the percentage in the array to be returned: cumulativeArray_Student
                if (currentDateCumulative.getTime() === currentDate.getTime()) {
                    // Pushes on array the current percentage
                    cumulativeArray_Student.push(Math.round(cumulativeAvg_Student[position_cumulative].cumulativeAverage * 100) / 100);
                    position_cumulative++;
                    // If not interacted, put the previous value in the array
                } else if (lastdate.getTime() >= currentDate.getTime()) {
                    if (cumulativeArray_Student[cumulativeArray_Student.length - 1]) {
                        // Pushes on array the previous percentage
                        cumulativeArray_Student.push(cumulativeArray_Student[cumulativeArray_Student.length - 1]);
                    } else {
                        // Pushes array zero if no previous percentage
                        cumulativeArray_Student.push(0);
                    }
                }
            }

            // If there is a start and end date, a zero is placed at
            if (startExpectedDate && endExpectedDate) {
                if ((currentDate.getTime() >= startExpectedDate.getTime() && currentDate.getTime() <= endExpectedDate.getTime())) {
                    expectedArray.push(0);
                } else {
                    expectedArray.push(null);
                }
            } else {
                expectedArray.push(null);
            }

            // Next day
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // returns the array
        return [dateArray, expectedArray, cumulativeArray_Student];
    }

    fetchData(curriculumId) {
        // Props
        const classroomId = this.props.classroomId;
        const courseId = this.props.courseId;
        const userId = this.props.studentId;

        // Variables with url to get method
        const url_percentage = baseUrl + "/course/getMinimumPercentage/" + curriculumId;
        const url_date = baseUrl + "/course/getExpectedDate/" + curriculumId + "/" + courseId + "/" + classroomId;
        const url_interaction_Student = baseUrl + "/course/getFirstLastStudentInteraction/" + userId + "/" + classroomId + "/" + curriculumId;
        const url_cumulativeAvg_Student = baseUrl + "/course/getCumulativeStudentAverage/" + userId + "/" + classroomId + "/" + curriculumId;

        axios.all([
            axios.get(url_percentage),
            axios.get(url_date),
            axios.get(url_interaction_Student),
            axios.get(url_cumulativeAvg_Student)
        ])
        .then(axios.spread((minPercentage, date, interaction_Student, cumulativeAvg_Student) => {
            // Checks if have data
            if (minPercentage.data && date.data && interaction_Student.data && cumulativeAvg_Student.data) {
                let percentage = 0;
                let startDate, endDate, expectedStartDate, expectedEndDate, dateArray;
                let firstInteraction, lastInteraction;

                // Checks if have interaction data
                if (interaction_Student.data[0].firstInteraction && interaction_Student.data[0].lastInteraction) {
                    // If it exists, add in the variables
                    firstInteraction = new Date(interaction_Student.data[0].firstInteraction.replace(/-/g, '/'));
                    lastInteraction = new Date(interaction_Student.data[0].lastInteraction.replace(/-/g, '/'));
                }

                // Checks if have for minimum interaction percentage
                if (minPercentage.data && minPercentage.data.length > 0) {
                    // If it exists, add in the variables
                    percentage = minPercentage.data[0].percentage
                }

                // Checks if have start and end date of predicted period for the subject domain
                if (date.data[0].startDate && date.data[0].endDate) {
                    // If it exists, add in the variables
                    startDate = new Date(date.data[0].startDate.replace(/-/g, '/'));
                    endDate = new Date(date.data[0].endDate.replace(/-/g, '/'));

                    expectedStartDate = startDate;
                    expectedEndDate = endDate;

                    if ((firstInteraction < startDate) && firstInteraction) {
                        startDate = firstInteraction;
                    }

                    if ((lastInteraction > endDate) && lastInteraction) {
                        endDate = lastInteraction;
                    }

                    // Renders the chart only if this information exists
                    this.setState({
                        Render: true
                    })

                } else {
                    startDate = firstInteraction;
                    endDate = lastInteraction;

                    // Don't renders the chart if this information don't exists
                    if (!(startDate && endDate)) {
                        this.setState({
                            Render: false
                        })
                    }
                }

                // Call function getDateArray()
                dateArray = this.getDateArray(startDate, endDate, expectedStartDate, expectedEndDate, cumulativeAvg_Student.data);

                // Set sub-arrays
                const DateArray = dateArray[0];
                const expectedArray = dateArray[1];
                const cumulativeArray_Student = dateArray[2];

                // Assigns the information on the chart
                this.setState({
                    chartOptions: {
                        xAxis: {
                            categories: DateArray.map(x => x.string)
                        },
                        series: [
                            { data: [...Array(DateArray.length).fill(percentage)] },
                            { data: cumulativeArray_Student },
                            { data: expectedArray }
                        ]
                    }
                });
            }
            else {
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
        const { chartOptions, Render } = this.state;
        return (
            <React.Fragment>
                {Render ? (
                    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                ) : (
                    <Col>
                        <div>A data inicial e final esperada para os alunos dominarem esse assunto não foram definidas pelo professor e nenhuma interação do aluno com os recursos ocorreu ainda</div>
                    </Col>
                )}
            </React.Fragment>
        );
    }
};

export { PerformanceChartStudent };