import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  const accordionItems = [
    {
      title: 'Section 1',
      content: 'This is the content for section 1. It can contain any text or HTML elements.'
    },
    {
      title: 'Section 2',
      content: 'This is the content for section 2. Click on different headers to see the accordion in action.'
    },
    {
      title: 'Section 3',
      content: 'This is the content for section 3. Only one section can be open at a time.'
    }
  ];

  return (
    <div className="App">
      <h1>React Accordion Component</h1>
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;
