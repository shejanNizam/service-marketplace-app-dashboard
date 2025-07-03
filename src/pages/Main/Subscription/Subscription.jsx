import { FaPlus } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";

export default function Subscription({ type }) {
  // const plans = [
  //   {
  //     title: "Basic Plan",
  //     subTitle: "Try Basic Plan",
  //     price: "0.00",
  //     features: [
  //       "View professional profiles",
  //       "Immediate appointment backlog",
  //       "Email-based contact",
  //       "Submit up to 2 projects/intends",
  //       "£3.59 project for access",
  //       "Unlimited functions (using payment)",
  //     ],
  //   },
  //   {
  //     title: "Premium Plan",
  //     subTitle: "Try Premium Plan",
  //     price: "49.00",
  //     features: [
  //       "Watch messaging with professionals",
  //       "Create & manage projects",
  //       "Submit it projects/intends (£2/month)",
  //       "€4.99/pages for access",
  //       "Unlimited negotiated functions",
  //       "Unlimited negotiated functions",
  //     ],
  //   },
  // ];
  const plans = [];

  return (
    <>
      <div className=" flex justify-end">
        <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-12 py-2 rounded-full flex items-center gap-2 ">
          Create Plan <FaPlus />
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.length === 0 ? (
            <div className="text-center">
              <h4 className="">No Subscription Plan!</h4>
            </div>
          ) : (
            <>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-2xl font-bold text-center mb-2">
                    {plan.title}
                  </h2>
                  <p className="text-sm text-center mb-4">
                    <span className="text-3xl text-primary font-bold">
                      € {plan.price}/
                    </span>
                    Monthly
                  </p>

                  <h3 className=" bg-red-800 text-white py-2 font-semibold mb-3">
                    {plan.subTitle}
                  </h3>
                  <div className="pt-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <TiTickOutline className="m-2 h-4 w-4 rounded-full border border-green-400 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className="bg-primary hover:bg-primary/50 text-white font-semibold px-32 py-2 rounded">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
