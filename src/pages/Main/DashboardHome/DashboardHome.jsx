import { Skeleton } from "antd";
import { FaHospitalUser, FaUsers } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import LoaderWraperComp from "../../../Components/LoaderWraperComp";
import { useGetAllStatsQuery } from "../../../redux/features/dashboardHome/dashboardHomeApi";
import Professional from "../AllUsers/Professional";
import DashboardChart from "./DashboardChart";

export default function DashboardHome() {
  const { data } = useGetAllStatsQuery();

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
          <h3 className="text-primary text-3xl font-bold mb-2">
            Recent Professionals
          </h3>
          <p>add later</p>
          {/* <Professional /> */}
        </div>
      </div>
    </>
  );
}
