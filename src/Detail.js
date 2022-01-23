import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'
import Stock from './Stock.js'

//Lifecycle Hook
// class Detail extends React.Component {
//   componentDidMount(){
//   //AJAX 등 생성. 마운트 될 때
//   }
//   componentWillUnmount(){
//   //마운트가 해제될 때
//   }
// }


const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  font-size : 25px;
  color : ${ props => props.color }
`;

function Detail({ shoes, stock, stockChange}) {
  const history = useHistory();
  const { id } = useParams();
  // let [ item ]  = shoes.filter(item => item.id === Number(id));
  let item = shoes.find(function(item) {
    return item.id === Number(id)
  });
  const [alert, setAlert] = useState(true);
  //컴포넌트가 mount되었을 때, update될 때 특정 코드를 실행할 수 있음
  
  const [handleInput, setHandleInput] = useState('');
  /* {handleInput}
        <input onChange={(e) => setHandleInput(e.target.value)}/> */
  
  //update될 떄마다 실행됨
  //조건부 배열이 변경될 때만 (alert가 변경될 때) 실행
  //여러개 쓸 경우 처음 쓴 코드 먼저 실행.
  useEffect(()=> {
    //2초 후에 alert 창 안보이게 하기
    let timer = setTimeout(()=> {setAlert(false)}, 2000)
    //Detail 컴포넌트가 사라질 떄 실행
    //return function 함수이름() {실행할 코드}
    return () => { clearTimeout(timer)}
  },[alert])

  return (
    <div className="container">
      <Box>
        <Title className="red">
          상세 페이지
        </Title>
        <Title color="darkgrey">
          색깔있는 상세 페이지
        </Title>
        </Box>
      {alert 
        ? (<div className="my-alert-yellow"> 
            <p>재고가 얼마 남지 않았습니다</p>
          </div>)
        : null}
      <div className="row">
        <div className="col-md-6">
          <img src={item.src} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <p><Stock stock={stock[item.id]}/></p>
          <button className="btn btn-danger" onClick={()=>{
            stockChange((cur) => cur.map((el) => (el > 0 )? el - 1 : el));
          }}>주문하기</button>
          &nbsp;
          <button className="btn btn-danger" onClick={() => {
            history.goBack();
            // history.push('/특정경로') : 특정 경로로 이동;
          }}>뒤로가기</button>
          {/* alt+shift+down : 복사 */}
        </div>
      </div>
</div> 
  )
}

export default Detail;
