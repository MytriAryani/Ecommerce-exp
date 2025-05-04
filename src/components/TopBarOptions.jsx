import React from "react";
import "./TopBarOptions.css";
import { ChevronDown, ChevronLeft } from "lucide-react";

const TopBarOptions = () => {
  return (
    <div className="topbar">
      <div className="topbar-left-group">
        <div className="topbar-left">3425 ITEMS</div>
        <div className="topbar-middle">
          <a href="#" className="hide-filter-link">
            <ChevronLeft size={12} strokeWidth={1.5} />
            HIDE FILTER
          </a>
        </div>
      </div>
      <div className="topbar-right">
        <span>RECOMMENDED</span>
        <ChevronDown size={14} />
      </div>
    </div>
  );
};

export default TopBarOptions;
