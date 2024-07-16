import "../styles/Components.css";
import config from "../config/config.json";

import { useState } from "react";
import ProfileModal from "./ProfileModal";

const ProfileHeader: React.FC = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false);
  const openProfileModal = () => {
    setIsOpenProfileModal(true);
  };
  return (
    <>
      <div className="profile-header-main">
        <img
          className="profile-img"
          src="/profile-header-img.png"
          alt="ヘッダー用画像"
        />
        <div className="profile-header-info">
          <p className="profile-name">{config.main_profile.name}</p>
          <p className="main-profile-info">
            @{config.main_profile.name_en}・{config.main_profile.name_kana}
          </p>
          <p className="main-profile-info">
            名前：{config.main_profile.name}
            <label
              className="more-info-label"
              onClick={() => openProfileModal()}
            >
              ...さらに表示
            </label>
          </p>
          <a
            className="main-profile-links"
            href={config.main_profile.links[0].url}
            target="_blank"
            rel="noreferrer"
          >
            {config.main_profile.links[0].url}
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
