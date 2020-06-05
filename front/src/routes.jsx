import Classes from "views/Classes";
import ClassDashboard from "views/ClassDashboard/ClassDashboard";
import Classroom from "views/ClassDashboard/Classroom";

var routes = [
  {
    path: "/classes",
    name: "Minhas Disciplinas",
    icon: "nc-icon nc-bank",
    component: Classes,
    layout: "/admin"
  },
  {
    path: "/classDashboard/:id/:teacherId/:courseId",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: ClassDashboard,
    layout: "/admin"
  },
  {
    path: "/classroom",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Classroom,
    layout: "/admin"
  }
];

export default routes;
