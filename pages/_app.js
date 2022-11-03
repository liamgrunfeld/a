import "../styles/globals.css";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-end-11">
          <div >
            <Navbar></Navbar>
          </div>
          <div className="">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
