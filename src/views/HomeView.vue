<template>
  <div class="home">
    <NavBar />
    <SearchComponent @search="search" />
    <ResultsComponent :searchTerm="currentSearchTerm" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import ResultsComponent from "../components/ResultsComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";

const currentSearchTerm = ref("");

const search = (term) => {
  currentSearchTerm.value = term;
};
</script>
<style scoped lang="scss">
.home {
  padding: 20px auto;
  max-width: 600px;
  margin: auto;
  gap: 45px;
  display: flex;
  flex-direction: column;
}
</style>