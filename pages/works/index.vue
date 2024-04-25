<template>
  <div class="pf-page">
    <div class="pf-content">
      <Breadcrumb text="Works" type="h1" />
      <div class="pf-contentList">
        <ContentList path="/works" v-slot="{ list }">
          <div v-for="doc in list" :key="doc._path">
            <NuxtLink :to="doc._path" class="pf-tile">
              <img :src="doc.placeholder" alt="" />
              <h2>
                {{ doc.head }}<br />
                <span>{{ doc.category }}</span>
              </h2>
            </NuxtLink>
          </div>
        </ContentList>
      </div>
      <Back />
    </div>
  </div>
</template>

<script setup lang="ts">
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
  grid-template-columns: repeat(3, 1fr);
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

    @include mq($until: lg) {
      aspect-ratio: 16/9;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
      transition: all 0.3s ease;
    }
    h2 {
      position: absolute;
      bottom: 20px;
      right: 20px;
      opacity: 0;
      transition: all 0.3s ease;
      transform: translateY(10px);
      z-index: 2;
      color: #fff;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-transform: uppercase;
      letter-spacing: 5.12px;
      text-align: right;

      span {
        font-weight: 300;
      }
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle at bottom right,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      z-index: 1;
    }
    &:hover {
      h2 {
        opacity: 1;
        transform: translateY(0);
      }
      img {
        transform: scale(1.05);
      }
    }
    @include mq($until: lg) {
      h2 {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      img {
        transform: scale(1) !important;
      }
    }
  }
}
</style>
