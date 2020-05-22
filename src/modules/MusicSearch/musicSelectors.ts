import { MusicAppState } from "../../store"

const getTracks = () => {
   return (state: MusicAppState) => { 
       return { 
           music: state.musicSearch.music.all, 
           error: state.musicSearch.error 
        } 
    }
}

const getTrackById = (trackId: string) => {
    return (state: MusicAppState) => state.musicSearch.music.byId[trackId]
}

const tracksLoading = () => {
    return (state: MusicAppState) => state.musicSearch.loading;
}

export default {
    getTracks,
    getTrackById,
    tracksLoading
}