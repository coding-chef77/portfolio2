import styled from "styled-components";

const ProjectModalPage = () => {
  return (
    <Wrapper>
      <h3>ProjectPage with some projects</h3>
      <Project />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 400px;
  width: 400px;
  background-color: purple;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Project = styled.div`
  height: 100px;
  width: 100px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default ProjectModalPage;
