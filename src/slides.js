import React from "react";

import {
    Deck,
    Slide,
    Heading,
    FlexBox,
} from "spectacle";


export const Slides = (props) => (
    <Deck transition={['zoom','slide']} transitionDuration={800}  {...props}>
        <Slide backgroundColor="primary">
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size={1} textColor="secondary" >
                    Representacion digital de la musica
                </Heading>
                <Heading size={3}>
                    Mauricio Collazos
                </Heading>
            </FlexBox>
        </Slide>
    </Deck>
);
