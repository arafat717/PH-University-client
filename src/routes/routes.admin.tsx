import { ReactNode } from "react";
import AdminDasboad from "../pages/admin/AdminDasboad";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AcadamicSemester from "../pages/admin/acadamicSemester/AcadamicSemester";
import CreateAcadamicSemester from "../pages/admin/acadamicSemester/CreateAcadamicSemester";
import CreateAcadamicFaculty from "../pages/admin/AcadamicFaculty/CreateAcadamicFaculty";
import AcadamicFaculty from "../pages/admin/AcadamicFaculty/AcadamicFaculty";
import AcadamicDepartment from "../pages/admin/AcadamicDepartment/AcadamicDepartment";
import CreateAcadamicDepartment from "../pages/admin/AcadamicDepartment/CreateAcadamicDepartment";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export const adminpaths = [
  {
    name: "Dashboad",
    path: "dashboad",
    element: <AdminDasboad></AdminDasboad>,
  },
  {
    name: "Acadamic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semesters",
        element: <CreateAcadamicSemester></CreateAcadamicSemester>,
      },
      {
        name: "Acadamic Semester",
        path: "academic-semesters",
        element: <AcadamicSemester></AcadamicSemester>,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcadamicFaculty></CreateAcadamicFaculty>,
      },
      {
        name: "Acadamic Faculty",
        path: "academic-faculty",
        element: <AcadamicFaculty></AcadamicFaculty>,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcadamicDepartment></CreateAcadamicDepartment>,
      },
      {
        name: "Acadamic Department",
        path: "academic-department",
        element: <AcadamicDepartment></AcadamicDepartment>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Student Data",
        path: "students",
        element: <StudentData></StudentData>,
      },
      {
        path: "students-details/:studentId",
        element: <StudentDetails></StudentDetails>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
];

// export const adminRoutes = adminpaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

// export const adminRoutesSidebars = adminpaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

// export const adminPaths = [
//     {
//       index: true,
//       element: <AdminDasboad></AdminDasboad>,
//     },
//   {
//     path: "dashboad",
//     element: <AdminDasboad></AdminDasboad>,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent></CreateStudent>,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin></CreateAdmin>,
//   },
// ];
