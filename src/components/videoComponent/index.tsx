import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style";

function VideoComponent(){
    return(
        <Container>
            <ImageBanner src="https://i.pinimg.com/564x/ba/00/15/ba0015ee76dd0d240c1f8924dceba1f0.jpg"/>
            <TitleContainer>
                <ChannelImage>
                    VG
                </ChannelImage>
                <TextContainer>
                    <Title>A manipulação que os coachs não contam</Title>
                    <TextCard>Velha Guarda</TextCard>
                    <TextCard>33 mi de visualizações - há 3 dias</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;