import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "swapnil", age: "22", course: "React" },
    { id: 2, name: "mango dolly", age: "21", course: "js" },
    { id: 3, name: "Nitin ", age: "22", course: "HTML" },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;

  //   const names = ["swap", "mangodolly", "nitin"];
  //   const list = names.map((name) => <h2>{name}</h2>);
}

export default NameList;
