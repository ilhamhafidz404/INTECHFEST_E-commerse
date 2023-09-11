<template>
  <div
    class="fixed top-0 bottom-0 dark:bg-slate-800 bg-gray-100 z-50 flex items-center justify-center"
    :class="{ loading: show == true, hidden: show == false }"
  >
    <div class="loader dark:bg-white bg-slate-800"></div>
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style scoped>
.loading {
  animation: loading 3s;
}
.loader {
  width: 54px;
  height: 54px;
  position: relative;
  border-radius: 4px;
}
.loader:before {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  width: 24px;
  height: 24px;
  background: #447df8;
  border-radius: 50%;
  transform-origin: 100% 100%;
  animation: move 1s linear infinite;
}
@keyframes move {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100%, 0);
  }
  50% {
    transform: translate(100%, 100%);
  }
  75% {
    transform: translate(0, 100%);
  }
}
@keyframes loading {
  0% {
    left: -100%;
    right: 100%;
  }
  25% {
    left: 0;
    right: 0;
  }
  70% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: -100%;
  }
}
</style>