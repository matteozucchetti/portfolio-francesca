<template>
  <div class="pf-breadcrumb">
    <button @click="routerBack()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          stroke="#fff"
          stroke-width="4"
          d="M1.506 22.568 22.719 1.354m-.213 21.566L1.293 1.707"
        />
      </svg>
    </button>
    <h1 v-if="type === 'h1'">{{ text }}</h1>
    <p v-else>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();

const routerBack = () => {
  if (
    route.path === "/works" ||
    route.path === "/about" ||
    route.path === "/contacts"
  ) {
    router.push("/");
  } else if (route.path.includes("/works/")) {
    router.push("/works");
  } else {
    router.back();
  }
};
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;

.pf-breadcrumb {
  display: inline-flex;
  place-items: center;
  gap: 15px;
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  &.pf-back {
    @include mq($from: lg) {
      display: none;
    }
  }
  h1,
  p {
    color: #fff;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 5.12px;
  }
  svg {
    width: 16px;
    height: 16px;
    transition: all 0.3s ease;
  }
  button {
    &:hover {
      svg {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
