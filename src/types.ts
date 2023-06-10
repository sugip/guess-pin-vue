export const enum LetterState {
  INITIAL = 0,
  CORRECT = 'correct',
  PRESENT = 'present',
  ABSENT = 'absent'
}

export type TileState = {
  letter: string;
  state: LetterState;
}

export type RowState = TileState[];

export type GameState = RowState[];