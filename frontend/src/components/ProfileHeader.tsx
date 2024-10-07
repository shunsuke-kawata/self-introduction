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
            {windowSize.width >= 610
              ? "・" + config.main_profile.name_kana
              : ""}
          </p>
          {windowSize.width >= 768 ? (
            <>
              <p className="main-profile-info">
                名前：{config.main_profile.name}
              </p>
              <p className="main-profile-info">
                誕生日：{config.main_profile.birthday}
              </p>
              <p className="main-profile-info">
                出身：{config.main_profile.birthplace}
              </p>
              <p className="main-profile-info">
                所属：{config.main_profile.majoring}
              </p>
              <p className="main-profile-info">
                趣味：{config.main_profile.hobbies}
              </p>
            </>
          ) : (
            <>
              <p className="main-profile-info">
                名前：{config.main_profile.name}
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
