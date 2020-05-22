import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import musicSearchSagas from "../modules/MusicSearch/musicSearchSagas";

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(musicSearchSagas);
