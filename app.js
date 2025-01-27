//Simple in-memory array

let users = [
  { id: 1, name: "Ajay", email: "ajay@gmail.com" },
  { id: 2, name: "raj", email: "aj@gmail.com" },
];

//generate uniue id for new entries
function generateId() {
  return users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
}

//CREATE add new user

function newUser(name, email) {
  const userAvailable = { id: generateId(), name, email };
  users.push(userAvailable);
  console.log("User created:", userAvailable);
}

//Fetch all users

function getAllUsers() {
  console.log("All Users :", users);
}

//Update user by userId

function updateUser(id, updatedDetails) {
  const user = users.find((user) => user.id == id);
  if (user) {
    Object.assign(user, updatedDetails);
    console.log("User Updated : ", user);
  } else {
    console.log(`User with Id ${id} not found `);
  }
}

// remove user by id

function deleteUser(id) {
  const index = users.find((user) => user.id == id);
  if (index !== -1) {
    const removedUser = users.splice(index, 1);
    console.log("user deleted : ", removedUser[0]);
  } else {
    console.log(`user id ${id} not found`);
  }
}

// TESTING CRUD OPERATIONS
console.log("Initial Users:");
getAllUsers();

console.log("\ncreating new user...");
newUser("nandini", "nandini@gmail.com");
getAllUsers();

console.log("\nUpdate user...");
updateUser(1, { name: "Nandini", email: "nandini@gmail" });
getAllUsers();

deleteUser(1);
getAllUsers();
