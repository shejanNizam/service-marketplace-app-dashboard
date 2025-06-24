import { BsBrowserChrome } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaChevronLeft,
  FaDownload,
  FaFilePdf,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
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
            <h3 className="text-xl font-bold text-gray-900 pb-4">
              Description
            </h3>
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
          {/* Company Information */}
          <div className="border p-4 rounded-lg shadow-md my-4">
            <p className="text-xl font-bold text-gray-900 pb-4">
              Company Information
            </p>

            <div className="flex justify-center items-start">
              <div className="flex-1 space-y-4">
                <p className="flex items-center gap-4">
                  <>
                    <PiCompassRoseBold className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">Company Name</p>
                    <p>{"abcd"}</p>
                  </p>
                </p>
                <p className="flex items-center gap-4">
                  <>
                    <MdEmail className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">Email Address</p>
                    <p>{"esther.howard@gmail.com"}</p>
                  </p>
                </p>
                <p className="flex items-center gap-4">
                  <>
                    <SiRedcandlegames className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">Siret Number</p>
                    <p>{"123456"}</p>
                  </p>
                </p>
              </div>
              <div className="flex-1 space-y-4">
                <p className="flex items-center gap-4">
                  <>
                    <FaLocationDot className="text-primary" size={20} />
                  </>
                  <p>
                    <p className="text-gray-400">location</p>
                    <p>{"Beverly Hills, California 90202"}</p>
                  </p>
                </p>
                <p className="flex items-center gap-4">
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
                </p>
              </div>
            </div>
          </div>
          {/* Projrcts & Certificates */}
          <div className="border p-4 rounded-lg shadow-md my-4">
            <p className="text-xl font-bold text-gray-900 pb-4">Projects</p>

            <div className="flex justify-center items-start">
              <div className="flex-1">
                <p className="underline cursor-pointer text-primary font-semibold">
                  project.jpg
                </p>
                <p className="underline cursor-pointer text-primary font-semibold">
                  project.jpg
                </p>
              </div>
              <div className="flex-1">
                <p className="underline cursor-pointer text-primary font-semibold">
                  project.jpg
                </p>
                <p className="underline cursor-pointer text-primary font-semibold">
                  project.jpg
                </p>
              </div>
            </div>
            <p className="text-xl font-bold text-gray-900 py-4">Certificates</p>
            <div className="flex justify-center items-start">
              <div className="flex-1">
                <p className="underline cursor-pointer text-primary font-semibold">
                  Certificate.jpg
                </p>
              </div>
              <div className="flex-1">
                <p className="underline cursor-pointer text-primary font-semibold">
                  Certificate.jpg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1">
          <div className="border p-4 rounded-lg shadow-md my-4">
            <p className="text-xl font-bold text-gray-900 pb-4">
              Contact Information
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-4">
                <>
                  <BsBrowserChrome className="text-primary" size={20} />
                </>
                <p>
                  <p className="text-gray-400">Website</p>
                  <p>{"www.estherhoward.com"}</p>
                </p>
              </p>
              <p className="flex items-center gap-4">
                <>
                  <FaPhone className="text-primary" size={20} />
                </>
                <p>
                  <p className="text-gray-400">Phone Number</p>
                  <p>{"+1-202-555-0141"}</p>
                </p>
              </p>
              <p className="flex items-center gap-4">
                <>
                  <MdEmail className="text-primary" size={20} />
                </>
                <p>
                  <p className="text-gray-400">Email Address</p>
                  <p>{"esther.howard@gmail.com"}</p>
                </p>
              </p>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow-md my-4">
            <p className="text-xl font-bold text-gray-900 pb-4">Service Area</p>
            <div className="flex justify-start items-center text-wrap gap-4">
              <p className="border border-primary rounded px-2">New York</p>
              <p className="border border-primary rounded px-2">Paris</p>
              <p className="border border-primary rounded px-2">USA</p>
              <p className="border border-primary rounded px-2">New York</p>
              <p className="border border-primary rounded px-2">Paris</p>
              <p className="border border-primary rounded px-2">USA</p>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow-md my-4">
            <p className="text-xl font-bold text-gray-900 pb-4">Social Media</p>
            <div className="flex justify-start items-center gap-4">
              <FaFacebookSquare className="text-primary" size={32} />
              <FaTwitter className="text-primary" size={32} />
              <FaLinkedin className="text-primary" size={32} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
