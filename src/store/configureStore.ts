import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import searcMusicReducers from "../modules/MusicSearch/musicSearchSlice";
import musicSearchSagas from "../modules/MusicSearch/musicSearchSagas";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    musicSearch: searcMusicReducers
});

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(musicSearchSagas);

export type MusicAppState = ReturnType<typeof rootReducer>

export default store;
