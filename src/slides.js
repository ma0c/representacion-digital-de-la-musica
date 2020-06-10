import React from "react";

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
    Markdown,
    CodePane,
    Stepper
} from "spectacle";

import Oscillator from './components/oscillator';
import MagentaDemo from './components/magenta_demo';

import qr from "../static/img/qr.png"
import oboe from "../static/img/oboe.png"
import clarinete from "../static/img/clarinete.png"

import oboe_wav from "../static/wav/oboe_c6.wav"
import clarinete_wav from "../static/wav/clarinet_c6.wav"


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

const twinkleTkinle = `const TWINKLE_TWINKLE = {
  notes: [
    {pitch: 60, startTime: 0.0, endTime: 0.5},
    {pitch: 60, startTime: 0.5, endTime: 1.0},
    {pitch: 67, startTime: 1.0, endTime: 1.5},
    {pitch: 67, startTime: 1.5, endTime: 2.0},
    {pitch: 69, startTime: 2.0, endTime: 2.5},
    {pitch: 69, startTime: 2.5, endTime: 3.0},
    {pitch: 67, startTime: 3.0, endTime: 4.0},
    {pitch: 65, startTime: 4.0, endTime: 4.5},
    {pitch: 65, startTime: 4.5, endTime: 5.0},
    {pitch: 64, startTime: 5.0, endTime: 5.5},
    {pitch: 64, startTime: 5.5, endTime: 6.0},
    {pitch: 62, startTime: 6.0, endTime: 6.5},
    {pitch: 62, startTime: 6.5, endTime: 7.0},
    {pitch: 60, startTime: 7.0, endTime: 8.0},
  ],
  totalTime: 8
};

player.start(TWINKLE_TWINKLE);`;

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
                    Serie Armonica
                </Heading>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Overtone.jpg" width={400}/>
                <Link href="https://es.wikipedia.org/wiki/Serie_arm%C3%B3nica_(m%C3%BAsica)">
                    <Text color="secondary">https://upload.wikimedia.org/wikipedia/commons/5/5f/Overtone.jpg</Text>
                </Link>>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Serie Armonica
                </Heading>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Hseries.svg" width={400}/>
                <Link href="https://es.wikipedia.org/wiki/Serie_arm%C3%B3nica_(m%C3%BAsica)">
                    <Text color="secondary">https://upload.wikimedia.org/wikipedia/commons/f/f1/Hseries.svg</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Diseno de sonido
                </Heading>
                <audio controls>
                    <source  src={oboe_wav} type="audio/wav"/>
                </audio>
                <Image src={oboe} width={400}/>
                <audio controls>
                    <source  src={clarinete_wav} type="audio/wav"/>
                </audio>
                <Image src={clarinete} width={400}/>
                <Link href="https://github.com/JoseRZapata/Pycon2020Colombia">
                    <Text color="secondary">https://github.com/JoseRZapata/Pycon2020Colombia</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Armonia
                </Heading>
                <Text>
                    Conjunto de notas que ocurren al mismo tiempo
                </Text>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    MIDI
                </Heading>
                <Text>
                    Musical Instrument Digital Interface
                </Text>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/0/02/Midi_ports_and_cable.jpg" width={400}/>
                <Link href="https://es.wikipedia.org/wiki/MIDI">
                    <Text color="secondary">https://es.wikipedia.org/wiki/MIDI</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Tabla MIDI
                </Heading>
                <Image src="https://newt.phys.unsw.edu.au/jw/graphics/notes.GIF" width={350}/>
                <Link href="https://newt.phys.unsw.edu.au/jw/notes.html">
                    <Text color="secondary">https://newt.phys.unsw.edu.au/jw/notes.html</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Mensaje MIDI
                </Heading>
                <Image src="http://rampmeupscotty.herokuapp.com/media/images/2016-01-19-midi-message-format.png" width={350}/>
                <Link href="http://rampmeupscotty.herokuapp.com/blog/2016/01/19/anatomy-of-midi-message/">
                    <Text color="secondary">http://rampmeupscotty.herokuapp.com/blog/2016/01/19/anatomy-of-midi-message/</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Magenta
                </Heading>
                <Text>
                    Una suite para creacion de musica y arte implementada en Tensorflow
                </Text>
                <Link href="https://magenta.tensorflow.org/">
                    <Text color="secondary">https://magenta.tensorflow.org/</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Note Sequence
                </Heading>
                <Text>
                    Una serializacion digital de sonidos aplicada a Protobuf
                </Text>
                <Link href="https://magenta.tensorflow.org/">
                    <Text color="secondary">https://magenta.tensorflow.org/</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Demo
                </Heading>
                <CodePane fontSize={12} style={{width: 600}}>
                    {twinkleTkinle}
                </CodePane>
                <MagentaDemo/>
                <Link href="https://hello-magenta.glitch.me/">
                    <Text color="secondary">https://hello-magenta.glitch.me/</Text>
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" alignItems="center">
                <Heading size="2" >
                    Online Demos
                </Heading>
                <UnorderedList>
                    <ListItem><Link href="https://drumbot.glitch.me/">https://drumbot.glitch.me/</Link></ListItem>
                    <ListItem><Link href="https://experiments.withgoogle.com/ai/ai-duet/view/">https://experiments.withgoogle.com/ai/ai-duet/view/</Link></ListItem>
                </UnorderedList>
            </FlexBox>
        </Slide>
    </Deck>
);
