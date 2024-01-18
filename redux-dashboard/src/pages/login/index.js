import "./index.scss";
import { Card, Form, Input, Button, message } from "antd";
import logo from "@/assets/logo.png";
import { useDispatch } from "react-redux";
import { fetchLogin } from "@/store/modules/user";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    //make sure pass valus successful before go to home page"
    await dispatch(fetchLogin(values));
    //to home page
    navigate("/");
    //notice user
    message.success("Login Succeded");
  };
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item
            name="mobile"
            //多条校验，先交验第一条
            rules={[
              { required: true, message: "Input Phone Number" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "Invalid phone number format",
              },
            ]}
          >
            <Input size="large" placeholder="Input Phone Number" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: "Input Verification Code" }]}
          >
            <Input size="large" placeholder="Input Verification Code" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
