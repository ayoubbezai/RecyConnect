import React from "react";
import OverviewCard from "../../components/overview/OverviewCard";
import { StickyNote, MessageCircle, ArrowLeftRight, View } from "lucide-react";
import CurveChart from "../../components/overview//CurveChart";
import MaterialCard from "../../components/overview//MaterialCard";

import { Gem, Hammer, Flame, Leaf } from "lucide-react";

const materials = [
  { icon: <Hammer size={30} />, title: "Iron", amount: 120 },
  { icon: <Leaf size={30} />, title: "Wood", amount: 340 },
  { icon: <Flame size={30} />, title: "Coal", amount: 85 },
  { icon: <Gem size={30} />, title: "Crystalite", amount: 5 },
  { icon: <Gem size={30} />, title: "Crystalite", amount: 5 },
];

const OverView = ({ title, value, percentage, icon }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 justify-end mr-10 ">
        <OverviewCard
          title={"Posts"}
          value={"45"}
          percentage={"+30% vs last month"}
          icon={<StickyNote />}
        />
        <OverviewCard
          title={"Comments"}
          value={"1322"}
          percentage={"+7% vs last month"}
          icon={<MessageCircle />}
        />
        <OverviewCard
          title={"Transactions"}
          value={"13"}
          percentage={"+18% vs last month"}
          icon={<ArrowLeftRight />}
        />
        <OverviewCard
          title={"Views"}
          value={"23.000"}
          percentage={"+21% vs last month"}
          icon={<View />}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-12 justify-end mr-10 my-10">
        <div className="ml-105 border-gray-500 shadow-md w-[100%]">
          <CurveChart />
        </div>
        <div className="flex flex-col gap-5 w-[40%] mt-0 ">
          {materials.map((material, index) => (
            <MaterialCard
              key={index}
              icon={material.icon}
              title={material.title}
              amount={material.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;