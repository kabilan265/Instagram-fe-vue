<template>
  <div class="h-full flex flex-col">
    <header
      class="flex items-center justify-start p-2 gap-2 border-bottom h-[60px] bg-white-primary"
    >
      <ion-icon
        name="arrow-back"
        class="text-[30px] cursor-pointer"
        @click="goToInbox()"
      ></ion-icon>
      <img :src="recieverPic" alt="" class="rounded-full w-8 ml-2" />
      <img src="" alt="" />
      <h2 class="font-semibold text-base">{{ recieverName }}</h2>
    </header>
    <div
      class="p-2 px-7 messages flex flex-col h-full max-h-screen overflow-y-auto"
    >
      <div
        class="mb-3 flex"
        v-for="(msg, index) in messages"
        :key="index"
        :class="{ 'justify-end ': msg.sender.userName === userName }"
      >
        <img
          :src="recieverPic"
          alt=""
          class="w-[30px] rounded-full object-fill mr-[7px]"
          v-if="msg.sender.userName !== userName"
        />
        <p
          class="rounded-full bg-white-msg font-medium text-black opacity-70 inline-block p-2 text-sm"
          :class="{
            'sender-chat': msg.sender.userName === userName,
          }"
        >
          {{ msg.content }}
        </p>
      </div>
    </div>
    <div class="p-2 bg-white-primary">
      <label for="message" class="relative cursor-text">
        <input
          type="text"
          id="message"
          class="rounded-full input-box p-6 py-4 input-border"
          placeholder="Message..."
          v-model="message"
        />
        <span
          class="pass-toggler text-blue-primary"
          v-if="message.length"
          @click="sendMessage()"
        >
          Send</span
        >
      </label>
    </div>
  </div>
</template>
<script>
import ChatScript from "./ChatScript.vue";
export default ChatScript;
</script>
