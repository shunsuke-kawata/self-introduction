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
            {config.main_profile.name} （{config.main_profile.name_kana}）
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">誕生日</span>：
            {config.main_profile.birthday} （{config.main_profile.age}歳）
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">出身</span>：
            {config.main_profile.birthplace}
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">所属</span>：
            {config.main_profile.university}
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">専攻</span>：
            {config.main_profile.majoring}
          </p>
          <p className="profile-modal-info">
            <span className="profile-item-name">趣味</span>：
            {config.main_profile.hobbies.join("、")}
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
            src="/batsu-icon.svg"
            alt="バツボタン"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
