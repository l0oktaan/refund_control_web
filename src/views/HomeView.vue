<template>   
  
  <!-- <top-header id="top-header"></top-header> -->
  
   <div class="container">
   <top-header id="top-header"></top-header>
    <!-- <aside id="sidebar">
      <div class="logo">&#9812;</div>
      <button type="button" id="resize">
        &#9776;
      </button>
    </aside> -->
    <left-menu class="sidebar"></left-menu>
    <div id="content">              
      <router-view/>
    </div>
    <footer id="footer">Footer</footer>
   </div>
  
  
      
       
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import TopHeader from '@/components/TopHeader.vue'
  import LeftMenu from '@/components/LeftMenu.vue'
  export default defineComponent({
    name: 'home',
  
    data () {
      return {
        //
      }
    },
    components:{
      TopHeader,
      LeftMenu
    }
  })
  </script>
  <style scoped>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
  }
  
.container{
    background-color: #f3f3f3;
    min-block-size: 100vh;
    min-block-size: 100dvh;
    display: grid;

    grid-template-columns: 15rem 1fr;
    grid-template-rows: auto 1fr auto;    
    grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
    grid-template-areas:
      "sidebar header"
      "sidebar main"
      "footer footer";
    transition: grid-template-columns 0.3s ease;
}

/* body.sb-expand {
  grid-template-columns: 12.5rem 1fr;
} */
  #top-header{
    grid-area: header;
    background-color: #fff;
    padding: 1.25rem;
  }
  .sidebar{
    position: relative;
    grid-area: sidebar;
    color: #fff;
    background-color: #1d1d29;
  }
  #sidebar button {
    position: absolute;
    inset: 4.5rem -0.75rem auto auto;
    width: 1.5rem;
    aspect-ratio: 1;
    background-color: #fff;
    border: transparent;
    border-radius: 50%;
    cursor: pointer;
  }
  #content{
    grid-area:main;
    padding: 10px;
  }
  #footer{
    grid-area: footer;
    background-color: #fff;
    padding: 1.25rem;
  }
  .logo {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    line-height: 1.3;
  }
  </style>