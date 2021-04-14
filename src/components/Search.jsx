import React from 'react'
import {connect} from 'react-redux'
import {searchVideoRequest} from  '../acctions'
import '../assets/styles/components/Search.scss'
import '../assets/styles/Globales.scss'

const Search= (props) => {
    const handleOnchange = e =>{
        props.searchVideoRequest(e)
    }
    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input
                type="text"
                className="main__search--input input_general"
                placeholder="Buscar..."
                onChange={e=>handleOnchange(e.target.value)}
                />
        </section>
    )
}
const mapStateToProps= state =>{
    return{
        searchList:state.searchList
    }
}
const mapDispatchToProps = {
    searchVideoRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)