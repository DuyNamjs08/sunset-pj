import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/hải đăng.png";

const Footer = () => {
  const footerData = {
    logo: {
      href: "https://Hải Đăng Solar Energy.com",
      src: logo,
      title: "logo",
      alt: "logo",
    },
    support: [
      {
        id: "menu-item-4565",
        href: "https://Hải Đăng Solar Energy.com/dieu-khoan-su-dung-website/",
        text: "Điều khoản sử dụng website",
      },
      {
        id: "menu-item-4810",
        href: "https://Hải Đăng Solar Energy.com/chinh-sach-bao-mat-thong-tin/",
        text: "Chính sách bảo mật thông tin",
        rel: "privacy-policy",
      },
      {
        id: "menu-item-6471",
        href: "https://Hải Đăng Solar Energy.com/chua-phan-loai/",
        text: "Chưa phân loại",
      },
      {
        id: "menu-item-4567",
        href: "https://Hải Đăng Solar Energy.com/lien-he/",
        text: "Liên hệ",
      },
      {
        id: "menu-item-4814",
        href: "https://Hải Đăng Solar Energy.com/sitemap_index.xml",
        text: "Sitemap",
      },
    ],
    products: [
      {
        href: "https://Hải Đăng Solar Energy.com/tam-pin-mat-troi/",
        text: "Tấm Pin Mặt Trời",
      },
      {
        href: "https://Hải Đăng Solar Energy.com/he-thong-dien-nang-luong-mat-troi-hoa-luoi-co-luu-tru/",
        text: "Hệ thống Điện mặt trời Có Lưu Trữ",
      },
      {
        href: "https://Hải Đăng Solar Energy.com/he-thong-dien-mat-troi-hoa-luoi-bam-tai-khong-luu-tru/",
        text: "Hệ thống Điện mặt trời Hòa Lưới",
      },
      {
        href: "https://Hải Đăng Solar Energy.com/san-pham/pin-luu-tru-dien-mat-troi-lifepo4-51-2v-100ah/",
        text: "Pin Lithium lưu trữ điện",
      },
    ],
    contact: [
      {
        text: "168/1 Hào Nam, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội",
        href: "javascript:void()",
      },
      {
        text: "Email: dienmattroi@Hải Đăng Solar Energy.com",
        href: "mailto:dienmattroi@Hải Đăng Solar Energy.com",
      },
      {
        text: "Hotline: 094 396 8848 - 094 6868 498",
        href: "tel:0943968848",
      },
      {
        text: "Mã số ĐKKD: 0105994863",
        href: "javascript:void()",
      },
    ],
  };
  return (
    <FooterStyle>
      <footer>
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer__content">
                  <a
                    href={footerData.logo.href}
                    title="Điện năng lượng mặt trời, điện mặt trời, Hải Đăng Solar Energy"
                  >
                    <img
                      src={footerData.logo.src}
                      title={footerData.logo.title}
                      alt={footerData.logo.alt}
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="footer__content">
                  <h3 className="title-footer">Hỗ trợ</h3>
                  <ul>
                    {footerData.support.map((item) => (
                      <li key={item.id} className="menu-item">
                        <a href={item.href} rel={item.rel}>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="footer__content">
                  <h3 className="title-footer">Sản Phẩm Nổi Bật</h3>
                  <ul>
                    {footerData.products.map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer__content">
                  <h3 className="title-footer">Liên Hệ</h3>
                  <ul>
                    {footerData.contact.map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="coppyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="coppy">
                  <span>
                    © 2012 - 2024 CÔNG TY CỔ PHẦN Hải Đăng Solar Energy. All
                    rights reserved.{" "}
                    <a
                      href="https://www.dmca.com/Protection/Status.aspx?ID=156baa22-fdd9-4b72-951e-975c946bb509&refurl=https://Hải Đăng Solar Energy.com/"
                      title="DMCA.com Protection Status"
                      className="dmca-badge"
                    >
                      {" "}
                      <img
                        src="https://images.dmca.com/Badges/dmca_protected_sml_120h.png?ID=156baa22-fdd9-4b72-951e-975c946bb509"
                        alt="DMCA.com Protection Status"
                      />
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mxh">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/Hải Đăng Solar Energy/"
                        title="mxh"
                      >
                        <FaFacebook aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/dienmattroiHải Đăng Solar Energy/"
                        title="mxh"
                      >
                        <FaInstagram aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/iHải Đăng Solar Energy"
                        title="mxh"
                      >
                        <FaTwitter aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCNzgUmMTlM1cYVbfxDgwa-A"
                        title="mxh"
                      >
                        <FaYoutube aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </FooterStyle>
  );
};
const FooterStyle = styled.div`
  .footer {
    padding: 60px 0 30px 0;
    border-top: 1px solid #f3f3f3;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-md-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .footer__content {
    margin-bottom: 30px;
  }
  .footer__content img {
    width: 200px;
  }
  .footer .title-footer {
    font-size: 20px;
    font-weight: 600;
    color: #2b3152;
    margin-bottom: 20px;
  }
  .footer ul li {
    padding-bottom: 15px;
  }
  .footer ul li a {
    font-size: 16px;
    color: #2b3152;
    display: block;
    line-height: 1.5;
    word-break: break-word;
  }
  .footer ul li a:hover {
    color: #093;
  }
  img,
  a {
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .coppyright {
    border-top: 1px solid #f2f2f2;
    padding: 20px 0;
  }
  .align-items-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: space-between;
  }
  .col-md-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .coppyright .coppy span {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 14px;
  }
  .coppyright .mxh ul li a {
    color: #777b93;
    font-size: 25px;
  }
  .mxh ul {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
export default Footer;
