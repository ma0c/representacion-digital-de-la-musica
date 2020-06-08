import React from "react";

import qr from "../static/img/qr.png"

import {
    Deck,
    Slide,
    Heading,
    FlexBox,
    Image,
    Link,
    Text,
    Appear,
    ListItem,
    UnorderedList,
    Notes
} from "spectacle";


export const Slides = (props) => (
    <Deck transition={['zoom','slide']} transitionDuration={800}  {...props}>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size={1} textColor="secondary" >
                    Representacion digital de la musica
                </Heading>
                <Heading size={3}>
                    Mauricio Collazos
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Image src={qr} />
                <Link href="https://ma0c.github.io/representacion-digital-de-la-musica">
                    <Text color="secondary">https://ma0c.github.io/representacion-digital-de-la-musica</Text>
                </Link>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Que es la musica?
                </Heading>
                <UnorderedList>
                    <Appear elementNum={0}><ListItem>Ritmo</ListItem></Appear>
                    <Appear elementNum={1}><ListItem>Melodia</ListItem></Appear>
                    <Appear elementNum={2}><ListItem>Armonia</ListItem></Appear>
                </UnorderedList>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Ritmo
                </Heading>
                <Text>
                    Intervalo de tiempo entre dos eventos
                </Text>
            </FlexBox>
            <Notes>
                Para los seres humanos la percepcion del tiempo es natural y es facil representar intervalos uniformes
                del paso del mismo, entendiendo que nuestro cuerpo utiliza estos intervalos para su funcionamiento
                desde los latidos del corazon hasta la percepcion de hambre. Definir ritmo introduce tambien el concepto
                de velocidad, donde tomando como unidad base los minutos podemos hacer una segmentacion uniforme y generar
                pulsos en cada particion, siendo 60 pulsos por minuto (beats per minute) una medida que se percibe como
                lenta y la que se adecua a los latidos promedio de una persona en reposo.
            </Notes>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Melodia
                </Heading>
                <Text>
                    Secuencia de notas de igual o diferente altura
                </Text>
                <Notes>
                    Integrando la horizontalidad del tiempo y el ritmo, se introduce el concepto de altura, la cual representa
                    la frecuencia fundamental de un fenomeno sonoro. El rango auditivo de las personas oscila entre los
                    20Hz y 20kHz y cualquier variacion de frecuencia podria percibirse como melodia, pero culturalmente
                    estos cambios se cuantizan en valores concretos llamados notas
                </Notes>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Escala Pitagorica
                </Heading>
                <Text>
                    Construccion notas a partir de relaciones 3:2
                </Text>
                <Notes>
                    Integrando la horizontalidad del tiempo y el ritmo, se introduce el concepto de altura, la cual representa
                    la frecuencia fundamental de un fenomeno sonoro. El rango auditivo de las personas oscila entre los
                    20Hz y 20kHz y cualquier variacion de frecuencia podria percibirse como melodia, pero culturalmente
                    estos cambios se cuantizan en valores concretos llamados notas
                </Notes>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Armonia
                </Heading>
                <Text>

                </Text>
            </FlexBox>
        </Slide>
    </Deck>
);
