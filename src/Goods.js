import React, { useState } from 'react';

function Goods(props) {
  //props대신 {item}이라고 하고 return 에서 item만 넣어줘도 됨. 스프레드 문법

    return (
        <div className="col-md-4">
            <img src={props.item.src} width="100%"/>
            <h4>{props.item.title}</h4>
            <p>{props.item.price}</p>
            <p>{props.item.content}</p>
        </div>
    );
}

export default Goods;