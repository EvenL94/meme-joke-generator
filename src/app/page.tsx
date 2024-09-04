"use client";

import React, { useState } from "react";
import GeneratorWhw from "./components/GeneratorWhw";

export default function Home() {
  // const [val, setVal] = useState("");
  // const handleChangeVal = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setVal(event.target.value);
  // };
  return (
    <div>
      <p> HOME</p>
      {/* <GeneratorFactory genContent={generators[0]} /> */}
      <GeneratorWhw />
      {/* <input placeholder="input 1" value={val} onChange={handleChangeVal} />
      <input placeholder="input 2" value={val} onChange={handleChangeVal} /> */}
    </div>
  );
}
