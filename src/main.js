let demo = document.querySelector("#demo");
let style = document.querySelector("#style");

let string = `
/* 你好,我是ALEX
 * 接下来我会画一个太极图
 * 首先我先准备一个div
 */
#div1{
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我会让div变成圆形*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 接下来我让这个圆形变成一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,16,17,1) 0%, rgba(11,11,23,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
}
/* 接下来我要把这个圆的细节丰富一下*/
#div1::before{
    content:'';
    display:block;
    height:100px;
    width:100px;
    border-radius:50%;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    background:#000;
}
#div1::after{
    content:'';
    display:block;
    height:100px;
    width:100px;
    border-radius:50%;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    top:50%;
    background:#fff;
}
/* 接下来我们来画龙点睛*/
#div1::before{
    background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 19%, rgba(0,0,0,1) 19%);
}
#div1::after{
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 19%, rgba(255,255,255,1) 19%);
}

`;
let string2 = "";
let n = 0;

//字符串显示函数
let step = () => {
  setTimeout(() => {
    // 显示字符串中的回车和空格
    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp";
    } else {
      string2 = string2 + string[n];
    }
    //让字符串逐一显示
    if (n + 1 < string.length) {
      n = n + 1;
      step();
    }
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, document.body.scrollHeight);
    demo.scrollTo(0, document.body.scrollHeight);
  }, 50);
};
step();
