import React from 'react';
import './LogBook.css';

const logData = [
  { date: "May 1", task: "Solved array-based problems" },
  { date: "May 2", task: "subarray range queries" },
  { date: "May 3", task: "Practiced Two Pointer" },
  { date: "May 4", task: "Implemented insert and delete operations in a linked Lists" },
  { date: "May 5", task: "Solved Reverse Linked List and middle node problems" },
  { date: "May 6", task: "Practiced Linked List" },
  { date: "May 7", task: "Revised Sortings Time and space complexity" },
  { date: "May 8", task: "Trees Basics revised" },
  { date: "May 9", task: "Practiced Lowest Common Ancestor in BST & tree traversals" },
  { date: "May 10", task: "Learned basics of Stacks — solved Next Greater Element" },
  { date: "May 11", task: "Implemented Queue and used in BFS conceptually" },
  { date: "May 12", task: "HTML5 Fundamentals — tags, semantic elements, and structure" },
  { date: "May 13", task: "CSS Basics — box model, selectors, layout with flexbox" },
  { date: "May 14", task: "Dp Memoization Problem Solved" },
  { date: "May 15", task: "DOM manipulation using JS" },
  { date: "May 16", task: "Seive of Erastosthenes Revised" },
  { date: "May 17", task: "Portfolio Website" },
  { date: "May 18", task: "N/A" },
  { date: "May 19", task: "Worked on Portfolio website and did question of the day on leetcode" },
  { date: "May 20", task: "Completed Portfolio and pushed on Github and did question of the day on leetcode" },
  { date: "May 21", task: "N/A" },
  { date: "May 22", task: "Researched on AI engineers field and did a question on leetcode" },
  { date: "May 23", task: "Revised CSS for Frontend Interviews" },
];
let a= logData.length;


const LogBook = () => {
  return (
    <div className="logbook-container">
      <h1 className="logbook-title">Learning Log</h1>
      <div className="logbook-entries">
        {logData.slice().reverse().map((entry, index) => (
          <div key={index} className="logbook-entry">
            <h3>{entry.date}</h3>
            <p>{entry.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogBook;
