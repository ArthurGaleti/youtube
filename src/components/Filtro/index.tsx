import { Container, Item, Text } from "./style"

function Filtro(){
    const filtros = [
        {nome: 'Tudo', filtro:'/'},
        {nome: 'Mixed', filtro:'/'},
        {nome: 'Rpg', filtro:'/'},
        {nome: 'Notícia', filtro:'/'},
        {nome: 'Tecnologia', filtro:'/'},
        {nome: 'Ao vivo', filtro:'/'},
        {nome: 'Musica', filtro:'/'},
        {nome: 'Animação', filtro:'/'},
        {nome: 'Jogos', filtro:'/'},
        {nome: 'Música Lo-fi', filtro:'/'},
        {nome: 'Comédia', filtro:'/'},
        {nome: 'Filmes', filtro:'/'},
        {nome: 'Ciência', filtro:'/'},
        {nome: 'Culinaria', filtro:'/'},
        {nome: 'Mangá', filtro:'/'},
        {nome: 'Anime', filtro:'/'},
        {nome: 'Séries', filtro:'/'}
    ]

    return(
        <Container>
            {filtros.map((item)=>(
                <Item>
                    <Text>{item.nome}</Text>
                </Item>
            ))}
        </Container>
    )
}

export default Filtro