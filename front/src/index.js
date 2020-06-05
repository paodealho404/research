import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,  Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "sweetalert2/dist/sweetalert2.js";

import AdminLayout from "layouts/Admin.jsx";
import Classes from "views/Classes.jsx";
import ClassDashboard from "views/ClassDashboard/ClassDashboard.jsx";
import StarterTerm from "views/Terms/StarterTerm.jsx";
import DemographicQuests from "views/Terms/DemographicQuests.jsx";
import FinalQuests from 'views/Terms/FinalQuests.jsx';
import Thanks from 'views/Terms/Thanks.jsx';
import ProjectDescription from 'views/Terms/ProjectDescription';
import ProjectTutorial from 'views/Terms/ProjectTutorial';
import DashboardQuestions from 'views/Terms/DashboardQuestions';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route exact path="/" component = {StarterTerm}/>
        <Route path="/demographicquest" component = {DemographicQuests}/>
        <Route path="/projectdescription" component = {ProjectDescription}/>
        <Route path="/projecttutorial" component = {ProjectTutorial}/>
        <Route path="/admin" component={ props=> <AdminLayout {...props} />}/>
        <Route path="/admin/classes" component={ props => <AdminLayout {...props} component={Classes}/>}/>
        <Route path="/admin/classdashboard" render={props => <AdminLayout {...props} component={ClassDashboard}/>}/>
<<<<<<< HEAD
        <Route path="/admin/studentdashboard" render={props => <AdminLayout {...props} component={StudentDashboard}/>} />
        <Route path="/admin/missions" render={props => <AdminLayout {...props} component={Missions}/>}/>
        <Route path="/dashboardQuestions" component={DashboardQuestions}/>
=======
>>>>>>> f40164dd0404780a954b8d6bcac7fcdd805a9f90
        <Route path="/thanks" component={Thanks}/>
        <Redirect to="/"/>
    </Switch>
</ BrowserRouter>, document.getElementById('root'));
registerServiceWorker();