<template>
  <div>
    <Navbar/>

    <v-row justify="center" class="main mt-10">
      <v-col class="mt-0" cols="10" sm="8" md="6" lg="4">
        <v-form ref="form">
          <v-card ref="form">
            <v-card-text>
              <h1 class="text-center black--text">Update Profile</h1>

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
               <!-- <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar> -->
              <v-file-input
                v-model="userData.image"
                :rules="imageRule"
                label="File input"
                filled
                shaped
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-card-text>
            <!-- <v-divider></v-divider> -->
            <v-card-actions>
              <v-btn block color="success" class="mx-auto"  > Update Profile </v-btn>
              <v-spacer></v-spacer>
           
            </v-card-actions>
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
<style></style>
