// export default function Users() {
//   return (
//     <>
//       <h3>Users</h3>
//     </>
//   );
// }

import { Button, DatePicker, Modal, Table } from "antd";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Users() {
  const [page, setPage] = useState(1);
  const [date, setDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const data = [
    {
      key: "1",
      name: "Al-Jamil",
      email: "example@gmail.com",
      address: "N/A",
      date: "02/03/2025",
      action: "A",
      phone: "**** **** ****545",
    },
    {
      key: "2",
      name: "Al-Jamil",
      email: "example@gmail.com",
      address: "Paris",
      date: "02/03/2025",
      action: "B",
      phone: "**** **** ****546",
    },
    {
      key: "3",
      name: "Al-Jamil",
      email: "example@gmail.com",
      address: "N/A",
      date: "02/03/2025",
      action: "C",
      phone: "**** **** ****547",
    },
    {
      key: "4",
      name: "Al-Jamil",
      email: "example@gmail.com",
      address: "USA",
      date: "02/03/2025",
      action: "D",
      phone: "**** **** ****548",
    },
    {
      key: "5",
      name: "Al-Jamil",
      email: "example@gmail.com",
      address: "N/A",
      date: "02/03/2025",
      action: "E",
      phone: "**** **** ****549",
    },
    {
      key: "6",
      name: "Shakib",
      email: "example@gmail.com",
      address: "Paris",
      date: "10-22-2024",
      action: "F",
      phone: "**** **** ****545",
    },
  ];

  const handleDateChange = (date, dateString) => {
    setDate(dateString);
    setPage(1);
  };

  const showModal = (record) => {
    setSelectedClient(record);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Client id",
      dataIndex: "key",
      key: "id",
    },
    {
      title: "Client Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Client Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Client's Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => showModal(record)} className="">
          V
        </Button>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-2xl text-primary font-semibold">Client List</h3>
        <div className="flex justify-around gap-4">
          <DatePicker
            placeholder="Select Date"
            style={{ width: "150px" }}
            className="rounded-full"
            onChange={handleDateChange}
          />
          <Button
            className="bg-primary text-white"
            type="primary"
            icon={<IoSearch />}
            onClick={() => setPage(1)}
          />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        className="shadow-md rounded py-2 bg-primary"
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title="Client Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="ok"
            type="primary"
            onClick={handleOk}
            className="bg-blue-500"
          >
            OK
          </Button>,
        ]}
      >
        {selectedClient && (
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold">Client Name</p>
              <p>{selectedClient.name}</p>
            </div>
            <div>
              <p className="font-semibold">Client Email</p>
              <p>{selectedClient.email}</p>
            </div>
            <div>
              <p className="font-semibold">Client Address</p>
              <p>{selectedClient.address}</p>
            </div>
            <div>
              <p className="font-semibold">Phone Number</p>
              <p>{selectedClient.phone}</p>
            </div>
            <div>
              <p className="font-semibold">Date</p>
              <p>{selectedClient.date}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
