import Classes from "views/Classes";
import ClassDashboard_1 from "views/ClassDashboard/Dashboard_1/ClassDashboard";
import ClassDashboard_2 from "views/ClassDashboard/Dashboard_2/ClassDashboard";
import ClassDashboard_3 from "views/ClassDashboard/Dashboard_3/ClassDashboard";
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
    path: "/classDashboard_1/:id/:teacherId/:courseId",
    name: "Dashboard-1",
    icon: "nc-icon nc-bank",
    component: ClassDashboard_1,
    layout: "/admin"
  },
  {
    path: "/classDashboard_2/:id/:teacherId/:courseId",
    name: "Dashboard-2",
    icon: "nc-icon nc-bank",
    component: ClassDashboard_2,
    layout: "/admin"
  },
  {
    path: "/classDashboard_3/:id/:teacherId/:courseId",
    name: "Dashboard-3",
    icon: "nc-icon nc-bank",
    component: ClassDashboard_3,
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
