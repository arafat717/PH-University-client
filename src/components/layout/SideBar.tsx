/* eslint-disable react-hooks/rules-of-hooks */
import { Layout, Menu } from "antd";
import { sidebarPathGenarator } from "../../utils/sidebarPathGenarator";
import { adminpaths } from "../../routes/routes.admin";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { TUser, useCurrentToken } from "../../redux/feature/auth/AuthSlice";
import { useAppSelector } from "../../redux/feature/hooks";
import { VarifayToken } from "../../utils/VarifayToken";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = VarifayToken(token);
  }
  // console.log(user);
  let sidebarItems;

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarPathGenarator(adminpaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarPathGenarator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarPathGenarator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", left: "0", top: "0" }}
    >
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
        items={sidebarItems}
      />
    </Sider>
  );
};

export default sidebar;
