<template>
  <div>
    <Navbar />
    <v-main class="mt-16">
      <v-card class="mx-auto" max-width="700" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1 text-center">
              Upload and share images
            </v-list-item-title>
          </v-list-item-content>

          <!-- <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar> -->
        </v-list-item>

        <v-card-actions>
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success mx-auto mb-2"
                rounded
                dark
                v-bind="attrs"
                v-on="on"
              >
                Open Inset
              </v-btn>
            </template>
            <v-sheet class="text-center" height="auto">
              <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
                close
              </v-btn>
              <div class="my-3">
                <v-container>
                  <vue-dropzone
                    ref="myVueDropzone"
                    id="dropzone"
                    :options="dropzoneOptions"
                  ></vue-dropzone>
                </v-container>
              </div>
            </v-sheet>
          </v-bottom-sheet>
        </v-card-actions>
      </v-card>
      <v-container class="mt-10">
        <div class="grey">
          <!-- <h1>helo</h1> -->
          <!-- <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone> -->
        </div>
      </v-container>
      <v-cotainer class=""> </v-cotainer>
    </v-main>
  </div>
</template>

<script>
import Navbar from "../views/Navbar.vue";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  data: () => ({
    dropzoneOptions: {
      url: "https://httpbin.org/post",
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      addRemoveLinks:true,
      headers: { "My-Awesome-Header": "header value" },
    },
    sheet: false,
  }),
  components: {
    Navbar,
    vueDropzone: vue2Dropzone,
  },
};
</script>

<style></style>
