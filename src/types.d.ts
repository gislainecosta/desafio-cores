interface IRanking {
  username: string;
  highscore: number;
}

interface IColor {
  time: number;
  guessedColor: string;
  correctColor: string;
}

interface IPlayer {
  highscore: number;
  colors: IColor[];
}
