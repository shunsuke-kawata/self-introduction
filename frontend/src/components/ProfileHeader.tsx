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
            {config.main_profile.domain}・{config.main_profile.birthday}・
            {config.main_profile.birthplace}出身
          </p>
          <p className="main-profile-info">
            所属：{config.main_profile.university}
            <label
              className="more-info-label"
              onClick={() => openProfileModal()}
            >
              ...さらに表示
            </label>
          </p>
          <a
            className="main-profile-links"
            href="https://github.com/shunsuke-kawata"
            target="_blank"
          >
            https://github.com/shunsuke-kawata
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
