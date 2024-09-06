"use client";

import React, { useState } from "react";
import { emptyContentSet, replaceScripts } from "@/app/functions";
import TextReplacement from "../TextReplacement";
import CopyToClipboard from "../CopyToClipboard";

// whw for wang hong wen
const GeneratorWhw: React.FC = ({}) => {
  const contents: { [key: string]: string } = {
    charA: "人物A",
    charB: "人物B",
    charC: "人物C",
    charD: "人物D",
    charE: "人物E",
    charF: "人物F",
    event: "事件",
    loc: "地点",
    sth: "某物",
    act: "干某事",
    cont: "某内容",
    ident: "某身份",
    res: "某结果",
  };

  const scripts =
    '(charA)是第一个被抓的, 当时(charA)接到通知要讨论(event), 他刚进(loc)时, 他的(sth)即被留在门外。(charA)感到事情有些不大对头, 但也没在意。当他快走进(loc)时, 专门对付他的(charC)立即走了过来。\n几名(charD)在(loc)里把他扭住的时候, (charA)惊慌失措, 一边大声说“我是来(act)的, 你们要干什么?" 一边拳打脚踢, 拼命进行反抗。(charD)个个身手不凡, (charA)很快就被他们制服, 被扭着双臂押到了(loc)里。\n在(loc)里, 等待他的(charE)把(cont)念了一遍。还没等(charE)念完, (charA)突然大吼一声, 挣脱(charD)的扭缚, 向五六步远地方的(charB) 猛扑过去。(charB)是(ident), (charA)一旦扑过去, 打伤了(charB), 这还了得? (charB)久经沙场, 不慌不忙的冷眼看着(charA)的疯狂举动。\n在这千钧一发之际, 一旁的(charF)反应迅速, 猛冲上去把(charA)扑倒, 死死地把他摁住, 给他捆了起来。在抓捕(charA)的成员过程中, (charA)是唯一被判(res)的人。(charA)被捕后, 对他的监管也最严格的。';

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
        <p>
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          感到事情有些不大对头，但也没在意。当他快走进
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          时，专门对付他的
          <TextReplacement
            label="charC"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          立即走了过来。
        </p>
        <p>
          几名
          <TextReplacement
            label="charD"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          在
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          里把他扭住的时候，
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          惊慌失措，一边大声说&quot;我是来
          <TextReplacement
            label="act"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          的，你们要干什么?&quot; 一边拳打脚踢，拼命进行反抗。
        </p>
        <p>
          <TextReplacement
            label="charD"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          个个身手不凡，
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          很快就被他们制服，被扭着双臂押到了
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          里。
        </p>
        <p>
          在
          <TextReplacement
            label="loc"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          里，等待他的
          <TextReplacement
            label="charE"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          把
          <TextReplacement
            label="cont"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          念了一遍。
        </p>
        <p>
          还没等
          <TextReplacement
            label="charE"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          念完，
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          突然大吼一声，挣脱
          <TextReplacement
            label="charD"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          的扭缚，向五六步远地方的
          <TextReplacement
            label="charB"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          猛扑过去。
        </p>
        <p>
          <TextReplacement
            label="charB"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          是
          <TextReplacement
            label="ident"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          ,
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          一旦扑过去，打伤了
          <TextReplacement
            label="charB"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          ，这还了得?
        </p>
        <p>
          <TextReplacement
            label="charB"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          久经沙场，不慌不忙的冷眼看着
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          的疯狂举动。
        </p>
        <p>
          在这千钧一发之际，一旁的
          <TextReplacement
            label="charF"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          反应迅速，猛冲上去把
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          扑倒，死死地把他摁住，给他捆了起来。
        </p>
        <p>
          在抓捕
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          的成员过程中，
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          是唯一被判
          <TextReplacement
            label="res"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          的人。
          <TextReplacement
            label="charA"
            contents={contents}
            replacements={replacements}
            onChange={handleChange}
          />
          被捕后，对他的监管也最严格的。
        </p>
      </div>
    </div>
  );
};

export default GeneratorWhw;

// (人物A)是第一个被抓的，当时(人物A)接到通知要讨论(事件/事情)，他刚进(地点)时，他的(某物)即被留在门外。
// ( 人物A)感到事情有些不大对头，但也没在意。当他快走进(地点)时，专门对付他的(人物C)立即走了过来。

// 几名(人物D)在(地点)里把他扭住的时候，( 人物A)惊慌失措，一边大声说“我是来(干某事)的，你们要干什么?"一边拳打脚踢，拼命进行反抗。
// (人物D)个个身手不凡，(人物A)很快就被他们制服，被扭着双臂押到了(地点)里。

// 在(地点)里，等待他的(人物E)把(某文件/内容)念了一遍。
// 还没等(人物E)念完，(人物A)突然大吼一声，挣脱(人物D)的扭缚，向五六步远地方的(人物B) 猛扑过去。
// (人物B)是(身份)，(人物A)一旦扑过去，打伤了(人物B)，这还了得?
// (人物B)久经沙场，不慌不忙的冷眼看着(人物A)的疯狂举动。

// 在这千钧一发之际，一旁的(人物F)反应迅速，猛冲上去把(人物A)扑倒，死死地把他摁住，给他捆了起来。
// 在抓捕(人物A)的成员过程中，(人物A)是唯一被判(刑罚)的人。(人物A)被捕后，对他的监管也最严格的。
