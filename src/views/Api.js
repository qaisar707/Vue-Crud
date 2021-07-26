import { staticBlock } from "@babel/types";
import axios from "axios";
const url = "users";

class API {
  //getting ALL users
  static async gettAll() {
    const res = await axios.get(url);
    return res.data;
  }

  //geting user by id
  static async getUser(id) {
    const res = await axios.post(`${url}/${id}`);
    return res.data;
  }
  //inserting New User
  static async createUser(user) {
    const res = await axios.post(url, user);
    return res.data;
  }

  //Updating user
  static async editUser(id, user) {
    const res = await axios.patch(`${url}/${id}`, user);
    return res.data;
  }
  //removing user
  static async removeUser(id) {
    const res = await axios.delete(`    ${url}/${id}`);
    return res.data;
  }
}
export default API;
