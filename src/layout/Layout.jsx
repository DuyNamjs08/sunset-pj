import { useEffect, useState } from "react";
import DrawerComponent from "../components/drawer/Drawer";
import Footer from "../components/footer/Footer";
import Header from "./Header";
import MainHeader from "./MainHeader";
import { useDispatch, useSelector } from "react-redux";
import AlertCmp from "../components/alert/Alert";
import { resetMessage } from "../feature/homeSlice";

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
    </div>
  );
};

export default Layout;
