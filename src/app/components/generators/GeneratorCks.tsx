"use client";

import React, { useState } from "react";
import { emptyContentSet, replaceScripts } from "@/app/functions";
import TextReplacement from "../TextReplacement";
import CopyToClipboard from "../CopyToClipboard";

// cks for Chiang Kai-shek
const GeneratorCks: React.FC = ({}) => {
  const contents: { [key: string]: string } = {
    loc: "地点",
    hcharA: "历史人物A",
    hcharB: "历史人物B",
    hcharC: "历史人物C",
    hcharD: "历史人物D",
    hpower: "历史势力",
    hevent: "历史事件",
    area: "地区",
    power: "某势力",
    time: "某时间",
  };

  const scripts =
    "(loc)地方, 历代大规模征战五十余次, 是非曲直难以论说, 但史家无不注意到, 正是在这个古战场, 决定了多少代王朝的盛衰兴亡、此兴彼落, 所以古来就有问鼎中原之说。\n当年(hcharA)领革命军分三路会合(loc), 兴师北上, 光复(loc)的第二天, (hcharB)见大势已去, 宣告退位。(time), 也正是在(loc)城郊, 我有幸亲率数十万健儿征讨(hpower)的(hcharC)、(hcharD), 大获全胜！\n我不明白, 为什么大家都在谈论着项羽被困垓下, 仿佛这中原古战场对我们注定了凶多吉少。二十年前, 我从(loc)踏上征途, 开始了(hevent), (area)遂归于一统。(power)所到之处, 民众竭诚欢迎, 真可谓占尽天时。那种勃勃生机、万物竞发的境界, 犹在眼前。短短二十年之后, 这里竟至于一变而成为我们的葬身之地了么？\n不论怎么讲, 会战兵力, 是八十万对六十万, 优势在我！";

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
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          地方, 历代大规模征战五十余次, 是非曲直难以论说, 但史家无不注意到,
          正是在这个古战场, 决定了多少代王朝的盛衰兴亡、此兴彼落,
          所以古来就有问鼎中原之说。
        </p>
        <p>
          当年
          <TextReplacement
            label="hcharA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          领革命军分三路会合
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          , 兴师北上, 光复
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          的第二天,
          <TextReplacement
            label="hcharB"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          见大势已去, 宣告退位。
          <TextReplacement
            label="time"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          , 也正是在
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          城郊, 我有幸亲率数十万健儿征讨
          <TextReplacement
            label="hpower"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          的
          <TextReplacement
            label="hcharC"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          、
          <TextReplacement
            label="hcharD"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          , 大获全胜！
        </p>
        <p>
          我不明白, 为什么大家都在谈论着项羽被困垓下,
          仿佛这中原古战场对我们注定了凶多吉少。二十年前, 我从
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          踏上征途, 开始了
          <TextReplacement
            label="hevent"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          ,
          <TextReplacement
            label="area"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          遂归于一统。
          <TextReplacement
            label="power"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          所到之处, 民众竭诚欢迎, 真可谓占尽天时。那种勃勃生机、万物竞发的境界,
          犹在眼前。短短二十年之后, 这里竟至于一变而成为我们的葬身之地了么？
        </p>
        <p>不论怎么讲, 会战兵力, 是八十万对六十万, 优势在我！</p>
      </div>
    </div>
  );
};

export default GeneratorCks;

// (地点)地方, 历代大规模征战五十余次, 是非曲直难以论说, 但史家无不注意到, 正是在这个古战场, 决定了多少代王朝的盛衰兴亡、此兴彼落, 所以古来就有问鼎中原之说。
// 当年(历史人物A)领革命军分三路会合(地点), 兴师北上, 光复(地点)的第二天, (历史人物B)见大势已去, 宣告退位。(某时间), 也正是在(地点)城郊, 我有幸亲率数十万健儿征讨(历史势力)的(历史人物C)、(历史人物D), 大获全胜！
// 我不明白, 为什么大家都在谈论着项羽被困垓下, 仿佛这中原古战场对我们注定了凶多吉少。二十年前, 我从(地点)踏上征途, 开始了(历史事件), (地区)遂归于一统。(某势力)所到之处, 民众竭诚欢迎, 真可谓占尽天时。那种勃勃生机、万物竞发的境界, 犹在眼前。短短二十年之后, 这里竟至于一变而成为我们的葬身之地了么？
// 不论怎么讲, 会战兵力, 是八十万对六十万, 优势在我！
