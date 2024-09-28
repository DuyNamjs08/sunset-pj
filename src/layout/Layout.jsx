import Header from "./Header";
import MainHeader from "./MainHeader";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainHeader />
      {children}
    </div>
  );
};

export default Layout;
