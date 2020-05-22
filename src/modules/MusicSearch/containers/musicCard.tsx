import * as React from "react";
import { Card } from "@uifabric/react-cards";
import { Text } from "@fluentui/react";

type TrackCardProps = {
    trackId: string;
}

export const MovieCard = (props: TrackCardProps) => {
    return (
        <Card className="music-card">
            <Card.Item>
                <img 
                 alt={"movie"}
                 className="card-image" 
                />
                <Text block styles={{root: {padding: "3px", fontSize: "20px", color: "darkgreen"}}}></Text>
                <Text block styles={{root: {padding: "3px"}}}></Text>
            </Card.Item>
            <Card.Item>
                <Text block styles={{root: {padding: "3px"}}}></Text>
                <Text block styles={{root: {padding: "3px"}}}></Text>
            </Card.Item>
        </Card>
    );
}
