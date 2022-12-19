import { useState } from "react";
import Card from "../CardPrototypes/Card";

const AvailableCard = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //FIX: time zone issue, currentDay not updating at midnight
  const [availabilityDates, setAvailabilityDates] = useState({
    currentDay:
      new Date().getDate().toLocaleString().length === 1
        ? "0" + new Date().getDate().toLocaleString()
        : new Date().getDate().toLocaleString(),
    currentMonth: monthNames[new Date().getMonth()]
      .substring(0, 3)
      .toLocaleUpperCase(),
    availableNow: true ? "available for work" : "currently busy",
  });

  return (
    <Card>
      <div className="flex flex-col items-center justify-center">
        <div className="text-5xl">{availabilityDates.currentMonth}</div>

        <div className="text-[7rem]">{availabilityDates.currentDay}</div>
      </div>

      <div
        className="text-5xl font-extrabold text-center text-transparent 2xl:text-6xl bg-clip-text bg-gradient-to-br from-pink to-red"
      >
        {availabilityDates.availableNow}
      </div>
    </Card>
  );
};

export default AvailableCard;
