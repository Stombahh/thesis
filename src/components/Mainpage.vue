<template>
  <v-container fill-height class="page">
    <v-layout class="layout-container">
      <div class="background">
        <v-layout>
          <v-flex md12 justify-center>
            <h1>Kalle Pitkänen</h1>
            <h2>
              <i>Oil and tempera artist</i>
            </h2>
          </v-flex>
        </v-layout>
      </div>
    </v-layout>

    <!-- <v-icon x-large>fas fa-chevron-down</v-icon> -->
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.background {
  width: auto;
}

@media only screen and (max-width: 600px) {
  .layout-container {
    /* margin-top: 20% !important; */
    width: 95% !important;
    line-height: 1.2;

    justify-content: center !important;
    align-items:center !important; 
  }

  content {
    margin-top: 0!important;
    padding: 0!important;
  }
}
</style>

<script>
</script>
