import { Oval } from "react-loader-spinner";

function PageLoader() {
  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#112e5a"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        secondaryColor="#edf9ff"
      />
    </div>
  );
}

export default PageLoader;
