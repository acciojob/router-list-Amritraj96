import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = () => {
  // Hardcoded list of items as per requirements
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  return (
    <div>
      {/* Requirement: h1 with text 'Item List' */}
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          /* Requirement: exactly 3 li elements */
          <li key={item.id}>
            {/* Requirement: Clickable links */}
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
