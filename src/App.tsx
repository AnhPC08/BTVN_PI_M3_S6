import WeatherWidget from "./BT5/WeatherWidget";
import SmartCounter from "./BT9/SmartCounter";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Session 6 - Bài 5: Weather Widget</h1>
      <WeatherWidget />

      <h3>Bài 9: Bộ đếm thông minh (TDD)</h3>
      <SmartCounter />
    </div>
  );
}
