import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "dashboad",
    label: <NavLink to="/admin/dashboad">Dashboad</NavLink>,
    children: [
      {
        key: "createAdmin",
        label: <NavLink to="/admin/createadmin">Create Admin</NavLink>,
      },
      {
        key: "createFaculty",
        label: <NavLink to="/admin/createfaculty">Create Faculty</NavLink>,
      },
      {
        key: "createStudent",
        label: <NavLink to="/admin/createstudent">Create Student</NavLink>,
      },
    ],
  },
  {
    key: "2",
    label: "profile",
  },
  {
    key: "3",
    label: "photos",
  },
];

const Mainlayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
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
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;
