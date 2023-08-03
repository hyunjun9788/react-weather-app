import styled from 'styled-components'
function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=72eef875e6f055e59edb083deaea23e2
`
  return (
    <AppWrap>
        <div className='appContentWrap'>
            <input placeholder='도시를 입력하세요'/>
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

