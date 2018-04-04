<template>
  <v-container fluid>
    <v-layout class="elementtest1">
        <v-flex md3></v-flex>
        <v-flex md6 justify-center="true" align-content-center="true" class="title">
          <h1>Kallen Galleria</h1>
          <h2>Oil and tempera artist</h2>
        </v-flex>
        <v-flex md3></v-flex>
    </v-layout>

    <v-layout class="elementtest2">
      <v-flex lg1></v-flex>
      <v-flex class="container">
        <h2>Biography</h2>
        <v-layout>
          <v-flex md8>testi</v-flex>
          <v-flex md4>testi</v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg1></v-flex>
    </v-layout>

    <v-layout class="elementtest2">
      <v-flex md1></v-flex>
      <v-flex class="container">
        <h2>Gallery</h2>

      </v-flex>
      <v-flex md1></v-flex>
    </v-layout>

    <v-layout class="elementtest2">
      <v-flex md1></v-flex>
      <v-flex class="container">
        <h2>Contact</h2>

      </v-flex>
      <v-flex md1></v-flex>
    </v-layout>

    <v-layout class="elementtest2">
      <v-flex md1></v-flex>
      <v-flex class="container">
        <h2>Footer</h2>

      </v-flex>
      <v-flex md1></v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


/* .container {
  width: 80%;
} */

section {
  /* margin-bottom: 500px;
  margin-top: 600px;
  /* z-index: 2; */
}

/* .flex title {
  width: 40%;
} */


v-card-title {
  padding: 20px;
  font-size:5vh;
}

.flex.container {
  background:rgba(33, 33, 33, 0.70);
  padding:20px;
}

.title {
  background:rgba(33, 33, 33, 0.70);
  border-radius:10px;
  padding:2rem;
}

.elementtest1 {
  margin-top:25%;
  text-align: center;
  /* height: 80%; */
  /* height:1000px; */
}

.elementtest2 {
  /* padding:30px; */
  margin-top:50%;
  border-radius:10px;
  /* background:rgba(33, 33, 33, 0.70); */
  /* height:200px; */

}

h1 {
  font-family: 'EB Garamond', serif;
  font-weight: 300;
  font-size: 8vh;
  margin-bottom:20px;
}

h2 {
  font-family: 'EB Garamond', serif;
  font-weight: 300;
  font-size:5vh;
}


</style>
