<template>
  <div
    class="fixed h-full w-full z-20 bg-white-primary flex items-center justify-center"
  >
    <img src="../assets/instalogo.jpeg" class="object-cover w-20 h-20" />
  </div>
</template>
<script>
export default {
  mounted() {
    document.body.style.overflow = "hidden"
  },
  unmounted() {
    document.body.style={}
  },
};
</script>
<style scoped></style>
