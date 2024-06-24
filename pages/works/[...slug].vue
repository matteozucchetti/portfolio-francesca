<template>
  <div class="pf-page">
    <div class="pf-content">
      <ContentDoc :path="$route.path">
        <template v-slot="{ doc }">
          <Breadcrumb :text="'WORKS | ' + doc.head" type="p" />
          <div class="pf-contentList">
            <h1>{{ doc.head }}</h1>
            <h2>{{ doc.category }}</h2>
            <ContentRenderer :value="doc" />
            <Back style="display: flex"></Back>

            <div class="pf-navigation">
              <NuxtLink v-if="next" :to="next._path">
                Next: {{ next.title }}
              </NuxtLink>
              <NuxtLink v-if="prev" :to="prev._path">
                Previous: {{ prev.title }}
              </NuxtLink>
            </div>
          </div>
        </template>
        <template #not-found> <h1>Document not found</h1> </template>
      </ContentDoc>
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

const route = useRoute();

const [prev, next] = await queryContent()
  .only(["_path", "title"])
  .findSurround(route.path);
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;
@use "/assets/css/functions.scss" as *;

.pf-contentList {
  height: 100%;
  padding: 50px 100px;

  @include mq($until: lg) {
    padding: 50px 0;
    gap: 50px;
  }

  :deep(img) {
    border-radius: 20px;
    @include mq($until: lg) {
      border-radius: 5px;
    }
  }

  :deep(video) {
    width: 100%;
  }

  :deep(.pf-cta) {
    position: absolute;
    bottom: 50px;
    right: 50px;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 46px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    @include mq($until: lg) {
      font-size: 32px;
    }
  }

  h2 {
    color: #616161;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5.12px;
    text-transform: uppercase;
    margin-bottom: 40px;
    line-height: 1.2;
    @include mq($until: lg) {
      margin-bottom: 20px;
    }
  }

  :deep(p) {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    text-wrap: pretty;
    margin-bottom: 40px;
  }
}

.pf-navigation {
  display: grid;
  margin-top: 50px;
  a {
    color: #616161;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5.12px;
    text-transform: uppercase;
    margin-bottom: 40px;
    line-height: 1.2;
    transition: all 0.15s ease;
    position: relative;
    width: max-content;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 0;
      height: 1px;
      background: #fff;
    }
    &:hover {
      color: #fff;
      &:after {
        width: 100%;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
