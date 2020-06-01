<template>
  <div id="app">
    <div class="wrapper">
      <div id="menu">
        <img src="./assets/logo.png" alt="" class="logo">
        <nav>
          <a href="/list" 
          @click.prevent="routeComponents('list')"
          :class="{'nav-active': nowActive === 'list'}">
          List</a>

          <a href="/image"
          @click.prevent="routeComponents('image')"
          :class="{'nav-active': nowActive === 'image'}">
          Image</a>
        </nav>
      </div>
      <user-list v-if="nowActive === 'list'"></user-list>
      <some-image v-else></some-image>
    </div>
  </div>
</template>

<script>
import '../../image_component/dist/some-image.js';
import '../../image_component/dist/img/some-image.jpg';
import '../../list_component/dist/user-list.js';
export default {
  name: 'App',
  data() {
    return {
      nowActive: 'list'
    }
  },
  methods: {
    routeComponents(type) {
      this.nowActive = type;
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.wrapper {
  width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

user-list {
  width: 100%;
}
#menu {
  width: 100%;
  display: flex;
  background: #000;
  height: 74px;
  margin-top: 30px;
  padding: 0px 15px;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    a {
      padding: 0 15px;
      color: #fff;
      text-decoration: none;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
      }
      &.nav-active {
        text-decoration: underline;
      }
    }
  }
}
</style>
