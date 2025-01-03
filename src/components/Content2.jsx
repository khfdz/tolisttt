import React from "react";

const Content2 = ({ selectedCard }) => {
  if (!selectedCard) {
    return <div className="p-4 text-gray-500">Please select a card to view details.</div>;
  }

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-md p-6">
        <img className="w-1/3 mb-4" src={selectedCard.img} alt=""/>
        <p className="text-sm text-gray-500 mb-2">{selectedCard.link}</p>
        <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
        <p className="text-gray-700 mb-4">{selectedCard.description}</p>
        <p className="text-sm text-gray-500">{selectedCard.createdAt}</p>
        <p className="text-sm text-gray-500">{selectedCard.tag}</p>
      </div>
    </div>
  );
};

export default Content2;
