import { useEffect, useState } from "react";
import DrawerComponent from "../components/drawer/Drawer";
import Footer from "../components/footer/Footer";
import Header from "./Header";
import MainHeader from "./MainHeader";
import { useDispatch, useSelector } from "react-redux";
import AlertCmp from "../components/alert/Alert";
import { resetMessage, saveDataProfile } from "../feature/homeSlice";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import zalo from "../assets/zalo.svg";
import { useInformation } from "../useQuery/useInformation";
import { FaAnglesUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const type = useSelector((state) => state.home.type);
  const showMess = useSelector((state) => state.home.showMess);
  const message = useSelector((state) => state.home.message);
  useEffect(() => {
    let timeoutId;
    if (showMess) {
      timeoutId = setTimeout(() => {
        dispatch(resetMessage());
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showMess]);
  const { data } = useInformation();
  useEffect(() => {
    if (data) {
      dispatch(saveDataProfile(data?.[0]));
    }
  }, [data]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header />
      <MainHeader onclick={() => setOpen(true)} />
      {children}
      <Footer />
      {showMess && (
        <div className="z-[1000000]  fixed right-4 bottom-10">
          <div className="w-[400px]">
            <AlertCmp type={type} message={message} />
          </div>
        </div>
      )}
      <DrawerComponent open={open} onClose={() => setOpen(false)} />
      <div
        className={`fixed z-50 right-0 bottom-0 transition-all
         w-[100px] flex flex-col items-center gap-2 ${
           isVisible ? "h-[240px]" : "h-[200px]"
         }`}
      >
        <div className=" cursor-pointer w-[50px] h-[50px] rounded-full bg-[#0172bc] flex items-center justify-center text-[30px] text-white">
          <Link to={"https://www.facebook.com/tungbkhust"} target="_blank">
            <FaFacebookMessenger />
          </Link>
        </div>
        <div className="animate-wiggle cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center bg-red-400 bg-opacity-70">
          <div className="w-[30px] h-[30px] rounded-full bg-[#dd3333] flex items-center justify-center text-[18px] text-white ">
            <a
              href={`tel:${data?.[0]?.phone?.replace(/\./g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>
        <div className="cursor-pointer">
          <a
            href={`https://zalo.me/${data?.[0]?.phone?.replace(/\./g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={zalo} alt="" />
          </a>
        </div>
        {isVisible && (
          <div
            onClick={scrollToTop}
            className=" cursor-pointer w-[50px] h-[50px] 
        rounded-[50%] bg-[#5dad46] hover:bg-[#0e9444] 
        transition-all flex items-center justify-center text-white"
          >
            <FaAnglesUp />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
