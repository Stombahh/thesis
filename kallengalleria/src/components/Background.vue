<template>
  <v-container align-content-start="true">
    <!-- <section> -->
      <v-layout justify-space-between="true">
        <v-flex>
        <v-card class="title">
          <v-card-title class="display-4 text-md-center">Kallen Galleria</v-card-title>
          <div class="display-2 text-md-center">Oil and tempera artist</div>
        </v-card>
      </v-flex>
      </v-layout>
    <!-- </section> -->
    <section>
      <v-layout align-content-center justify-center>
        <v-flex>
        <div class="title">
          <div class="display-4 text-md-center">Kallen Galleria</div>
          <div class="display-2 text-md-center">Oil and tempera artist</div>
        </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

/* h1 {
  font-weight: 900;
  font-size: 38pt;
} */

.v-layout {
  height:1000px;
}

section {
  /* margin-bottom: 500px;
  margin-top: 600px;
  /* z-index: 2; */
}

.title {
  padding:30px;
  border-radius:10px;
  background:rgba(33, 33, 33, 0.70);

}

.display-4 {
  font-family: 'EB Garamond', serif;
}


</style>
