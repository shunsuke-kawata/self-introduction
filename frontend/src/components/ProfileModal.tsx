import config from "../config/config.json";
import "../styles/Components.css";

type newProfileModalProps = {
  setIsOpenProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProfileModal: React.FC<newProfileModalProps> = ({
  setIsOpenProfileModal,
}) => {
  const closeProfileModal = () => {
    setIsOpenProfileModal(false);
  };
  return (
    <>
      <div className="profile-modal-main">
        <p className="profile-modal-title">プロフィール</p>
        <div className="info-div">
          <p className="profile-modal-info">
            <span className="profile-item-name">名前</span>：
            <span className="profile-item-value">
              {config.main_profile.name} （{config.main_profile.name_kana}）
            </span>
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">誕生日</span>：
            <span className="profile-item-value">
              {config.main_profile.birthday} （{config.main_profile.age}歳）
            </span>
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">出身</span>：
            <span className="profile-item-value">
              {config.main_profile.birthplace}
            </span>
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">所属</span>：
            <span className="profile-item-value">
              {config.main_profile.university}
            </span>
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">趣味</span>：
            <span className="profile-item-value">
              {config.main_profile.hobbies.join("、")}
            </span>
          </p>
        </div>
        <p className="profile-modal-title">リンク</p>
        <div className="info-div">
          {config.main_profile.links.map((linkItem, index) => (
            <div className="urls-div">
              <img
                className="icons-img"
                src={linkItem.icon_path}
                alt={linkItem.alt_string}
              />
              <div>
                <p className="profile-modal-info links-label">
                  {linkItem.name}
                </p>
                <a
                  className="main-profile-links"
                  href={linkItem.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {linkItem.url}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* バツボタン */}
        <div className="close-button-div" onClick={() => closeProfileModal()}>
          <img
            className="batsu-icon-img"
            src="/assets/batsu-icon.svg"
            alt="バツボタン"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
