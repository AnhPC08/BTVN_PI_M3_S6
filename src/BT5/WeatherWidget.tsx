import { useEffect, useState } from "react";

export default function WeatherWidget() {
  const [status, setStatus] = useState<string>("Đang tải...");

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Lỗi mạng"));
  }, []);

  return <div>{status}</div>;
}
