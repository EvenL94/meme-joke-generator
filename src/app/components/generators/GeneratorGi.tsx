"use client";

import React, { useState } from "react";
import { emptyContentSet, replaceScripts } from "@/app/functions";
import TextReplacement from "../TextReplacement";
import CopyToClipboard from "../CopyToClipboard";

const GeneratorGi: React.FC = ({}) => {
  const contents: { [key: string]: string } = {
    title: "某作品",
    comp: "某公司",
    gtype: "游戏类型",
    loc: "某地点",
    sth: "某物品",
    char: "某角色",
    type: "某类型",
  };

  const scripts =
    "你说的对，但是《(title)》是由(comp)自主研发的一款全新(gtype)游戏。游戏发生在一个被称作「(loc)」的幻想世界，在这里，被神选中的人将被授予「(sth)」，导引(type)之力。你将扮演一位名为「(char)」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「(title)」的真相。";

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
          你说的对，但是《
          <TextReplacement
            label="title"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          》是由
          <TextReplacement
            label="comp"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          自主研发的一款全新
          <TextReplacement
            label="gtype"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          游戏。
        </p>
        <p>
          游戏发生在一个被称作「
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          」的幻想世界，在这里，被神选中的人将被授予「
          <TextReplacement
            label="sth"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          」，导引
          <TextReplacement
            label="type"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          之力。
        </p>
        <p>
          你将扮演一位名为「
          <TextReplacement
            label="char"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「
          <TextReplacement
            label="title"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          」的真相。
        </p>
      </div>
    </div>
  );
};

export default GeneratorGi;

// 你说的对，但是《(某作品)》是由(某公司)自主研发的一款全新(游戏类型)游戏。
// 游戏发生在一个被称作「(某地点)」的幻想世界，在这里，被神选中的人将被授予「(某物品)」，导引(某类型)之力。
// 你将扮演一位名为「(某角色)」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「(某作品)」的真相。
