import React from 'react';
import { ContainerPrincipal, ContainerTitle, Title, ContainerUser, ImgUser, NameUser, ContainerComent, Coment, Options, ContainerComentario } from '../styles/Opinions.elements';

const Opinions = () => {
    return (
        <ContainerPrincipal>
            <ContainerTitle>
                <Title>Opiniones de clientes</Title>
            </ContainerTitle>
            
            <ContainerComentario>
                <ContainerUser>
                    <ImgUser src="https://res.cloudinary.com/silviajcn/image/upload/v1641651073/SPRING-3/users/Ellipse_15_1_ucj9pn.png" alt="user" />
                    <NameUser>Amazon Customer</NameUser>
                </ContainerUser>

                <ContainerComent>
                    <Coment>Electronic view finder is supposed to be the best, but from 5 minutes of playing with the camera, EVF is very disappointing - despite 120Hz refresh rate, the image is very choppy and laggy, almost like watching a retro video game - nauseating. That, and the build quality compared to 5D Mark III feels very cheap - too much plastic. There are some good features though, like auto-focus, high quality video, etc.</Coment>
                    <Coment>UPDATE: The EVF appears to be definitely glitchy. Stuttering aside, 2-3 times, when it was supposed to turn on by face proximity, it flashed a white thick line on its upper edge, and then remained dark. Maybe I got a defective unit.</Coment>
                </ContainerComent>

                <div>
                    <Options>A 45 personas les resultó útil</Options>
                    <Options>Informar de un abuso</Options>
                </div>
            </ContainerComentario>

            <ContainerComentario>
                <div>
                    <ImgUser src="https://res.cloudinary.com/silviajcn/image/upload/v1641651067/SPRING-3/users/Ellipse_15_tqfoyl.png" alt="user" />
                    <NameUser>Right Emboyo</NameUser>
                </div>

                <ContainerComent>
                    <Coment>Long-time Canon DSLR user finally made the switch to mirrorless and now won't look back. Amazing piece of technology - focus system and low-light performance are astounding. Love that I can use my EF lenses with adapter and 24-105 f4 L "kit lens" is a worthy successor to its EF counterpart.</Coment>
                    <Coment>My biggest quandary, like many, was whether I needed the extra pixels of the R5. Coming from a 20 MP original Canon 6D I'm comfortable with this sensor size. For my uses hits the sweet spot between image quality and speed/disk space. For birds-in-flight I do miss the extra crop room, but have a hard time justifying the extra $1,500 just for that.</Coment>
                </ContainerComent>

                <div>
                    <Options>A 26 personas les resultó útil</Options>
                    <Options>Informar de un abuso</Options>
                </div>
            </ContainerComentario>
        </ContainerPrincipal>
    )
}

export default Opinions
