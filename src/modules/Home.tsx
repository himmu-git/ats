import Header from "./shared/Header";
import { Outlet } from "react-router-dom";
type Props = {
  isUserPages?: boolean;
};

const Home = ({ isUserPages = false }: Props) => {
  return (
    <div className="min-h-[100vh] bg-white">
      <Header isUserPages={isUserPages} />
      <div className="min-h-[90vh] p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
