<template>
  <nav class="bg-teal-400 px-2 sm:px-4 py-2.5 mb-5">
    <div class="flex flex-wrap justify-between items-center mx-auto">
      <button @click="this.$router.push({ name: backScreen })">
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
        >{{ title }}</span
      >
      <button
        type="button"
        class="inline-flex items-center text-sm text-gray-500 rounded-lg"
        @click="this.$router.push({ name: addButtonScreen })"
        v-if="addButtonScreen"
      >
        <svg
          class="mr-3 h-6 sm:h-9"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 16 16"
          style="enable-background: new 0 0 16 16"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                style="fill: #fff"
                d="M8,0C3.589,0,0,3.589,0,8s3.589,8,8,8s8-3.589,8-8S12.411,0,8,0z M8,14c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6
			S11.309,14,8,14z"
              />
              <polygon
                style="fill: #fff"
                points="9,4 7,4 7,7 4,7 4,9 7,9 7,12 9,12 9,9 12,9 12,7 9,7 		"
              />
            </g>
          </g>
        </svg>
      </button>
      <span v-else></span>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    backScreen: {
      type: String,
    },
    addButtonScreen: {
      type: String,
    },
  },
};
</script>
