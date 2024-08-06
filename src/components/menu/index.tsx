import { Container, MenuItem, ButtonIcon } from "./style"

import inicio from "../../assets/inicio.png"
import inscricoes from "../../assets/inscricoes.png"
import shorts from "../../assets/shorts.png"
import perfil from "../../assets/perfil.png"
import historico from "../../assets/historico.png"
import emAlta from "../../assets/emAlta.png"
import shopping from "../../assets/shopping.png"
import musica from "../../assets/musica.png"
import filmes from "../../assets/filmes.png"
import aoVivo from "../../assets/aoVivo.png"
import jogos from "../../assets/jogos.png"
import esportes from "../../assets/esportes.png"
import aprender from "../../assets/aprender.png"
import podcast from "../../assets/podcast.png"
import youtube from "../../assets/youtubeLog.png"
import studio from "../../assets/studio.png"
import music from "../../assets/music.png"
import kids from "../../assets/kids.png"
import configuracao from "../../assets/configuracao.png"
import denuncia from "../../assets/denuncia.png"
import ajuda from "../../assets/ajuda.png"
import feedback from "../../assets/feedback.png"

import { MenuCont } from "../../contexts/menu.Context"
import {useContext} from "react"
import { useNavigate } from "react-router-dom"

function Menu(){
    const {menuState} = useContext(MenuCont);
    const itens = [
        {name: 'Inicio', imagem: inicio, link:'/'},
        {name: 'Library', imagem: shorts, link:'/library'},
        {name: 'inscrições', imagem: inscricoes, link:'/'}
    ]

    const voce = [
        {name: 'Você', imagem: perfil, link:'/'},
        {name: 'histórico', imagem: historico, link:'/history'}
    ]

    const explorar = [
        {name: 'emAlta', imagem: emAlta, link:'/'},
        {name: 'shopping', imagem: shopping, link:'/'},
        {name: 'musica', imagem: musica, link:'/'},
        {name: 'filmes', imagem: filmes, link:'/'},
        {name: 'aoVivo', imagem: aoVivo, link:'/'},
        {name: 'jogos', imagem: jogos, link:'/'},
        {name: 'esportes', imagem: esportes, link:'/'},
        {name: 'aprender', imagem: aprender, link:'/'},
        {name: 'podcast', imagem: podcast, link:'/'}
    ]

    const mais = [
        {name: 'Youtube Premium', imagem: youtube, link:'/'},
        {name: 'Youtube Studio', imagem: studio, link:'/'},
        {name: 'Youtube Music', imagem: music, link:'/'},
        {name: 'Youtube Kids', imagem: kids, link:'/'}
    ]

    const config = [
        {name: 'Configurações', imagem: configuracao, link:'/'},
        {name: 'Histórico de denúncia', imagem: denuncia, link:'/'},
        {name: 'Ajuda', imagem: ajuda, link:'/'},
        {name: 'Enviar feedback', imagem: feedback, link:'/'},
    ]

    
    const estilo = (menuState) ? "flex" : "none"
    const navigate = useNavigate();

    return(
        <Container menuState={menuState}>
            {itens.map((item)=>(
                <MenuItem menuState ={menuState} onClick={()=> navigate(item.link)}>
                    <ButtonIcon alt="" src={item.imagem}/>
                    <span>{item.name}</span>
                </MenuItem> 
            ))}

            <hr style={{display: `${estilo}`}}/>

        {voce.map((item)=>(
            <MenuItem menuState ={menuState} onClick={()=> navigate(item.link)}>
                <ButtonIcon alt="" src={item.imagem}/>
                <span>{item.name}</span>
            </MenuItem> 
        ))}
        
        <hr style={{display: `${estilo}`}}/>

        <p style={{display: `${estilo}`}}><strong>Explorar</strong></p>

        {explorar.map((item)=>(
            <MenuItem menuState ={menuState} style={{display: `${estilo}`}} onClick={()=> navigate(item.link)}>
                <ButtonIcon alt="" src={item.imagem}/>
                <span>{item.name}</span>
            </MenuItem> 
        ))}

        <hr style={{display: `${estilo}`}}/>

            <p style={{display: `${estilo}`}}><strong>Mais do Youtube </strong></p>

            {mais.map((item)=>(
                <MenuItem menuState ={menuState} style={{display: `${estilo}`}} onClick={()=> navigate(item.link)}>
                    <ButtonIcon alt="" src={item.imagem}/>
                    <span>{item.name}</span>
                </MenuItem> 
            ))}

        <hr style={{display: `${estilo}`}}/>

            {config.map((item)=>(
                <MenuItem menuState ={menuState} style={{display: `${estilo}`}} onClick={()=> navigate(item.link)}>
                    <ButtonIcon alt="" src={item.imagem}/>
                    <span>{item.name}</span>
                </MenuItem> 
            ))}

        </Container>
    )
}

export default Menu