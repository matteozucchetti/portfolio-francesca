<template>
  <button @click="smoothScrollToTop()" class="pf-breadcrumb pf-back">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
      <rect width="40" height="40" fill="#404040" opacity=".7" rx="4" />
      <path
        fill="#fff"
        d="M19.819 18.363 12.181 26 10 23.819 19.819 14l9.818 9.819L27.455 26l-7.636-7.637Z"
      />
    </svg>
  </button>
</template>

<script lang="ts" setup>
const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;

.pf-breadcrumb {
  float: right;
  margin-bottom: 35px;

  &.pf-back {
    @include mq($from: lg) {
      display: none;
    }
  }
  span {
    color: #fff;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    line-height: normal;

    @include mq($until: lg) {
      font-size: 22px;
    }
  }
  svg {
    width: 35px;
    height: 35px;
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      rect {
        fill: #606060;
      }
    }
  }
}
</style>
