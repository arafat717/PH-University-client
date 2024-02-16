import AdminDasboad from "../pages/admin/AdminDasboad";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminpaths2 = [
  {
    name: "Dashboad",
    path: "/admin/dashboad",
    element: <AdminDasboad></AdminDasboad>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];

export const adminPaths = [
  {
    path: "dashboad",
    element: <AdminDasboad></AdminDasboad>,
  },
  {
    path: "createstudent",
    element: <CreateStudent></CreateStudent>,
  },
  {
    path: "createfaculty",
    element: <CreateFaculty></CreateFaculty>,
  },
  {
    path: "createadmin",
    element: <CreateAdmin></CreateAdmin>,
  },
];
