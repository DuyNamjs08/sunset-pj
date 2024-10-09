import Pages from "../pages";
import Category from "./../pages/category";
import { Outlet } from "react-router-dom";
const TRANG_CHU = "/";
const GIOI_THIEU = "/cong-ty-dien-mat-troi-uy-tin/";
const SAN_PHAM = "/san-pham";
const DICH_VU = "/dich-vu";
const DU_AN = "/du-an";
const CAU_HOI_THUONG_GAP =
  "/nhung-cau-hoi-thuong-gap-ve-he-thong-dien-nang-luong-mat-troi/";
const TIN_TUC = "/tin-tuc-dien-mat-troi";
const LIEN_HE = "/lien-he/";
const DAT_LICH_KHAO_SAT = "/dat-lich-khao-sat/";
const DANG_NHAP = "/dang-nhap";
const DANG_KI = "/dang-ki";

export const RouterWeb = [
  {
    id: 1,
    path: TRANG_CHU,
    role: ["1", "2", "3"],
    component: <Pages.Home />,
  },
  {
    id: 2,
    path: GIOI_THIEU,
    role: ["1", "2", "3"],
    component: <Pages.GioiThieu />,
  },
  {
    id: 10,
    path: SAN_PHAM,
    role: ["1", "2", "3"],
    component: <Pages.Products />,
  },
  {
    id: 11,
    path: `${SAN_PHAM}/:id/`,
    role: ["1", "2", "3"],
    component: <Pages.DetailProduct />,
  },
  {
    id: 3,
    path: "/",
    role: ["1", "2", "3"],
    component: (
      <div>
        <Outlet />
      </div>
    ),
    child: [
      {
        path: "tam-pin-mat-troi/", // Đường dẫn tương đối
        component: <Category type="1" />,
      },
      {
        path: "inverter-hoa-luoi-dien-mat-troi/", // Đường dẫn tương đối
        component: <Category type="1" />,
      },
      {
        path: "he-thong-dien-mat-troi/", // Đường dẫn tương đối
        component: <Category type="1" />,
      },
      {
        path: "vat-tu-phu-kien-dien-mat-troi/", // Đường dẫn tương đối
        component: <Category type="1" />,
      },
      {
        path: "bo-luu-tru-dien-nang-luong-mat-troi/", // Đường dẫn tương đối
        component: <Category type="1" />,
      },
    ],
  },
  {
    id: 4,
    path: DICH_VU,
    role: ["1", "2", "3"],
    component: (
      <div>
        <Outlet />
      </div>
    ),
    child: [
      {
        path: "dich-vu-lap-dat-he-thong-dien-nang-luong-mat-troi-tron-goi/", // Đường dẫn tương đối
        component: <></>,
      },
      {
        path: "dich-vu-van-hanh-va-bao-tri-he-thong-dien-mat-troi-tron-goi/", // Đường dẫn tương đối
        component: <></>,
      },
      {
        path: "dich-vu-ve-sinh-tam-pin-nang-luong-mat-troi-tron-goi/", // Đường dẫn tương đối
        component: <></>,
      },
    ],
  },
  {
    id: 5,
    path: DU_AN,
    role: ["1", "2", "3"],
    component: <Pages.DuAn />,
  },
  {
    id: 6,
    path: CAU_HOI_THUONG_GAP,
    role: ["1", "2", "3"],
    component: <Pages.CauHoiThgGap />,
  },
  {
    id: 7,
    path: TIN_TUC,
    role: ["1", "2", "3"],
    component: (
      <div>
        <Outlet />
      </div>
    ),
    child: [
      {
        path: "tin-tuc-dien-mat-troi/", // Đường dẫn tương đối
        component: <></>,
      },
      {
        path: "chuyen-muc-xe-dien/", // Đường dẫn tương đối
        component: <></>,
      },
      {
        path: "kien-thuc-huu-ich/", // Đường dẫn tương đối
        component: <></>,
      },
    ],
  },
  {
    id: 8,
    path: LIEN_HE,
    role: ["1", "2", "3"],
    component: <Pages.ContactPage />,
  },
  {
    id: 9,
    path: DAT_LICH_KHAO_SAT,
    role: ["1", "2", "3"],
    component: <Pages.LichKhaoSat />,
  },
  {
    id: 10,
    path: DANG_NHAP,
    role: ["1", "2", "3"],
    component: <Pages.Login />,
  },
  {
    id: 11,
    path: DANG_KI,
    role: ["1", "2", "3"],
    component: <Pages.Register />,
  },
];
