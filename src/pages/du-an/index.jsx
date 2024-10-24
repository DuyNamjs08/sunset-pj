import styled from "styled-components";
import BreadCum from "../../components/bread-cum/BreadCum";
import ListPj2 from "../../components/danh-sach-pj/ListPj2";
import { useFinish } from "../../useQuery/useProject";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
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
  const { data, isLoading } = useFinish();
  return (
    <ProjectStyle>
      <BreadCum data={breadcrumbItems} />
      <div className="container">
        <ListPj2 data={data} />
      </div>
      <CommonLoadingModal isLoadingModalOpen={isLoading} />
    </ProjectStyle>
  );
};
export const ProjectStyle = styled.div`
  .site-project {
    padding: 50px 0;
  }
`;

export default DuAn;
