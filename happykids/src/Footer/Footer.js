import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <h3 className="text-happy">happy kids</h3>
      <div className="icon">
        <SocialIcon
          style={{ height: 40, width: 40, margin: 10 }}
          url="https://www.facebook.com/wix"
        />
        <SocialIcon
          style={{ height: 40, width: 40, margin: 10 }}
          url="https://www.pinterest.com/wixcom/"
        />
        <SocialIcon
          style={{ height: 40, width: 40, margin: 10 }}
          url="https://www.instagram.com/wix/"
        />
      </div>
    </div>
  );
}

export default Footer;
