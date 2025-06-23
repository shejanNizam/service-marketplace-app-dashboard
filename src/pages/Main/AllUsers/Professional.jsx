import { Button, DatePicker, Modal, Table } from "antd";
import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Professional() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [date, setDate] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const data = [
    {
      key: "1",
      name: "Al-Jamil",
      specification: "specification",
      email: "example@gmail.com",
      address: "N/A",
      date: "02/03/2025",
      action: "A",
      phone: "**** **** ****545",
    },
    {
      key: "2",
      name: "Al-Jamil",
      specification: "specification",
      email: "example@gmail.com",
      address: "Paris",
      date: "02/03/2025",
      action: "B",
      phone: "**** **** ****546",
    },
    {
      key: "3",
      name: "Al-Jamil",
      specification: "specification",
      email: "example@gmail.com",
      address: "N/A",
      date: "02/03/2025",
      action: "C",
      phone: "**** **** ****547",
    },
    {
      key: "4",
      name: "Al-Jamil",
      specification: "specification",
      email: "example@gmail.com",
      address: "USA",
      date: "02/03/2025",
      action: "D",
      phone: "**** **** ****548",
    },
    {
      key: "5",
      name: "Al-Jamil",
      specification: "specification",
      email: "example@gmail.com",
      address: "N/A",
      date: "02/03/2025",
      action: "E",
      phone: "**** **** ****549",
    },
    {
      key: "6",
      name: "Shakib",
      specification: "specification",
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

  const showDeleteModal = (record) => {
    setSelectedClient(record);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    // Here you would typically make an API call to delete the client
    console.log("Deleting client:", selectedClient);
    setIsDeleteModalOpen(false);
    // You would then update your data state to remove the deleted client
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const columns = [
    {
      title: "Professional Id",
      dataIndex: "key",
      key: "id",
    },
    {
      title: "Professional Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Specification",
      dataIndex: "specification",
      key: "specification",
    },
    {
      title: "Professional Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Professional's Address",
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
        <div className="flex gap-4">
          <button onClick={() => showDeleteModal(record)} className="">
            <RiDeleteBin6Fill size={20} />
          </button>
          <button onClick={() => navigate(`${record.key}`)} className="">
            <BsInfoCircleFill size={20} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-2xl text-primary font-semibold">
          Professional’s List
        </h3>
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

      {/* Delete Confirmation Modal */}
      <Modal
        open={isDeleteModalOpen}
        onCancel={handleDeleteCancel}
        centered
        footer={[
          <div className="flex justify-center gap-4">
            <button
              key="cancel"
              onClick={handleDeleteCancel}
              className="border border-gray-300 rounded-full px-8 py-2 mt-4 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              key="delete"
              onClick={handleDelete}
              className="bg-red-600 text-white rounded-full px-8 py-2 mt-4 hover:bg-red-700"
            >
              Delete
            </button>
          </div>,
        ]}
      >
        {selectedClient && (
          <div className="space-y-4 mt-4 text-center">
            <p className="text-lg">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{selectedClient.name}</span>?
            </p>
            <p className="text-red-600 font-bold">
              This action cannot be undone.
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
