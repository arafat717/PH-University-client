import { Layout, Menu } from "antd";
import { sidebarPathGenarator } from "../../utils/sidebarPathGenarator";
import { adminpaths } from "../../routes/routes.admin";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const sidebar = () => {
  const role = "admin";
  let sidebaritems;

  switch (role) {
    case userRole.ADMIN:
      sidebaritems = sidebarPathGenarator(adminpaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebaritems = sidebarPathGenarator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebaritems = sidebarPathGenarator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          font: "20px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "4rem",
        }}
      >
        <h1> PH UNIVERSITY</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebaritems}
      />
    </Sider>
  );
};

export default sidebar;
