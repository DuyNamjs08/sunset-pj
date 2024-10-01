import { useState } from "react";
import DrawerComponent from "../components/drawer/Drawer";
import Footer from "../components/footer/Footer";
import Header from "./Header";
import MainHeader from "./MainHeader";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header />
      <MainHeader onclick={() => setOpen(true)} />
      {children}
      <Footer />
      <DrawerComponent open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Layout;
