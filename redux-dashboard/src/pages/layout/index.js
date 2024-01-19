import { Layout, Menu, Popconfirm } from "antd";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfo, fetchUserInfo } from "@/store/modules/user";

const { Header, Sider } = Layout;

const items = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Article Management",
    key: "/article",
    icon: <DiffOutlined />,
  },
  {
    label: "Create Article",
    key: "/publish",
    icon: <EditOutlined />,
  },
];

export const HomeLayout = () => {
  const navigate = useNavigate();
  const onMenuClick = (route) => {
    const path = route.key;
    navigate(path);
  };
  //反向高亮
  //获取当前路径
  const location = useLocation();
  const selectedKey = location.pathname;
  //触发个人用户信息action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);
  //获取用户姓名
  const name = useSelector((state) => state.user.userInfo.name);
  //退出登陆
  const onConfirm = () => {
    dispatch(clearUserInfo());
    navigate("/login");
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm
              title="Are you sure you want to log out?"
              okText="Logout"
              cancelText="Cancel"
              onConfirm={onConfirm}
            >
              <LogoutOutlined /> Logout
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKey}
            onClick={onMenuClick}
            items={items}
            style={{ height: "100%", borderRight: 0 }}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
