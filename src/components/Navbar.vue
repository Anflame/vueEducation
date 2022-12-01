<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="logo">My project</div>
    <div class="navbar__btns">
      <Button class="navbar-btn" @click="$router.push('/posts')">Посты</Button>
      <Button class="navbar-btn" @click="$router.push('/about')">О нас</Button>
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
  align-items: center;
  box-shadow: 2px 2px 4px green;
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