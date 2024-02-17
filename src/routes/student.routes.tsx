import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashoad from "../pages/student/StudentDashoad";

export const studentPaths = [
  {
    name: "Dashboad",
    path: "dashboad",
    element: <StudentDashoad></StudentDashoad>,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse></OfferedCourse>,
  },
];
