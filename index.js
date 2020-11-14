let number = Math.floor(Math.random() * 3 + 1),
     shape = Math.floor(Math.random() * 3 + 1),
     color = Math.floor(Math.random() * 3 + 1);
color = color == 1 ? color = "red" : color == 2 ? color = "green" : color == 3 ? color = "zi" : console.log(color);
shape = shape == 1 ? shape = "oval" : shape == 2 ? shape = "diamond" : shape == 3 ? shape = "squiggle" : console.log(shape);
// console.log(shape + " " + color + " " + number);
// 开始创建牌组
let cardArr = [];
function create () {
    for(var i = 0; i < 27; i ++){
        let  obj = {},
            number = Math.floor(Math.random() * 3 + 1),
            shape = Math.floor(Math.random() * 3 + 1),
            color = Math.floor(Math.random() * 3 + 1);
        color = color == 1 ? color = "red" : color == 2 ? color = "green" : color == 3 ? color = "zi" : console.log(color);
        shape = shape == 1 ? shape = "oval" : shape == 2 ? shape = "diamond" : shape == 3 ? shape = "squiggle" : console.log(shape);
        // console.log(shape + " " + color + " " + number);
        obj["color"] = color;
        obj["shape"] = shape;
        obj["number"] = number;
        cardArr.push(obj);
    }
    console.log(cardArr);
}
create();
function injudge_computer (arr){
    let active = arr;
    let resultArr = [];
    for(var i = 0; i < 3; i ++){
        let obj = {};
        obj["color"] = active[i].getAttribute("color");
        obj["shape"] = active[i].getAttribute("shape");
        obj["number"] = active[i].getAttribute("number");
        resultArr.push(obj);
    }
    if(attributeCompare(resultArr[0]["color"],resultArr[1]["color"],resultArr[2]["color"]) && attributeCompare(resultArr[0]["shape"],resultArr[1]["shape"],resultArr[2]["shape"]) && attributeCompare(resultArr[0]["number"],resultArr[1]["number"],resultArr[2]["number"])){
        // console.log(true);
        return true;
    }else {
        // console.log(false);
        return false;
    }
}
function firstInjudge () {



    let wrapperlist = document.getElementsByClassName("wrapper");
    wrapperlist = new Array(...wrapperlist);
    let resultArr = [];
    for(var i = 0, len1 = wrapperlist.length; i < len1; i++) {
        var a2 = wrapperlist.concat();
        a2.splice(0, i + 1);
        for(var j = 0, len2 = a2.length; j < len2; j++) {
            var a3 = a2.concat();
            a3.splice(0, j + 1);
            for(var k = 0, len3 = a3.length; k < len3; k++) {
                let obj = {}
                let arr = [wrapperlist[i],a2[j],a3[k]];
                let result = injudge_computer(arr);
                if(result){
                    obj["list"] = arr;
                    resultArr.push(obj);
                }
            }
        }
    }
    if(resultArr.length > 0){
        for(var i = 0; i < resultArr[0]["list"].length; i++){
            // console.log(resultArr[0]["list"][i]);
            resultArr[0]["list"][i].classList.add("ad2");
        }
    }else{
        let ad2 = document.getElementsByClassName("ad2");
        if(ad2.length == 0){
            try {
                for(var i = count; i < count + 3 ; i ++){
                    show(cardArr[i].color,cardArr[i].shape,cardArr[i].number);
                }
            } catch (error) {
                
            }

            addActive();
            count += 3;

            let resultNumber = document.getElementById("number");
            resultNumber.innerText = 27 - count >= 0 ? 27 - count : 0 ;
            if(count < 27){
                firstInjudge();
            }
        }
        let resultNumber = Number(document.getElementById("number").innerText);
        if(resultNumber == 0){
            result();
        }
    }
    rank();
    addActive();
}
// 牌具象化
function show (color,shape,number) {
    let inner = document.getElementsByClassName("inner")[0];
    let wrapper = document.createElement("div");
        wrapper.setAttribute("class","wrapper");
        for(var i = 0;i < number; i++){
            let image = document.createElement("img");
            let image_result = injudge(image,color,shape);
            wrapper.appendChild(image_result);
        }
        wrapper.setAttribute("color",color);
        wrapper.setAttribute("shape",shape);
        wrapper.setAttribute("number",number);
        inner.appendChild(wrapper)
        panduan();
        rank();
        addActive();
}
    let count = 12;

function panduan () {

        let resultNumber = Number(document.getElementById("number").innerText);
        if(resultNumber == 0){
            firstInjudge();
            let ad2 = document.getElementsByClassName("ad2");
            if(ad2.length == 0){
                result();
            }
        }
    
}

