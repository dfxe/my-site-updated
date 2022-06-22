import React, { useState } from "react";
import Card from "../Card/Card";

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
  const [availabilityDates, setAvailabilityDates] = useState({
    currentDay:
      new Date().getDate().toString().length === 1
        ? "0" + new Date().getDate().toString()
        : new Date().getDate().toLocaleString(),
    currentMonth: monthNames[new Date().getMonth()]
      .substring(0, 3)
      .toLocaleUpperCase(),
    availableNow: true ? "available for work" : "currently busy",
  });

  return (
    <Card
      dimensions={{ width: 86, height: 24 }}
      isSecondary={false}
      borderStyle="lg:border-l-2 lg:border-r-2 lg:border-b-2"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl">{availabilityDates.currentMonth}</div>
        <div className="text-6xl">{availabilityDates.currentDay}</div>
      </div>
      <br></br>
      <div
        className="text-center text-6xl font-extrabold text-transparent
           bg-clip-text bg-gradient-to-br
           from-pink to-red"
      >
        {availabilityDates.availableNow}
      </div>
    </Card>
  );
};

export default AvailableCard;
