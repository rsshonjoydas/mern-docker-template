import { Link } from "react-router-dom";
import SocialIcon from "../../components/social-icons/SocialIcon";
import IPageProps from "../../interfaces/page";
import items from "./footer-about-data";

const Footer: React.FunctionComponent<IPageProps> = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer className="container footer">
      <div className="row gap-2 p-1">
        {/* //? Shonjoy */}
        <div className="col-12-xs col-3-lg col-6-md">
          <h1 className="site-title mb-2">Shonjoy</h1>
          <p className="font-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolore
            cupiditate illum esse nihil quod quis quia voluptatum delectus!
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* //? Office Section */}
        <div className="col-12-xs col-3-lg col-6-md">
          <h1 className="site-title footer-title pb-2">
            Office
            <div className="underline mt-1">
              <span></span>
            </div>
          </h1>
          <p className="font-md">RS Road</p>
          <p className="font-md">Dhaka, Bangladesh</p>
          <p className="email-id font-1">rsshonjoydas@gmail.com</p>
          <h4>+880123456789</h4>
        </div>

        {/* //? About Us Section */}
        <div className="col-12-xs col-3-lg col-6-md">
          <h1 className="site-title footer-title pb-2">
            About Us
            <div className="underline mt-1">
              <span></span>
            </div>
          </h1>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="nav-text pt-1">
                <Link
                  to={item.path}
                  className="link text-gray text-hover-secondary font-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* //? Newsletter Section */}
        <div className="col-12-xs col-3-lg col-6-md">
          <h1 className="site-title footer-title pb-2">
            Newsletter
            <div className="underline mt-1">
              <span></span>
            </div>
          </h1>
          <form className="footer-form pb-1 display-f">
            <i className="footer-icon far fa-envelope"></i>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              required
            />
            <button type="submit">
              <i className="footer-icon fas fa-arrow-right"></i>
            </button>
          </form>

          {/* //? Social Icons */}
          <div className="display-f footer-social-icons">
            <SocialIcon />
          </div>
        </div>
      </div>

      <hr className="footer-hr mb-1" />

      {/* //? Copyright section */}
      <p className="copyright mb-2">
        Shonjoy © copyright {year.toString()} - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
