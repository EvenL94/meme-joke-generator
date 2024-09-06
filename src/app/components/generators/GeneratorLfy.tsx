"use client";

import React, { useState } from "react";
import { emptyContentSet, replaceScripts } from "@/app/functions";
import TextReplacement from "../TextReplacement";
import CopyToClipboard from "../CopyToClipboard";

// lfy for lao fo ye
const GeneratorLfy: React.FC = ({}) => {
  const contents: { [key: string]: string } = {
    charA: "人物A",
    exe: "怎么杀的",
  };

  const scripts =
    "清朝时期, (charA)陪慈禧太后下象棋。突然(charA)有了一步妙棋, 得意之下, 脱口而出了一句：“老佛爷, 我杀您的马”。这话一出口, 其他人都吓得脸色苍白。慈禧也是勃然大怒, 说道“你杀我的马, 我杀你全家”。说完, 慈禧就让人将(charA)拉出去(exe)了, 又灭了他的全家。";

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
          清朝时期,
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          陪慈禧太后下象棋。突然
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          有了一步妙棋, 得意之下, 脱口而出了一句：“老佛爷, 我杀你的马”。
        </p>
        <p>
          这话一出口, 其他人都吓得脸色苍白。慈禧也是勃然大怒, 说道“你杀我的马,
          我杀你全家”。说完, 慈禧就让人将
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          拉出去
          <TextReplacement
            label="exe"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          了, 又灭了他的全家。
        </p>
      </div>
    </div>
  );
};

export default GeneratorLfy;

// 清朝时期, (人物A)陪慈禧太后下象棋。突然(人物A)有了一步妙棋, 得意之下, 脱口而出了一句：“老佛爷, 我杀你的马”。
// 这话一出口, 其他人都吓得脸色苍白。慈禧也是勃然大怒, 说道“你杀我的马, 我杀你全家”。说完, 慈禧就让人将(人物A)拉出去(怎么杀的)了, 又灭了他的全家。
