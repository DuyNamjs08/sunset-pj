import styled from "styled-components";
import BreadCum from "../../components/bread-cum/BreadCum";
import Questions from "../../components/questions/Questions";
const dataList = [
  {
    title: "Muốn bán điện cho ngành Điện thì liên hệ qua kênh nào?",
    content:
      "Thông tin về cách bán điện cho ngành điện thông qua các kênh chính thức...",
  },
  {
    title: "Điện lực thanh toán tiền mua điện mặt trời như thế nào?",
    content:
      "Điện lực sẽ thanh toán cho chủ đầu tư hàng tháng, theo hình thức chuyển khoản...",
  },
  {
    title: "Giá bán điện mặt trời mái nhà cho ngành Điện hiện nay như thế nào?",
    content:
      "Hệ thống điện mặt trời mái nhà không thể sản xuất ra điện vào ban đêm.Nếu không muốn sử dụng điện lưới vào thời điểm này, khách hàng có thể nghiên cứu trang bị thêm bộ lưu trữ điện (acquy). Tuy nhiên, chi phí sẽ cao hơn và thời gian hoàn vốn sẽ lâu hơn so với hệ thống nối lưới không có ắc quy lưu trữ. Đó là chưa kể, chi phí thay bộ lưu trữ điện (acquy) khi hết vòng đời sử dụng",
  },
];
const CauHoiThgGap = () => {
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
        <Questions data={dataList} />
      </div>
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
