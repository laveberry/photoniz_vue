<script setup>
// example components
import DefaultNavbar from "../../examples/navbars/NavbarDefault.vue";
import Header from "../../examples/Header.vue";

// sections
import Footer from "./Sections/AuthorFooter.vue";
// import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Contact from "./Sections/AuthorContact.vue";

// image
import image from "@/assets/img/city-profile.jpg";

</script>
<script>
export default {
  created(){
    // this.photoId = this.$route.params.photoId;
    this.startPhoto();
  },
  data(){
    return {
      data : {}
    }
  },
  computed:{
    //고정값
    photoId(){
      return this.$route.params.photoId;
    }
  },
  methods: {
    startPhoto(){
      switch(this.photoId){
        case 'wedding':
          alert("웨딩");
          break;
        case 'body':
        alert("바디프로필");
          break;
        case 'personal':
        alert("개인");
          break;
        default:
        alert("전체");
      }
    }
  },
}
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <!-- <Profile /> -->
    <Posts :data="data"/>
  </div>
  <Contact />
  <Footer />
</template>
