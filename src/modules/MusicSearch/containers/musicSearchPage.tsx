import * as React from "react";
import { Stack, Spinner, SpinnerSize } from "@fluentui/react";
import { useSelector } from "react-redux";
import { MovieCard } from "./musicCard";
import { TrackSearchBox } from "./musicSearch";

export const MovieSearch = () => {
    const { music, error } = { music: [], error: "" };
    const loading = false;
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
