<template>
 <div>
    <v-app-bar
      color="blue lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Snap Share</v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn class=" mx-2" text to="/Update">Update Profile</v-btn>
        <v-btn class="mx-2" text to="/Gallery">Gallery</v-btn>

        <v-btn class="" text @click="signupbt()">logout</v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-grey--text text--accent-4"
        >
          <v-list-item >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title  > <router-link  class="text-decoration-none" to="/Main"> Home</router-link>
</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="" to="">Account</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-key</v-icon>
            </v-list-item-icon>
            <v-list-item-title ><router-link  class="text-decoration-none" to="/Main"> Update Password</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
     methods: {
    signupbt() {
      this.$router.push({ name: "Login" });
    },
  },
  }
</script>