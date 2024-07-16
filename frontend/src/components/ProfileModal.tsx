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
