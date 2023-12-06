<template>
  <div>
    <div class="py-4">
      <header class="flex items-center justify-between mb-5 px-4">
        <ion-icon
          name="arrow-back"
          class="text-[30px] cursor-pointer"
          @click="goToProfile()"
        ></ion-icon>
        <h2 class="font-bold text-xl">{{ userName }}</h2>
        <ion-icon name="create" class="text-[25px]"></ion-icon>
      </header>
      <div class="mb-5 font-bold text-lg px-4">Messages</div>
      <div @click="gotToChat($event)">
        <div
          v-for="(chat, index) in chats"
          :key="index"
          :data-key-id="chat._id"
          class="flex items-center justify-start gap-5 pb-3 cursor-pointer px-4 hover:bg-white-aggresive"
        >
          <section class="w-[60px]">
            <img
              :src="getUserPic(chat)"
              alt=""
              class="rounded-full object-contain w-full"
            />
          </section>
          <section>
            <h3 class="">{{ getUserName(chat) }}</h3>
            <p class="text-light">
              {{ chat.lastMessage.sender.userName === userName ? "You: " : "" }}
              {{ chat.lastMessage.content }}
            </p>
          </section>
        </div>
      </div>

      <div v-if="isSkelton">
        <div
          v-for="(chat, index) in [1, 2, 3, 4, 5]"
          :key="index"
          :data-key-id="chat"
          class="flex items-center justify-start gap-5 pb-3 cursor-pointer px-4 hover:bg-white-aggresive"
        >
          <section class="w-[60px] h-[60px]">
            <div class="rounded-full w-full h-full skelton" />
          </section>
          <section class="w-[60px]">
            <h3 class="skelton skelton-text"></h3>
            <p class="text-light skelton skelton-text"></p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InboxScript from "./InboxScript.vue";
export default InboxScript;
</script>
