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
      className="w-20 outline-none hover:bg-blue-100 text-center placeholder:text-center underline underline-offset-1"
      placeholder={contents[label]}
      value={replacements[label]}
      onChange={(event) => {
        onChange(event, label);
      }}
    />
  );
};

export default TextReplacement;
