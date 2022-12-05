<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="logo">My project</div>
    <div class="navbar__btns">
      <Button class="navbar-btn" @click="$router.push('/posts')">Посты</Button>
      <Button class="navbar-btn" @click="$router.push('/about')">О нас</Button>
      <Button class="navbar-btn" @click="$router.push('/store')">Store</Button>
      <Button class="navbar-btn" @click="$router.push('/composition')">Композиция</Button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 70px;
  align-items: center;
  box-shadow: 2px 2px 4px green;
  background-color: white;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
.navbar-btn {
  margin-left: 20px;
}

.logo {
  color: green;
  font-weight: bold;
}
</style>