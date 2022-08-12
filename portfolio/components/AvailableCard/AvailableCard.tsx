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
  4;
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
    <Card additionalStyles="bg-card-primary">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl">{availabilityDates.currentMonth}</div>
        <div className="text-6xl">{availabilityDates.currentDay}</div>
      </div>
      <br></br>
      <div
        className="text-center text-4xl 2xl:text-6xl font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
      >
        {availabilityDates.availableNow}
      </div>
    </Card>
  );
};

export default AvailableCard;
