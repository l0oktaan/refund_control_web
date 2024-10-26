<template>   
<div class="container">
        <top-header></top-header>
        <div class="main-content">
            <left-menu></left-menu>
            <div class="content">              
              <router-view/>
            </div>
            
        </div>
        <footer class="footer">Footer</footer>

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

body, html {
    height: 100%;
    background-color: #F5F7FA;
}

.container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
}



.main-content {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 20px;
    padding: 20px;
}



.content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.footer {
    background-color: #2196F3;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 1em;
    font-weight: 600;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-content {
        grid-template-columns: 1fr;
    }

    .menu {
        display: none;
    }
}

</style>