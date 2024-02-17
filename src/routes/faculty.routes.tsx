import FacultyDashboad from "../pages/faculty/FacultyDashboad";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboad",
    path: "dashboad",
    element: <FacultyDashboad></FacultyDashboad>,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse></OfferedCourse>,
  },
];
