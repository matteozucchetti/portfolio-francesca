<template>
  <div class="pf-page">
    <div class="pf-content">
      <Breadcrumb text="Progetti" type="h1" />
      <div class="pf-contentList">
        <ContentList path="/works" v-slot="{ list }">
          <div v-for="doc in list" :key="doc._path">
            <NuxtLink
              :to="doc._path"
              class="pf-tile"
              :style="'--bg:' + doc.color"
            >
              <div class="text">
                <h2>{{ doc.head }}<br /></h2>
                <p>{{ doc.category }}</p>
              </div>
            </NuxtLink>
          </div>
        </ContentList>
      </div>
      <Back />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "page-transiton",
    mode: "out-in",
    onEnter: (el, done) => enterTransition(el, done),
    onLeave: (el, done) => leaveTransition(el, done),
  },
});
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;
@use "/assets/css/functions.scss" as *;

.pf-contentList {
  height: 100%;
  display: grid;
  padding: 50px 100px;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  & > div {
    height: min-content;
  }

  @include mq($until: lg) {
    padding: 50px 0;
    gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }

  .pf-tile {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: block;
    aspect-ratio: 1;
    padding: 33% 30px 0;
    display: grid;
    place-content: start;
    background: #40404070;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: var(--bg);
    }

    @include mq($until: xxl) {
      padding: 20px;
    }

    @include mq($until: lg) {
      aspect-ratio: 16/9;
      place-content: center start;
    }
    .text {
      h2 {
        color: #fff;
        font-family: Montserrat;
        font-size: 34px;
        font-style: normal;
        font-weight: 500;
        line-height: 1;
        margin-bottom: 20px;
        text-wrap: balance;
        @include mq($until: xxl) {
          font-size: 24px;
          margin-bottom: 10px;
        }
      }
      p {
        color: #fff;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: uppercase;
        line-height: 1.2;
        text-wrap: balance;
        @include mq($until: xxl) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
