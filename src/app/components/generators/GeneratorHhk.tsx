"use client";

import React, { useState } from "react";
import { emptyContentSet, replaceScripts } from "@/app/functions";
import TextReplacement from "../TextReplacement";
import CopyToClipboard from "../CopyToClipboard";

const GeneratorHhk: React.FC = ({}) => {
  const contents: { [key: string]: string } = {
    charA: "人物A",
    band: "某乐队",
    song: "某歌曲",
  };

  const scripts =
    "要是事先知道我就会阻止了\n曲目都结束了她们却突然开始演奏\n对不起没能阻止她们\n(人物A)你一定很生气吧\n你会生气我觉得是当然的\n但是请你相信我我们原本真的没计划演奏(某歌曲)\n真的很对不起\n我保证我不会再擅自演奏那首歌了\n我也会要其他人以后绝对不要再演奏那首歌了\n我们可以稍微谈谈吗\n我很珍惜(某乐队)\n所以(某歌曲)擅自被人拿去演奏我也和(人物A)一样难受\n希望你能了解我的心情\n拜托你约在哪里我都去\n我不得不组乐团的理由也会好好和你说清楚的\n只要你愿意当面听我说你就一定能理解的\n我是站在(人物A)你那边的\n我想见你\n";

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
        <p>要是事先知道我就会阻止了</p>
        <p>曲目都结束了她们却突然开始演奏</p>
        <p>对不起没能阻止她们</p>
        <p>
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          你一定很生气吧
        </p>
        <p>你会生气我觉得是当然的</p>
        <p>
          但是请你相信我我们原本真的没计划演奏
          <TextReplacement
            label="song"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
        </p>
        <p>真的很对不起</p>
        <p>我保证我不会再擅自演奏那首歌了</p>
        <p>我也会要其他人以后绝对不要再演奏那首歌了</p>
        <p>我们可以稍微谈谈吗</p>
        <p>
          我很珍惜
          <TextReplacement
            label="band"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
        </p>
        <p>
          所以
          <TextReplacement
            label="song"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          擅自被人拿去演奏我也和
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          一样难受
        </p>
        <p>希望你能了解我的心情</p>
        <p>拜托你约在哪里我都去</p>
        <p>我不得不组乐团的理由也会好好和你说清楚的</p>
        <p>只要你愿意当面听我说你就一定能理解的</p>
        <p>
          我是站在
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          你那边的
        </p>
        <p>我想见你</p>
        <p>😭</p>
      </div>
    </div>
  );
};

export default GeneratorHhk;

// 要是事先知道我就会阻止了
// 曲目都结束了她们却突然开始演奏
// 对不起没能阻止她们
// (小祥)你一定很生气吧
// 你会生气我觉得是当然的
// 但是请你相信我我们原本真的没计划演奏(春日影)
// 真的很对不起
// 我保证我不会再擅自演奏那首歌了
// 我也会要其他人以后绝对不要再演奏那首歌了
// 我们可以稍微谈谈吗
// 我很珍惜(CRYCHIC)
// 所以(春日影)擅自被人拿去演奏我也和 (小祥)一样难受
// 希望你能了解我的心情
// 拜托你约在哪里我都去
// 我不得不组乐团的理由也会好好和你说清楚的
// 只要你愿意当面听我说你就一定能理解的
// 我是站在 (小祥)你那边的
// 我想见你
