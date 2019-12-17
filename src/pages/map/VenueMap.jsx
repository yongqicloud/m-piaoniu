import React ,{useState,useEffect,useRef}from 'react'
import {withRouter,useLocation} from 'react-router-dom'
import MyHeader from '@/myheader/MyHeader'
import Address from './Address'
import {get} from 'utils/http'
function VenueMap(props) {
  const [state, setState] = useState({data:{}})
  let {venueId} = useLocation().state
  let venueIdRef = useRef(null)
  venueIdRef.current = venueId
  console.log(venueIdRef.current)
  useEffect(()=>{
    (async ()=>{
      let receiver = document.getElementById('receiver').contentWindow;
      let result = await get({
        url:`/api/v1/venues/${venueIdRef.current}`,
      })
      setState({
        data:result
      })
      receiver.postMessage({
        longitude:result.longitude,
        latitudeBd:result.latitudeBd
      }, "http://localhost:3000/map.html");
      console.log('发送成功')

    })()
  },[])
  return (
    <>
      <MyHeader
        title="场馆详情"
      ></MyHeader>
     <iframe 
      id="receiver"
      src="/map.html" 
      title="map"
      frameBorder="0"
      style={{
        width:"100%",
        height:"220px"
      }}
      />
      <Address
        {
          ...state.data
        }
      />
    </>
  )
}
export default withRouter(VenueMap)
