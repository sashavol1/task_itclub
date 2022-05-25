<template>
  <div class="container mx-auto bg-white min-h-screen">
    <Navbar
      title="Select Contact"
      backScreen="Payment"
      addButtonScreen="ContactAdd"
    />

    <div v-if="serverError" data-testid="server-error">{{ serverError }}</div>

    <template v-else-if="loading" data-testid="loading">
      <ContactSkelet :count="loadingSkeletCount" />
    </template>
    <div v-else>
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :data-testid="'user-' + contact.id"
        :contact="contact"
      />
    </div>
  </div>
</template>



<script>
import ContactItem from "../components/ContactItem.vue";
import ContactSkelet from "../components/ContactSkelet.vue";
import Navbar from "../components/Navbar.vue";

export default {
  data() {
    return {
      contacts: [],
      serverError: null,
      loadingSkeletCount: 3,
      loading: false,
    };
  },

  components: {
    ContactItem,
    ContactSkelet,
    Navbar,
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
      })
      .catch(() => {
        this.serverError = "Something went wrong";
      });
  },
};
</script>