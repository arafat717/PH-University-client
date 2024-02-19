import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useAppDispatch } from "../../redux/feature/hooks";
import { logout } from "../../redux/feature/auth/AuthSlice";
import { toast } from "sonner";

const { Header, Content } = Layout;

const Mainlayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("LoggOut Successfully");
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar></SideBar>
      <Layout>
        <Header>
          <Button onClick={handleLogout}>LogOut</Button>
        </Header>
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
      </Layout>
    </Layout>
  );
};

export default Mainlayout;
