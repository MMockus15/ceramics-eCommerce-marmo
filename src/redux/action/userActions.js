import db from "./db.json";
import { login } from "./userSlice";

export const loginUser = (username, password) => async dispatch => {
  try {
    const user = db.users.find(user => user.username === username);
    if (!user) {
      throw new Error("Invalid credentials");
    }
    if (user.password !== password) {
      throw new Error("Invalid credentials");
    }
    dispatch(login(user));
  } catch (error) {
    console.error(error);
  }
};
