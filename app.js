"use strict";
const express = require("express");
const app = express();
const PORT = 3000; 
const path = require("path");
const router = require("./src/routers");

//? ejs 타입의 템플릿 앤진 사용 및 view, static 경로 설정
app.set("views", path.resolve(__dirname, "./public/views"));
app.set("view engine" , "ejs");
app.use(express.static(path.resolve(__dirname, "./public/static")));
//? Use json : req 객체에서 json 타입의 body 받기
app.use(express.json());
//? Use form-urlencoded : req 객체에서 x-www-form-urlencoded 타입의 body 받기
app.use(express.urlencoded({
    extended: true,
}));
app.use(router);
app.listen(PORT, () => console.log(`server is running on : ${PORT}`));