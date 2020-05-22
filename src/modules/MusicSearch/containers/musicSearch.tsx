import * as React from "react";
import { SearchBox } from "@fluentui/react";

export const TrackSearchBox = () => {
    const _onSearch = React.useCallback((searchTerm: string)  => {
    }, []);

    return (
        <SearchBox className="music-searchbox" onSearch={_onSearch} />
    );
}
