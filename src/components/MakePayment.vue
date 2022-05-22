<template>
  <div class="container mx-auto bg-white">
    <div class="flex flex-col justify-between min-h-screen p-4">
      <div class="block w-full">
        <p class="text-xl text-center mt-2 mb-5">Make a payment</p>
        <label class="block mb-3">
          <span class="block text-sm font-medium text-slate-700"
            >Select contact</span
          >
          <input
            @click="$emit('handlerSelect')"
            type="text"
            v-model="contact"
            class="
              mt-1
              block
              w-full
              px-3
              py-3
              border border-slate-300
              text-sm
              shadow-sm
              placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1
            "
          />
        </label>
        <label class="block mb-3">
          <span class="block text-sm font-medium text-slate-700"
            >Select payment method</span
          >
          <input
            type="text"
            value=""
            class="
              mt-1
              block
              w-full
              px-3
              py-3
              border border-slate-300
              text-sm
              shadow-sm
              placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1
            "
          />
        </label>
        <label class="block mb-3">
          <span class="block text-sm font-medium text-slate-700"
            >Enter amount</span
          >
          <input
            type="text"
            value=""
            class="
              mt-1
              block
              w-full
              px-3
              py-3
              border border-slate-300
              text-sm
              shadow-sm
              placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1
            "
          />
        </label>
      </div>
      <button
        class="
          block
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          block
          w-full
        "
      >
        Pay
      </button>
    </div>
  </div>
</template>


<script>
export default {
  emits: ["handlerSelect"],
  props: {
    contact: {
      type: String,
    },
  },
};
</script>