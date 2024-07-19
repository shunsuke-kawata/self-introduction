import config from "../config/config.json";
const ProfileList = () => {
  return (
    <>
      <div className="profile-stack-container">
        <p className="stacks-division-title">基本プロフィール</p>
        <div className="profile-section">
          <p className="profile-section-info">
            <span className="profile-section-item-name">名前</span>：
            <span className="profile-item-value">
              {config.main_profile.name} （{config.main_profile.name_kana}）
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">誕生日</span>：
            <span className="profile-item-value">
              {config.main_profile.birthday} （{config.main_profile.age}歳）
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">出身</span>：
            <span className="profile-item-value">
              {config.main_profile.birthplace}
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">所属</span>：
            <span className="profile-item-value">
              {config.main_profile.university}
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">専攻</span>：
            <span className="profile-item-value">
              {config.main_profile.majoring}
            </span>
          </p>
        </div>
        <p className="stacks-division-title">＋α</p>
        <div className="profile-section">
          <p className="profile-section-info">
            <span className="profile-section-item-name">趣味</span>：
            <span className="profile-item-value">
              {config.main_profile.hobbies.join("、")}
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">
              好きなアーティスト
            </span>
            ：
            <span className="profile-item-value">
              {config.main_profile.favorite_artists.join("、")}
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">好きな芸人</span>：
            <span className="profile-item-value">
              {config.main_profile.favorite_comedians.join("、")}
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">好きなアイドル</span>：
            <span className="profile-item-value">
              {config.main_profile.favorite_idles.join("、")}
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">尊敬する人、推し</span>
            ：
            <span className="profile-item-value">
              {config.main_profile.respect_people.join("、")}
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">よく使う言語</span>：
            <span className="profile-item-value">
              {config.main_profile.favorite_languages.join("、")}
            </span>
          </p>
          <p className="profile-section-info">
            <span className="profile-section-item-name">よく使う技術</span>：
            <span className="profile-item-value">
              {config.main_profile.favorite_techniques.join("、")}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileList;
