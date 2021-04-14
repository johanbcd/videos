import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import NotFound from '../containers/NotFound'
import {getVideoSourceRequest} from '../acctions'
/**importo estilos */
import '../assets/styles/components/Player.scss'

const Player = props =>{
    const {id}= props.match.params
    const hasPlaying = Object.keys(props.playing).length>0

    useEffect(() =>{
        props.getVideoSourceRequest(id)
    }, [])
    return !hasPlaying ?<NotFound/>
    : (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back" onClick={()=> props.history.goBack() }>
                <button type="button">
                    Regresar
                </button>
            </div>
        </div>
    )
}
const mapDispatchToProps={
    getVideoSourceRequest
}
const mapStateToProps = state =>{
    return{
        playing: state.playing
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);