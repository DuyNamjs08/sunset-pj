import BreadCum from "../../components/bread-cum/BreadCum";
import CalendarCustom from "../../components/Datepicker";

import Lienhe from "../../components/lien-he-chung/Lienhe";
import useScrollToTopOnMount from "../../hooks/useScrollToTopOnMount";

const ContactPage = () => {
  useScrollToTopOnMount();
  const breadcrumbItems = [
    {
      title: "Trang chủ",
      path: "/",
    },
    {
      title: "Liên hệ",
      path: "",
    },
  ];
  return (
    <div>
      <BreadCum data={breadcrumbItems} />
      <div className="p-[20px] max-w-screen-xl mx-auto text-[14px] md:text-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold text-2xl uppercase">
              {/* {data ? data[0]?.title : ""}{" "} */}
            </h3>
            <ul className="">
              <li>
                {/* {data ? HTMLReactParser(urlify(data[0]?.textTitle)) : ""}{" "} */}
              </li>
            </ul>
            <iframe
              className="w-full h-[400px] pb-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.757908537281!2d105.805871!3d21.0023393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad370df77835%3A0xbbec3e92fa734ced!2zODUgxJAuIFbFqSBUcuG7jW5nIFBo4bulbmcsIFRoYW5oIFh1w6JuIFRydW5nLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpIDEyMzEwNQ!5e0!3m2!1svi!2s!4v1705201120455!5m2!1svi!2s"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <CalendarCustom />
          </div>
        </div>
        {/* phần liên hệ chung  */}
        <Lienhe />
      </div>
    </div>
  );
};

export default ContactPage;
