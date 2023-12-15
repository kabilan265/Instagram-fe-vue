<template>
  <div
    v-if="!isSkelton"
    class="w-full flex items-start justify-start gap-3 pl-4 cursor-pointer py-2 hover:bg-white-aggresive"
  >
    <img :src="profile.profilePic" alt=" " class="w-[45px] h-[45px] rounded-full skelton" />
    <section class="text-sm pt-1">
      <span class="block">{{ profile.userName }}</span>
      <span class="opacity-70">{{ profile.fullName }}</span>
    </section>
  </div>
  <div
    v-else
    class="w-full flex items-start justify-start gap-3 pl-4 cursor-pointer py-2"
  >
    <div src="" alt=" " class="w-[45px] h-[45px] rounded-full skelton" />
    <section class="text-sm pt-2">
      <span class="block skelton skelton-text"></span>
      <span class="block skelton skelton-text"></span>
    </section>
  </div>
</template>
<script>
export default {
  props: ["profile", "isSkelton"],
  data() {
    return {};
  },
};
</script>
