<template>
  <div class="pf-grid">
    <div class="pf-background" ref="background"></div>

    <NuxtLink
      to="/works"
      class="pf-tile works"
      @mouseenter="(e) => !isMobile && onMouseOver(e, 'Works')"
    >
      <div>
        <h2>Works</h2>
      </div>
    </NuxtLink>

    <NuxtLink
      to="/about"
      class="pf-tile about"
      @mouseenter="(e) => !isMobile && onMouseOver(e, 'About')"
    >
      <div>
        <h2>About</h2>
      </div>
    </NuxtLink>

    <NuxtLink
      to="/contacts"
      class="pf-tile contacts"
      @mouseenter="(e) => !isMobile && onMouseOver(e, 'Contacts')"
    >
      <div>
        <h2>Contacts</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(SplitText, Flip);

const isMobile = computed(() => window.innerWidth < 1024);

definePageMeta({
  pageTransition: {
    css: false,
    mode: "out-in",
    onEnter: (el, done) => homeEnterTransition(el, done),
    onLeave: (el, done) => homeLeaveTransition(el, done),
  },
});

const background = ref(null);

const onMouseOver = (e, text) => {
  const targetElement = e.target;
  const title = text ? text : targetElement.querySelector("h2")?.textContent;

  gsap.to(background.value, {
    autoAlpha: 0,
    duration: 0.15,
    onComplete: () => {
      if (background.value) {
        background.value.textContent = title || "";
      }
      gsap.to(background.value, {
        autoAlpha: 1,
        duration: 0.15,
      });
      const split = new SplitText(background.value);
      gsap.from(split.chars, {
        duration: 0.3,
        y: 15,
        autoAlpha: 0,
        stagger: 0.05,
        delay: 0.15,
      });
    },
  });
};
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;
@use "/assets/css/functions.scss" as *;

.pf-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  grid-auto-flow: column;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: vw(180);
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  pointer-events: none;
  z-index: -1;
  text-transform: uppercase;
  filter: blur(3px);
}
.pf-grid {
  display: grid;
  grid-gap: 20px;
  width: 100vw;
  position: relative;
  padding: 20px;
  transition: all 0.5s;
  grid-template-areas: "works about" "works contacts";

  @include mq($until: lg) {
    grid-template-areas: "works" "about" "contacts";
    grid-gap: 10px;
    padding: 10px;
  }
  .pf-tile {
    background: #40404070;
    border-radius: 10px;
    padding: 30px;
    display: grid;
    align-content: end;
    justify-content: end;
    transition: background 0.15s ease;
    &:hover,
    &:focus {
      background: #20202070;
    }

    @include mq($until: lg) {
      padding: 20px;
    }

    h2 {
      color: #fff;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-transform: uppercase;
      letter-spacing: 32%;
      letter-spacing: 5.12px;

      span {
        font-weight: 400;
      }
    }

    &.works {
      grid-area: works;
    }

    &.about {
      grid-area: about;
    }

    &.contacts {
      grid-area: contacts;
    }
  }
}
</style>
