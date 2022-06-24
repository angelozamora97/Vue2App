<template>
  <button
    @click="$emit('on-click')"
    class="poke-button"
    type="button"
  >{{text}}</button>
</template>

<script>
export default {
  name: 'PokeButton',
  props: {
    text: {
      type: String,
      default: 'Accion',
    }
  }
}
</script>

<style>
.poke-button{
  border: none;
  outline: none;
  color: var(--text-color-primary);
  padding: 3px 12px;
  background-color: transparent;
  border-radius: 25px;
  border: 2px solid var(--button-border-color);
}

.poke-button:hover{
  background-color: var(--bg-color-secondary);
  color: white;
  border: 2px solid var(--bg-color-secondary);
}
</style>