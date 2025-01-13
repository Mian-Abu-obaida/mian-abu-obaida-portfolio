

import {} from "jquery/dist/jquery.min.js";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ClassicHeader from "./components/ClassicHeader";
// import { commonConfig } from "./config/commonConfig";
import TermsAndConditions from "./components/TermsAndConditions";
import Disclaimer from "./components/Disclaimer";
import PreLoader from "./components/Preloader";
import { Tooltip } from "./components/Tooltip";
import { useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";

function App() {
  // const classicHeader = commonConfig.classicHeader;
  // const darkTheme = commonConfig.darkTheme;

  //for demo template
  const [color, setColor] = useState("");

  let navigate = useNavigate();

  const searchParams = useLocation().search;
  const classicHeader =
    new URLSearchParams(searchParams).get("classicHeader") === "true";
  const darkTheme =
    new URLSearchParams(searchParams).get("darkTheme") === "false";
  const bgImage = new URLSearchParams(searchParams).get("bgImage") === "true";
  const themeColor = new URLSearchParams(searchParams).get("themeColor");

  useEffect(() => {
    if (themeColor) {
      import("./css/scss/color-" + themeColor + ".css");
    }
  }, [themeColor]);

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    // Accessing scss variable "--background-color"
    // and "--text-color" using plain JavaScript
    // and changing the same according to the state of "darkTheme"
    $(".switcher-toggle").on("click", function () {
      var div = $("#styles-switcher.left");
      var divright = $("#styles-switcher.right");

      if (divright.css("right") === "-202px") {
        $(divright).animate({ right: "0px" }, 300).addClass("shadow");
      } else {
        $(divright).animate({ right: "-202px" }, 300).removeClass("shadow");
      }

      if (div.css("left") === "-202px") {
        $(div).animate({ left: "0px" }, 300).addClass("shadow");
      } else {
        $(div).animate({ left: "-202px" }, 300).removeClass("shadow");
      }
    });
    $("#styles-switcher ul li").on("click", function () {
      var path = $(this).data("path");
      $("#color-switcher").attr("href", path);
      $(this).parent().find("li").removeClass("active");
      $(this).addClass("active");
    });

    $("#reset-color").on("click", function () {
      $("#color-switcher").removeAttr("href");
      $("#styles-switcher ul li").parent().find("li").removeClass("active");
    });
  }, []);

  const redirect = (redirectColor) => {
    let queryString = "";
    if (classicHeader) queryString += "?classicHeader=" + classicHeader;
    else queryString += "?classicHeader=false";

    if (darkTheme) queryString += "&darkTheme=" + darkTheme;
    else queryString += "&darkTheme=false";

    if (bgImage) queryString += "&bgImage=" + bgImage;
    else queryString += "&bgImage=false";

    if (themeColor) queryString += "&themeColor=" + redirectColor;
    else queryString += "&themeColor=" + redirectColor;

    // navigate(`/${queryString}`)
    console.log(window.location);

    window.location.href =
      window.location.origin + window.location.pathname + queryString;
  };

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <>
      <div className={classicHeader ? "" : "side-header"}>
        {isLoading && <PreLoader></PreLoader>}

        <div id="main-wrapper">
          {classicHeader ? (
            <ClassicHeader handleNavClick={handleNavClick}></ClassicHeader>
          ) : (
            <Header handleNavClick={handleNavClick}></Header>
          )}

          <div id="content" role="main">
            <Home
              classicHeader={classicHeader}
              darkTheme={darkTheme}
              handleNavClick={handleNavClick}
              bgImage={bgImage}
            ></Home>
            <AboutUs
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></AboutUs>
            <Services
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Services>
            <Resume
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Resume>
            <Portfolio
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Portfolio>
            <Testimonials
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Testimonials>
            <Contact
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            ></Contact>
          </div>
          <Footer
            classicHeader={classicHeader}
            darkTheme={darkTheme}
            handleNavClick={handleNavClick}
          ></Footer>
        </div>
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>

        {/* Styles Switcher */}
        <div id="styles-switcher" className="right">
          <h2 className="text-3">Color Switcher</h2>
          <hr />
          <ul>
            <li
              className="indigo"
              data-bs-toggle="tooltip"
              title="Indigo"
              data-path="./css/scss/color-indigo.css"
              onClick={() => {
                redirect("indigo");
              }}
            />
            <li
              className="blue"
              data-bs-toggle="tooltip"
              title="Blue"
              data-path="./css/scss/color-blue.css"
              onClick={() => {
                redirect("blue");
              }}
            />
            <li
              className="purple"
              data-bs-toggle="tooltip"
              title="Purple"
              data-path="./css/scss/color-purple.css"
              onClick={() => {
                redirect("purple");
              }}
            />
            <li
              className="cyan"
              data-bs-toggle="tooltip"
              title="Cyan"
              data-path="./css/scss/color-cyan.css"
              onClick={() => {
                redirect("cyan");
              }}
            />
            <li
              className="red"
              data-bs-toggle="tooltip"
              title="Red"
              data-path="./css/scss/color-red.css"
              onClick={() => {
                redirect("red");
              }}
            />
            <li
              className="pink"
              data-bs-toggle="tooltip"
              title="Pink"
              data-path="./css/scss/color-pink.css"
              onClick={() => {
                redirect("pink");
              }}
            />
            <li
              className="green"
              data-bs-toggle="tooltip"
              title="Green"
              data-path="./css/scss/color-green.css"
              onClick={() => {
                redirect("green");
              }}
            />
            <li
              className="yellow"
              data-bs-toggle="tooltip"
              title="Yellow"
              data-path="./css/scss/color-yellow.css"
              onClick={() => {
                redirect("yellow");
              }}
            />
            <li
              className="orange"
              data-bs-toggle="tooltip"
              title="Orange"
              data-path="./css/scss/color-orange.css"
              onClick={() => {
                redirect("orange");
              }}
            />
            <li
              className="brown"
              data-bs-toggle="tooltip"
              title="Brown"
              data-path="./css/scss/color-brown.css"
              onClick={() => {
                redirect("brown");
              }}
            />
          </ul>
          <button
            className="btn btn-dark btn-sm w-100 border-0 fw-400 rounded-0 shadow-none"
            id="reset-color"
            onClick={() => {
              redirect("");
            }}
          >
            Reset Default Teal
          </button>
          <button className="btn switcher-toggle">
            <i className="fas fa-cog" />
          </button>
        </div>
        {/* Styles Switcher End */}

        <TermsAndConditions darkTheme={darkTheme}></TermsAndConditions>
        <Disclaimer darkTheme={darkTheme}></Disclaimer>
      </div>
    </>
  );
}

export default App;

