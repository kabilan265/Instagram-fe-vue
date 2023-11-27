<template>
  <Loader v-if="enableSpinner" />
  <UploadPhoto />
  <Navbar :profile-pic="profile.profilePic" @callUploadPhoto="uploadPhoto()" />
  <div class="mb-20 md:mb-2 md:ml-[100px] lg:ml-[250px] md:pt-5">
    <div class="mx-auto max-w-[850px] md:p-4 lg:p-0">
      <div class="m-4">
        <header
          class="grid profile-header gap-8 mb-6 md:grid-cols-[0.2fr 0.8fr]"
        >
          <div>
            <img
              :src="profile.profilePic"
              alt=""
              class="rounded-full object-contain cursor-pointer"
              @click="uploadPhoto('profilePic')"
            />
          </div>
          <div class="">
            <h2 class="mb-3 font-semibold md:inline-block md:text-xl">
              {{ profile.fullName }}
            </h2>
            <div
              class="flex items-center justify-start font-semibold gap-1 text-sm md:inline-block md:ml-6"
            >
              <button class="bg-others-buttonbg p-2 rounded-lg">
                Edit Profile
              </button>
              <button class="bg-others-buttonbg p-2 rounded-lg md:ml-3">
                View Archeive
              </button>
            </div>
            <section
              class="profile-stats hidden md:flex md:items-start md:gap-6 md:mt-4"
            >
              <div>
                <span class="text-base font-medium">{{ profile.posts }}</span>
                <span class="text-light text-base ml-1">posts</span>
              </div>
              <div>
                <span class="text-base font-medium">{{
                  profile.followers
                }}</span>
                <span class="text-light text-base ml-1">followers</span>
              </div>
              <div>
                <span class="text-base font-medium">{{
                  profile.following
                }}</span>
                <span class="text-light text-base ml-1">following</span>
              </div>
            </section>
            <section class="hidden md:block mt-5">
              <h2 class="mb-2 font-semibold text-base">
                {{ profile.userName }}
              </h2>
              <p class="text-base opacity-95">{{ profile.bio }}</p>
            </section>
          </div>
        </header>
        <section class="md:hidden">
          <h2 class="mb-2 font-semibold text-xs">{{ profile.userName }}</h2>
          <p class="text-md opacity-95">{{ profile.bio }}</p>
        </section>
      </div>
      <section
        class="p-3 profile-stats flex items-center justify-around md:hidden"
      >
        <div class="flex flex-col items-center">
          <span class="text-sm font-medium">{{ profile.posts }}</span>
          <span class="text-light text-sm">posts</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-sm font-medium">{{ profile.followers }}</span>
          <span class="text-light text-sm">followers</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-sm font-medium">{{ profile.following }}</span>
          <span class="text-light text-sm">following</span>
        </div>
      </section>
      <section
        class="photo-tags flex items-center justify-around md:justify-center md:gap-16"
      >
        <div
          class="py-3 pl-3 flex-grow text-center md:flex md:items-center md:flex-grow-0 md:gap-2"
          style="box-shadow: 0 1px 0 #000 inset"
        >
          <ion-icon name="apps" class="fill-blue-primary"></ion-icon
          ><span class="hidden md:block text-xs text-blue-primary">POSTS</span>
        </div>
        <div
          class="flex-grow py-3 text-center md:flex md:flex-grow-0 md:items-center md:gap-2"
        >
          <ion-icon name="bookmark" class="text-[rgb(142, 142, 142)]"></ion-icon
          ><span class="hidden md:block text-xs">SAVED</span>
        </div>
        <div
          class="flex-grow text-center pr-3 py-3 md:flex md:flex-grow-0 md:items-center md:gap-2"
        >
          <ion-icon name="person"></ion-icon
          ><span class="hidden md:block text-xs">TAGGED</span>
        </div>
      </section>
      <section class="photos">
        <div class="gallery grid grid-cols-3 gap-[2px]">
          <div v-for="(photo, index) in profile.photos" :key="index">
            <img
              :src="photo"
              alt=""
              class="w-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProfileScript from "./ProfileScript.vue";
export default ProfileScript;
</script>
