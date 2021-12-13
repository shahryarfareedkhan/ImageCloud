<template>
  <div class="imgb">
    <Navbar />

    <v-row justify="center" class="main mt-10">
      <v-col class="mt-0" cols="10" sm="8" md="6" lg="4">
        <v-form @submit.prevent="submitHandler" ref="form">
          <v-card >
            <v-card-text>
              <h1 class="text-center black--text">Update Profile</h1>

              <v-avatar size="150" class="mb-10 mt-10">
                <img
                  :src="
                    currentUser.user_profile_image_path +
                    '/' +
                    currentUser.profile_image
                  "
                  alt="upload"
                />
              </v-avatar>

              <v-text-field
                ref="name"
                v-model="userData.name"
                :rules="UsernameRule"
                :error-messages="errorMessages"
                label="name"
                placeholder="John Doe"
                required
              ></v-text-field>

              <!-- <v-text-field
                ref="email"
                v-model="userData.email"
                :rules="emailRule"
                :error-messages="errorMessages"
                label="Email"
                placeholder="xyz@gmail.com"
                required
              ></v-text-field> -->

              <!-- <v-text-field
                ref="password"
                v-model="userData.password"
                :type="'Password'"
                :rules="passwordRule"
                :error-messages="errorMessages"
                label="Password"
                placeholder="***"
                required
              ></v-text-field> -->

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

              <!-- v-model="userData.profile_image" -->
              <v-file-input
                v-on:change="storeImg"
                
                label="File input"
                filled
                shaped
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-card-text>
            <!-- <v-divider></v-divider> -->
            <v-card-actions>
              <v-btn block type="submit" color="success" class="mx-auto">
                Update Profile
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions> </v-card
          ><br />
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Navbar from "../views/Navbar.vue";
import {
  UsernameRule,
  // emailRule,
  // firstnameRule,
  // lastnameRule,
  // passwordRule,
  numberRule,
  imageRule,
} from "./validation/validation.js";

export default {
  components: {
    Navbar,
  },
  data: () => ({
    currentUser: "",
    userData: {
      name: "",
      age: "",
      profile_image: "",
    },
    // userData: {
    //   email: "",
    //   name: "",
    //   password: "",
    //   age: "",
    //   profile_image: "",
    // },
    errorMessages: "",
    formHasErrors: false,
    // emailRule: emailRule,
    UsernameRule: UsernameRule,
    // firstnameRule: firstnameRule,
    // lastnameRule: lastnameRule,
    // passwordRule: passwordRule,
    numberRule: numberRule,
    imageRule: imageRule,
  }),
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
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("Updateprofile", this.userData);
      alert("hello");

        // this.loading = true;
      }
    }
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },
  mounted() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.currentUser);
    this.userData.name = this.currentUser.name;
    this.userData.age = this.currentUser.age;
    this.userData.profile_image = this.currentUser.profile_image;
    console.log(this.userData);
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
