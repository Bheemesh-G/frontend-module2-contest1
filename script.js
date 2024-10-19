/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developerArray = arr
    .map((emp) => {
      if (emp.profession === "developer") {
        return emp;
      }
    })
    .filter((emp) => emp !== undefined);

  console.log(developerArray);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newElement = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  arr.push(newElement);
  console.log(newElement);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((emp) => {
    if (emp.profession === "admin") {
      arr.pop(emp);
    }
  });

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [];
  const obj1 = {
    id: 5,
    name: "praveen",
    age: "25",
    profession: "Backend Developer",
  };
  const obj2 = {
    id: 6,
    name: "Ganesh",
    age: "25",
    profession: "Frontend Developer",
  };
  const obj3 = {
    id: 7,
    name: "Sushank",
    age: "25",
    profession: "PS Engineer",
  };

  newArray.push(obj1);
  newArray.push(obj2);
  newArray.push(obj3);

  const concatArray = arr.concat(newArray);

  console.log(concatArray);
}
