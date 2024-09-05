"use client";

import React, { useState } from "react";

interface copyToClipboardProp {
  toCopy: string;
}

const copyToClipboard: React.FC<copyToClipboardProp> = ({ toCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (toCopy: string) => {
    navigator.clipboard.writeText(toCopy).then(
      () => {
        setIsCopied(!isCopied);
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <button onClick={() => copyToClipboard(toCopy)} className="flex">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-sm"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z"
          fill="currentColor"
        ></path>
      </svg>
      {isCopied ? "已复制!" : "复制内容"}
    </button>
  );
};

export default copyToClipboard;
