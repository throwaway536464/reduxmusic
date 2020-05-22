import axios from "axios";
import { ITrack } from "./musicSearch.types";

interface ITrackResponse {
    resultCount: number;
    results: ITrack[];
}

export const searchForTracks = async (search: string) => {
    const resp = await axios.get<ITrackResponse>("https://itunes.apple.com/search", { params: {term: search } });
    return resp.data.results;
}

export default {
    searchForTracks
}