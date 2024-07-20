import config from "../config/config.json";

const DevelopList = () => {
  return (
    <>
      <p className="stacks-division-title">アルバイト</p>
      {config.main_experiense.parttime_jobs.map((parttime_job, index) => (
        <div key={index} className="parttime-div">
          <p className="parttime-title">
            {index + 1}.{parttime_job.workplace}　（{parttime_job.start_date}
            〜）　
            <a
              className="parttile-links"
              href={parttime_job.url}
              target="_blank"
              rel="noreferrer"
            >
              {parttime_job.url}
            </a>
            <p className="profile-section-info experience-info">
              <span className="profile-section-item-name">使用技術</span>：
              <span className="profile-item-value">
                {parttime_job.using_techniques.join("、")}
              </span>
            </p>
            <p className="profile-section-info experience-info">
              <span className="profile-section-item-name">主な業務内容</span>
              <ul className="main-content-list">
                {parttime_job.main_contents.map((content, index) => (
                  <>
                    <li className="job-li">
                      <span className="profile-item-value">・{content}</span>
                    </li>
                  </>
                ))}
              </ul>
            </p>
          </p>
        </div>
      ))}

      <p className="stacks-division-title">ハッカソン</p>
    </>
  );
};

export default DevelopList;
