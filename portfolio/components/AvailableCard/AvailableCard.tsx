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
        : new Date().getDate().toString(),
    currentMonth: monthNames[new Date().getMonth()]
      .substring(0, 3)
      .toLocaleUpperCase(),
    availableNow: true ? "available for work" : "currently busy",
  });

  return (
    <Card dimensions={{ width: 72, height: 96 }}>
      <div className="flex columns">
        <div>{availabilityDates.currentMonth}</div>
        <div>{availabilityDates.currentDay}</div>
      </div>

      <div>{availabilityDates.availableNow}</div>
    </Card>
  );
};

export default AvailableCard;
