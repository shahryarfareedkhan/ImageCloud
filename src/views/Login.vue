<template>
  <v-app>
    <div class="img1">
      <!-- <v-row justify="center" class="mt-1">
     <img src="https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png" alt="" width="200px" height="130px">

  </v-row> -->
      <v-main class="d-flex justify-center align-center mt-10 mb-9">
        <v-col cols="10" md="6" sm="6" lg="4" class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">

              <h2 class="black--text">Login</h2>
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
                <v-text-field
                  v-model="user.password"
                  :rules="passwordRule"
                  :type="passwordShow ? 'text' : 'password'"
                  label="Password"
                  placeholder="Password"
                  prepend-inner-icon="mdi-key"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                  required
                />
                 <span class="link"
                >
                <router-link to="Forget">Forget Password ?</router-link></span
              >
                <v-switch label="Remember me" color="indigo"></v-switch>

              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn :loading="loading" type="submit" color="success">
                  <span class="white--text px-8">Login</span>
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
      <!-- <v-snackbar top color="red" v-model="snackbar">
        Please Enter Correct Email or Password
      </v-snackbar> -->
    </div>
  </v-app>
</template>

<script>
import { emailRule, passwordRule } from "./validation/validation.js";

export default {
  name: "Login",

  data: () => ({
    emailRule: emailRule,
    passwordRule: passwordRule,
    loading: false,
    snackbar: false,
    passwordShow: false,
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
                    this.$store.dispatch("loginUser",this.user);
                    console.log(this.user)

        this.loading = true;

       
      }
    },
  },
};
</script>
<style>
.img1{
  background-image: url("https://images.pexels.com/photos/6044927/pexels-photo-6044927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  height: 100%;
}
</style>
