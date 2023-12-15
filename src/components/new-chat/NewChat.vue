<template>
  <div class="new-chat">
    <header class="flex flex-col mb-5">
      <div class="flex items-center justify-between border-bottom p-3">
        <ion-icon
          name="arrow-back"
          class="text-[30px] cursor-pointer"
          @click="goToInbox()"
        ></ion-icon>
        <h2 class="font-semibold text-lg">New message</h2>
        <button
          class="text-blue-primary text-base font-semibold"
          :disabled="true"
        >
          Next
        </button>
      </div>
      <div class="border-bottom px-4 p-3 flex items-start gap-2">
        <div class="text-base font-semibold">To:</div>
        <input
          type="text"
          class="outline-none text-black w-full"
          placeholder="Search..."
          @input="makeApiCall()()"
          v-model="name"
        />
      </div>
    </header>
    <div class="py-1">
      <div @click="goToChat($event)" v-show="!isSkelton">
        <ProfileCardVue
          :profile="user"
          v-for="(user, index) in users"
          :key="index"
          :data-key-id="user._id"
          @loaded="imgLoaded()"
        />
      </div>
      <div v-if="isSkelton">
        <ProfileCardVue
          v-for="(user, index) in [1, 2, 3, 4, 5]"
          :key="index"
          :isSkelton="true"
        />
      </div>
      <span v-if="!users.length && !isSkelton" class="px-6 opacity-70"
        >No account found.</span
      >
    </div>
  </div>
</template>
<script>
import ProfileCardVue from "@/reusable-components/ProfileCard.vue";
import appServices from "../../services/AppServices";
export default {
  components: {
    ProfileCardVue,
  },
  data() {
    return {
      users: [],
      user: {},
      name: "",
      timer: "",
      isSkelton: false,
      imgCount: 0,
    };
  },
  methods: {
    /* imgLoaded() {
      this.imgCount++;
      if (this.users.length === this.imgCount) {
        this.isSkelton = false;
      }
    }, */
    goToChat(event) {
      console.log(event);
      const elemType = event.target.tagName;
      let userName;
      if (elemType === "DIV") {
        userName = event.target.dataset.keyId;
      } else if (elemType === "SECTION" || elemType === "IMG") {
        userName = event.target.parentElement.dataset.keyId;
      } else {
        userName = event.target.parentElement.parentElement.dataset.keyId;
      }
      console.log(userName);
      if (userName) {
        const data = {
          userId: userName,
        };
        appServices
          .acessChat(data)
          .then((res) => {
            this.$store.commit("setChatDetails", res.data);
            this.$router.push(`/direct/inbox/${res.data._id}`);
          })
          .catch((err) => {});
      }
    },
    goToInbox() {
      this.$router.push("/direct/inbox");
    },
    fetchUsers() {
      appServices
        .getUsers(this.name)
        .then((res) => {
          this.users = res.data;
          /* if (!this.users.length) { */
            this.isSkelton = false;
          /* } */
        })
        .catch((err) => {
          this.users =[];
          this.isSkelton = false;
        });
    },
    makeApiCall() {
      const Othis = this;
      return function () {
        Othis.isSkelton = true;
        clearTimeout(Othis.timer);
        Othis.timer = setTimeout(() => {
          Othis.fetchUsers();
        }, 1000);
      };
    },
  },
};
</script>
