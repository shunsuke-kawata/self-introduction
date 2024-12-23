import { useEffect, useState } from "react";
import config from "../config/config.json";

const DevelopList = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // ウィンドウサイズの変更時にサイズを更新する関数
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // リスナーを追加
    window.addEventListener("resize", handleResize);

    // クリーンアップ時にリスナーを削除
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <p className="stacks-division-title">アルバイト</p>
      {config.main_experiense.parttime_jobs.map((parttime_job, index) => (
        <div key={index} className="parttime-div">
          <span>
            {index + 1}.{parttime_job.workplace}　（{parttime_job.start_date}
            〜）　
          </span>
          <a
            className="parttile-links"
            href={parttime_job.url}
            target="_blank"
            rel="noreferrer"
          >
            {windowSize.width >= 860
              ? parttime_job.url
              : parttime_job.url.substring(0, 15) + "...."}
          </a>
          <p className="section-info experience-info">
            <span className="profile-section-item-name">使用技術</span>：
            <span className="profile-item-value">
              {parttime_job.using_techniques.join("、")}
            </span>
          </p>
          <p className="section-info experience-info">
            <span className="profile-section-item-name">主な業務内容</span>
            <ul className="main-content-list">
              {parttime_job.main_contents.map((content, index) => (
                <>
                  <li className="job-li">
                    <span className="profile-item-value">・{content}</span>
                  </li>
                </>
              ))}
            </ul>
          </p>
        </div>
      ))}

      <p className="stacks-division-title">インターン</p>
      {config.main_experiense.interns.map((intern, index) => (
        <div key={index} className="intern-div">
          <span>
            {index + 1}.{intern.workplace}　（{intern.date}）
          </span>
          <p className="section-info experience-info">
            <span className="profile-section-item-name">使用技術</span>：
            <span className="profile-item-value">
              {intern.using_techniques.join("、")}
            </span>
          </p>
          <p className="section-info experience-info">
            <span className="profile-section-item-name">担当</span>：
            <span className="profile-item-value">{intern.position}</span>
          </p>
          <p className="section-info experience-info">
            <span className="profile-section-item-name">主な業務内容</span>
            <ul className="main-content-list">
              {intern.main_contents.map((content, index) => (
                <>
                  <li className="job-li">
                    <span className="profile-item-value">・{content}</span>
                  </li>
                </>
              ))}
            </ul>
          </p>
        </div>
      ))}

      <p className="stacks-division-title">ハッカソン</p>
      {config.main_experiense.hackathons.map((hackathon, index) => (
        <div key={index} className="hackathon-div">
          <span>
            {index + 1}.{hackathon.title}　（{hackathon.date}）
          </span>
          <p className="section-info experience-info">
            <span className="profile-section-item-name">作ったもの</span>：
            <span className="profile-item-value">{hackathon.product}</span>
          </p>
          <p className="section-info experience-info">
            <span className="profile-section-item-name">使用技術</span>：
            <span className="profile-item-value">
              {hackathon.using_techniques.join("、")}
            </span>
          </p>
          <p className="section-info experience-info">
            <span className="profile-section-item-name">担当</span>：
            <span className="profile-item-value">{hackathon.position}</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default DevelopList;
