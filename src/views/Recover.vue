<template>
  <v-app>
    <div class="imgb ">
      <!-- <v-row justify="center" class="mt-1">
     <img src="https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png" alt="" width="200px" height="130px">

  </v-row> -->
      <v-main class="d-flex justify-center align-center mt-10 mb-9">
        <v-col cols="10" md="6" sm="6" lg="4" class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">

              <h2 class="black--text">Recover Password</h2>
            </div>
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                
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
                <v-text-field
                  v-model="user.Confirmpassword"
                  :rules="passwordRule"
                  :type="ConfirmpasswordShow ? 'text' : 'password'"
                  label="ConfirmPassword"
                  placeholder="ConfirmPassword"
                  prepend-inner-icon="mdi-key"
                  :append-icon="ConfirmpasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="ConfirmpasswordShow = !ConfirmpasswordShow"
                  required
                />
                

              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn :loading="loading" type="submit" color="success">
                  <span class="white--text px-8">Update</span>
                </v-btn>
              </v-card-actions>
              
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
import {  passwordRule } from "./validation/validation.js";

export default {
  name: "Login",

  data: () => ({
    passwordRule: passwordRule,
    loading: false,
    snackbar: false,
    passwordShow: false,
    ConfirmpasswordShow: false,
    user: {
      password: "",
      Confirmpassword:"",
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
<style>
.imgb{
  background-image: url("https://images.pexels.com/photos/6044927/pexels-photo-6044927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  height: 100%;
}
</style>