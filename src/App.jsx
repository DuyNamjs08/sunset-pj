/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Pages from "./pages";
import Layout from "./layout/Layout";
import { RouterWeb } from "./router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
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
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
