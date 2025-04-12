// Define User interface
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = "https://jsonplaceholder.typicode.com/users";
// READ 
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL);
        return response.json();
    });
}
// CREATE
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        return response.json();
    });
}
// UPDATE 
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        return response.json();
    });
}
// DELETE
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Get all users
            const users = yield getUsers();
            console.log("All users:", users);
            // Create new user
            const newUser = yield createUser({
                name: "MUSTAFA HAADDAD",
                email: "mustafa.haaddad@example.com",
                username: "mustafa.haaddad",
            });
            console.log("Created user:", newUser);
            // Update user
            const updatedUser = yield updateUser(1, {
                name: "ail",
                email: "ail@example.com",
                username: "ail",
            });
            console.log("Updated user:", updatedUser);
            // Delete user
            yield deleteUser(1);
            console.log("User deleted successfully");
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
main();
export {};
