<template>
  <div id="keyboard">
    <div class="row">
      <button @click="$emit('append', '1')">
        1
      </button>
      <button @click="$emit('append', '2')">
        2
      </button>
      <button @click="$emit('append', '3')">
        3
      </button>
    </div>
    <div class="row">
      <button @click="$emit('append', '4')">
        4
      </button>
      <button @click="$emit('append', '5')">
        5
      </button>
      <button @click="$emit('append', '6')">
        6
      </button>
    </div>
    <div class="row">
      <button @click="$emit('append', '7')">
        7
      </button>
      <button @click="$emit('append', '8')">
        8
      </button>
      <button @click="$emit('append', '9')">
        9
      </button>
    </div>
    <div class="row">
      <button @click="$emit('remove')">
        Delete
      </button>
      <button @click="$emit('append', '0')">
        0
      </button>
      <button @click="$emit('enter')">
        Enter
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

type PadEvents = {
  (e: 'enter'): void
  (e: 'remove'): void
  (e: 'append', num: string): void
}

defineEmits<PadEvents>();
</script>

<style scoped>
#keyboard {
  margin: 30px 8px 0;
  user-select: none;
  max-width: 300px;
  width: 100%;
}
.row {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}
button {
  font-family: inherit;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #d3d6da;
  color: #1a1a1b;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
  transition: all 0.2s 1.5s;
}
/* button:last-of-type {
  margin: 0;
} */
button.big {
  flex: 1.5;
}
</style>
