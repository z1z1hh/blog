import React , {useState} from 'react';
import './App.css';

function App() {
  /*  프로야구 순위 리스트 보여주기 
      보여줄 값 : 순위, 팀 명
  */
  const [teamName, setTeamName] = useState(['LG트윈스', '롯데자이언츠', '한화이글스', '기아타이거즈',
                                '삼성라이온즈', 'KT위즈'])
  const [modal , setModal] = useState(false)
  const [title, setTitle] = useState(0)

  const sort = () => {
    const teamCopy = [...teamName]
    teamCopy.sort()
    setTeamName(teamCopy)
  }

  return (
    <div className="App">
      <div className="black-nav">
        React Practice [프로야구 순위]
      </div>

      <button onClick={sort}>정렬</button>

      {
        teamName.map(function(data, i){
          return (
            <div className="list-wrap" key={i}>
              <div className="list" onClick={()=> {
                 setModal(true)
                 setTitle(i)
              }}>
                <span>{i+1}</span>
                <span>{teamName[i]}</span>
                <hr/>
              </div>
            </div>
          )
        })
      }

      {
        modal ? <Modal teamName = {teamName} title = {title} /> : null
      }
      
    </div>
  );
}

// 상세정보 볼 수 있는 modal 컴포넌트
function Modal(props) {
  
  return (
    <div className = "dimmed">
      <div className = "detail-wrap">
        <div className="detail-title">상세정보
          <button>닫기</button>
        </div>
        <div>{props.teamName[props.title]}</div>
      </div>
    </div>
    
  )
}

export default App;
