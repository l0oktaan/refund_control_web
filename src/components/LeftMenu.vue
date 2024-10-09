<template lang="">
    <aside class="menu">
      
      <v-list   
        class="no-background"         
          item-title="ค้นหาข้อมูล"            
        >      
        <v-list-item          
          v-for="(item, i) in items"
          :key="i"
          :value="item"     
        >
        <router-link :to="item.route">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </router-link>
        </v-list-item>
      </v-list>
  </aside>
</template>
<script>
export default {
  data: () => ({
      items: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard',route: '/' },
        { text: 'ค้นหาข้อมูล', icon: 'mdi-magnify',route: 'find' },
        { text: 'ภาษีสรรพสามิต', icon: 'mdi-account-cash',route: 'excise' },
        { text: 'ค่าปรับ และอื่น ๆ', icon: 'mdi-clipboard-text',route: 'penalty' },
      ],
    }),
}
</script>
<style scoped>
  .no-background {
    color: white;
    background-color: #1565C0 !important; /* เคลียร์สีพื้นหลัง */
  }
    .menu {
    background-color: #1565C0;
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
    color: rgb(169, 184, 207);
    text-decoration: none;
    font-size: 1em;
}

.menu a:hover {
  color: white;
    text-decoration: none;
}

</style>