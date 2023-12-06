<template>
  <router-view />
</template>
<script>
/* import { socket } from "./socket/Socket"; */
export default {
  data() {
    return {};
  },
  sockets:{
    connection: function () {
      console.log("connection");
    },
  },
  created() {
    if (this.$store.state.userId) {
      console.log("APP>VUE")
      const profileId = this.$store.state.userId;
      this.$socket.emit("setup", profileId);
    }
  },
  mounted() {},
};
</script>

<style>
@import url("./styles/app.css");
</style>
