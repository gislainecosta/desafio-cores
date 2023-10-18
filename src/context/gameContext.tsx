import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
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
  clearStore: () => void;
}

interface IGameContext {
  store: IGameStore;
  actions: IGlobalActions;
}

interface IGameProviderProps {
  children: ReactNode;
}

const initialState = {
  ranking: [
    {
      username: 'Da Vinci',
      highscore: 100,
    },
    {
      username: 'Monet',
      highscore: 72,
    },
    {
      username: 'Michelangelo',
      highscore: 97,
    },
    {
      username: 'Picasso',
      highscore: 84,
    },
    {
      username: 'Van Gogh',
      highscore: 98,
    },
  ],
  player: {
    username: null,
    highscore: 0,
    colors: [],
  },
};

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
    case 'CLEAR_STORE':
      return initialState;
    default:
      return store;
  }
};

const GameContext = createContext<IGameContext>({} as IGameContext);

export function GameContextProvider({ children }: IGameProviderProps) {
  const [store, dispatch] = useReducer(reducers, initialState);

  useLayoutEffect(() => {
    const player = localStorage.getItem('player');
    const ranking = localStorage.getItem('ranking');

    if (player) {
      dispatch({ type: 'SET_PLAYER', payload: JSON.parse(player) });
    }

    if (ranking) {
      dispatch({ type: 'SET_RANKING', payload: JSON.parse(ranking) });
    }
  }, []);

  const actions = useMemo(
    () => ({
      setRanking: (ranking: IRanking[]) => {
        dispatch({ type: 'SET_RANKING', payload: ranking });
        localStorage.setItem('ranking', JSON.stringify(ranking));
      },
      setPlayer: (player: IPlayer) => {
        localStorage.setItem('player', JSON.stringify(player));
        dispatch({ type: 'SET_PLAYER', payload: player });
      },
      clearStore: () => {
        dispatch({ type: 'CLEAR_STORE' });
        localStorage.clear();
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
