import React, { useState } from 'react';
import DesktopAccordionRow from './DesktopAccordionRow';
import { accordionData } from '../../utils/content';
import '../../index.css'

function DesktopFAQSDropdown(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div className="accordion" id={props.id}>
        {accordionData.map(({ title, content }, index) => (
          <DesktopAccordionRow
            key={index}
            title={title}
            content={content}
            isActive={activeIndex === index}
            onClick={() => 
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default DesktopFAQSDropdown;