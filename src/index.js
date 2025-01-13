import React from "react";
import ReactDOM from "react-dom/client";

// for rtl format comment out bootstrap.min.css and uncomment bootstrap.rtl.min.css
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../src/css/sass/stylesheet.scss";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// (function ($) {
//   "use strict";

//   $(".switcher-toggle").on("click", function () {
//     var div = $("#styles-switcher.left");
//     var divright = $("#styles-switcher.right");

//     if (divright.css("right") === "-202px") {
//       $(divright).animate({ right: "0px" }, 300).addClass("shadow");
//     } else {
//       $(divright).animate({ right: "-202px" }, 300).removeClass("shadow");
//     }

//     if (div.css("left") === "-202px") {
//       $(div).animate({ left: "0px" }, 300).addClass("shadow");
//     } else {
//       $(div).animate({ left: "-202px" }, 300).removeClass("shadow");
//     }
//   });
//   $("#styles-switcher ul li").on("click", function () {
//     var path = $(this).data("path");
//     $("#color-switcher").attr("href", path);
//     $(this).parent().find("li").removeClass("active");
//     $(this).addClass("active");
//   });

//   $("#reset-color").on("click", function () {
//     $("#color-switcher").removeAttr("href");
//     $("#styles-switcher ul li").parent().find("li").removeClass("active");
//   });
// })(jQuery);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
