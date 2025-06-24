import { UploadOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Table, Upload } from "antd";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ErrorSwal, SuccessSwal } from "../../../utils/allSwalFire";

const CategoryNew = () => {
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // To show the image preview
  const [fileList, setFileList] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Mocked data instead of calling API
  const data = {
    data: [
      { id: 1, name: "Category 1", image: "https://via.placeholder.com/150" },
      { id: 2, name: "Category 2", image: "https://via.placeholder.com/150" },
      { id: 3, name: "Category 3", image: "https://via.placeholder.com/150" },
      { id: 4, name: "Category 4", image: "https://via.placeholder.com/150" },
    ],
    pagination: {
      totalData: 4,
    },
  };

  const handleAddCategory = async () => {
    try {
      // Simulate API response
      const response = { message: "Banner added successfully" };

      SuccessSwal({
        title: "",
        text: response.message || "Banner added successfully",
      });
      resetModal();
      setIsModalVisible(false);
    } catch (error) {
      ErrorSwal({
        title: "",
        text: error?.message || "Failed to add banner",
      });
    }
  };

  const handleEditCategory = async () => {
    try {
      // Simulate API response
      const response = { message: "Banner updated successfully" };

      SuccessSwal({
        title: "",
        text: response.message || "Banner updated successfully",
      });
      resetModal();
      setIsModalVisible(false);
    } catch (error) {
      ErrorSwal({
        title: "",
        text: error?.message || "Failed to update banner",
      });
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      // Simulate API delete response
      const response = { message: "Category deleted successfully" };
      SuccessSwal({
        title: "",
        text: response.message || "Category deleted successfully",
      });
      setIsDeleteModalVisible(false);
    } catch (error) {
      ErrorSwal({
        title: "",
        text: error?.message || "Failed to delete category",
      });
    }
  };

  const handleOpenModalForAdd = () => {
    setIsEditMode(false);
    setCategoryId(null);
    setName("");
    setImage(null);
    setImagePreview(null); // Clear image preview
    setIsModalVisible(true);
  };

  const handleOpenModalForEdit = (category) => {
    setIsEditMode(true);
    setCategoryId(category.id);
    setName(category.name);
    setImagePreview(category.image || null); // Set existing image preview (if any)
    setIsModalVisible(true);
  };

  const handleOpenDeleteModal = (category) => {
    setCategoryId(category.id);
    setIsDeleteModalVisible(true);
  };

  // Handle image file selection
  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      setImage(info.file.originFileObj);
      setImagePreview(URL.createObjectURL(info.file.originFileObj)); // Preview the selected image
    }
  };

  // Handle reset of modal fields
  const resetModal = () => {
    setName("");
    setImage(null);
    setImagePreview(null);
    setFileList([]);
  };

  const columns = [
    {
      title: "S. No",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
      align: "center",
    },
    {
      title: "Category",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image || "https://via.placeholder.com/150"}
          alt="Category"
          style={{ width: 50, height: 50, objectFit: "cover" }}
        />
      ),
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex justify-center gap-2">
          <Button
            icon={<FaEdit />} // Edit icon
            type="primary"
            shape="round"
            onClick={() => handleOpenModalForEdit(record)}
          />
          <Button
            icon={<FaTrash />} // Delete icon
            type="danger"
            shape="round"
            onClick={() => handleOpenDeleteModal(record)}
          />
        </div>
      ),
      align: "center",
    },
  ];

  return (
    <>
      <div className="flex justify-end mb-6">
        <Button type="primary" size="large" onClick={handleOpenModalForAdd}>
          Add Category
        </Button>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={data.data}
          rowKey={(record) => record.id}
          pagination={{
            current: page,
            total: data?.pagination?.totalData || 0,
            pageSize: 10,
            showSizeChanger: false,
            onChange: (current) => setPage(current),
          }}
        />
      </div>

      {/* Modal for Add/Edit Category */}
      <Modal
        title={isEditMode ? "Edit Category" : "Add Category"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        width={500}
      >
        <div className="space-y-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category Name"
            className="mt-2"
          />

          {/* Upload Image */}
          <Upload
            name="image"
            listType="picture-card"
            onChange={handleImageChange}
            showUploadList={false}
            customRequest={({ file, onSuccess }) => onSuccess("ok")}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="image" style={{ width: "100%" }} />
            ) : (
              <div>
                <UploadOutlined />
                <div>Upload Image</div>
              </div>
            )}
          </Upload>

          <Button
            type="primary"
            onClick={isEditMode ? handleEditCategory : handleAddCategory}
            className="w-full mt-4"
          >
            {isEditMode ? "Save Changes" : "Save"}
          </Button>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Delete Category"
        visible={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsDeleteModalVisible(false)}>
            Cancel
          </Button>,
          <Button
            key="delete"
            type="danger"
            onClick={() => handleDeleteCategory(categoryId)}
          >
            Delete
          </Button>,
        ]}
        centered
        width={400}
      >
        <p>Are you sure you want to delete this category?</p>
      </Modal>
    </>
  );
};

export default CategoryNew;
