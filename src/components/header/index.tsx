import { Container, LogoContainer, ButtonCont, ButtonIcon, SearchCont, SearchInputCont, SearchInput, SearchButton, HeaderButton, Efeito } from "./style"
import logo from "../../assets/youTube.png"
import hamburger from "../../assets/hamburger.png"
import lupa from "../../assets/search.png"
import mic from "../../assets/microfone.png"
import video from "../../assets/video.png"
import sino from "../../assets/sino.png"
import {useContext} from "react"
import { MenuCont } from "../../contexts/menu.Context"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/userContext"

function Header(){
    
    const{menuState, setMenuState} = useContext(MenuCont)
    const navigate = useNavigate()
    const{login} = useContext(UserContext);


    return(
        <Container>
            <LogoContainer>
                <Efeito>
                    <ButtonCont onClick={() => setMenuState(!menuState)} margin='0 10px 0 0'>
                        <ButtonIcon alt="" src={hamburger} />
                    </ButtonCont>
                </Efeito>

            <img style={ {cursor: 'pointer', width: '100px'}} alt="" src={logo}/>
            </LogoContainer>

            <SearchCont>
                <SearchInputCont>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchInputCont>

                <SearchButton>
                    <ButtonIcon alt="" src={lupa}/>
                </SearchButton>

                <Efeito>
                    <ButtonCont margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={mic}/>
                    </ButtonCont>
                </Efeito>
                
            </SearchCont>


                
            <HeaderButton>
                <Efeito>
                    <ButtonCont margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={video}/>
                    </ButtonCont>
                </Efeito>
                <Efeito>
                    <ButtonCont margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={sino}/>
                    </ButtonCont>
                </Efeito>
                <Efeito>

                    {login?
                        <ButtonCont margin='0 0 0 10px'>
                            A
                        </ButtonCont>
                    :
                        <button onClick={()=>navigate('/login')}>
                            cscs
                        </button>
                    }
                    
                </Efeito>
            </HeaderButton>


        </Container>
    )
}

export default Header