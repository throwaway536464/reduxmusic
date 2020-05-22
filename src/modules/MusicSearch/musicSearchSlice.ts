import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "./musicSearch.types";

type MusicSearchPageState = {
    loading: boolean;
    error: string;
    music: {
        byId:{ [key:string]: ITrack },
        all:ITrack[]
    }
}

const initialState: MusicSearchPageState = {
    loading: false,
    error: "",
    music: {
        byId: {},
        all: []
    }
}

const musicSearchSlice = createSlice({
    name: "$modules/moviesearch",
    initialState: initialState,
    reducers: {
        searchMusicStart: (state: MusicSearchPageState, action: PayloadAction<string>) => {
                state.loading = true;
                state.error = "";
                state.music = initialState.music
        },
        searchMusicSuccess: (state: MusicSearchPageState, action:PayloadAction<ITrack[]>) => {
            const { payload } = action;
            state.loading = false;
            state.error = "";
            const byId:{[key:string]: ITrack } = {};
            const all = payload;
            all.forEach((item:ITrack) => byId[item.trackId] = item )
            state.music = {
                byId,
                all
            };
        },
        searchMusicFailed: (state: MusicSearchPageState, action: PayloadAction<string>) => {
            const { payload } = action;
            state.loading = false;
            state.error = payload;
            state.music = initialState.music;
        }
    }
});

export const { searchMusicStart, searchMusicSuccess, searchMusicFailed } = musicSearchSlice.actions;

export default musicSearchSlice.reducer;