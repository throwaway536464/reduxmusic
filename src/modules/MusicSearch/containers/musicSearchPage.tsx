import * as React from "react";
import { Stack, Spinner, SpinnerSize } from "@fluentui/react";
import { useSelector } from "react-redux";
import { MovieCard } from "./musicCard";
import { TrackSearchBox } from "./musicSearch";
import musicSelectors from "../musicSelectors";
import { ITrack } from "../musicSearch.types";

export const MovieSearch = () => {
    const { music, error } = useSelector(musicSelectors.getTracks());
    const loading = useSelector(musicSelectors.tracksLoading());
    return (
        <Stack className="music-container">
            <TrackSearchBox />
            {
                loading &&
                <Spinner size={SpinnerSize.large} />
            }
            {
               music.length > 0 &&
               !error &&
               <div className="cards-container">
                   { music.map((item:ITrack) => <MovieCard trackId={item.trackId} />) }
               </div>
            }
            {
                error  
            }
        </Stack>
    );
}
