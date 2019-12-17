import React from 'react'
import {withRouter} from 'react-router-dom'
import {DeatilsHeaderWrap} from './styled/styledDeatilsHeader'

import service1 from 'assets/images/service-1.png'
import warning from 'assets/images/warning-blue.png'


function DeatilsHeader(props) {

  // let {shortname,poster,lowPrice,star,soldOut,timeRange,venueName} = props.data
  if(props.type === 'home'){
    var {poster,star,shortname,venueName,timeRange,lowPrice,soldOut,categoryId,venueId} = props.data.recommendContent
  }else if( props.type === 'list'){
    var {poster,star,shortname,venueName,timeRange,lowPrice,soldOut,categoryId,venueId} = props.data
  }
  return (
      <DeatilsHeaderWrap
        height="2.1rem"
      >
        <div className="header-image">
          <div
            className="bg-img"
            style={{
              backgroundImage:`url(${poster})`
            }}
          ></div>
        </div>
        <div className="header-main">
          <div className="info">
            <div className="img-box">
              <img src={poster} alt=""/>
            </div>
            <div className="content">
                <h2>{shortname}</h2>
                <div className="stars-score">
                  <span className="source">暂无评分</span>
                  <ul className="stars">
                    <li>
                      <img src="https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png" alt=""/>
                    </li>
                    <li>
                      <img src="https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png" alt=""/>
                    </li>
                    <li>
                      <img src="https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png" alt=""/>
                    </li>
                  </ul>
                </div>
                <div className="price-wrap">
                  <div className="price-info">
                    {
                      soldOut
                        ?<SaleOut></SaleOut> 
                        :<OnSale 
                            lowPrice={lowPrice}
                        />  
                    }
                  </div>
                </div>
            </div>
          </div>
          <div className="concern-comment">
            <div className="concern">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAppJREFUSA3Nlk2IjWEUx+/MhGTufNgo2WjKisQCU7KYBQtZ+EjKjIRiNFMTC5nNLFgMiVIWiiUTKzaUnVIsLCQuG4kFWfgsM2S4fv/XOa97n3mfe++Md8qp333Ocz7+5973vl+FQmDlcnkFnIUn8Am+wlM4A4uC8nRLrgtOwWNQ3xcowXlYmRaGDskWkPgkxOwziYGM3mPEv8WaiP+Ec9BS1UugCcbA7TJON7RBJ6yHKyAB2QkXwB9NIn8+rrNsgcXQCmvgIrhdw2ny3gKbAcvo8OxME4FDbhtMWO0e1q3mf2ftDcrTLbntoKMlG0wSOEXwYF9aHXGo3Qeyj/Am8TIOf9hOXa/ValZRv7bfAg9Z/x6GsLNiT13l33KnIhV1pQ2aITuswTcSl18S7QoS1M+DgzAI7UE6uqXWj9ZNDX4NsnXRjpwSmpFMYqYG+8nSkZN+VIZZHTZ4opmqcassRjvyS7SaVDK4ZJvu/PSjSmstU9KhHrKffz9anlOCOXdt1lEN1t3pgwU25zRjigz6PTZD13FnUoBzxII6w3M/ydBcAC9sxnD6rQjoAfHAErquG7qRpAJ1HPSumvYj1jlV5QSWwFsrGK1K/sMGveOm+Z61K1OKhC5wf7yNZBZNI4jWfpD9gJ6arRTshl8gm/FwevvAH6P9NYd6koa9FU3THk7vIfAvP+S6Da006jE2CbJLMLdeIzXNcBrcpryt1NNI8nTvAL+X38Ov9c7VTv4WyPSfHmhoSKwIAZ1w70Cm63x1WEtsGTwHmW4QG8OaGe0RWgp665SNwy4Xwt8EehuRvYTlnstlRVB3nzFwu4BzEvzMvY2/MJdhWSKI661DL3duGjwCesTOrjFkFTyDV7BhdqcF6gycD21B+P/f/gatkZ1laeTSrAAAAABJRU5ErkJggg==" alt=""/>
              <span>想看</span>
            </div>
            <div className="comment">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWBJREFUSA3tlr1OAkEUhcHAAygkavhp6Qy1vQUvxwOQWKKJD2DNE0AUCimsiFsYY2iM5fidZTbhL+wgXCCBk3yZmZ2798wdZslkMsg5V4ZHiMBKyi2PsjyzvvNC/0IPdqBvPG5UbRukZ4hXY2Gu3N6DxrVl/KEeqlgYTueUR+yEp7baaTKLpoOs+onfmZVBWt6TcdoObW3+8Laa09eAkacxX+qm8/qOYy1JLNNEo23NJwn3ttWrKjbZ6qTi0z/X/BkyG+/tcB2ncaQfkmO+k4uAPzSRtrrjBy3MLa8+KqzlvTqqtARfEKImQUtvKjxXnveAJPIqxQugo4vYA4Rcb++JmzmUjC/hDVZJdzt5TEx96akNL9zBD0hPkNdLtAXog9SD89Rk6waQ9BbGIOk6fA1dDdAAiuvmDI4neR0+QfqdNG5IexWc5L+BmNRAZtIrmH0NC2vELAdVmDloC4GH9uAPVr2hcd5RxioAAAAASUVORK5CYII=" alt=""/>
              <span>评论</span>
            </div>
          </div>
        </div>
        <div className="header-bottom" >
          {
            soldOut &&
             <div className="sold-empty-tip">
              <img src={warning} alt=""/>
              <div className="text">该项目票已售空</div>
              <div className="right">查看详情</div>
            </div>
          }
          <div className="time-range">{timeRange}</div>
          <div className="venue">
            <div className="inner-text">{venueName}</div>
            <div className="icon"
              onClick={()=>{
                props.history.push('/venue',{
                  venueId
                })
              }}
            >
              <img src="https://static.piaoniu.com/nuxt-static/img/icon-park2.c5fced0.png" alt=""/>
            </div>
          </div>
          <div className="ticket-info">
            <div className="text">购票须知</div>
            <div className="go"></div>
          </div>
          <div className="service-info">
            <div className="text">平台保障</div>
            <div className="service-item">
              <img src={service1} alt=""/>
              <span>出票保真</span>
            </div>
            <div className="service-item">
              <img src={service1} alt=""/>
              <span>配送保障</span>
            </div>
            <div className="service-item">
              <img src={service1} alt=""/>
              <span>出票保真</span>
            </div>
            <div className="go"></div>
          </div>
        </div>
      </DeatilsHeaderWrap>
  )
}

function SaleOut(){
  return (
    <div>暂时售空</div>
  )
}
function OnSale(props){
  return (
    <>
      <span className="price">{props.lowPrice}</span>
      <span className="text">元起</span>
    </>
  )
}

export default withRouter(DeatilsHeader)