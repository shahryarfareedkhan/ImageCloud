<template>
  <div class="imgb main">
    <v-row justify="center">
      <v-col class="mt-12" cols="10" sm="8" md="6" lg="4">
        <v-form @submit.prevent="submitHandler" ref="form">
          <v-card>
            <v-card-text>
              <h1 class="text-center black--text">Signup</h1>

              <v-text-field
                ref="name"
                v-model="userData.name"
                :rules="UsernameRule"
                :error-messages="errorMessages"
                label="Name"
                placeholder="Shahryar"
                required
              ></v-text-field>

              <v-text-field
                ref="email"
                v-model="userData.email"
                :rules="emailRule"
                :error-messages="errorMessages"
                label="Email"
                placeholder="xyz@gmail.com"
                required
              ></v-text-field>

              <v-text-field
                ref="password"
                v-model="userData.password"
                :type="'Password'"
                :rules="passwordRule"
                :error-messages="errorMessages"
                label="Password"
                placeholder="***"
                required
              ></v-text-field>
              <v-text-field
                ref="password"
                v-model="userData.password_confirmation"
                :type="'Password'"
                :rules="passwordRule"
                :error-messages="errorMessages"
                label="Confirm Password"
                placeholder="***"
                required
              ></v-text-field>

              <v-text-field
                ref="age"
                v-model="userData.age"
                :type="'number'"
                :rules="numberRule"
                :error-messages="errorMessages"
                label="age"
                placeholder="18"
                required
              ></v-text-field>
              <v-file-input
               v-on:change="storeImg"
               
                v-model="userData.profile_image"
                :rules="imageRule"
                label="File input"
                filled
                shaped
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block type="submit" color="success" class="mt-2 mb-3">
                Submit
              </v-btn>
              <!-- <v-spacer></v-spacer> -->
              <!--         
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition> -->
            </v-card-actions>
            <span class="link"
              >Sign in to your Account
              <router-link to="/Login">login</router-link></span
            > </v-card
          ><br />
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import axios from "axios";
import {
  UsernameRule,
  emailRule,
  firstnameRule,
  lastnameRule,
  passwordRule,
  numberRule,
  imageRule,
} from "./validation/validation.js";

export default {
  components: {
    // Navbar,
  },
  data: () => ({
    userData: {
      email: "",
      name: "",
      password: "",
      password_confirmation:"",
      age: "",
      profile_image:"",
      // profile_picture: "",
    },
    errorMessages: "",
    formHasErrors: false,
    emailRule: emailRule,
    UsernameRule: UsernameRule,
    firstnameRule: firstnameRule,
    lastnameRule: lastnameRule,
    passwordRule: passwordRule,
    numberRule: numberRule,
    imageRule: imageRule,
  }),

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    storeImg(event) {
      let vm = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          vm.userData.profile_image = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
    // profpic(event) {
    //   let vm = this;
    //   const reader = new FileReader();
    //   reader.addEventListener(
    //     "load",
    //     function () {
    //       vm.userData.profile_picture = reader.result;
    //       console.log(vm.userData.profile_picture)
    //     },
    //     false
    //   );
    //   reader.readAsDataURL(event);
    // },
    submitHandler() {
      if (this.$refs.form.validate()) {
        alert("hel")
        this.$store.dispatch("loadUser", this.userData);
        // this.$router.push({ name: "Checksign" });
      }
    },
    // loadUsers() {
    //   axios.post("", this.userData).then((res) => {
    //     let data = res.data;
    //     console.log(data);
    //   });
    // },
  },
};
</script>
<style>
.imgb {
  background-image: url("https://images.pexels.com/photos/6044927/pexels-photo-6044927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  height: 100%;
}
</style>
