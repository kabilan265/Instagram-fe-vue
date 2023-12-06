<template>
  <Loader v-if="enableSpinner" />
  <UploadPhoto v-if="uploadModal" @close="closeModal" @upload="uploadPhoto" />
  <Navbar
    :profile-pic="profile.profilePic"
    @callUploadPhoto="uploadPhoto()"
    v-if="authorized"
  />
  <div
    v-if="uploadModal"
    class="overlay fixed top-0 left-0 z-10 w-full h-full"
    @click="closeModal()"
  ></div>
  <div class="mb-20 md:mb-2 md:ml-[100px] lg:ml-[250px] md:pt-5">
    <div class="mx-auto max-w-[850px] md:p-4 lg:p-0" v-if="authorized">
      <div class="m-4">
        <header class="grid profile-header gap-8 md:gap-20">
          <div class="relative">
            <img
              :src="profile.profilePic"
              :class="{ 'opacity-70': profilePicSpinner }"
              alt=""
              class="rounded-full object-contain cursor-pointer"
              @click="openModal()"
              @load="imgLoaded()"
            />
            <VueSpinnerIos
              v-if="profilePicSpinner"
              class="absolute top-1/2 -translate-y-1/2 left-1/2 -transalte-x-1/2"
              size="20"
              color="black"
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
        <section class="md:hidden mt-5">
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
          <ion-icon name="apps" class="fill-black"></ion-icon
          ><span
            class="hidden md:block text-xs text-black font-semibold"
            style="letter-spacing: 1px"
            >POSTS</span
          >
        </div>
        <div
          class="flex-grow py-3 text-center md:flex md:flex-grow-0 md:items-center md:gap-2"
        >
          <ion-icon name="bookmark" class="text-[rgb(142, 142, 142)]"></ion-icon
          ><span class="hidden md:block text-xs" style="letter-spacing: 1px"
            >SAVED</span
          >
        </div>
        <div
          class="flex-grow text-center pr-3 py-3 md:flex md:flex-grow-0 md:items-center md:gap-2"
        >
          <ion-icon name="person"></ion-icon
          ><span class="hidden md:block text-xs" style="letter-spacing: 1px"
            >TAGGED</span
          >
        </div>
      </section>
      <section class="photos">
        <div class="gallery grid grid-cols-3 gap-[2px]">
          <div v-for="(photo, index) in profile.photos" :key="index">
            <img
              :src="photo"
              alt=""
              class="w-full object-cover cursor-pointer"
              @load="imgLoaded()"
            />
          </div>
        </div>
        <div class="p-10 md:py-20 text-center" v-if="!profile.photos?.length">
          <ion-icon name="camera" class="mx-auto text-[70px]"></ion-icon>
          <span class="text-xl font-bold block mt-3">No posts yet</span>
        </div>
      </section>
    </div>
    <div v-else class="ml-6">
      <PageNotFound />
    </div>
  </div>
</template>

<script>
import ProfileScript from "./ProfileScript.vue";
export default ProfileScript;
</script>
