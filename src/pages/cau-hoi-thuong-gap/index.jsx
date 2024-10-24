import styled from "styled-components";
import BreadCum from "../../components/bread-cum/BreadCum";
import Questions from "../../components/questions/Questions";
import { useQuestions } from "../../useQuery/useQuestion";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import { StylePost } from "../../components/style";
const CauHoiThgGap = () => {
  const { data, isLoading } = useQuestions();
  const breadcrumbItems = [
    {
      title: "Trang chủ",
      path: "/",
    },
    {
      title: "Những câu hỏi về năng lượng mặt trời thường gặp nhất",
      path: "",
    },
  ];
  return (
    <QuestionStyle>
      <BreadCum data={breadcrumbItems} />
      <div className="container">
        <StylePost>
          <Questions data={data} />
        </StylePost>
      </div>
      <CommonLoadingModal isLoadingModalOpen={isLoading} />
    </QuestionStyle>
  );
};
const QuestionStyle = styled.div`
  .container {
    margin-top: 30px;
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export default CauHoiThgGap;
