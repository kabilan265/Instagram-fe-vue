<template>
  <div class="mx-auto max-w-[350px] p-2">
    <div class="p-10 md:mt-6 form-wrap">
      <img src="../../assets/instalogin.png" class="w-[150px] mx-auto" />
      <form class="mt-8 flex flex-col gap-4">
        <label for="username" class="relative cursor-text rounded">
          <span
            class="absolute input-span"
            :class="{ 'input-span-active': userName.length }"
            >Username</span
          >
          <input
            type="text"
            id="username"
            v-model.trim="userName"
            class="input-box"
          />
        </label>

        <label for="password" class="relative cursor-text">
          <span
            class="absolute input-span"
            :class="{ 'input-span-active': password.length }"
            >Password</span
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="input-box"
          />
          <span
            class="pass-toggler"
            v-if="password.length"
            @click="showOrHide()"
          >
            {{ passToggler }}</span
          >
        </label>
        <div class="relative">
          <button
            type="button"
            class="block w-full rounded-lg h-[30px] bg-blue-primary hover:bg-blue-aggresive text-white-primary p-1"
            :disabled="isDisabled"
            @click="login()"
          >
            {{ loginText }}
          </button>
          <VueSpinnerIos
            v-if="loginSpinner"
            class="absolute top-1/2 -translate-y-1/2 right-1/2 transalte-x-1/2"
            size="20"
            color="white"
          />
        </div>
        <div v-if="errorMsg" class="text-warning">{{ errorMsg }}</div>
      </form>
    </div>
    <div class="p-6 md:mt-4 form-wrap">
      <p>
        Don't have an account?<a
          href="#"
          class="text-blue-primary font-medium ml-2"
          @click="goToSignUp($event)"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>
<script>
import login from "./LoginScript.vue";
export default login;
</script>
