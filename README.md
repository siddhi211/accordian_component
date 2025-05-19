# React Accordion Component

A reusable React accordion component that allows users to show/hide content sections. The component implements a "one section open at a time" pattern for better content organization and user experience.

## Technical Implementation

### Component Structure

Code Explanation
1. Imports
``` bash
import React, { useState } from 'react';
import './Accordion.css';
```
React, useState: Imports React and the useState hook for managing component state.
Accordion.css: Imports the CSS file for styling the accordion.
2. Component Definition
``` bash
const Accordion = ({ items }) => {
```
Accordion: A functional React component that takes an items prop (an array of objects, each with a title and content).
3. State Management
``` bash
const [activeIndex, setActiveIndex] = useState(null);
```
- activeIndex: Tracks which accordion section is currently open
  - null means all sections are closed
  - Otherwise, it holds the index of the open section
4. Click Handler
``` bash
const handleClick = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};
```

handleClick: When a header is clicked:
If it’s already open (activeIndex === index), it closes the section 
``` bash
(setActiveIndex(null)).
```
Otherwise, it opens the clicked section (setActiveIndex(index)).
5. Rendering the Accordion
``` bash
return (
  <div className="accordion">
    {items.map((item, index) => (
      <div key={index} className="accordion-item">
        <button
          className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {item.title}
          <span className="accordion-icon">
            {activeIndex === index ? '−' : '+'}
          </span>
        </button>
        <div
          className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
        >
          {item.content}
        </div>
      </div>
    ))}
  </div>
);
```

- items.map: Loops through each item in the items array to render a section.

## button (header):
- Displays the section title
- Shows a + if closed, − if open
- Clicking the button toggles the section open/closed
- Adds an active class if the section is open (for styling)

## div (content):
- Shows the section’s content.
- Adds an active class if the section is open (for styling).

  ![image](https://github.com/user-attachments/assets/0f624036-7e31-4748-a93e-310bbb461349)
