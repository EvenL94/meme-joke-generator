"use client";

import React, { useState } from "react";
import { emptyContentSet, replaceScripts } from "@/app/functions";
import TextReplacement from "../TextReplacement";
import CopyToClipboard from "../CopyToClipboard";

// mc for ming chao
const GeneratorMc: React.FC = ({}) => {
  const contents: { [key: string]: string } = {
    objA: "对象A",
    objB: "对象B",
    sth: "某事",
  };

  const scripts =
    "(objA)是这样的，(objB)只要全身心投入到(sth)中就可以，可是(objA)要考虑的事情就很多了。";

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
      <CopyToClipboard
        toCopy={replaceScripts(replacements, contents, scripts)}
      />
      <div>
        <p>
          <TextReplacement
            label="objA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          是这样的，
          <TextReplacement
            label="objB"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          只要全身心投入到
          <TextReplacement
            label="sth"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          中就可以，可是
          <TextReplacement
            label="objA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          要考虑的事情就很多了。
        </p>
      </div>
    </div>
  );
};

export default GeneratorMc;

// (对象A)是这样的，(对象B)只要全身心投入到(某事)中就可以，可是(对象A)要考虑的事情就很多了。
