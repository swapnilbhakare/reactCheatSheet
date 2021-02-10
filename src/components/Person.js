import React from "react";

function Person({ person }) {
  return (
    <div>
      <h1>
        I'm {person.name}.I'm {person.age} years old and i know {person.course}
      </h1>
    </div>
  );
}
export default Person;
