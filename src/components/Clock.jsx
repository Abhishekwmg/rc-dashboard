import { useEffect, useState } from "react";

const TIMEZONE_MAP = {
  "Asia/Kolkata": "IST",
  "Asia/Calcutta": "IST",

  "America/New_York": "EST",
  "America/Chicago": "CST",
  "America/Denver": "MST",
  "America/Los_Angeles": "PST",

  "Europe/London": "GMT",
  "Europe/Paris": "CET",

  "Asia/Tokyo": "JST",
  "Asia/Dubai": "GST",
  "Australia/Sydney": "AEST",
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const zoneLabel = TIMEZONE_MAP[timeZone] || "UTC";

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <span className="text-sm opacity-80 whitespace-nowrap">
      {formattedTime.toUpperCase()} {zoneLabel}
    </span>
  );
};

export default Clock;
