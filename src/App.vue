<template>
  <transition :name="transitionName">
    <make-payment
      v-if="showMakePayment"
      @handlerSelect="selectContact"
      :contact="contact"
    />
  </transition>
  <transition :name="transitionName">
    <select-contact
      v-if="showContactList"
      v-model:contact="contact"
      @handlerBack="backFromContact"
      @handlerAddContact="addNewContact"
    />
  </transition>
  <transition :name="transitionName">
    <add-contact v-if="showContactAdd" @handlerBack="backFromContactAdd" />
  </transition>
</template>

<script>
import MakePayment from "./components/MakePayment.vue";
import SelectContact from "./components/SelectContact.vue";
import AddContact from "./components/AddContact.vue";

const TYPE_TRANSITION_OPEN = "slide-open";
const TYPE_TRANSITION_CLOSE = "slide-close";

export default {
  name: "app",

  data() {
    return {
      transitionName: TYPE_TRANSITION_OPEN,
      contacts: [],
      serverError: null,

      contact: "",

      showMakePayment: true,
      showContactList: false,
      showContactAdd: false,
    };
  },

  components: {
    MakePayment,
    SelectContact,
    AddContact,
  },

  created() {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          this.serverError = json.error;
        } else {
          this.contacts = json.contacts;
        }
      });
  },

  methods: {
    selectContact() {
      this.showMakePayment = false;
      this.showContactList = true;
      this.transitionName = TYPE_TRANSITION_CLOSE;
    },
    backFromContact() {
      this.showMakePayment = true;
      this.showContactList = false;
      this.transitionName = TYPE_TRANSITION_OPEN;
    },
    backFromContactAdd() {
      this.showContactAdd = false;
      this.showContactList = true;
    },
    addNewContact() {
      this.showContactAdd = true;
      this.showContactList = false;
    },
  },
};
</script>