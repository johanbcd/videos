import React from 'react'
import {connect} from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Busqueda from '../components/Busqueda'
//import useInitialState from "../hooks/useInitialState";
/**importo estilos */
import '../assets/styles/Home.scss'


function Home({mylist,trends,originals,searchList}) {
    //const [videos,categories] = useInitialState();
    return (
        <>
            <Search/>
            {searchList.length !== 0 ?
            <Busqueda>
                <Carousel>
                    {searchList.map((item => <CarouselItem key={item.id} {...item}/>))}
                </Carousel>
            </Busqueda>:
            <>
            {mylist.length !==0 &&
            (<Categories title="mi lista">
                <Carousel>
                    {mylist.map(item =><CarouselItem key={item.id} {...item} isList/>)}
                </Carousel>
            </Categories>)
            }
            <Categories title="trends">
                <Carousel>
                {trends.map(item =>
                    <CarouselItem key={item.id} {...item}/>
                    )
                }
                </Carousel>
            </Categories>
            <Categories title="originals">
                <Carousel>
                {originals.map(item =>
                    <CarouselItem key={item.id} {...item}/>
                    )
                }
                </Carousel>
            </Categories>
            </>
            }
        </>
    )
};
const mapStateToProps= state =>{
    return{
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
        searchList: state.searchList
    }
}
export default connect(mapStateToProps,null)(Home)
