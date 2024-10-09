import styled from "styled-components";
import BreadCum from "../../components/bread-cum/BreadCum";
import ListPj2 from "../../components/danh-sach-pj/ListPj2";
const breadcrumbItems = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Dự án đã làm",
    path: "",
  },
];
const DuAn = () => {
  return (
    <ProjectStyle>
      <BreadCum data={breadcrumbItems} />
      <ListPj2 />
    </ProjectStyle>
  );
};
const ProjectStyle = styled.div`
  .site-project {
    padding: 50px 0;
  }
`;

export default DuAn;
