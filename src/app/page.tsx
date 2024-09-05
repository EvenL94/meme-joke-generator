"use client";

import React, { useState } from "react";
import GeneratorWhw from "./components/generators/GeneratorWhw";

export default function Home() {
  const componentMap = new Map<string, JSX.Element>([
    ["whw", <GeneratorWhw />],
  ]);

  const [selectedComponentKey, setSelectedComponentKey] =
    useState<string>("whw");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponentKey(event.target.value);
  };

  return (
    <div>
      <select value={selectedComponentKey} onChange={handleSelectChange}>
        <option value="whw">"我是来玩梗的，你们要干什么!"</option>
        {/* <option value="B">Component B</option>
        <option value="C">Component C</option> */}
      </select>

      <div>{componentMap.get(selectedComponentKey)}</div>
    </div>
  );
}
