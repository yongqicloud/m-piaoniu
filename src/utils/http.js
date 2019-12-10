import axios from 'axios'

export const get = ({
  url,
  params
})=>{
  return axios({
    method:'get',
    url,
    params
  })
  .then((result)=>{
    return result.data
  })
  .catch(error=>{
    return error.message
  })
}