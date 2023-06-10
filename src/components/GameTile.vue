<template>
  <div
    class="tile"
    :class="[tile.state, tile.letter && 'filled', tile.state && 'revealed']"
  >
    <div
      class="front"
      :style="{ transitionDelay: `${index * 300}ms` }"
    >
      {{ tile.letter }}
    </div>
    <div
      :class="['back', tile.state]"
      :style="{
        transitionDelay: `${index * 300}ms`,
        animationDelay: `${index * 100}ms`
      }"
    >
      {{ tile.letter }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TileState } from '../types' 

defineProps<{
  index: number,
  tile: TileState
}>()
</script>

<style scoped>
.tile {
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  line-height: 48px;
  text-align: center;
  width: 48px;
  height: 48px;
  border: 2px #3a3a3c solid;
  margin: 4px;
  user-select: none;
  position: relative;
}

.tile .correct {
  background-color: #538d4e;
}

.tile .present {
  background-color: #c9b458;
}

.tile .absent {
  background-color: #3a3a3c;
}

.tile .front,
.tile .back {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.tile .back {
  transform: rotateX(180deg);
}

.tile.filled {
  animation: zoom 0.2s;
}

@keyframes zoom {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

.tile .back {
  transform: rotateX(180deg);
}
.tile.revealed .front {
  transform: rotateX(180deg);
}
.tile.revealed .back {
  transform: rotateX(0deg);
}
</style>
