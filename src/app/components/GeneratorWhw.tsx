"use client";

import React, { useState } from "react";
import { emptyContentSet } from "@/app/functions";
import TextReplacement from "./TextReplacement";

const GeneratorFactory: React.FC = ({}) => {
  const contents: { [key: string]: string } = {
    charA: "人物A",
    charB: "人物B",
    charC: "人物C",
    event: "事件",
    loc: "地点",
    sth: "某物",
  };

  const [replacements, setReplacements] = useState<{ [key: string]: string }>(
    emptyContentSet(contents)
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    setReplacements((prev) => ({ ...prev, [label]: event.target.value }));
  };

  return (
    <div>
      <p>
        <TextReplacement
          label="charA"
          contents={contents}
          replacements={replacements}
          onChange={handleChange}
        />
        是第一个被抓的，当时
        <TextReplacement
          label="charA"
          contents={contents}
          replacements={replacements}
          onChange={handleChange}
        />
        接到通知要讨论
        <TextReplacement
          label="event"
          contents={contents}
          replacements={replacements}
          onChange={handleChange}
        />
        ，他刚进
        <TextReplacement
          label="loc"
          contents={contents}
          replacements={replacements}
          onChange={handleChange}
        />
        时，他的
        <TextReplacement
          label="sth"
          contents={contents}
          replacements={replacements}
          onChange={handleChange}
        />
        即被留在门外。
      </p>
    </div>
  );
};

export default GeneratorFactory;
