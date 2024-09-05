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
    <button onClick={() => copyToClipboard(toCopy)}>
      {isCopied ? "Copied!" : "Copy to Clipboard"}
    </button>
  );
};

export default copyToClipboard;
