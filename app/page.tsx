import React from "react";
import { ComponentExample } from "../components/component-example";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold">I am building something here</h1>
      <p>This is very confusing, but it's working so should be ok lol</p>
      <ComponentExample />
    </div>
  );
}