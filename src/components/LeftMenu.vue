<template lang="">
    
      <div class="logo">
        <img :src="logo" alt="Logo">
      </div>
      <v-list class="menu">
        
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.link"
            prepend-icon
          >
            <!-- <template v-slot:prepend>
              <v-icon>{{ item.icon }}</v-icon>
            </template> -->
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>        
      </v-list>
    
    
</template>
<script>
import { ref, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import logo from '@/assets/cgd.png'
export default {
  setup(){
    const drawer = ref(true);
    const miniVariant = ref(false);
    const display = useDisplay();
    const menuItems = [
        { text: 'Dashboard', icon: 'mdi-view-dashboard',link: '/dashboard' },
        { text: 'ค้นหาข้อมูล', icon: 'mdi-magnify',link: '/find' },
        { text: 'ภาษีสรรพสามิต', icon: 'mdi-account-cash',link: '/excise' },
        { text: 'ค่าปรับ และอื่น ๆ', icon: 'mdi-clipboard-text',link: '/penalty' },
      ];
    onMounted(() => {
      miniVariant.value = display.mobile;
    });
    const toggleDrawer = () => {
      miniVariant.value = !miniVariant.value;
    };
    return { drawer, miniVariant, menuItems, toggleDrawer,logo };
  },
  
  
}
</script>
<style scoped>
  .no-background {
    
    background-color: #1d1d29!important;
  }
  .logo{
    color: #ffffff;
    background-color: #1d1d29; 
  }
    .menu {
      color: #ffffff;
      background-color: #1d1d29; 
      padding: 2px;
    
    
}

.menu ul {
    list-style-type: none;
    padding: 0;
}

.menu li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.menu-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.menu a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    
}



.menu a:hover {
  
    text-decoration: none;
}




.logo{
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: #1d1d29; 
}
.logo img{
  padding: 10px;
  max-width: 75px;
}
</style>