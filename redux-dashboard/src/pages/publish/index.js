import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { createArticleAPI } from "@/apis/article";
import { useChannel } from "@/hooks/useChannel";
const { Option } = Select;

export const Publish = () => {
  const { channelList } = useChannel();
  //提交表单
  const onFinish = (formValue) => {
    //校验imageType是否和imageList的数量一致
    if (imageType !== imageList.length)
      return message.warning(`You should submit ${imageType} photos`);
    const { title, channel_id, content } = formValue;
    //按照接口文档格式处理收集到的表单数据
    const reqData = {
      title: title,
      content: content,
      cover: {
        type: imageType,
        images: imageList.map((item) => item.response.data.url),
      },
      channel_id: channel_id,
    };
    //调用接口提交数据
    createArticleAPI(reqData);
  };
  //上传图片
  const [imageList, setImageList] = useState([]);
  const onUploadChange = (image) => {
    setImageList(image.fileList);
  };
  //切换图片封面类型
  const [imageType, setImageType] = useState(0);
  const onTypeChange = (type) => {
    setImageType(type.target.value);
  };
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>Home Page</Link> },
              { title: "Publish Article" },
            ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please enter the article title" },
            ]}
          >
            <Input
              placeholder="Please enter the article title"
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item
            label="Channel"
            name="channel_id"
            rules={[
              { required: true, message: "Please select the article channel" },
            ]}
          >
            <Select
              placeholder="Please select the article channel"
              style={{ width: 400 }}
            >
              {/* value属性会自动收集用户选择数据作为接口的提交字段 */}
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Cover">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>Single Image</Radio>
                <Radio value={3}>Three Images</Radio>
                <Radio value={0}>No Image</Radio>
              </Radio.Group>
            </Form.Item>
            {imageType > 0 && (
              <Upload
                name="image"
                listType="picture-card"
                showUploadList
                action={"http://geek.itheima.net/v1_0/upload"}
                onChange={onUploadChange}
                maxCount={imageType}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>

          <Form.Item
            label="Content"
            name="content"
            rules={[
              { required: true, message: "Please enter the article content" },
            ]}
          >
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="Please enter the article content"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                Submit Article
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
