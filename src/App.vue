<template>
  <!-- <main>
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </main> -->
  <main>
    <transition :name="transitionName">
      <router-view />
    </transition>
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