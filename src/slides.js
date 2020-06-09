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
    Notes,
    Markdown
} from "spectacle";

import Oscillator from './components/oscillator';


const tablaRelacionIntervalos = `|Intervalo | Relacion | Valor numerico |
|-|-|-|
|Octava|2:1|2|
|Quinta Justa|3:2|1.5|
|Cuarta Justa|4:3|1.33|
|Sexta Mayor|5:3|1.66|
|Tercera Mayor|5:4|1.25|
|Tercera menor|6:5|1.2|
|Sexta menor|8:5|1.6|`;

const notasMusicalesOriginales = `|Nombre|Letra|
|-|-|
|Ut - Do|Ut queant laxis|
|Re|Resonare fibris|
|Mi|Mira gestorum|
|Fa|Famuli tuorum|
|Sol|Solve polluti|
|La|Labii reatum|
|Si|Sancte Ioannes.|`;

const notasConFrecuenciaReal = `|  Nota    | Frecuencia Hz | Multiplicador   | Coeficiente (6 decimales) |
|:--------:|:-------------:|:---------------:|:-------------------------:|
|    la    |     440.00    |      20/12      |          1.000000         |
|  la♯ si♭ |     466.16    |      21/12      |          1.059463         |
|    si    |     493.88    |      22/12      |          1.122462         |
|    do    |     523.25    |      23/12      |          1.189207         |
|  do♯ re♭ |     554.37    |      24/12      |          1.259921         |
|    re    |     587.33    |      25/12      |          1.334839         |
|  re♯ mi♭ |     622.25    |      26/12      |          1.414213         |
|    mi    |     659.26    |      27/12      |          1.498307         |
|    fa    |     698.46    |      28/12      |          1.587401         |
| fa♯ sol♭ |     739.99    |      29/12      |          1.681792         |
|    sol   |     783.99    |      210/12     |          1.781797         |
| sol♯ la♭ |     830.61    |      211/12     |          1.887748         |
|    la    |     880.00    |      212/12     |          2.000000         |`;

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
                <Appear elementNum={0}>
                    <Oscillator/>
                </Appear>

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
                    Construccion notas a partir de relaciones entre frecuencias
                </Text>
                <Appear elementNum={0}>
                    <Markdown>
                        {tablaRelacionIntervalos}
                    </Markdown>
                </Appear>
                <Appear elementNum={1}>
                    <Oscillator minFrequency={100} maxFrequency={200}/>
                    <Oscillator minFrequency={100} maxFrequency={200}/>
                </Appear>
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
                    Notas Musicales
                </Heading>
                <Appear elementNum={0}>
                <Markdown>
                    {notasMusicalesOriginales}
                </Markdown>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Notacion Musical
                </Heading>
                <Appear elementNum={0}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c8/UtQueantLaxis-Arezzo.svg"/>
                <Link href="https://es.wikipedia.org/wiki/Ut_queant_laxis#/media/Archivo:UtQueantLaxis-Arezzo.svg">
                    <Text color="secondary">https://es.wikipedia.org/wiki/Ut_queant_laxis#/media/Archivo:UtQueantLaxis-Arezzo.svg</Text>
                </Link>
                </Appear>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Problema de la coma flotante
                </Heading>
                <Appear elementNum={0}>
                <Image src="http://nicholasbrown.co.uk/wp-content/uploads/2016/05/Benedetti.png"/>
                <Link href="http://nicholasbrown.co.uk/writing/writings-on-works/on-the-production-of-true-consonance/">
                    <Text color="secondary">http://nicholasbrown.co.uk/writing/writings-on-works/on-the-production-of-true-consonance/</Text>
                </Link>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Ajusute bien temperado
                </Heading>
                <Appear elementNum={0}>
                <Markdown>
                    {notasConFrecuenciaReal}
                </Markdown>
                    <Link href="https://es.wikipedia.org/wiki/Ra%C3%ADz_duod%C3%A9cima_de_dos">
                    <Text color="secondary">https://es.wikipedia.org/wiki/Ra%C3%ADz_duod%C3%A9cima_de_dos</Text>
                </Link>
                </Appear>
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
