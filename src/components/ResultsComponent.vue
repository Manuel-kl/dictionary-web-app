<template>
  <div v-if="definitionFound" class="results" :class="resultsDarkMode">
    <div class="word">
      <div class="left">
        <h1 :style="fontStyles">{{ wordData[0].word }}</h1>
        <p :style="fontStyles">{{ wordData[0].phonetics[0].text }}</p>
      </div>
      <div class="right" v-if="wordData[0].phonetics[0].audio != ''">
        <audio :src="wordData[0].phonetics[0].audio"></audio>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          @click="playAudio"
          v-if="!resultsDarkMode"
        >
          <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29 27V48L50 37.5L29 27Z"
            fill="#A445ED"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          @click="playAudio"
          v-if="resultsDarkMode"
        >
          <circle cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29 27V48L50 37.5L29 27Z"
            fill="white"
          />
        </svg>
      </div>
    </div>

    <div
      class="meaning"
      v-for="meaning in wordData[0].meanings"
      :key="meaning.id"
    >
      <div class="type">
        <p :style="fontStyles">{{ meaning.partOfSpeech }}</p>
        <span></span>
      </div>
      <h4 :style="fontStyles">Meaning</h4>
      <ul
        class="definition"
        v-for="definition in meaning.definitions"
        :key="definition.id"
      >
        <li :style="fontStyles">
          {{ definition.definition }}
        </li>
      </ul>
      <div class="synonyms">
        <h4 :style="fontStyles">Synonyms:</h4>
        <ul>
          <li
            v-for="synonym in meaning.synonyms"
            :key="synonym.id"
            :style="fontStyles"
          >
            {{ synonym }}
          </li>
          <li v-if="meaning.synonyms == ''">____</li>
        </ul>
      </div>
    </div>
    <div class="source">
      <h4 :style="fontStyles">Source</h4>
      <p :style="fontStyles">
        <a :href="wordData[0].sourceUrls[0]" target="_blank"
          >{{ wordData[0].sourceUrls[0] }}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M6.09091 4.29545C6.50512 4.29545 6.84091 3.95967 6.84091 3.54545C6.84091 3.13124 6.50512 2.79545 6.09091 2.79545V4.29545ZM1.42603 3.97148L1.95635 4.50182L1.95637 4.50181L1.42603 3.97148ZM1.42603 12.574L1.95638 12.0437L1.95637 12.0436L1.42603 12.574ZM11.2045 7.90909C11.2045 7.49488 10.8688 7.15909 10.4545 7.15909C10.0403 7.15909 9.70455 7.49488 9.70455 7.90909H11.2045ZM4.83331 8.10603C4.54041 8.39893 4.54041 8.8738 4.83331 9.16669C5.1262 9.45959 5.60107 9.45959 5.89397 9.16669L4.83331 8.10603ZM13.1667 1.89397C13.4596 1.60107 13.4596 1.1262 13.1667 0.833306C12.8738 0.540413 12.3989 0.540413 12.106 0.833306L13.1667 1.89397ZM12.6364 2.11364C13.0506 2.11364 13.3864 1.77785 13.3864 1.36364C13.3864 0.949423 13.0506 0.613636 12.6364 0.613636V2.11364ZM9 0.613636C8.58579 0.613636 8.25 0.949423 8.25 1.36364C8.25 1.77785 8.58579 2.11364 9 2.11364V0.613636ZM13.3864 1.36364C13.3864 0.949423 13.0506 0.613636 12.6364 0.613636C12.2221 0.613636 11.8864 0.949423 11.8864 1.36364H13.3864ZM11.8864 5C11.8864 5.41421 12.2221 5.75 12.6364 5.75C13.0506 5.75 13.3864 5.41421 13.3864 5H11.8864ZM6.09091 2.79545H2.45455V4.29545H6.09091V2.79545ZM2.45455 2.79545C1.86987 2.79545 1.30913 3.02771 0.895692 3.44116L1.95637 4.50181C2.08849 4.36968 2.26769 4.29545 2.45455 4.29545V2.79545ZM0.895706 3.44115C0.482259 3.85458 0.25 4.41532 0.25 5H1.75C1.75 4.81314 1.82423 4.63394 1.95635 4.50182L0.895706 3.44115ZM0.25 5V11.5455H1.75V5H0.25ZM0.25 11.5455C0.25 12.1301 0.482269 12.6908 0.895685 13.1043L1.95637 12.0436C1.82422 11.9115 1.75 11.7323 1.75 11.5455H0.25ZM0.895678 13.1043C1.30913 13.5178 1.86988 13.75 2.45455 13.75V12.25C2.26768 12.25 2.08849 12.1758 1.95638 12.0437L0.895678 13.1043ZM2.45455 13.75H9V12.25H2.45455V13.75ZM9 13.75C9.58466 13.75 10.1454 13.5177 10.5588 13.1043L9.49818 12.0436C9.36603 12.1758 9.18683 12.25 9 12.25V13.75ZM10.5588 13.1043C10.9723 12.6908 11.2045 12.1301 11.2045 11.5455H9.70455C9.70455 11.7323 9.63033 11.9115 9.49818 12.0436L10.5588 13.1043ZM11.2045 11.5455V7.90909H9.70455V11.5455H11.2045ZM5.89397 9.16669L13.1667 1.89397L12.106 0.833306L4.83331 8.10603L5.89397 9.16669ZM12.6364 0.613636H9V2.11364H12.6364V0.613636ZM11.8864 1.36364V5H13.3864V1.36364H11.8864Z"
                fill="#757575"
              />
            </svg>
          </span>
        </a>
      </p>
    </div>
  </div>
  <div class="error" v-if="noDefinitionFound" :class="errorDarkMode">
    <div class="emoji">
      <span> 😕 </span>
    </div>
    <h4 :style="fontStyles">No Definitions Found</h4>
    <div class="description">
      <p :style="fontStyles">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { computed, defineProps, ref, watch } from "vue";

