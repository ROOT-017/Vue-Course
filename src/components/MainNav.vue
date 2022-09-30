<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <!-- <div class="fixed top-0 left-0 w-full h-16 bg-white"> -->
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a
          :href="url"
          class="flex items-center h-full text-xl"
          target="__black"
          >{{ company }}</a
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage
            v-if="isLoggedIn"
            data-test="profile-image"
            @click="logoutUser"
          />

          <ActionButton
            v-else
            button-text="Sign In"
            data-test="login-button"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ProfileImage from "@/components/ProfileImage.vue";
import ActionButton from "@/components/ActionButton.vue";
import SubNav from "./SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },

  data() {
    return {
      company: "ROOT Careers",
      url: "https://careers.google.com/",
      menuItems: [
        "Teams",
        "Life at ROOT Careers",
        "How We Hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },

  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
    logoutUser() {
      this.isLoggedIn = false;
    },
  },
};
</script>
