import Footer from "./Footer";
import NavBar from "./Navbar/NavBar";

const index = ({ children }: any) => (
  <div className="container">
    <NavBar name={""} />
    <div>{children}</div>
    <Footer name={""} />
  </div>
);

export default index;
