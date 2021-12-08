<template>
  <div class="main mt-10">
    <!-- <v-row justify="center" class="mt-0">
      <img
        src="https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png"
        alt=""
        width="230px"
        height="150px"
      />
    </v-row> -->

    <v-row justify="center">
      <v-col class="mt-0" cols="10" sm="8" md="6" lg="4">
        <v-form ref="form">
          <v-card ref="form">
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
                v-model="userData.image"
                :rules="imageRule"
                label="File input"
                filled
                shaped
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block color="success" class="mt-2 mb-3" @click="submit"> Submit </v-btn>
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
            <span  class="link "
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

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
            this.$store.dispatch("loadUsers",this.userData);
                        this.$router.push({ name: "Checksign" });



       
      }
    },
  },
};
</script>
<style></style>
