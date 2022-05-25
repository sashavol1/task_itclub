<template>
  <main class="mx-auto bg-black min-h-screen">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.meta.page > from.meta.page ? "next" : "prev";
    },
  },
};
</script>