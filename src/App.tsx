import { FC } from "react";
import "./App.css";
import FollowUp from "./components/followUp.tsx";

const App: FC = () => {
  return (
    <>
      <main>
        <h1>Hi there!</h1>
        <FollowUp />
      </main>
    </>
  );
}

export default App;
