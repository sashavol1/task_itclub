<template>
  <div class="container mx-auto bg-white min-h-screen">
    <nav class="bg-teal-400 px-2 sm:px-4 py-2.5 mb-5">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <button @click="this.$router.push({ name: 'Contact' })">
          <svg
            class="mr-3 h-6 sm:h-9"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 195.055 195.055"
            style="enable-background: new 0 0 195.055 195.055"
            xml:space="preserve"
          >
            <g>
              <g>
                <polygon
                  style="fill: #fff"
                  points="33.138,94.882 73.787,54.245 70.047,50.501 23.025,97.527 70.047,144.55 73.787,140.813 
			33.138,100.165 166.837,100.165 166.837,94.882 		"
                />
                <path
                  style="fill: #fff"
                  d="M97.529,0C43.753,0,0.005,43.751,0.005,97.531c0,53.769,43.748,97.524,97.524,97.524
			s97.52-43.755,97.52-97.524C195.049,43.751,151.305,0,97.529,0z M97.529,190.441c-51.231,0-92.914-41.679-92.914-92.911
			c0-51.242,41.683-92.925,92.914-92.925c51.228,0,92.914,41.683,92.914,92.921C190.443,148.759,148.757,190.441,97.529,190.441z"
                />
              </g>
            </g>
          </svg>
        </button>

        <span
          class="
            self-center
            text-xl
            font-semibold
            whitespace-nowrap
            dark:text-white
            text-white
          "
          >New Contact</span
        >
        <span></span>
      </div>
    </nav>

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
        @click="() => console.log('fetch add new contact')"
      >
        Add
      </button>
    </div>
  </div>
</template>

