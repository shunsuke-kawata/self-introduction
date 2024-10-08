import config from "../config/config.json";

const StackList: React.FC = () => {
  return (
    <>
      <p className="stacks-division-title">プログラミング言語</p>
      <div className="stack-container">
        {config.main_stacks.programming_languages.map(
          (programming_language, index) => (
            <div key={index} className="stack-info-div">
              <div className="img-and-name">
                <img
                  className="stack-icon-img"
                  src={programming_language.icon_path}
                  alt={programming_language.alt_string}
                />
                <label className="language-name-label">
                  {programming_language.language}　☆
                  {programming_language.my_score}
                </label>
              </div>
              <div className="language-desc">
                <label>{programming_language.description}</label>
              </div>
            </div>
          )
        )}
      </div>
      <p className="stacks-division-title">フレームワーク</p>
      <div className="stack-container">
        {config.main_stacks.programming_frameworks.map(
          (programming_framework, index) => (
            <div key={index} className="stack-info-div">
              <div className="img-and-name">
                <img
                  className="stack-icon-img"
                  src={programming_framework.icon_path}
                  alt={programming_framework.alt_string}
                />
                <label className="language-name-label">
                  {programming_framework.language}　☆
                  {programming_framework.my_score}
                </label>
              </div>
              <div className="language-desc">
                <label>{programming_framework.description}</label>
              </div>
            </div>
          )
        )}
      </div>
      <p className="stacks-division-title">その他技術</p>
      <div className="stack-container">
        {config.main_stacks.programming_others.map(
          (programming_other, index) => (
            <div key={index} className="stack-info-div">
              <div className="img-and-name">
                <img
                  className="stack-icon-img"
                  src={programming_other.icon_path}
                  alt={programming_other.alt_string}
                />
                <label className="language-name-label">
                  {programming_other.language}　☆
                  {programming_other.my_score}
                </label>
              </div>
              <div className="language-desc">
                <label>{programming_other.description}</label>
              </div>
            </div>
          )
        )}
      </div>
      <p className="stacks-division-title">OS</p>
      <div className="stack-container">
        {config.main_stacks.using_os.map((using_os_element, index) => (
          <div key={index} className="stack-info-div">
            <div className="img-and-name">
              <img
                className="stack-icon-img"
                src={using_os_element.icon_path}
                alt={using_os_element.alt_string}
              />
              <label className="language-name-label">
                {using_os_element.language}　☆
                {using_os_element.my_score}
              </label>
            </div>
            <div className="language-desc">
              <label>{using_os_element.description}</label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StackList;
