/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Pages from "./pages";
import Layout from "./layout/Layout";
import { RouterWeb } from "./router";

function App() {
  // eslint-disable-next-line react/prop-types
  const AuthAccount = ({ children }) => {
    // const location = useLocation();
    // const token = localStorage.getItem("accessToken");
    // return token ? (
    //   children
    // ) : (
    //   <Navigate to={"/login"} replace state={{ from: location }} />
    // );
    return children;
  };
  return (
    <>
      <Routes>
        <Route path="dang-ki" element={<Pages.Register />} />
        <Route path="dang-nhap" element={<Pages.Login />} />
        <Route
          path="/"
          element={
            <AuthAccount>
              <Layout>
                <Pages.Home />
              </Layout>
            </AuthAccount>
          }
        />
        {RouterWeb.map((item) => {
          if (!item.child) {
            return (
              <Route
                key={item.id}
                path={item.path}
                element={
                  <AuthAccount>
                    <Layout>{item.component} </Layout>{" "}
                  </AuthAccount>
                }
              />
            );
          } else if (item.child) {
            return (
              <Route
                key={item.id}
                path={item.path}
                element={
                  <AuthAccount>
                    <Layout>{item.component} </Layout>{" "}
                  </AuthAccount>
                }
              >
                {item.child.map((child, index) => {
                  return (
                    <Route
                      exact
                      path={child.path}
                      key={index}
                      element={child.component}
                    />
                  );
                })}
              </Route>
            );
          }
        })}

        <Route path="*" element={<Pages.NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
