import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import loadGames from "../../services/jsonResponce"
import GamePreview from "../Game/game"

const Menu = () => {
    async function createList(){
        
        const data = loadGames().map((game, i) => {
            return (<GamePreview
                key = {i}
                gameName = {game.name}
                gameDesc = {game.desc} 
                playLink = {game.playLink} 
                imagePath = {game.imagePath}
                buttonType = {game.buttonType}
                gameStatus = {game.gameStatus}
            
            />)
        })
        return data
    }

    const gamesContent = createList()

    return (
        <>
            <section id="top_sect" className="second">
                <table className="game-table" id="game-table">
                    <div className="container">
                        {/* {gamesContent}  */}
                    </div>
                                

                </table>
            </section> 
            <Link to="/brief" id="order-button">Заказать игру</Link>
        </>       
    )
}



export default Menu