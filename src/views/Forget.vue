<template>
  <v-app>
    <div class="backgruond ">
      
      <v-main class="d-flex justify-center align-center mt-23 mb-9">
        <v-col cols="10" md="6" sm="6" lg="4" class="mx-auto">
          <v-card class="pa-4 mt-10">
            <div class="text-center">

              <h2 class="black--text">Forget Password</h2>
            </div>
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                <v-text-field
                  v-model="user.email"
                  :rules="emailRule"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  prepend-inner-icon="mdi-account"
                  required
                />
               
              </v-card-text>
              
              <v-card-actions class="justify-center">
                <v-btn :loading="loading" type="submit" color="success">
                  <span class="white--text px-8">Submit Email</span>
                </v-btn>
              </v-card-actions>
              
              <span class="link"
                >Sign up to create account
                <router-link to="Signup">Signup</router-link></span
              >
            </v-form>
          </v-card>
        </v-col>
      </v-main>
      <v-snackbar top color="red" v-model="snackbar">
        Please Enter Correct Email or Password
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import { emailRule } from "./validation/validation.js";

export default {
  name: "Login",

  data: () => ({
    emailRule: emailRule,
    loading: false,
    snackbar: false,
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.snackbar = true;
        }, 3000);
      }
    },
  },
};
</script>
<style></style>
