import { PayloadAction } from "@reduxjs/toolkit";
import { call, takeLatest, all, put } from "redux-saga/effects";
import musicSearchApi from "./tracks.api";
// import { searchMusicStart, searchMusicSuccess, searchMusicFailed } from "./musicSearchSlice";

function* search(action: PayloadAction<string>) {
    try {
        const response = yield call(musicSearchApi.searchForTracks, action.payload);
        //yield put(searchMusicSuccess(response));
    }
    catch(err) {
        console.log(err);
        //yield put(searchMusicFailed(err.toString()))
    }
}

export default function* watchMusicSearchSagas() {
    yield all([
        //yield takeLatest(searchMusicStart.toString(), search)
    ]);
}
