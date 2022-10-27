<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <!-- <div class="fixed top-0 left-0 w-full h-16 bg-white"> -->
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          target="__black"
          ><div class="company_name">
            <span class="build">R</span> <Span class="design">O</Span
            ><span class="create">O</span><span class="code">T </span>
          </div>
          Careers</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
            >
              <router-link
                :to="menuItem.path"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" data-test="profile-image" />

          <ActionButton
            v-else
            button-text="Sign In"
            data-test="login-button"
            type="primary"
            @click="LOGIN_USER"
          />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapMutations, mapState } from "vuex";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import ActionButton from "@/shared/ActionButton.vue";
import SubNav from "@/components/navigation/SubNav.vue";

import { LOGIN_USER } from "@/store/contants"; // import the mutation

export default defineComponent({
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage, //
    SubNav,
  },

  data() {
    return {
      menuItems: [
        { text: "Teams", path: "/teams" },
        { text: "Life at ROOT Careers", path: "/" },
        { text: "How We Hire", path: "/" },
        { text: "Students", path: "/students" },
        { text: "Jobs", path: "/jobs/results" },
      ],
    };
  },

  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn, // 16px
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]), // map this.isLoggedIn to this.$store.state.isLoggedIn
  },
  methods: {
    // LOGIN_USER() {
    //   this.$store.commit(LOGIN_USER);
    // },
    ...mapMutations([LOGIN_USER]), // <--- this is the same as the commented out code above
  },
});
</script>

<style>
.company_name span {
  font-weight: 600;
  font-family: "Tangerine", "Times New Roman", Times, serif;
}
</style>
