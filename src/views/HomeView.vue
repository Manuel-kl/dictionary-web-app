<template>
  <div id="home">
    <NavBar @changeFont="font" />
    <SearchComponent @search="search" />
    <ResultsComponent
      :searchTerm="currentSearchTerm"
      :currentFont="selectedFont"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import ResultsComponent from "../components/ResultsComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";

const currentSearchTerm = ref("");
const selectedFont = ref("");

const search = (term) => {
  currentSearchTerm.value = term;
};

const font = (font) => {
  selectedFont.value = font;
};
</script>
<style scoped lang="scss">
@import "../sass/variables.scss";
@import "../sass/global.scss";

#home {
  padding: 20px 40px;
  max-width: 600px;
  margin: auto;
  gap: 45px;
  display: flex;
  flex-direction: column;
}
</style>
