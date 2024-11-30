import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import ProfileList from "./components/ProfileList";
import StackList from "./components/StackList";
import DevelopList from "./components/DevelopList";

const statusString: {
  [key in "profile" | "stack" | "develop"]: string;
} = {
  profile: "プロフィール",
  stack: "技術スタック",
  develop: "開発経験",
};

const App: React.FC = () => {
  const [currentPageStatus, setCurrentPageStatus] = useState<
    "profile" | "stack" | "develop"
  >("profile");
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
              setCurrentPageStatus(key as "profile" | "stack" | "develop")
            }
          >
            {value}
          </label>
        ))}
      </div>
      {currentPageStatus === "profile" ? (
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
