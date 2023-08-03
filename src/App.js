import styled from 'styled-components'
import {useState} from "react";
import axios from 'axios'
function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
`
    const API_KEY ="72eef875e6f055e59edb083deaea23e2"

   const [location,setLocation] = useState('')
    const searchWeather = async (e) => {
        if(e.key === 'Enter'){
            try{
                const data = await axios({
                    method:'get',

                })

            }
            catch(err){
                alert(err)
            }
        }
    }
  return (
    <AppWrap>
        <div className='appContentWrap'>
            <input placeholder='도시를 입력하세요'
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            type='text'
            onKeyDown={searchWeather}/>
        </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px red solid;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px blue solid;
    padding: 20px;
  }
`

