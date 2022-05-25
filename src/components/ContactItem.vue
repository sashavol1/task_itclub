<template>
  <div
    class="
      py-8
      px-8
      max-w-sm
      mx-auto
      bg-white
      rounded-xl
      shadow
      space-y-2
      py-4
      flex
      items-center
      space-y-0 space-x-6
      mb-5
    "
    @click="this.$router.push({ name: 'Payment', params: { ...contact } })"
  >
    <img
      class="block mx-auto h-24 rounded-full mx-0 shrink-0"
      :src="contact.avatar"
      :alt="contact.last_name"
    />
    <div class="text-center space-y-2 text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          {{ contact.last_name }}
        </p>
        <p class="text-slate-500 font-medium">{{ contact.first_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
    },
  },
};
</script>