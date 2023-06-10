<template>
  <GameRow
    v-for="(row, index) in gameState"
    :key="index"
    :row="row"
  />
  <NumPad
    @append="fill"
    @enter="enter"
    @remove="remove"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameRow from './components/GameRow.vue';
import NumPad from './components/NumPad.vue';
import { LetterState, GameState } from './types'

const maxTrials = 6;
const pinLength = 4;

const state: GameState = Array.from({ length: maxTrials }, () =>
  Array.from({ length: pinLength }, () => ({
    letter: '',
    state: LetterState.INITIAL
  }))
);

export default defineComponent({
  name: 'App',
  components: {
    GameRow,
    NumPad
  },
  data() {
    return {
      gameState: state,
      trial: 0,
      // date: new Date(), // 使うときになったら
      answer: '1234' // あとで消す
    }
  },
  methods: {
    getLetters() {
      return this.gameState[this.trial].map(s => s.letter).join('');
    },
    isFillable() {
      return this.getLetters().length < pinLength;
    },
    hasFilled() {
      return !this.isFillable();
    },
    isTriable() {
      return this.trial < maxTrials;
    },
    fill(num: string) {
      if (this.isFillable()) {
        for (const tile of this.gameState[this.trial]) {
          if (!tile.letter) {
            tile.letter = num;
            return;
          }
        }
      }
    },
    enter() {
      if (this.hasFilled() && this.isTriable() ) {
        this.setResult();
        this.trial++;
      }
    },
    remove() {
      const current = this.gameState[this.trial];
      for (let i = current.length - 1; i >= 0  ; i--) {
        const tile = current[i];
        if (tile.letter) {
          tile.letter = '';
          return;
        }
      }
    },
    setResult() {
      const current = this.gameState[this.trial];
      let answer = Array.from(this.answer);
      
      // 場所まで一致を先に検証
      current.forEach((t, i)=> {
        if (t.letter === answer[i]) {
          t.state = LetterState.CORRECT;
          answer[i] = '#';
        }
      });

      current.forEach(t => {
        if (t.state === LetterState.INITIAL) {
          const position = answer.indexOf(t.letter);
          if (position > -1) {
            t.state = LetterState.PRESENT;
            answer[position] = '#';
          } else {
            t.state = LetterState.ABSENT;
          }
        }
      });
    }
  }
});
</script>

<style>
body {
  margin: 0;
  background-color: #121213;
}
#app {
  font-family: Comic Sans MS,	Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
