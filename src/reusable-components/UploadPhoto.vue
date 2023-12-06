<template>
  <div
    class="w-full max-w-sm bg-white-primary rounded-lg text-base fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-20"
  >
    <div class="text-center">
      <header class="py-7 text-xl">Change profile photo</header>
      <div
        class="py-3 profile-stats text-blue-primary font-bold cursor-pointer"
        @click="$emit('upload', 'profile-pic')"
      >
        Upload Photo
      </div>
      <div class="py-3 profile-stats text-warning font-bold cursor-pointer">
        Remove current photo
      </div>
      <div class="py-3 profile-stats cursor-pointer" @click="$emit('close')">
        Cancel
      </div>
    </div>
  </div>
</template>
<script></script>
