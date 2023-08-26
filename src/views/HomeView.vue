<template>
  <div class="home-wrapper" :class="darkMode">
    <div class="home">
      <NavBar @changeFont="font" @changeMode="mode" />
      <SearchComponent @search="search" :isDark="isDark" />
      <ResultsComponent
        :searchTerm="currentSearchTerm"
        :currentFont="selectedFont"
        :isDark="isDark"
      />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import NavBar from "../components/NavBar.vue";
import ResultsComponent from "../components/ResultsComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";

const currentSearchTerm = ref("");
const selectedFont = ref("");
const isDark = ref(false);

const search = (term) => {
  currentSearchTerm.value = term;
};

const font = (font) => {
  selectedFont.value = font;
};

const darkMode = computed(() => {
  return isDark.value ? "darkMode" : "";
});

const mode = (mode) => {
  isDark.value = mode;
};
</script>
<style scoped lang="scss">
@import "../sass/variables.scss";
@import "../sass/global.scss";

.home-wrapper {
  .home {
    padding: 20px 40px;
    max-width: 600px;
    margin: auto;
    gap: 45px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: all 1s ease;

    @media (max-width: 600px) {
      padding: 20px;
    }

    @media (max-width: 375px) {
      padding: 20px 10px;
    }
  }
}

.darkMode {
  transition: all 1s ease;
  background-color: $black;
}
</style>
