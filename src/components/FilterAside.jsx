import React, { useState } from "react";
import "./FilterAside.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const filters = [
    { label: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
    { label: "OCCASION", options: ["Casual", "Festive", "Wedding", "Workwear", "Party"] },
    { label: "WORK", options: ["Printed", "Embroidered", "Woven", "Sequinned", "Zari"] },
    { label: "FABRIC", options: ["Cotton", "Silk", "Linen", "Georgette", "Chiffon", "Velvet"] },
    { label: "SEGMENT", options: ["Luxury", "Everyday", "Designer", "Fusion", "Traditional"] },
    { label: "SUITABLE FOR", options: ["Summer", "Winter", "All Seasons", "Travel", "Office"] },
    { label: "RAW MATERIALS", options: ["Organic Cotton", "Recycled Polyester", "Bamboo", "Wool", "Viscose"] },
    { label: "PATTERN", options: ["Solid", "Striped", "Checked", "Floral", "Abstract", "Polka Dots"] }
  ];
  

const FilterAside = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (label) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <aside className="filter-aside">
      <div className="filter-checkbox">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">CUSTOMIZBLE</label>
      </div>

      {filters.map((filter) => (
        <div className="filter-section" key={filter.label}>
          <div className="filter-header" onClick={() => toggleExpand(filter.label)}>
            <div className="filter-label">
              <strong>{filter.label}</strong>
              <span className="filter-subtext">All</span>
            </div>
            <span className="chevron">
              {expanded === filter.label ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </div>

          {expanded === filter.label && filter.options && (
            <div className="filter-options">
              <a href="#" className="unselect-link">Unselect all</a>
              {filter.options.map((option) => (
                <label key={option}>
                  <input type="checkbox" />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterAside;
