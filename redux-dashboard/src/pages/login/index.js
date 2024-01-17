import "./index.scss";
import { Card, Form, Input, Button } from "antd";
import logo from "@/assets/logo.png";

export const Login = () => {
  const onFinish = (values) => {
    console.log(values);
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
                pattern: /^[7-9][1-9]\d{6}$/,
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
