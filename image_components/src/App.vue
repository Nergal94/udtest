<template>
  <div id="image-container">
    <img alt="Some Image" src="../public/some-image.jpg">
  </div>
</template>

<script>

export default {
  name: 'someImage',
}
</script>

<style lang="scss">
#image-container {
  height: 500px;
  width: 800px;
  img {
    width: 100%;
  }
}
</style>
