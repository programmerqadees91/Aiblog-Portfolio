"use client"
import React from 'react';
import parser from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  // Function to extract h2 headings from the HTML content
  const extractHeadings = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h2')).map((heading) => ({
      text: heading.textContent,
      id: heading.id
    }));
    return headings;
  };

  const headings = extractHeadings(htmlContent);

  return (
    <div className="on-this-page absolute top-24 right-1/4">
      <h2 className='text-md font-bold my-2'>On This Page</h2>
      <ul className='text-sm space-y-1'>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;