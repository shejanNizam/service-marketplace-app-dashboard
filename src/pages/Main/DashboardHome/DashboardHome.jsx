import { Skeleton } from "antd";
import { FaHospitalUser, FaUsers } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import LoaderWraperComp from "../../../Components/LoaderWraperComp";
import { useGetAllStatsQuery } from "../../../redux/features/dashboardHome/dashboardHomeApi";
import DashboardChart from "./DashboardChart";

import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import image from "../../../assets/images/host-details-image.png";

const dummyData = [
  {
    id: 1,
    name: "User NAME",
    profession: "Painter",
    location: "New York",
    email: "example@gmail.com",
    profileImage: image,
  },
  {
    id: 2,
    name: "User NAME",
    profession: "Painter",
    location: "New York",
    email: "example@gmail.com",
    profileImage: image,
  },
  {
    id: 3,
    name: "User NAME",
    profession: "Painter",
    location: "New York",
    email: "example@gmail.com",
    profileImage: image,
  },
  {
    id: 4,
    name: "User NAME",
    profession: "Painter",
    location: "New York",
    email: "example@gmail.com",
    profileImage: image,
  },
  {
    id: 5,
    name: "User NAME",
    profession: "Painter",
    location: "New York",
    email: "example@gmail.com",
    profileImage: image,
  },
  {
    id: 6,
    name: "User NAME",
    profession: "Painter",
    location: "New York",
    email: "example@gmail.com",
    profileImage: image,
  },
];

export default function DashboardHome() {
  const { data } = useGetAllStatsQuery();

  const handleCardClick = (id, e) => {
    // Only navigate if the click wasn't on a button
    if (!e.target.closest("button")) {
      navigate(`/all-users/professional/${id}`);
    }
  };

  const handleButtonClick = (e, action, id) => {
    e.stopPropagation();
    if (action === "verify") {
      console.log("Verify user", id);
      // Add your verify logic here
    } else {
      console.log("Reject user", id);
      // Add your reject logic here
    }
  };

  return (
    <>
      <div className="space-y-2 md:space-y-4 lg:space-y-6">
        <LoaderWraperComp
          isLoading={false}
          isError={false}
          dataEmpty={false}
          loader={
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Skeleton active className="w-full h-full" />
              <Skeleton active className="w-full h-full" />
            </div>
          }
          className={"h-[12.02vh]"}
        ></LoaderWraperComp>

        <div className="flex w-full">
          <div className="w-3/5">
            <DashboardChart />
          </div>
          <div className="flex justify-around h-36 rounded-lg drop-shadow-xl w-2/5">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="text-white bg-gradient-to-t from-[#4D0304] to-[#8E0003] rounded-lg px-4 flex justify-around items-center gap-4 w-[250px] h-[150px]">
                {/* <p>logo</p> */}
                <GrMoney size={40} />
                <div>
                  <p className="text-xl font-semibold">Total Earning</p>
                  <p className="text-3xl font-bold">{`$254.99`}</p>
                </div>
              </div>
              <div className="text-white bg-gradient-to-t from-[#0C3D00] to-[#21A300] rounded-lg px-4 flex justify-around items-center gap-4 w-[250px] h-[150px]">
                <RiVerifiedBadgeFill size={40} />
                <div>
                  <p className="text-xl font-semibold">Verified A.C</p>
                  <p className="text-3xl font-bold">{`112`}</p>
                </div>
              </div>
              <div className="text-white bg-gradient-to-t from-[#996300] to-[#FFA500] rounded-lg px-4 flex justify-around items-center gap-4 w-[250px] h-[150px]">
                <FaHospitalUser size={40} />
                <div>
                  <p className="text-xl font-semibold">Total Profession</p>
                  <p className="text-3xl font-bold">{`254`}</p>
                </div>
              </div>
              <div className="text-white bg-gradient-to-t from-[#771212] to-[#DD2222] rounded-lg px-4 flex justify-around items-center gap-4 w-[250px] h-[150px]">
                <FaUsers size={40} />
                <div>
                  <p className="text-xl font-semibold">Total Client</p>
                  <p className="text-3xl font-bold">1250</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-primary text-3xl font-bold mb-2">
              Recent Professionals
            </h3>
            <button className="bg-primary text-white rounded px-4 py-2 flex items-center gap-2">
              See all <FaArrowRight />
            </button>
          </div>

          {/* <AccountVerification /> */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {dummyData.map((user) => (
              <div
                key={user.id}
                className="border p-4 rounded-lg shadow-md flex justify-between items-center cursor-pointer"
                onClick={(e) => handleCardClick(user.id, e)}
              >
                <div className="flex justify-center gap-4">
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="rounded-md w-20 h-20 mb-4"
                  />
                  <div>
                    <div className="text-lg font-semibold">{user.name}</div>
                    <div className="text-sm text-gray-600">
                      {user.profession}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <FaLocationDot className="text-primary" size={20} />{" "}
                        {user.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <MdEmail className="text-primary" size={24} />
                        {user.email}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    className="bg-primary text-white py-1 px-4 rounded-md"
                    onClick={(e) => handleButtonClick(e, "verify", user.id)}
                  >
                    Verify
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-4 rounded-md"
                    onClick={(e) => handleButtonClick(e, "reject", user.id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
