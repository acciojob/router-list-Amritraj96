import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  // Requirement: Use useParams to retrieve item ID
  const { id } = useParams();

  return (
    <div>
      {/* Requirement: h1 with text 'Item {id}' */}
      <h1>Item {id}</h1>
      {/* Requirement: p with text 'Description for Item {id}' */}
      <p>Description for Item {id}</p>
    </div>
  );
};

export default ItemDetail;
