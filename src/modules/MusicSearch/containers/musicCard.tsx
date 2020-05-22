import * as React from "react";
import { Card } from "@uifabric/react-cards";
import { Text } from "@fluentui/react";
import { useSelector } from "react-redux";
import musicSelectors from "../musicSelectors";

type TrackCardProps = {
    trackId: string;
}

export const MovieCard = (props: TrackCardProps) => {
    const track:ITrack;
    return (
        <Card className="music-card">
            <Card.Item>
                <img 
                 alt={"movie"}
                 className="card-image" 
                 src={track.artworkUrl100} />
                <Text block styles={{root: {padding: "3px", fontSize: "20px", color: "darkgreen"}}}>{track.trackName}</Text>
                <Text block styles={{root: {padding: "3px"}}}>{track.artistName}</Text>
            </Card.Item>
            <Card.Item>
                <Text block styles={{root: {padding: "3px"}}}>{track.collectionName}</Text>
                <Text block styles={{root: {padding: "3px"}}}>{new Date(track.releaseDate).toLocaleDateString()}</Text>
            </Card.Item>
        </Card>
    );
}
