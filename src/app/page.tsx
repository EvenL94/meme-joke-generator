"use client";

import React, { useState } from "react";
import GeneratorWhw from "./components/generators/GeneratorWhw";
import GeneratorGi from "./components/generators/GeneratorGi";
import GeneratorLfy from "./components/generators/GenerartorLfy";

export default function Home() {
  const componentMap = new Map<string, JSX.Element>([
    ["whw", <GeneratorWhw />],
    ["gi", <GeneratorGi />],
    ["lfy", <GeneratorLfy />],
  ]);

  const [selectedComponentKey, setSelectedComponentKey] =
    useState<string>("whw");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponentKey(event.target.value);
  };

  return (
    <main>
      <div className="container mx-auto w-4/5">
        <div className="flex">
          <div className="w-1/4  border border-blue-300 rounded-md p-4">
            <p>请选择你的英雄：</p>
            <select
              value={selectedComponentKey}
              onChange={handleSelectChange}
              className="block  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 text-gray-700 bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              <option className="bg-white text-gray-700" value="whw">
                "我是来玩梗的，你们要干什么!"
              </option>
              <option className="bg-white text-gray-700" value="gi">
                你说的对，但是
              </option>
              <option className="bg-white text-gray-700" value="lfy">
                “老佛爷您的马死了”
              </option>
            </select>
          </div>
          <div className="w-3/4 border border-gray-300 rounded-md p-4">
            {componentMap.get(selectedComponentKey)}
          </div>
        </div>
      </div>
    </main>
  );
}
