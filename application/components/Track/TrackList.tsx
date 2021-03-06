import React from 'react';
import {ITrack} from "../types/track";
import TrackItem from "./TrackItem";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {

    return (
        <Grid container direction="column">
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem
                        key={track._id}
                        track={track}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;