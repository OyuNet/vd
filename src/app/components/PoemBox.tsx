import React from "react";

interface PoemBoxProps {
  poems: string[];
}

const PoemBox: React.FC<PoemBoxProps> = ({ poems }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="rounded-2xl bg-white drop-shadow-2xl p-4 w-80">
      {poems.map((x, index) => (
        <p key={index}>{x}</p>
      ))}
    </div>
  );
};

export default PoemBox;
