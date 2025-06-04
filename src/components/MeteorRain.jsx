import React from "react";

const MeteorRain = () => {
  return (
    <div className="meteor-container">
      {Array.from({ length: 10 }).map((_, i) => (
        <div className="meteor" key={i} style={{ left: `${Math.random() * 100}%`, animationDelay: `${i * 1.5}s` }} />
      ))}
    </div>
  );
};

export default MeteorRain;