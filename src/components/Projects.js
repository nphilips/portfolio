import React from 'react'
import {Carousel} from 'react-materialize'
import chaosApparel from "../media/chaosApparel.png"
import gameGuru from '../media/gameGuru.png'
import matchYourMalts from '../media/matchYourMalts.png'

const Projects = () => {
    return(
        <div className='projectsContainer'>
            <h2>
                My Projects
            </h2>
            <Carousel images={[
                <a><img src={chaosApparel}/></a>,
                <a target='_blank' href='http://game-guru.netlify.com'><img src={gameGuru}/></a>,
                <a target='_blank' href='https://match-your-malts.netlify.com'><img src={matchYourMalts}/></a>
            ]} />
        </div>

    )
}

export default Projects