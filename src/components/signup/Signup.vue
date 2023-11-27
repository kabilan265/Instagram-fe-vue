<template>
  <div class="mx-auto max-w-[350px] p-2">
    <div class="p-10 md:mt-6 form-wrap">
      <img src="../../assets/instalogin.png" class="w-[150px] mx-auto" />
      <form class="mt-8 flex flex-col gap-4">
        <label for="email" class="relative cursor-text">
          <span
            class="absolute input-span"
            :class="{ 'input-span-active': details.email.length }"
            >Email</span
          >
          <input
            type="text"
            id="email"
            v-model.trim="v$.details.email.$model"
            @input="
              details.email.length
                ? v$.details.email.$touch()
                : v$.details.email.$reset()
            "
            class="input-box"
          />
          <ion-icon
            v-if="v$.details.email.$errors.length"
            name="close-circle-outline"
            class="absolute top-1/2 -translate-y-1/2 right-2 text-warning"
          ></ion-icon>
          <ion-icon
            v-if="
              !v$.details.email.$errors.length && v$.details.email.$model.length
            "
            name="checkmark-circle-outline"
            class="absolute top-1/2 -translate-y-1/2 right-2"
          ></ion-icon>
        </label>
        <label for="fullname" class="relative cursor-text">
          <span
            class="absolute input-span"
            :class="{ 'input-span-active': details.fullName.length }"
            >Fullname</span
          >
          <input
            type="text"
            id="fullname"
            v-model.trim="v$.details.fullName.$model"
            @input="
              details.fullName.length
                ? v$.details.fullName.$touch()
                : v$.details.fullName.$reset()
            "
            class="input-box"
          />
          <ion-icon
            v-if="v$.details.fullName.$errors.length"
            name="close-circle-outline"
            class="absolute top-1/2 -translate-y-1/2 right-2 text-warning"
          ></ion-icon>
          <ion-icon
            v-if="
              !v$.details.fullName.$errors.length &&
              v$.details.fullName.$model.length
            "
            name="checkmark-circle-outline"
            class="absolute top-1/2 -translate-y-1/2 right-2"
          ></ion-icon>
        </label>
        <label for="username" class="relative cursor-text">
          <span
            class="absolute input-span"
            :class="{ 'input-span-active': details.userName.length }"
            >Username</span
          >
          <input
            type="text"
            id="username"
            v-model.trim="v$.details.userName.$model"
            @input="
              details.userName.length
                ? v$.details.userName.$touch()
                : v$.details.userName.$reset()
            "
            class="input-box"
          />
          <ion-icon
            v-if="v$.details.userName.$errors.length"
            name="close-circle-outline"
            class="absolute top-1/2 -translate-y-1/2 right-2 text-warning"
          ></ion-icon>
          <ion-icon
            v-if="
              !v$.details.userName.$errors.length &&
              v$.details.userName.$model.length
            "
            name="checkmark-circle-outline"
            class="absolute top-1/2 -translate-y-1/2 right-2"
          ></ion-icon>
        </label>

        <label for="password" class="relative cursor-text">
          <span
            class="absolute input-span"
            :class="{ 'input-span-active': details.password.length }"
            >Password</span
          >
          <input
            type="password"
            id="password"
            v-model.trim="v$.details.password.$model"
            @input="
              details.password.length
                ? v$.details.password.$touch()
                : v$.details.password.$reset()
            "
            class="input-box"
          />
          <span
            class="pass-toggler right-10"
            v-if="details.password.length"
            @click="showOrHide()"
          >
            {{ passToggler }}</span
          >
          <ion-icon
            v-if="v$.details.password.$errors.length"
            name="close-circle-outline"
            class="absolute top-1/2 -translate-y-1/2 right-2 text-warning"
          ></ion-icon>
          <ion-icon
            v-if="
              !v$.details.password.$errors.length &&
              v$.details.password.$model.length
            "
            name="checkmark-circle-outline"
            class="absolute top-1/2 -translate-y-1/2 right-2"
          ></ion-icon>
        </label>
        <button
          type="button"
          class="block w-full rounded-lg bg-blue-aggresive text-white-primary p-1 mt-4"
          :disabled="isDisabled"
          @click="signup()"
        >
          Sign Up
        </button>
        <div v-if="errorMsg" class="text-warning">{{ errorMsg }}</div>
      </form>
    </div>
    <div class="p-6 mt-4 form-wrap">
      <p>
        Don't have an account?<a
          href="#"
          class="text-blue-primary font-medium ml-2"
          @click="goToLogIn($event)"
          >Log in</a
        >
      </p>
    </div>
  </div>
</template>
<script>
import SignupScript from "./SignupScript.vue";
export default SignupScript;
</script>
