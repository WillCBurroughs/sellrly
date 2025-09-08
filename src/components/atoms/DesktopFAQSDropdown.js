import React, { useState } from 'react';
import DesktopAccordionRow from './DesktopAccordionRow';
import { accordionData } from '../../utils/content';
import '../../index.css'

function DesktopFAQSDropdown(props) {

    return (
    <div>
      <div className="accordion" id = {props.id}>
        {accordionData.map(({ title, content }) => (
          <DesktopAccordionRow title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default DesktopFAQSDropdown;