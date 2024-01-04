## Simple Order System

Simple Order System 是一款簡單的商家使用的管理系統，目前可以執行點餐、菜單管理、員工管理以及會員管理等功能。

![Imgur](https://i.imgur.com/mhqabQW.png)

## 主要功能

* 1.商家可以在系統上面為客人點餐。
* 2.商家可以在系統上新增菜單、修改菜單、刪除菜單，如果商品賣完也可以選擇鎖住商品。
* 3.商家可以在系統上做簡易的員工管理，可以新增員工、刪除員工、員工的資料變更以及查看員工出勤。
* 4.商家可以在系統上查看會員資料，並且新增會員的消費記錄。
* 5.員工可以在不登錄系統的情況下進行員工上下班的打卡。

## 本地安裝流程
* 開啟終端機(Terminal)，並確認已安裝 node.js 與 npm
* 在終端機輸入以下指令，將本專案 clone 到本機電腦
```
git clone https://github.com/jeff0518/simple-order-system.git
```
* 透過終端機進入存放此專案的資料夾後，輸入以下指令安裝 npm 套件
```
npm install
```
* 安裝完畢後請輸入以下指令執行專案
```
npm start
```
* 打開瀏覽器輸入以下網址即可開始使用本專案
```
http://localhost:3000/
```
## 開發工具
* "next": "14.0.4"
* "next-auth": "4.24.5",
* "react": "18.2.0"
* "react-dom": "18.2.0"
* "react-icons": "4.11.0"
* "typescript": "5"
* "@types/react": "18"
* "@types/node": "20"
* "axios": "1.6.2"
* "moment": "2.29.4"
* "mongoose": "8.0.0"
* "sass": "1.69.5"
* "sweetalert2": "11.10.1"