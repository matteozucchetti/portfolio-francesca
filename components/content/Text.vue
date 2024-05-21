<!-- components/content/Card.vue -->
<template>
  <div class="pf-text">
    <slot />
    <div class="pf-skills">
      <slot name="skills"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;

.pf-text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 60px 0 120px;
  padding: 0 60px;
  gap: 240px;
  font-size: 18px;
  line-height: 1.2;
  font-family: Montserrat;
  font-weight: 400;
  @include mq($until: lg) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 40px 0 80px;
    padding: 0;
  }
  .pf-skills {
    font-weight: 300;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -120px;
      width: 1px;
      height: 100%;
      background-color: #ffffff20;
      @include mq($until: lg) {
        display: none;
      }
    }
  }
}
</style>
