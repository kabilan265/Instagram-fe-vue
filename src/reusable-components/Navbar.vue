<template>
  <nav
    @click="navSelect($event)"
    class="fixed z-10 bg-white-primary top-[100%] translate-y-[-100%] p-2 w-full h-20 flex items-center justify-between md:py-16 md:px-8 md:w-[100px] md:h-full md:top-0 md:translate-y-0 md:flex-col md:items-start md:justify-start md:gap-10 lg:w-[250px]"
  >
    <img src="../assets/instalogin1.png" class="w-[100px] hidden lg:block" />
    <div class="nav-items flex items-center gap-5 cursor-pointer" @click="goToHome()">
      <img src="../assets/homeLogo.png" alt="" />
      <span class="hidden lg:block">Home</span>
    </div>
    <div class="nav-items flex items-center gap-5 cursor-pointer">
      <img src="../assets/searchLogo.png" alt="" />
      <span class="hidden lg:block">Search</span>
    </div>
    <div
      class="nav-items flex items-center gap-5 cursor-pointer"
      @click="$emit('callUploadPhoto')"
    >
      <ion-icon class="fill-black" name="add"></ion-icon>
      <span class="hidden lg:block">Create</span>
    </div>
    <!-- <div class="nav-items flex items-center gap-5 cursor-pointer">
      <img src="../assets/notificationLogo.png" alt="" />
      <span class="hidden lg:block">Notifications</span>
    </div> -->
    <div class="nav-items flex items-center gap-5 cursor-pointer" @click="$router.push('/direct/inbox')">
      <img src="../assets/messageLogo.png" alt="" />
      <span class="hidden lg:block">Messages</span>
    </div>
    <div class="nav-items flex items-center gap-5 cursor-pointer">
      <img
        :src="profilePic"
        class="rounded-full outline outline-2 outline-black"
      />
      <span class="hidden lg:block font-semibold">Profile</span>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["profilePic"],
  methods: {
    navSelect(event) {},
    goToHome(){
      this.$router.push('/login')
    }
  },
};
</script>
