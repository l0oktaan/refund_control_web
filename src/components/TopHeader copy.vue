<template lang="">
    <header class="top">
    <div class="top-left">
        <img :src="logo" alt="Logo" class="logo">
        <span class="system-name">ระบบควบคุมวงเงิน</span>
    </div>
    <div class="top-right">
        <nav class="quick-menu">
            <a href="#">Dashboard</a>
            <a href="#">Settings</a>
        </nav>
        <div class="user-avatar">
            <img :src="avatar" alt="User Avatar">
        </div>
    </div>
</header>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import logo from '@/assets/cgd.png'
import avatar from '@/assets/avatar.png'
export default defineComponent({
    data () {
        return {
            logo,
            avatar
        }
    },
})
</script>
<style scoped>
    .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.top-left {
    display: flex;
    align-items: center;
}

.logo {
    width: 40px;
    height: 40px;
    margin-right: 15px;
}

.system-name {
    font-size: 1.8em;
    font-weight: 500;
}

.top-right {
    display: flex;
    align-items: center;
}

.quick-menu a {
    color: rgb(150, 214, 252);
    text-decoration: none;
    margin-right: 20px;
    font-size: 1em;

}

.quick-menu a:hover {
    color: white;
    text-decoration: node;
}

.user-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    border: 2px solid white;
}

</style>