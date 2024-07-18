import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import HomeList from "./components/HomeList";
import ProfileList from "./components/ProfileList";
import StackList from "./components/StackList";
import DevelopList from "./components/DevelopList";

const statusString: {
  [key in "home" | "profile" | "stack" | "develop"]: string;
} = {
  home: "ホーム",
  profile: "プロフィール",
  stack: "技術スタック",
  develop: "開発経験",
};

const App: React.FC = () => {
  const [currentPageStatus, setCurrentPageStatus] = useState<
    "home" | "profile" | "stack" | "develop"
  >("home");
  return (
    <div className="app">
      <Header />
      <ProfileHeader />
      <div className="page-status-change-div">
        {Object.entries(statusString).map(([key, value]) => (
          <label
            key={key}
            className={`status-change-label ${
              currentPageStatus ===
              (key as "home" | "profile" | "stack" | "develop")
                ? "checked-status"
                : "not-checked-status-change-label"
            }`}
            onClick={() =>
              setCurrentPageStatus(
                key as "home" | "profile" | "stack" | "develop"
              )
            }
          >
            {value}
          </label>
        ))}
      </div>
      {currentPageStatus === "home" ? (
        <HomeList />
      ) : currentPageStatus === "profile" ? (
        <ProfileList />
      ) : currentPageStatus === "stack" ? (
        <StackList />
      ) : currentPageStatus === "develop" ? (
        <DevelopList />
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
