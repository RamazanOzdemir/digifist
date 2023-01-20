import React, { FC } from "react";
import { Banner, Content } from "./containers";

const App: FC = () => {
  return (
    <main className="c-app">
      <Banner />
      <Content />
    </main>
  );
};

export default App;
