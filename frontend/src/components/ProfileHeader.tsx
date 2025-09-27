import "../styles/Components.css";
import config from "../config/config.json";

import { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";

const ProfileHeader: React.FC = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false);
  const openProfileModal = () => {
    setIsOpenProfileModal(true);
  };
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
      <div className="profile-header-main">
        <img
          className="profile-img"
          src={config.main_profile.my_icon.icon_path}
          alt="ヘッダー用画像"
        />
        <div className="profile-header-info">
          <p className="profile-name">{config.main_profile.name}</p>
          <p className="main-profile-info">
            @{config.main_profile.name_en}
            {windowSize.width >= 620
              ? "・" + config.main_profile.name_kana
              : ""}
          </p>
          {windowSize.width > 900 ? (
            <>
              <p className="main-profile-info">
                <span className="main-profile-item-name">名前</span>：
                <span className="main-profile-item-value">
                  {config.main_profile.name}
                </span>
              </p>
              <p className="main-profile-info">
                <span className="main-profile-item-name">誕生日</span>：
                <span className="main-profile-item-value">
                  {config.main_profile.birthday}
                </span>
              </p>
              <p className="main-profile-info">
                <span className="main-profile-item-name">出身</span>：
                <span className="main-profile-item-value">
                  {config.main_profile.birthplace}
                </span>
              </p>
              <p className="main-profile-info">
                <span className="main-profile-item-name">専攻</span>：
                <span className="main-profile-item-value">
                  {config.main_profile.majoring}
                </span>
              </p>
              <p className="main-profile-info">
                <span className="main-profile-item-name">趣味</span>：
                <span className="main-profile-item-value">
                  {config.main_profile.hobbies.join("、")}
                </span>
              </p>
            </>
          ) : (
            <>
              <p className="main-profile-info">
                <span className="main-profile-item-name">名前</span>：
                <span className="main-profile-item-value">
                  {config.main_profile.name}
                </span>
                <label
                  className="more-info-label"
                  onClick={() => openProfileModal()}
                >
                  ...さらに表示
                </label>
              </p>
            </>
          )}

          <a
            className="main-profile-links"
            href={config.main_profile.links[0].url}
            target="_blank"
            rel="noreferrer"
          >
            {windowSize.width >= 700
              ? config.main_profile.links[0].url
              : config.main_profile.links[0].url.substring(0, 15) + "...."}
          </a>
        </div>
      </div>
      {isOpenProfileModal ? (
        <ProfileModal setIsOpenProfileModal={setIsOpenProfileModal} />
      ) : null}
    </>
  );
};

export default ProfileHeader;
