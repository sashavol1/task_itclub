<template>
  <div class="container mx-auto bg-white">
    <nav class="bg-teal-400 px-2 sm:px-4 py-2.5 mb-5">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <button @click="$emit('handlerBack')">
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
          >Select Contact</span
        >
        <button
          type="button"
          class="inline-flex items-center text-sm text-gray-500 rounded-lg"
          @click="$emit('handlerAddContact')"
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
      </div>
    </nav>

    <div v-if="serverError" data-testid="server-error">{{ serverError }}</div>

    <div
      v-else-if="contacts.length === 0 && !loading"
      data-testid="no-contacts"
    >
      No contacts!
    </div>

    <div v-else-if="loading" data-testid="loading">Красивая загрузка</div>

    <div v-else>
      <div
        v-for="contact in contacts"
        v-bind:key="contact.id"
        :data-testid="'user-' + contact.id"
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
        @click="picked(contact)"
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
    </div>
  </div>
</template>



<script>
export default {
  emits: ["handlerBack", "handlerAddContact", "update:contact"],

  data() {
    return {
      contacts: [],
      serverError: null,
    };
  },

  created() {
    this.loading = true;
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          this.serverError = json.error;
        } else {
          this.contacts = json.contacts;
        }

        this.loading = false;
      });
  },

  methods: {
    picked(contact) {
      this.$emit("update:contact", contact.first_name);
      this.$emit("handlerBack");
    },
  },
};
</script>