import * as React from "react";
import { SearchBox } from "@fluentui/react";
import { useDispatch } from "react-redux";
import { searchMusicStart } from "../musicSearchSlice";

export const TrackSearchBox = () => {
    const dispatch = useDispatch();
    const _onSearch = React.useCallback((searchTerm: string)  => {
        dispatch(searchMusicStart(searchTerm));
    }, [dispatch]);

    return (
        <SearchBox className="music-searchbox" onSearch={_onSearch} />
    );
}