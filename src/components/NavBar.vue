<template>
  <nav class="navbar" :class="darkNav">
    <div class="navbar-logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="38"
        viewBox="0 0 34 38"
        fill="none"
      >
        <path
          d="M0.25 33C0.25 33.4142 0.585786 33.75 1 33.75C1.41421 33.75 1.75 33.4142 1.75 33H0.25ZM2.17157 2.17157L1.64124 1.64124L1.64124 1.64124L2.17157 2.17157ZM32.6485 1.35147L32.1181 1.88175L32.1182 1.88186L32.6485 1.35147ZM32.25 28.428C32.25 28.8422 32.5858 29.178 33 29.178C33.4142 29.178 33.75 28.8422 33.75 28.428H32.25ZM5 28.25C4.58579 28.25 4.25 28.5858 4.25 29C4.25 29.4142 4.58579 29.75 5 29.75V28.25ZM33 29.75C33.4142 29.75 33.75 29.4142 33.75 29C33.75 28.5858 33.4142 28.25 33 28.25V29.75ZM5 36.25C4.58579 36.25 4.25 36.5858 4.25 37C4.25 37.4142 4.58579 37.75 5 37.75V36.25ZM33 37.75C33.4142 37.75 33.75 37.4142 33.75 37C33.75 36.5858 33.4142 36.25 33 36.25V37.75ZM1.75 33V5H0.25V33H1.75ZM1.75 5C1.75 4.13804 2.09241 3.3114 2.7019 2.7019L1.64124 1.64124C0.750449 2.53204 0.25 3.74022 0.25 5H1.75ZM2.7019 2.7019C3.3114 2.09241 4.13802 1.75 5 1.75V0.25C3.74018 0.25 2.53204 0.750451 1.64124 1.64124L2.7019 2.7019ZM5 1.75H31.8V0.25H5V1.75ZM31.8 1.75C31.9194 1.75 32.0338 1.79742 32.1181 1.88175L33.1789 0.821187C32.8132 0.455444 32.3172 0.25 31.8 0.25V1.75ZM32.1182 1.88186C32.2026 1.96621 32.25 2.08062 32.25 2.2H33.75C33.75 1.68286 33.5446 1.18683 33.1788 0.821081L32.1182 1.88186ZM32.25 2.2V28.428H33.75V2.2H32.25ZM5 29.75H33V28.25H5V29.75ZM5 37.75H33V36.25H5V37.75Z"
          fill="#757575"
        />
        <path
          d="M5 37C3.9391 37 2.92172 36.5786 2.17157 35.8284C1.42143 35.0783 1 34.0609 1 33C1 31.9391 1.42143 30.9217 2.17157 30.1716C2.92172 29.4214 3.9391 29 5 29"
          stroke="#757575"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 9H23"
          stroke="#757575"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="right">
      <div class="font">
        <h5 class="selected" @click="showOptions" :style="fontStyles">
          {{ selectedFont }}
        </h5>
        <div class="options" v-if="optionsOpen">
          <h5 class="option sans-serif" @click="changeFont('San Serif')">
            Sans Serif
          </h5>
          <h5 class="option serif" @click="changeFont('Serif')">Serif</h5>
          <h5 class="option mono" @click="changeFont('Mono')">Mono</h5>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          @click="showOptions"
        >
          <path d="M1 1L7 7L13 1" stroke="#A445ED" stroke-width="1.5" />
        </svg>
      </div>
      <div class="mode">
        <div class="normal" v-if="!dark" @click="changeMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="81"
            height="22"
            viewBox="0 0 81 22"
            fill="none"
          >
            <rect y="1" width="40" height="20" rx="10" fill="#757575" />
            <circle cx="10" cy="11" r="7" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60 10.449C59.9985 12.8283 60.8017 15.1383 62.2791 17.0033C63.7566 18.8683 65.8214 20.1788 68.138 20.7218C70.4545 21.2647 72.8866 21.0082 75.039 19.994C77.1912 18.9797 78.9373 17.2673 79.9931 15.1352C70.5442 15.1352 65.858 10.4479 65.858 1C64.0984 1.87311 62.6177 3.22033 61.5827 4.88981C60.5476 6.5593 59.9995 8.48469 60 10.449Z"
              stroke="#757575"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="hover" v-if="!dark" @click="changeMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="81"
            height="22"
            viewBox="0 0 81 22"
            fill="none"
          >
            <rect y="1" width="40" height="20" rx="10" fill="#A445ED" />
            <circle cx="10" cy="11" r="7" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60 10.449C59.9985 12.8283 60.8017 15.1383 62.2791 17.0033C63.7566 18.8683 65.8214 20.1788 68.138 20.7218C70.4545 21.2647 72.8866 21.0082 75.039 19.994C77.1912 18.9797 78.9373 17.2673 79.9931 15.1352C70.5442 15.1352 65.858 10.4479 65.858 1C64.0984 1.87311 62.6177 3.22033 61.5827 4.88981C60.5476 6.5593 59.9995 8.48469 60 10.449Z"
              stroke="#757575"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="dark" v-if="dark" @click="changeMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="81"
            height="22"
            viewBox="0 0 81 22"
            fill="none"
          >
            <rect y="1" width="40" height="20" rx="10" fill="#A445ED" />
            <circle cx="30" cy="11" r="7" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60 10.449C59.9985 12.8283 60.8017 15.1383 62.2791 17.0033C63.7566 18.8683 65.8214 20.1788 68.138 20.7218C70.4545 21.2647 72.8866 21.0082 75.039 19.994C77.1912 18.9797 78.9373 17.2673 79.9931 15.1352C70.5442 15.1352 65.858 10.4479 65.858 1C64.0984 1.87311 62.6177 3.22033 61.5827 4.88981C60.5476 6.5593 59.9995 8.48469 60 10.449Z"
              stroke="#A445ED"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { computed, defineEmits, ref } from "vue";

