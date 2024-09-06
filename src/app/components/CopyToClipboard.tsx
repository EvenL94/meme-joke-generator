"use client";

import React, { useState } from "react";

interface copyToClipboardProp {
  toCopy: string;
}

const CopyToClipboard: React.FC<copyToClipboardProp> = ({ toCopy }) => {
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
    <div className="flex items-center relative bg-blue-100 text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 xl:text-base text-xs font-sans justify-between rounded-t-md">
      <span>点击选框输入内容</span>
      <button
        onClick={() => copyToClipboard(toCopy)}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-sm"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z"
            fill="currentColor"
          ></path>
        </svg>
        {isCopied ? "已复制!" : "复制到剪贴板"}
      </button>
    </div>
  );
};

export default CopyToClipboard;
