import React from "react";

interface PoemBoxProps {
  poems: string[];
}

const PoemBox: React.FC<PoemBoxProps> = ({ poems }) => {
  return (
    <div className="rounded-2xl bg-white drop-shadow-2xl p-4 w-80 mb-4">
      {poems.map((poem, index) => (
        <p key={index} className="text-center">
          {poem}
        </p>
      ))}
    </div>
  );
};

export default PoemBox;
