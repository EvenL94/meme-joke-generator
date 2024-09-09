import React from "react";

interface TextReplacementProps {
  label: string;
  contents: { [key: string]: string };
  replacements: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>, label: string) => void;
}

const TextReplacement: React.FC<TextReplacementProps> = ({
  label,
  contents,
  replacements,
  onChange,
}) => {
  return (
    <input
      className={`w-20 outline-none text-center placeholder:text-center underline underline-offset-1 hover:bg-blue-200 ${
        !replacements[label] || replacements[label].trim() === ""
          ? "bg-blue-100"
          : ""
      }`}
      placeholder={contents[label]}
      value={replacements[label]}
      onChange={(event) => {
        onChange(event, label);
      }}
    />
  );
};

export default TextReplacement;