const selectedFont = ref("Sans Serif");

const props = defineProps({
  searchTerm: {
    required: true,
  },
  currentFont: {
    required: true,
  },
  isDark: {
    required: true,
  },
});

let wordData = ref(null);
const noDefinitionFound = ref(false);
const definitionFound = ref(false);
const isDark = ref(false);

watch(
  () => props.searchTerm,
  async () => {
    await searchDefinition();
  }
);

watch(
  () => props.currentFont,
  () => {
    selectedFont.value = props.currentFont;
  }
);

watch(
  () => props.isDark,
  () => {
    isDark.value = props.isDark;
  }
);

const resultsDarkMode = computed(() => {
  return isDark.value ? "resultsDarkMode" : "";
});
const errorDarkMode = computed(() => {
  return isDark.value ? "errorDarkMode" : "";
});

const fontStyles = computed(() => {
  switch (selectedFont.value) {
    case "Sans Serif":
      return { fontFamily: "'Inter', sans-serif" };
    case "Serif":
      return { fontFamily: "'Lora', serif" };
    case "Mono":
      return { fontFamily: "'Incosolata', monospace" };
    default:
      return {};
  }
});

const searchDefinition = async () => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${props.searchTerm}`
    );
    wordData.value = response.data;
    definitionFound.value = true;
    noDefinitionFound.value = false;
    console.log(wordData.value);
  } catch (error) {
    definitionFound.value = false;
    noDefinitionFound.value = true;
  }
};

const playAudio = () => {
  const audio = document.querySelector("audio");
  audio.play();
};
</script>
<style lang="scss" scoped>
@import "../sass/variables.scss";
@import "../sass/global.scss";
.results {
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding-bottom: 45px;

  .word {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      flex-direction: column;
      gap: 10px;

      h1 {
        color: $dark-gray-2;
        font-feature-settings: "clig" off, "liga" off;
        font-family: $inter-font;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        @media (max-width: 375px) {
          font-size: 32px;
        }
      }

      p {
        color: $purple-shade;
        font-feature-settings: "clig" off, "liga" off;
        font-family: $inter-font;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        @media (max-width: 375px) {
          font-size: 15px;
        }
      }
    }
    .right {
      width: 75px;
      height: 75px;
      flex-shrink: 0;
      cursor: pointer;

      @media (max-width: 375px) {
        svg {
          width: 48px;
        }
      }
    }
  }

  .meaning {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .type {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 23px;

      p {
        color: $dark-gray-2;
        font-feature-settings: "clig" off, "liga" off;
        font-family: $inter-font;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        @media (max-width: 375px) {
          font-size: 18px;
        }
      }

      span {
        flex: 1;
        height: 1px;
        flex-shrink: 0;
        background: $light-gray-1;
      }
    }
    h4 {
      color: $medium-gray;
      font-feature-settings: "clig" off, "liga" off;
      font-family: $inter-font;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      @media (max-width: 375px) {
        font-size: 16px;
      }
    }

    ul.definition {
      display: flex;
      flex-direction: column;
      gap: 13px;
      margin-left: 47px;

      li {
        color: $dark-gray-2;
        font-feature-settings: "clig" off, "liga" off;
        font-family: $inter-font;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;

        &::marker {
          color: $purple-shade;
        }

        @media (max-width: 375px) {
          font-size: 15px;
        }
      }
    }

    .synonyms {
      display: flex;
      flex-direction: row;
      gap: 24px;

      h4 {
        color: $medium-gray;
        font-feature-settings: "clig" off, "liga" off;
        font-family: $inter-font;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        @media (max-width: 375px) {
          font-size: 16px;
        }
      }

      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 13px;
        align-items: center;

        li {
          color: $purple-shade;
          font-family: $inter-font;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          list-style: none;
          flex-basis: auto;

          @media (max-width: 375px) {
            font-size: 16px;
          }
        }
      }
    }
  }
  .source {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    h4 {
      color: $medium-gray;
      font-feature-settings: "clig" off, "liga" off;
      font-family: $inter-font;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    p {
      color: $dark-gray-2;
      font-feature-settings: "clig" off, "liga" off;
      font-family: $inter-font;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      a {
        text-decoration: none;
        &:hover {
          cursor: pointer;
        }

        &:visited {
          color: $dark-gray-2;
        }

        span {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
          margin-left: 7px;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 72px;

  .emoji {
    span {
      font-size: 64px;

      @media (max-width: 375px) {
        font-size: 48px;
      }
    }
  }

  h4 {
    color: $dark-gray-2;
    text-align: center;
    font-family: $inter-font;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: all 1s ease;

    @media (max-width: 375px) {
      font-size: 16px;
    }
  }

  p {
    color: $medium-gray;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: $inter-font;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    transition: all 1s ease;

    @media (max-width: 375px) {
      font-size: 15px;
    }
  }
}

.resultsDarkMode {
  color: $light-gray-1;
  .word {
    .left {
      h1 {
        color: $white;
      }
      p {
        color: $purple-shade;
      }
    }
    .right {
      svg {
        path {
          fill: $white;
        }
      }
    }
  }
  .meaning {
    .type {
      p {
        color: $light-gray-1;
      }
      span {
        background: $dark-gray-3;
      }
    }
    h4 {
      color: $medium-gray;
    }
    ul.definition {
      li {
        color: $white;
        &::marker {
          color: $purple-shade;
        }
      }
    }
    .synonyms {
      h4 {
        color: $medium-gray;
      }
      ul {
        li {
          color: $purple-shade;
        }
      }
    }
  }
  .source {
    h4 {
      color: $medium-gray;
    }
    p {
      a {
        color: $white;
        span {
          path {
            fill: $medium-gray;
          }
        }
      }
    }
  }
}

.errorDarkMode {
  h4 {
    color: $white;
    transition: all 1s ease;
  }
  p {
    color: $medium-gray;
    transition: all 1s ease;
  }
}
</style>