import { Link } from "react-router-dom";
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  DatePicker,
  Select,
} from "antd";
import { Table, Tag, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import img404 from "@/assets/error.png";
import { useChannel } from "@/hooks/useChannel";
import { useEffect, useState } from "react";
import { getArticleListAPI } from "@/apis/article";
const { Option } = Select;
const { RangePicker } = DatePicker;

export const Article = () => {
  const { channelList } = useChannel();
  //获取文章列表
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  //筛选功能
  //1.准备参数
  const [reqData, setReqData] = useState({
    status: "",
    channel_id: "",
    begin_pubdate: "",
    end_pubdate: "",
    page: 1,
    per_page: 5,
  });
  useEffect(() => {
    async function getList() {
      const res = await getArticleListAPI(reqData);
      setList(res.data.results);
      setCount(res.data.total_count);
    }
    getList();
  }, [reqData]);

  //2.获取筛选数据
  const onFinish = (formValue) => {
    setReqData({
      ...reqData,
      status: formValue.status,
      channel_id: formValue.channel_id,
      begin_pubdate: formValue.date[0].format("YYYY-MM-DD"),
      end_pubdate: formValue.date[1].format("YYYY-MM-DD"),
    });
  };
  //定义状态枚举
  const status = {
    1: <Tag color="warning">Awaiting Approval</Tag>,
    2: <Tag color="success">Approved</Tag>,
  };
  //分页
  const onPageChange = (page) => {
    setReqData({ ...reqData, page: page });
  };
  const columns = [
    {
      title: "Cover",
      dataIndex: "cover",
      width: 120,
      render: (cover) => {
        return (
          <img src={cover.images[0] || img404} width={80} height={60} alt="" />
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      width: 220,
    },
    {
      title: "Status",
      dataIndex: "status",
      //data-后端返回status的数据
      render: (data) => status[data],
    },
    {
      title: "Publish Time",
      dataIndex: "pubdate",
    },
    {
      title: "Read",
      dataIndex: "read_count",
    },
    {
      title: "Comments",
      dataIndex: "comment_count",
    },
    {
      title: "Likes",
      dataIndex: "like_count",
    },
    {
      title: "Actions",
      render: (data) => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>Home</Link> },
              { title: "Article List" },
            ]}
          />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: "" }} onFinish={onFinish}>
          <Form.Item label="Status" name="status">
            <Radio.Group>
              <Radio value={""}>All</Radio>
              <Radio value={0}>Awaiting Approval</Radio>
              <Radio value={2}>Approved</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Channel" name="channel_id">
            <Select
              placeholder="Select article channel"
              defaultValue="html"
              style={{ width: 120 }}
            >
              {channelList.map((item) => (
                <Option value={item.id} key={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date">
            {/* Pass the locale property to control Chinese display */}
            <RangePicker></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              Filter
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`Based on the filtering,${count} results were found`}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={list}
          pagination={{
            total: count,
            pageSize: reqData.per_page,
            onChange: onPageChange,
          }}
        />
      </Card>
    </div>
  );
};
