import config from "../config/config.json";
const StackList = () => {
  return (
    <>
      {config.main_stacks.programming_languages.map(
        (programming_language, index) => (
          <div key={index}>
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
          </div>
        )
      )}
    </>
  );
};

export default StackList;
