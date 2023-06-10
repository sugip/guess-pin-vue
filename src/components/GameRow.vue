<template>
  <div class="row">
    <GameTile
      v-for="(tile, i) in row" 
      :key="i"
      :tile="tile"
      :index="i"
    />
  </div>
</template>

<script lang="ts" setup>
import GameTile from './GameTile.vue';
import { RowState } from '../types' 

defineProps<{ row: RowState}>()
</script>

<style scoped>
.row {
  display: flex;
}
</style>