// 根据对象内属性给元素添加src属性
function injudge (element,color,shape){
    if(shape == "oval"){
        switch (color) {
            case "red":
                element.setAttribute("src","./images/长椭圆-R.png");
                break;
            case "green":
                element.setAttribute("src","./images/长椭圆-G.png");
                break;
            case "zi":
                element.setAttribute("src","./images/长椭圆-Z.png");
                break;        
            default:
                break;
        }
    }else if(shape == "diamond"){
        switch (color) {
            case "red":
                element.setAttribute("src","./images/菱形-R.png");
                break;
            case "green":
                element.setAttribute("src","./images/菱形-G.png");
                break;
            case "zi":
                element.setAttribute("src","./images/菱形-Z.png");
                break;        
            default:
                break;
        }
    }else if(shape == "squiggle"){
        switch (color) {
            case "red":
                element.setAttribute("src","./images/钻石-R.png");
                break;
            case "green":
                element.setAttribute("src","./images/钻石-G.png");
                break;
            case "zi":
                element.setAttribute("src","./images/钻石-Z.png");
                break;        
            default:
                break;
        }
    }
    return element;
}
// 比较属性是否符合set
function attributeCompare (a,b,c){
    if( a == b && b == c && a == c ){
        return true;
    }else if(a != b && b != c && a!= c){
        return true;
    }else{
        return false;
    }
}
// 开始确认是否符合set
function compare () {
    // console.log("compare");
    let active = document.getElementsByClassName("active");
    let resultArr = [];
    for(var i = 0; i < 3; i ++){
        let obj = {};
        obj["color"] = active[i].getAttribute("color");
        obj["shape"] = active[i].getAttribute("shape");
        obj["number"] = active[i].getAttribute("number");
        resultArr.push(obj);
    }
    if(attributeCompare(resultArr[0]["color"],resultArr[1]["color"],resultArr[2]["color"]) && attributeCompare(resultArr[0]["shape"],resultArr[1]["shape"],resultArr[2]["shape"]) && attributeCompare(resultArr[0]["number"],resultArr[1]["number"],resultArr[2]["number"])){
        // console.log(true);
        points(true);
        return true;
    }else {
        // console.log(false);
        points(false);
        return false;
    }

}
function rank () {
    let dom = document.getElementsByClassName("ranking")[0];
    let obj = JSON.parse(localStorage.getItem("playlist"));
    let str = "";
    let arr = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            arr.push(element);
        }
    }
    for (const key in obj) {
        let attr = obj[key];
        str += `<div value=${attr} class="ranklist">${key}  :  ${attr}</div>`;    
    }
    dom.innerHTML = str;
    innerSort();
}

function innerSort () {
    let ranking = document.getElementsByClassName("ranking")[0];
    let dom = document.getElementsByClassName("ranklist");
    let arr = new Array(...dom);
    arr.sort(function (a,b) { let avalue = a.getAttribute("value"), bvalue = b.getAttribute("value"); return bvalue - avalue;  })
    ranking.innerHTML = "";
    for(var i = 0; i < arr.length; i++){
        ranking.appendChild(arr[i]);
    }
}

function points (boolean) {
    if(boolean){
        let obj = JSON.parse(localStorage.getItem("playlist"));
        let value = document.getElementById("player").value;
        // console.log(value);
        obj[value] = obj[value] + 1;
        localStorage.setItem("playlist",JSON.stringify(obj))
    }else{
        let obj = JSON.parse(localStorage.getItem("playlist"));
        let value = document.getElementById("player").value;
        obj[value] = obj[value] - 1;
        localStorage.setItem("playlist",JSON.stringify(obj))
    }
    rank();
}

