import React , {useState} from 'react';
import './App.css';

function App() {

  let [subject, setSubject] = useState(['남자 코트 추천', '강남 맛집', '파이썬 독학'])
  let [like, setLike] = useState([0, 0, 0])   // 게시물 3개의 좋아요 갯수를 담을 state를 array 형태로
  let [modal, setModal] = useState(false)
  let [title, setTitle] = useState(0)
  let [inputText , setInputText] = useState('')
  
  function changeSubject() {
      let copy = [...subject]
      copy[0] = '여자 코트 추천'
      setSubject(copy)    
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
        <span onClick = {changeSubject}>버튼</span>
      </div>

      <button onClick={() => {
        let copy2 = [...subject]
        copy2.sort()
        setSubject(copy2)
      }}>가나다순 정렬</button>
      
      {
        subject.map(function(a, i) {
          return ( 
            <div className="list" key={i}>
              <h3 onClick={(e)=> {
                e.stopPropagation()
                setModal(true)
                setTitle(i)
              }}>{ subject[i] }
                  <span onClick = { (e)=> {
                    e.stopPropagation()
                    let likeCopy = [...like]
                    likeCopy[i]++
                    setLike(likeCopy)
                  }}>👍</span> 
                  {like[i]} 
                  <button onClick={(e)=>{
                    e.stopPropagation()
                    let subjectDelete = [...subject]
                    subjectDelete.splice(i,1)
                    console.log(subjectDelete)
                    setSubject(subjectDelete)
                  }}>삭제</button>
              </h3>
              <p>2월 17일 발행</p>
              <hr/>
          </div>
          )
        })
      }

      {
        modal === true ? <Modal subject = {subject} title={title} changeSubject = {changeSubject}/> : null
      }

      <Modal2 />
      <input type="text" onChange={(e) => {
        setInputText(e.target.value)
       // console.log(inputText)
      }}></input>
      <button onClick={() => {
        // 아무것도 입력 안 한 경우엔 동작 막기
        if(inputText === '') {
          alert('안됨')
          return
        }
        let subjectCopy = [...subject]
        subjectCopy.unshift(inputText)
        setSubject(subjectCopy)

        // 글이 새로 추가되면 좋아요 저장할 state도 함께 추가
        let likeCopy2 = [...like]
        likeCopy2.unshift(0)
        setLike(likeCopy2)
      }}>입력</button>

    </div>
  );
}

function Modal(props) { // Modal 을 컴포넌트라고 함
  return (
    <div className="modal">
        <h4>{props.subject[props.title]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button onClick={props.changeSubject}>글 수정</button>  
    </div>
  )
}

class Modal2 extends React.Component {
  constructor() {
    super()
    this.state = {
      name : 'kim',
      age : 20,
      kk : 30
    }
  }
  render(){
    return (
      <div>안녕 {this.state.name}
                {this.state.age}
      </div>
      
    )
  }
}

export default App;
