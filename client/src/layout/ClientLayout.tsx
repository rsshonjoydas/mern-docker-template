import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";

const ClientLayout = ({ children }: any) => (
  <div className="container">
    <NavBar name={""} />
    <div>{children}</div>
    <Footer name={""} />
  </div>
);

export default ClientLayout;