function addActive () {
    let listwrapper = document.getElementsByClassName("wrapper");
    for(var i = 0; i < listwrapper.length;i ++){
        listwrapper[i].onclick = function (e) {
            let active = document.getElementsByClassName("active");
            if(active.length == 3){
                if(e.target.className.indexOf("active") != -1){
                    e.target.classList.remove("active");
                }
                return;
            }else if(e.target.className.indexOf("active") != -1){
                e.target.classList.remove("active");
            }
            else{
                e.target.classList.add("active");
            }
        }
    }
}
addActive();
function result () {
    alert("结算");
}
// 判断之后加减分删除已有元素添加新元素
function next (boolean) {
    // console.log("next" + boolean);
    if(boolean){
        if(count == 27){
            // console.log("++++++++done+++++++");
            let inner = document.getElementsByClassName("inner")[0];
            let active = document.getElementsByClassName("active");
            inner.removeChild(active[2]);
            inner.removeChild(active[1]);
            inner.removeChild(active[0]);
            try {
                for(var i = count; i < count + 3 ; i ++){
                    show(cardArr[i].color,cardArr[i].shape,cardArr[i].number);
                }
            } catch (error) {
                
            }
            panduan();
            addActive();
            firstInjudge();
        }else{
            let inner = document.getElementsByClassName("inner")[0];
            let active = document.getElementsByClassName("active");
            inner.removeChild(active[2]);
            inner.removeChild(active[1]);
            inner.removeChild(active[0]);
            for(var i = count; i < count + 3 ; i ++){
                show(cardArr[i].color,cardArr[i].shape,cardArr[i].number);
            }
            panduan();
            addActive();
            count += 3;
        }
        let resultNumber = document.getElementById("number");
        resultNumber.innerText =  27 - count >= 0 ? 27 - count : 0 ;
    }else{
        let active = document.getElementsByClassName("active");
        for(var i = 2;i >= 0; i --){
            active[i].classList.remove("active");
        }
    }
}
let time = document.getElementById("time");
let set = document.getElementsByClassName("set")[0];
set.onclick = function (){
    let value = document.getElementById("player").value;
    let active = document.getElementsByClassName("active");
    let timevalue = 10;
    // console.log(value);
    let timer = setInterval(() => {
        timevalue--;
        if(timevalue == 0){
            if(active.length < 3){
                alert("Time out");
                points(false);
            }else if(active.length == 3){
                next(compare());
            }
            clearInterval(timer);
            timevalue = 10;
        }
        time.innerHTML = timevalue;
    }, 1000);
    let resultNumber = Number(document.getElementById("number").innerText);
    if(resultNumber == 0){
        firstInjudge();
    }
    
    
}

let submit = document.getElementById("submit");
submit.onclick = function () {
    let playerlist = document.getElementById("playerlist");
    let length = document.getElementById("playernumber").value;
    let dom = "";
    for(var i = 0; i < length; i++){
        dom  += `<div> <span>${i+1}.</span><input type="text" class="playlist" value="player${i+1}"> </div> `;
    }
    playerlist.innerHTML = dom;
}


let startButton = document.getElementById("button");
button.onclick = function () {
    let model = document.getElementById("model").value;
    if(model == "practice"){
        document.getElementsByClassName("timer")[0].classList.add("hidden");
    }else{
        document.getElementsByClassName("timer")[0].classList.remove("hidden");
    }
    document.getElementsByClassName("header")[0].classList.remove("hidden");
    document.getElementsByClassName("firstPage")[0].classList.add("hidden");
    let playlist = document.getElementsByClassName("playlist");
    let player = document.getElementById("player");
    let dom = "";
    if(playlist.length == 1 || playlist.length == 0){
        let obj = {};
        let name = "";
        playlist.length == 1 ? name = playlist[0].value : name = "player1";
        obj[name] = 0;
        // console.log(obj);
        localStorage.setItem("playlist",JSON.stringify(obj));
        localStorage.setItem("playerOnly",true);
         dom = `<option value="${name}">player1</option>`
    }else{
        let obj = {};
        for(var i = 0; i < playlist.length; i++){
            let name = playlist[i].value;
            dom += `<option value="${name}">${name}</option>`;
            obj[name] = 0;
        }
        // console.log(obj);
        localStorage.setItem("playlist",JSON.stringify(obj));
        localStorage.setItem("playerOnly",false);
    }
    player.innerHTML = dom;
    for(var i = 0; i < count;i++){
        show(cardArr[i].color,cardArr[i].shape,cardArr[i].number);
    }
    let resultNumber = document.getElementById("number");
    resultNumber.innerText = 27 - count >= 0 ? 27 - count : 0 ;
    firstInjudge();
}

let showor = document.getElementById("showor");
showor.onclick = function () {
    firstInjudge();
    let ad2 = document.getElementsByClassName("ad2");
    for(var i = 0; i < ad2.length; i ++){
        ad2[i].classList.add("ad3");
      
    }

    setTimeout(function(){
        for(var i = 0; i < ad2.length; i ++){
            ad2[i].classList.remove("ad3");
        }
  
    },1000)
    addActive();
    if(ad2.length == 0){
        alert("this is no set");
    }

}

let returna = document.getElementsByClassName("return")[0];
returna.onclick = function () {
    location.reload();
}

let show_1 = document.getElementsByName("show"),
    show2 = document.getElementsByName("show2"),
    show3 = document.getElementsByName("show3"),
    show_sure = true,show_sure2 = true,show_sure3 = true;

    show_1[0].onclick = function () {
    show_sure = true;
}    

show_1[1].onclick = function () {
    show_sure = false;
}

show2[0].onclick = function () {
    show_sure2 = true;
}    

show2[1].onclick = function () {
    show_sure2 = false;
}

show3[0].onclick = function () {
    show_sure3 = true;
}    

show3[1].onclick = function () {
    show_sure3 = false;
}

if(show_sure == true && show_sure2 == true && show_sure3 == true){
    
}else{
    document.getElementById("showor").classList.add("hidden");
}
