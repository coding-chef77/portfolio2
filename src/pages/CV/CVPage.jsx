import styled from "styled-components";
import Header from "./Header";
const CVPage = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
  background-color: #f7f9fc;
`;
export default CVPage;
