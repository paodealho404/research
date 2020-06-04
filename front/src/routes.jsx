import Classes from "views/Classes";
import Students from "views/StudentDashboard/Students";
import ClassDashboard from "views/ClassDashboard/ClassDashboard";
import StudentDashboard from "views/StudentDashboard/StudentDashboard";
import Classroom from "views/ClassDashboard/Classroom";
import Missions from "views/Missions/Missions";

var routes = [
  {
    path: "/classes",
    name: "Minhas Disciplinas",
    icon: "nc-icon nc-bank",
    component: Classes,
    layout: "/admin"
  },
  {
    path: "/students/:courseId/:classroomId",
    name: "Students",
    icon: "nc-icon nc-bank",
    component: Students,
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
    path: "/studentDashboard/:studentId",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: StudentDashboard,
    layout: "/admin"
  },
  {
    path: "/classroom",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Classroom,
    layout: "/admin"
  },
  {
    path: "/missions/:id/:teacherId/:courseId",
    name: "Missions",
    icon: "nc-icon nc-bank",
    component: Missions,
    layout: "/admin"
  }
];

export default routes;
