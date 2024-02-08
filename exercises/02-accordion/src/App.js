import { useState } from 'react';
import './App.css';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion items={faqs} />
    </div>
  );
}

function Accordion({ items }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div>
      {items.map((item, index) =>
        <AccordionItem
          num={index}
          title={item.title}
          // text={item.text}
          key={item.title}
          currOpen={currOpen}
          // onOpen={setCurrOpen} />
          onOpen={setCurrOpen} >
          {item.text}
        </AccordionItem>
      )}
      <AccordionItem
        num={22}
        title='Test 1'
        key='test 1'
        currOpen={currOpen}
        onOpen={setCurrOpen} >
        <p>Allow React Dev's to:</p>
        <ul>
          <li>break UI into Comp's</li>
          <li>make Reusable comp's</li>
          <li>plaace state efficiently</li>
        </ul>
      </AccordionItem>
    </div >
  );
}

// function AccordionItem({ num, title, text, currOpen, onOpen }) {
function AccordionItem({ num, title, currOpen, onOpen, children }) {

  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = (num === currOpen);

  function handleToggle() {
    // setIsOpen((isOpen) => !isOpen);  
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {/* {isOpen && <div className='content-box'>{text}</div>} */}
      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  );
}

