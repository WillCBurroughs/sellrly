import React from 'react';
import DropDownActive from '../../images/DropDownActive.svg';
import DropDownInactive from '../../images/DropDownArrowInactive.svg';

const DesktopAccordionRow = ({ title, content, isActive, onClick }) => {
  return (
    <div className="accordion-item">
      <div
        className={`${isActive ? "accordion-title-Active" : "accordion-title"}`}
        onClick={onClick}
      >
        <div>{title}</div>
        <div>
          {isActive ? (
            <img className="DropDown" src={DropDownActive} alt="Drop Down Active" />
          ) : (
            <img className="DropDown" src={DropDownInactive} alt="Drop Down Inactive" />
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default DesktopAccordionRow;