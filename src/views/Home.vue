<template>
  <div style="margin-top:20px">
    <form @Submit.prevent="onSubmit" class="p-formgroup-inline">
      <div class="p-field">
        <!-- <form  @submit='onSubmit' class="p-field"> -->
        <label for="name" class="p-sr-only">Name</label>
        <InputText v-model="firstName" type="text" placeholder="First Name" />
      </div>
      <div class="p-field">
        <label for="name" class="p-sr-only">Name</label>
        <InputText v-model="lastName" type="text" placeholder="Last Name" />
      </div>
      <div class="p-field">
        <label for="Email" class="p-sr-only">Email</label>
        <InputText type="text" placeholder="Email" v-model="email" />
      </div>

      <div class="p-field">
        <label for="age" class="p-sr-only">Age</label>
        <InputText v-model="age" type="Number" placeholder="Age" />
      </div>
      <Button type="Submit" label="Submit" />
      <!-- </form> -->
    </form>
  </div>

  <Users
    @update-user="editUser"
    @remove-user="removeUser"
    v-bind:users="users"
  />
</template>

<script>
import AddUser from "../components/AddUser.vue";
import Users from "../components/Users.vue";
import axios from "axios";

export default {
  name: "Home",

  components: { Users, AddUser },

  data() {
    return {
      users: [],
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      age: "",
    };
  },
  async created() {
    this.getAll();
  },

  methods: {
    async getAll() {
      const { data } = await axios.get("/users");
      this.users = data;
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.age = "";
    },

    async onSubmit() {
      if (this.id == 0) {
        let url = "http://localhost:5000/users/post/";
        const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          age: this.age,
        };
        await axios
          .post(url, user)
          .then(() => {
            this.getAll();
          })
          .catch((err) => console.log(err));
      } else {
        const id = this.id;
        let url = `http://localhost:5000/users/${id}`;

        console.log("updating : ", id);
        const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          age: this.age,
        };
        console.log(user);
        this.users = await axios
          .patch(url, {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            age: this.age,
          })
          .then((response) => (this.users = response.users))
          .catch((err) => console.log(err));
        this.getAll();
      }
    },

    async removeUser(_id) {
      let url = "http://localhost:5000/users/";
      console.log("delete Presed with id", _id);
      if (confirm("Are you Sure to Remove this item"))
        this.users = await axios
          .delete(`${url}/${_id} `)
          .then((response) => (this.users = response.users));
      this.getAll();
    },
    async editUser(user) {
      this.id = user._id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.age = user.age;
    },
  },
};
</script>
