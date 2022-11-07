import React from "react";

const PropertiesList = ({ properties }) => {
  console.log(properties);
  return (
    <ul>
      {properties.map((property) => (
        <p style={{ color: "black" }} key={property.id}>
          {property.title} Price: {property.price}
        </p>
      ))}
    </ul>
  );
};

export default PropertiesList;
