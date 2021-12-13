<template>
  <div class="imgb">
    <Navbar/>

    <v-row justify="center" class="main mt-10">
      <v-col class="mt-0" cols="12" sm="8" md="6" lg="4">
        <v-form ref="form">
          <v-card ref="form">
            <v-card-text>
              <h1 class="text-center black--text">User Profile</h1>
               <v-list-item-avatar
        tile
        size="150"
        color="grey"
      ></v-list-item-avatar>

              <v-text-field
                ref="userName"
                v-model="userData.username"
                :rules="UsernameRule"
                :error-messages="errorMessages"
                label="Username"
                placeholder="John Doe"
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
                ref="age"
                v-model="userData.age"
                :type="'number'"
                :rules="numberRule"
                :error-messages="errorMessages"
                label="age"
                placeholder="18"
                required
              ></v-text-field>
              
              
            </v-card-text>
            <!-- <v-divider></v-divider> -->
           
            </v-card
          ><br />
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Navbar from "../views/Navbar.vue"
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
    Navbar,
  },
  data: () => ({
    userData: {
      email: "",
      username: "",
      password: "",
      age: "",
      image: "",
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

  
};
</script>
<style>
.imgb{
  background-image: url("https://images.pexels.com/photos/6044927/pexels-photo-6044927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  height: 100%;
}
</style>