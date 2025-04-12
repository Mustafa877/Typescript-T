// Define User interface

import { User } from "./interfaces/User";


const API_URL = "https://jsonplaceholder.typicode.com/users";

// READ 
async function getUsers(): Promise<User[]> {
  const response = await fetch(API_URL);
  return response.json();
}

// CREATE
async function createUser(user: User): Promise<User> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

// UPDATE 
async function updateUser(id: number, user: Partial<User>): Promise<User> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

// DELETE
async function deleteUser(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}

async function main() {
  try {
    // Get all users
    const users = await getUsers();
    console.log("All users:", users);

    // Create new user
    const newUser = await createUser({
      name: "MUSTAFA HAADDAD",
      email: "mustafa.haaddad@example.com",
      username: "mustafa.haaddad",
    });
    console.log("Created user:", newUser);

    // Update user
    const updatedUser = await updateUser(1, {
      name: "ail",
      email: "ail@example.com",
      username: "ail",
    });
    console.log("Updated user:", updatedUser);

    // Delete user
    await deleteUser(1);
    console.log("User deleted successfully");
  }  catch (error) {
    console.error("Error:", error);
  }
}

 
main(); 

