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
        <ion-icon
          name="create"
          class="text-[25px] cursor-pointer"
          @click="createChat()"
        ></ion-icon>
      </header>
      <div class="mb-5 font-bold text-lg px-4">Messages</div>
      <div @click="gotToChat($event)" v-show="!isSkelton">
        <div
          v-for="(chat, index) in chats"
          :key="index"
          :data-key-id="chat._id"
          class="flex items-center justify-start gap-5 py-2 cursor-pointer px-4 transition-all duration-300 hover:bg-white-aggresive"
        >
          <section class="w-[60px]">
            <img
              :src="getUserPic(chat)"
              @load="isImgLoaded()"
              alt=""
              class="rounded-full object-contain w-full"
            />
          </section>
          <section>
            <h3 class="">{{ getUserName(chat) }}</h3>
            <p class="text-light">
              {{
                chat.lastMessage?.sender?.userName === userName ? "You: " : ""
              }}
              {{ chat.lastMessage?.content }}
            </p>
          </section>
        </div>
      </div>

      <div v-if="isSkelton">
        <div
          v-for="(chat, index) in [1, 2, 3, 4, 5]"
          :key="index"
          :data-key-id="chat"
          class="flex items-center justify-start gap-5 pb-3 cursor-pointer px-4"
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

      <div
          class="p-10 md:py-20 text-center flex flex-col items-center gap-2"
          v-if="!chats.length && !isSkelton"
        >
          <img src="../../assets/messageLogo.png" alt="" class="w-[50px] md:w-[90px]" />
          <span class="text-xl font-bold block mt-3">No messages found</span>
          <a
            href="#"
            class="text-blue-primary font-medium ml-2 mt-3 text-lg"
            @click.prevent="$router.push('/direct/new')"
            >Search profiles here</a
          >
        </div>
    </div>
  </div>
</template>
<script>
import InboxScript from "./InboxScript.vue";
export default InboxScript;
</script>
