"use client";

import React, { useState } from "react";
import * as Generators from "./components/generators";

export default function Home() {
  const componentMap = new Map<string, JSX.Element>([
    [
      "whw",
      <div key="whw">
        <Generators.Whw />
      </div>,
    ],
    [
      "gi",
      <div key="gi">
        <Generators.Gi />
      </div>,
    ],
    [
      "lfy",
      <div key="lfy">
        <Generators.Lfy />
      </div>,
    ],
    [
      "hhk",
      <div key="hhk">
        <Generators.Hhk />
      </div>,
    ],
  ]);

  const [selectedComponentKey, setSelectedComponentKey] =
    useState<string>("whw");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponentKey(event.target.value);
  };

  return (
    <main>
      <div className="container mx-auto w-4/5">
        <h1 className="text-4xl font-bold text-gray-800 bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text py-4 px-6 rounded-lg shadow-lg">
          公式生成器
        </h1>
        <div className="block xl:flex">
          <div className="w-full xl:w-1/4 border border-blue-300 rounded-md p-4 mb-4 xl:mb-0">
            <p>请选择你的英雄：</p>
            <select
              value={selectedComponentKey}
              onChange={handleSelectChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 text-gray-700 bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              <option className="bg-white text-gray-700" value="whw">
                我是来玩梗的，你们要干什么!
              </option>
              <option className="bg-white text-gray-700" value="gi">
                你说的对，但是
              </option>
              <option className="bg-white text-gray-700" value="lfy">
                老佛爷您的马死了
              </option>
              <option className="bg-white text-gray-700" value="hhk">
                为什么要演奏春日影?!
              </option>
            </select>
          </div>
          <div className="w-full xl:w-3/4 border border-gray-300 rounded-md p-4">
            {componentMap.get(selectedComponentKey)}
          </div>
        </div>
      </div>
    </main>
  );
}
