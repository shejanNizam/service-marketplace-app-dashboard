import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/images/host-details-image.png";

export default function ProfessionalDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center border rounded shadow-sm py-4">
        <div className="flex justify-center items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <FaChevronLeft />
          </button>
          <div className="w-[20%]">
            <img src={image} alt="#" />
          </div>
          <div>
            <p className=" text-lg font-semibold ">Name</p>
            <p>Painter</p>
          </div>
        </div>
        <div className="flex items-center gap-12 pr-12">
          <button className="px-12 py-2 rounded bg-primary text-white">
            Verify
          </button>
          <button className="px-12 py-2 rounded bg-red-600 text-white">
            Reject
          </button>
        </div>
      </div>
      <h3>ProfessionalDetails</h3>
    </>
  );
}
