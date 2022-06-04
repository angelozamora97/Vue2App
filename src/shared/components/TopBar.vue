<template>
  <div class="topbar__container">
    <button>
      Cerra Session
    </button>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>

<style>
  .topbar__container{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgb(162, 0, 255);
    height: 55px;
    padding: 5px 10px;
  }
</style>