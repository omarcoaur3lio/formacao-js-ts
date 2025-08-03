import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { MainContent } from "../../components/MainContent";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
}
