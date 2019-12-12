import React,{Component, useState, useCallback} from 'react'
import {withRouter} from 'react-router-dom'

import {TopBarWrap,CancelWrap} from '../styles/styledTopBar'
import Search from '@/search/Search'


// export default function TopBar() {
//   const [focus, setFocus] = useState({
//     isFocus:true  
//   })
//   const receiveFocusState = useCallback((val)=>{
//     console.log(val)
//     setFocus({
//       isFocus:val
//     })
//   },[])
//   return (
//     <TopBarWrap>
//       <button className="back">返回</button>
//       <Search
//         onReceiveFocusState={receiveFocusState}
//       ></Search>
//       <CancelWrap
//         className="cancel"
//         display={focus.isFocus ? 'block' : 'none'}
//       >
//         取消
//       </CancelWrap>
//     </TopBarWrap>
//   )
// }

@withRouter
class TopBar extends Component {
  state={
    isFocus:false
  }
  receiveFocusState(val){
    console.log(val)
    this.setState({
      isFocus: val
    })
  }
  goBack=()=>{
    this.props.history.push("/home")
  }
  render() {
    return (
      <TopBarWrap>
        <button 
          className="back"
          onClick={this.goBack}
        >返回</button>
        <Search
          isFocus={this.state.isFocus}
          onReceiveFocusState={this.receiveFocusState.bind(this)}
        ></Search>
        <CancelWrap
          className="cancel"
          display={this.state.isFocus === 'true' ? 'block' : 'none'}
          onClick={()=>{this.receiveFocusState('false')}}
        >
          取消
        </CancelWrap>
      </TopBarWrap>
    )
  }
}
export default TopBar

