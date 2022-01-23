export default
[
    {
        id : 0,
        src : "https://codingapple1.github.io/shop/shoes1.jpg",
        title : "White and Black",
        content : "Born in France",
        price : 120000
    }, {
        id : 1,
        src : "https://codingapple1.github.io/shop/shoes2.jpg",
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000
    }, {
        id : 2,
        src : "https://codingapple1.github.io/shop/shoes3.jpg",
        title : "Grey Yordan",
        content : "Born in the States",
        price : 130000
    }
]

// 파일 쪼갤 때 사용하는 import/export 활용법 하나만 쓸 경우 const name = 'Kim' export default
// name 2개 쓸 경우 const name = 'Kim' const name2 = 'Lee' export { name, name2 }
// import {name, name2} from './data.js'

// 전역변수 사용하기
// var name = 'Kim';
// export default name 하고 import할 위치에서 import name from 경로