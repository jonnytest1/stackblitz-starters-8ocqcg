import { SetStateAction, Dispatch } from 'react';


export type UseState<S>=(initialState: S | (() => S))=> [S, Dispatch<SetStateAction<S>>];