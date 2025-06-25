import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Select, Table } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import imageOne from "../../../assets/images/earning_one.svg";
import imageTwo from "../../../assets/images/earning_two.svg";

const { Option } = Select;

const userClients = ["Mu - Mu Group", "Alpha Co.", "Beta LLC"];
const premiumPlans = ["Premium", "Standard", "Trial"];

export default function EarningNew() {
  const [clientFilter, setClientFilter] = useState(undefined);
  const [planFilter, setPlanFilter] = useState(undefined);

  const data = Array.from({ length: 7 }).map((_, i) => ({
    key: i,
    slNo: "#1234",
    userClient: "Mu - Mu Group",
    email: "example@gmail.com",
    premiumPlan: "Premium",
    date: "14 July, 2025",
    amount: "€ 9.90",
  }));

  const columns = [
    {
      title: "SL. No",
      dataIndex: "slNo",
      key: "slNo",
      width: 100,
    },
    {
      title: (
        <Select
          placeholder="User/Client"
          allowClear
          size="small"
          style={{ width: 150 }}
          value={clientFilter}
          onChange={(v) => setClientFilter(v)}
        >
          {userClients.map((c) => (
            <Option key={c} value={c}>
              {c}
            </Option>
          ))}
        </Select>
      ),
      dataIndex: "userClient",
      key: "userClient",
      // simple filter logic
      onFilter: (value, record) => !value || record.userClient === value,
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: (
        <Select
          placeholder="Premium Plan"
          allowClear
          size="small"
          style={{ width: 140 }}
          value={planFilter}
          onChange={(v) => setPlanFilter(v)}
        >
          {premiumPlans.map((p) => (
            <Option key={p} value={p}>
              {p}
            </Option>
          ))}
        </Select>
      ),
      dataIndex: "premiumPlan",
      key: "premiumPlan",
      onFilter: (value, record) => !value || record.premiumPlan === value,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: () => (
        <Button type="text" icon={<InfoCircleOutlined />} size="small" />
      ),
    },
  ];

  return (
    <div className="">
      <div className="flex justify-center items-center gap-12 mb-4">
        <div className="border border-primary rounded w-full p-4 flex justify-between items-center shadow-lg">
          <img src={imageOne} alt="imageOne" />
          <div>
            <div className="text-xl">Total Earning</div>
            <div className="text-4xl font-bold">${"24.59"}</div>
          </div>
        </div>
        <div className="border border-primary rounded w-full p-4 flex justify-between items-center shadow-lg">
          <img src={imageTwo} alt="imageTwo" />
          <div>
            <div className="text-xl">Total Earning</div>
            <div className="text-4xl font-bold">${"24.59"}</div>
          </div>
        </div>
      </div>
      {/* Header Bar */}
      <div className="mx-auto mt-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <h2 className="bg-primary p-4 text-white text-xl font-semibold">
          Earning History
        </h2>

        {/* Table Container */}
        <div className="bg-white p-6">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowClassName="even:bg-gray-50"
            className="ant-table-bordered"
          />
        </div>
      </div>
    </div>
  );
}
