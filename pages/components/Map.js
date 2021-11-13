import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNoYTc3IiwiYSI6ImNrdm42MzNqeTBvN2gycXFmZ2Z2bDVjeG0ifQ.eEj5eHkUCFIKBwYv86gBsQ';

function Map(props) {
    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', // style URL
            center: [30.5, 80.5], // starting position [lng, lat]
            zoom: 3 // starting zoom
            });
            
            if(props.pickUp && props.dropOff) {
                map.fitBounds([
                    props.pickUp, 
                    props.dropOff
                ], {
                    padding : 60
                })
            }

            if(props.pickUp)
                addToMap(map, props.pickUp)

            if(props.dropOff)
                addToMap(map, props.dropOff)
            
    }, [props.pickUp, props.dropOff])
    
    const addToMap = (map, coordinates) => {
        const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    }

    return (
        <Wrapper id='map'>
        </Wrapper>
    )
}

const Wrapper = tw.div`
    flex-1
`

export default Map
