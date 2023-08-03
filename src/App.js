import styled from 'styled-components'
import {useState} from "react";
import axios from 'axios'
function App() {
    const API_KEY = "72eef875e6f055e59edb083deaea23e2"
    const [location,setLocation] = useState('')
    const [result, setResult] = useState({})
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

   


    const searchWeather = async (e) => {
        if(e.key === 'Enter'){
            try{
                const data = await axios({
                    method:'get',
                    url:url
                })
                    console.log(data)
                setResult(data)
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

            {
                Object.keys(result).length !== 0 && (


            <ResultWrap>
                <div className='city'>{result.data.name}</div>
                <div className='temperature'>{result.data.main.temp}</div>
                <div className='sky'>{result.data.weather[0].main}</div>
            </ResultWrap>)}
        </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
    width: 100vw;
    height: 100vh;
    border: 1px red solid;

.appContentWrap
    {
        left: 50%;
        top: 50%;
        transform: translate(-50 %, -50 %);
        position: absolute;
        border: 1px blue solid;
        padding: 20px;
    }
`

const ResultWrap = styled.div`
    margin-top:60px;
  padding:10px;
  border:1px black solid;
  border-radius:8px;
    `