const selectedFont = ref("Sans Serif");
const optionsOpen = ref(false);
const dark = ref(false);
const emit = defineEmits(["changeFont", "changeMode"]);

const darkNav = computed(() => {
  return dark.value ? "darkNav" : "";
});

const fontStyles = computed(() => {
  switch (selectedFont.value) {
    case "Sans Serif":
      return { fontFamily: "'Inter', sans-serif" };
    case "Serif":
      return { fontFamily: "'Lora', serif" };
    case "Mono":
      return { fontFamily: "Inconsolata', monospace" };
    default:
      return {};
  }
});

const changeFont = (font) => {
  selectedFont.value = font;
  optionsOpen.value = false;
  emit("changeFont", font);
};

const showOptions = () => {
  optionsOpen.value = !optionsOpen.value;
};

const changeMode = () => {
  dark.value = !dark.value;
  emit("changeMode", dark.value);
};
</script>

<style scoped lang="scss">
@import "../sass/variables.scss";
@import "../sass/global.scss";
nav.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .navbar-logo {
    width: 32px;
    height: 36.5px;
    flex-shrink: 0;

    svg {
      @media (max-width: 375px) {
        width: 28px;
        height: 32px;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;

    .font {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 18px;
      border: none;
      outline: none;
      padding-right: 20px;
      border-right: 1px solid $light-gray-2;
      position: relative;

      @media (max-width: 375px) {
        gap: 3px;
        padding-right: 10px;
      }

      h5.selected {
        color: $dark-gray-2;
        font-family: $inter-font;
        font-size: $body-m-font-size;
        font-style: normal;
        font-weight: 700;
        cursor: pointer;
        line-height: $body-m-line-height;
        transition: all 0.3s ease-in-out;

        @media (max-width: 375px) {
          font-size: 14px;
        }
      }

      .options {
        position: absolute;
        padding: 0 20px;
        top: 30px;
        right: 5px;
        width: 183px;
        height: 152px;
        flex-shrink: 0;
        border-radius: 16px;
        background: $white;
        box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        z-index: 4;

        h5.option {
          color: $dark-gray-2;
          font-family: $inter-font;
          font-size: $body-m-font-size;
          font-style: normal;
          font-weight: 700;
          line-height: $body-m-line-height;
          padding: 10px 0;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: $purple-shade;
            transition: all 0.3s ease-in-out;
          }

          @media (max-width: 375px) {
            font-size: 16px;
          }
        }

        h5.sans-serif {
          font-family: $inter-font;

          @media (max-width: 375px) {
            font-size: 16px;
          }
        }

        h5.serif {
          font-family: $lora-font;
        }

        h5.mono {
          font-family: $incosolata-font;

          @media (max-width: 375px) {
            font-size: 16px;
          }
        }
      }

      svg {
        cursor: pointer;

        @media (max-width: 375px) {
          width: 12px;
          height: 6px;
        }
      }
    }

    .mode {
      cursor: pointer;
      margin-left: 20px;

      @media (max-width: 375px) {
        margin-left: 10px;
      }

      svg {
        @media (max-width: 375px) {
          width: 71.993px;
          height: 20px;
        }
      }

      .hover {
        display: none;
      }

      &:hover {
        .normal {
          display: none;
        }

        .hover {
          display: inline-flex;
        }
      }
    }
  }
}
nav.darkNav {
  background-color: $black;

  .right {
    .font {
      h5.selected {
        color: $white;
      }

      .options {
        background: $dark-gray-1;
        box-shadow: 0px 5px 30px 0px $purple-shade;
        h5.option {
          color: $white;
          &:hover {
            color: $purple-shade;
          }
        }
      }
    }
  }
}
</style>