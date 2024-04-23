<template>
  <div>
    <div ref="loader" class="h-full w-full fixed bg-black z-20" />
    <NuxtPage class="h-dvh" />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const nuxtApp = useNuxtApp();
const loader = ref(null);
nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    gsap.to(loader.value, {
      duration: 1,
      opacity: 0,
      pointerEvents: "none",
    });
  }, 300);
});

useSeoMeta({
  title: "Francesca Da Forno | Portfolio",
  ogTitle: "Francesca Da Forno | Portfolio",
  description: "Senior Digital Art Director.",
  ogDescription: "Senior Digital Art Director.",
});

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
});
</script>
