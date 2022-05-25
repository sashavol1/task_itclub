<template>
  <div class="container mx-auto bg-white min-h-screen">
    <Navbar title="New Contact" backScreen="Contact" />

    <div class="flex flex-col justify-between p-4">
      <div class="block w-full min-h-fit">
        <label class="block mb-3">
          <span class="block text-sm font-medium text-slate-700"
            >First name</span
          >
          <input
            type="text"
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
            >Last name</span
          >
          <input
            type="text"
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
          <span class="block text-sm font-medium text-slate-700">Email</span>
          <input
            type="text"
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
        Add
      </button>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>