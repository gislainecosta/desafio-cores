import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

interface IGameStore {
  ranking: IRanking[];
  player: IPlayer;
}

interface IGlobalActions {
  setRanking: (ranking: IRanking[]) => void;
  setPlayer: (player: IPlayer) => void;
}

interface IGameContext {
  store: IGameStore;
  actions: IGlobalActions;
}

interface IGameProviderProps {
  children: ReactNode;
}

const reducers = (
  store: IGameStore,
  action: { type: string; payload?: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_RANKING':
      return { ...store, ranking: payload };
    case 'SET_PLAYER':
      return { ...store, player: payload };
    default:
      return store;
  }
};

const GameContext = createContext<IGameContext>({} as IGameContext);

const initialState = {
  ranking: [
    {
      username: 'Tondinha',
      highscore: 100,
    },
    {
      username: 'Natasha',
      highscore: 102,
    },
    {
      username: 'Luciano',
      highscore: 95,
    },
    {
      username: 'Scar',
      highscore: 73,
    },
    {
      username: 'Chloe',
      highscore: 98,
    },
    {
      username: 'Perséfone',
      highscore: 80,
    },
    {
      username: 'Sofia',
      highscore: 84,
    },
  ],
  player: {
    highscore: 0,
    colors: [
      {
        time: 3,
        guessedColor: '#000000',
        correctColor: '#00AAFF',
      },
      {
        time: 12,
        guessedColor: '#772626',
        correctColor: '#149730',
      },
      {
        time: 3,
        guessedColor: '#dbb6b6',
        correctColor: '#dbb6b6',
      },
      {
        time: 5,
        guessedColor: '#890e94',
        correctColor: '#af5baf',
      },
      {
        time: 10,
        guessedColor: '#24bda3',
        correctColor: '#24bda3',
      },
      {
        time: 20,
        guessedColor: '#a5c05a',
        correctColor: '#38cc3f',
      },
    ],
    username: '',
  },
};

export function GameContextProvider({ children }: IGameProviderProps) {
  const [store, dispatch] = useReducer(reducers, initialState);

  const actions = useMemo(
    () => ({
      setRanking: (ranking: IRanking[]) => {
        dispatch({ type: 'SET_RANKING', payload: ranking });
      },
      setPlayer: (player: IPlayer) => {
        dispatch({ type: 'SET_PLAYER', payload: player });
      },
    }),
    [dispatch],
  );

  const contextValues = useMemo(
    () => ({
      store,
      actions,
    }),
    [actions, store],
  );

  return (
    <GameContext.Provider value={contextValues}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
