//index.js

var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) { // '/' 위치에 'get'요청을 받는 경우,
    res.render(__dirname + '/corococok/html/login-form-09/index.html');
});
var port = 3000; // 사용할 포트 번호를 port 변수에 넣습니다. 
app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});

const { sequelize } = require('./Apii/models');

sequelize.sync({ force: false })
.then(() => {
    console.log('데이터베이스 연결 성공');
})
.catch((err) => {
    console.error(err);
});

function create(){

    Users.create({
        email: "ryan@gmail.com",
        password: "123456",
        name: "Ryan",
        phone: "010-0000-0000"
    })
    .then((result) => {
        console.log("저장 성공: ", result);
    })
    .catch((err) => {
        console.log("저장 Error: ", err);
    });
    
}

function Read(){

    //단일 조회
    Users.findOne({})
    .then((result) => {
        console.log("조회 성공: ", result);
    })
    .catch((err) => {
        console.log("조회 Error: ", err);
    })

    //전체 조회
    Users.findAll({attributes: ['id']})
    .then((result) => {
        console.log("조회 성공: ", result);
    })
    .catch((err) => {
        console.log("조회 Error: ", err);
    })

}

function Update(){
    
    Users.update({name: "Ryans"}, {where: {}})
    .then((result) => {
        console.log("수정 성공: ", result);
    })
    .catch((err) => {
        console.log("수정 Error: ", err);
    })

}

function Destory(){
    
    Users.destroy({where: {name: "Ryans"}})
    .then((result) => {
        console.log("삭제 성공: ", result);
    })
    .catch((err) => {
        console.log("삭제 Error: ", err);
    })

}

