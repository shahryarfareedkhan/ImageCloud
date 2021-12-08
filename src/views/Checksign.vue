<template>
  <div>
    <!-- <Navbar/> -->
    <v-card class="mx-auto mt-10" max-width="600" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="blue--text text-center text-h5 mb-5 mt-3">
            Verification
          </v-list-item-title>
          <h5>An email to [email address] has been sent with instructions to
            activate your account. The activation link is only valid for 48
            hours. If you don't receive the instructions try checking your junk
            or spam filters..</h5>
         
          
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn class="blue white--text mx-auto" outlined rounded text to="Login">Login  </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import Navbar from "../views/Navbar.vue"
export default {
  // components: {Navbar,}
  
};
</script>

<style></style>
