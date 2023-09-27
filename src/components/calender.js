import React, { useState, useEffect } from "react";

function PersianDate() {
  const [todayFa, setTodayFa] = useState("");

  useEffect(() => {
    const today = Date.now();

    const formattedDate = getDateFormat(today, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setTodayFa(formattedDate);
  }, []);

  function getDateFormat(uDate, options) {
    return new Intl.DateTimeFormat("fa-IR", options).format(uDate);
  }

  return <div className="mt-1">{todayFa}</div>;
}

export default PersianDate;
