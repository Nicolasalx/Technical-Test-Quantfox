"use client";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import Board from "./Board";

const { Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        className="site-layout-background"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div className="text-white font-bold text-xl p-6">TrelloFox</div>

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          theme="dark"
          style={{ marginTop: "20px" }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            Tasks
          </Menu.Item>
          <Menu.Item key="3" icon={<SearchOutlined />}>
            Search
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <h1 className="text-2xl font-bold mb-4">Task board</h1>
            <Board />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

