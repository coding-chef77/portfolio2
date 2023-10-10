import styled from "styled-components";
import cvData from "./resumeData";

const Erfaring = () => {
  return (
    <ErfaringContainer>
      <h2>Erfaring</h2>
      {cvData.erfaring.map((job, index) => (
        <JobTemplate key={index}>
          <header>
            <h4>{job.title}</h4>
            <div>
              <time dateTime={job.startDate.replace(".", "-")}>
                {job.startDate}
              </time>
              <span className="date-separator">-</span>
              <time dateTime={job.endDate.replace(".", "-")}>
                {job.endDate}
              </time>
            </div>
          </header>
          <p>{job.description.trim()}</p>
        </JobTemplate>
      ))}
    </ErfaringContainer>
  );
};

const ErfaringContainer = styled.section`
  margin-top: 25px;
  border-left: 2px solid #d8d8d8;
  padding-left: 20px;

  h2 {
    margin-bottom: 25px;
  }
`;

const JobTemplate = styled.article`
  // ... (Your styles here)
`;

export default Erfaring;
