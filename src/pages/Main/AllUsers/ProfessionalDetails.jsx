import {
  FaChevronLeft,
  FaDownload,
  FaFilePdf,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail, MdVerified } from "react-icons/md";
import { PiCompassRoseBold } from "react-icons/pi";
import { SiRedcandlegames } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/images/host-details-image.png";

export default function ProfessionalDetails() {
  const navigate = useNavigate();

  const isVerified = false;
  //   const isVerified = true;

  const handleDownload = () => {
    console.log("click the download button");
  };
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

        <div className="gap-12 pr-12">
          {isVerified ? (
            <>
              <h3 className="text-primary text-lg font-bold flex justify-center items-center gap-2">
                {" "}
                Verified <MdVerified size={20} />{" "}
              </h3>
            </>
          ) : (
            <>
              <div className="flex items-center gap-12 pr-12">
                <button className="px-12 py-2 rounded bg-primary text-white">
                  Verify
                </button>
                <button className="px-12 py-2 rounded bg-red-600 text-white">
                  Reject
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center items-center gap-12 px-12 py-4">
        <div className="flex-1">
          <div>
            <h3 className="text-lg font-semibold ">Description</h3>
            <p>
              {" "}
              Fusce et erat at nibh maximus fermentum. Mauris ac justo nibh.
              Praesent nec lorem lorem. Donec ullamcorper lacus mollis tortor
              pretium malesuada. In quis porta nisi, quis fringilla orci. Donec
              porttitor, odio a efficitur blandit, orci nisl porta elit, eget
              vulputate quam nibh ut tellus. Sed ut posuere risus, vitae commodo
              velit.{" "}
            </p>
          </div>
          {/* Company  */}
          <div className="border p-4 rounded-lg shadow-md my-4">
            <div className="flex items-center mb-4">
              <div className="text-xl font-bold text-gray-900">
                Company Information
              </div>
            </div>

            <div className="flex justify-center items-start">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <>
                    <PiCompassRoseBold className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">Company Name</p>
                    <p>{"abcd"}</p>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <>
                    <MdEmail className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">Email Address</p>
                    <p>{"esther.howard@gmail.com"}</p>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <>
                    <SiRedcandlegames className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">Siret Number</p>
                    <p>{"123456"}</p>
                  </p>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <>
                    <FaLocationDot className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">location</p>
                    <p>{"Beverly Hills, California 90202"}</p>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <>
                    <FaFilePdf className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">Esther Howard</p>
                    <p>{"PDF"}</p>
                  </p>
                  <>
                    <button onClick={handleDownload}>
                      <FaDownload className="text-primary" size={20} />
                    </button>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div>1</div>
        </div>
        {/* right side */}
        <div className="flex-1">
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            velit fugiat accusamus laboriosam voluptatum deserunt error tempore
            necessitatibus dolor sunt nisi quidem molestias itaque reiciendis,
            eius architecto rerum laudantium adipisci. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Officia impedit aliquid ad,
            numquam placeat inventore! Corporis, possimus ipsam. Nostrum natus
            veritatis incidunt cupiditate recusandae eos obcaecati accusantium
            praesentium nihil dolorum.{" "}
          </div>
          <div>2</div>
          <div>2</div>
        </div>
      </div>
      <h3>ProfessionalDetails</h3>
    </>
  );
}
