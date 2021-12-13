<template>
  <v-app>
    <div class="imgb ">
      
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
                <v-btn  type="submit" color="success">
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
     
    </div>
  </v-app>
</template>

<script>
import { emailRule } from "./validation/validation.js";

export default {
  name: "Login",

  data: () => ({
    emailRule: emailRule,
    // loading: false,
    // snackbar: false,
    user: {
      email: "",
    },
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        if(this.getTesting!=""){
          //console.log("empty");
          // this.$refs.email.focus();
        }
        this.$store.dispatch("ForgetData",this.user);
        this.loading = true;
       
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