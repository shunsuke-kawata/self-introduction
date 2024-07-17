import config from "../config/config.json";
const StackList = () => {
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
                  {programming_language.language}
                </label>
              </div>
              <div className="language-desc">
                <label>{programming_language.description}</label>
              </div>
            </div>
          )
        )}
      </div>
      <p className="stacks-division-title">フレームワークなど</p>
    </>
  );
};

export default StackList;
