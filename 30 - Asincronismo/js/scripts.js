// https://jsonplaceholder.typicode.com/users

const printUserName = name => console.log(name);

const getUsers = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    printUserName(data[2]);
  } catch (error) {
    console.log(error);
  }

  // .then(response => response.json())
  // .then(data => console.log(data[0]))
  // .catch(error => console.log(error));
};

getUsers('https://jsonplaceholder.typicode.com/users');
