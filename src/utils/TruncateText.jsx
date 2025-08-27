import { useState } from "react";

const TruncateText = ({ text, charCount = 200 }) => {
  const truncated =
    text.length > charCount ? text.slice(0, charCount) + "..." : text;

  return (
    <div>
      <p>{truncated}</p>
      {text.length > charCount && (
        <span
          onClick={() => setShowMore(!showMore)}
          className="text-[#4E2A9B] text-sm cursor-pointer"
        ></span>
      )}
    </div>
  );
};

export default TruncateText;
