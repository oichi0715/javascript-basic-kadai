console.log(45 + 18);
console.log(45 > 18);
console.log('5' == 5);
console.log('5' === 5);

let num = Math.floor(Math.random() * 5);
console.log(num);

if (num === 4){
    console.log('大当たりです');
}
    else if(num === 3){
        console.log('あたりです');
}
    else{
        console.log('外れです');
}

num = 20;

if (num > 10 && num < 30){
    console.log('変数numは１０より大きく、３０より小さいです');
} else {
    console.log('条件が成り立ちませんでした');
}
num = 15;
if (num === 10 || num === 30){
    console.log('変数numは１０または３０です');
} else{
    console.log('条件が成り立ちませんでした');
}
 num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            console.log('小吉です')
            break;
            case 1:
            console.log('中吉です')
            break;
        case 2:
            
            console.log('大吉です')
            break;
    }



num = Math.floor(Math.random() * 5);
console.log(num);

switch (num){
    case 2:
        console.log('小吉です');
        break;
    case 3:
        console.log('中吉です');
        break;
    case 4:
        console.log('大吉です');
        break;        
}   


num = Math.floor(Math.random() * 5);
console.log(num);

switch (num){
    case 2:
        console.log('小吉です');
        break;
    case 3:
        console.log('中吉です');
        break;
    case 4:
        console.log('大吉です');
        break;
    default:
        console.log('末吉です');
        break;        
}
// while文を書いてみよう
num = Math.floor(Math.random() * 5);
console.log('最初の値は' + num + 'です');

while(num !== 0){
    num = Math.floor(Math.random() * 5);
    console.log('現在の値は' + num +'です');
}

for (let i = 1; i <= 10; i++){
    console.log(i);
}
// 配列

const userName = ['侍太郎','侍一郎','侍二郎','侍三郎','侍四郎'];
console.log(userName);
userName[1] = '侍花子';
userName[5] = '侍五郎';

console.log(userName);
console.log(userName[3]);
console.log(userName.length);



// 関数を理解しよう


const sayGoodMornig = () => {
    console.log('おはようございます');
    console.log('機能は良く眠れましたか？');
    console.log('今日も一日頑張りましょう');
}
sayGoodMornig();

sayGoodMornig();

function sayGoodMorinig_2(){
    console.log('こんばんは');
    console.log('機能は良く眠れましたか');
    console.log('今日も一日頑張りましょう！');
}

sayGoodMorinig_2();
 

// 13章　引数・戻り値を理解しよう

const calculateTotal = (price) => {
    console.log( price + 500 + '円');
}


calculateTotal(1200);

const keisann = (price2) => {
    console.log( price2 + 500);
} 
 keisann(200);

 const addTwoArguments = ( price, shippingFree) => {
    console.log(price + shippingFree + '円');
 }

 addTwoArguments(1200, 500);

const double = (num) => {
    return num * 2;
}

console.log(double(30));


// 14章　スコープを理解しよう
const userName1 = '侍太郎';
const useVariable = () => {
    
    console.log(userName1);
}

useVariable();
console.log(userName1);


// 15章　クラスを理解しよう

// class クラス名 {
//     クラスの特徴
// }


// const Product{
//     クラスの特徴
// }

// const shampoo = new CSSMathProduct();
// class Product {
//     constructor(){
//         初期化の内容
//     }
// }

// class Product{
//     constructor(){
//         console.log('敏感肌にも優しい100％天然由来のシャンプーです');
//     }
// }

// class Product{
//     constructor(){
//         this.name = 'シャンプー';
//         this.price = 500;
//         this.category = '生活雑貨';
//     }
// }
// const shampoo = new Product;
// console.log(shampoo);

// class Product{
//     constructor(name, price, category){
//         this.name = name;
//         this.price = price;
//         this.category = category;
//     }
// }

// const shampoo = new Product('シャンプー', 500, '生活雑貨');
// const caffee = new Product('コーヒー', 1500, '飲料');

// console.log(caffee);

// class Product{
//     constructor(){
//         初期化の内容
//     }
//     メソッド名(){
//         一連の処理
//     }
// }

// class Product{
//     constructor(name, price, category){
//         this.name = name;
//         this.price = price;
//         this.category = category;
//     }
//     describe(){
//         console.log('この商品名は' + this.name + 'です');
//     }
// }

// const shampoo = new Product('シャンプー', 500, '生活雑貨');
// const coffee = new Product('コーヒー', 1500, '飲料');

// console.log(shampoo);
// console.log(coffee);

// shampoo.describe();

// const personalDate = {name: '侍太郎', age: 36, gender: '男性'};

// const 定数名 = {
//     キー名 (メソッド名) : () => {
//         一連の処理
//     }


// const user = {
//     name : '侍太郎',
//     age : 36,
//     gender : '男性',
//     greet : () => {
//         console.log('よろしくお願いいたします');
//     }
// }

// user.greet();



// 16章　DOM操作の仕組みを理解しよう
// 17章　DOM操作をやってみよう

// console.log(document.getElementById('first-list'));
// console.log(document.getElementsByClassName('list'));


// const headings = document.getElementsByClassName('heading');
// for (let i = 0 ; i < headings.length; i++){
//     console.log(headings[i]);
// }

// const headings = document.getElementsByClassName('heading');
// for(let i = 0; i < headings.length; i++){
// console.log(headings[i]);}

// console.log(document.querySelector('h2'));
//  console.log(document.querySelector('#second-heading'));
//  console.log(document.querySelector('.list'));

// console.log(document.querySelectorAll('.list'));
// console.log(document.querySelectorAll('.heading'));

// const li = document.createElement('li');
// li.textContent = 'JavaScriptで新しく作成したリスト３';
// li.innerHTML = '<a href = "#">JavaScriptで新しく作成したリスト３<a>';

// document.querySelector('ul').appendChild(li);

// 18章　イベント処理を理解しよう

// const btn = document.getElementById('output-btn');

// btn.addEventListener('click', () => {
//     console.log('クリックされました！');
// })

// const addBtn = document.getElementById('add-btn');
// const paretnlist = document.getElementById('parent-list');

// addBtn.addEventListener('click', () => {
//     const childList = document.createElement('li');

//     childList.textContent = "これはリスト要素です";
//     paretnlist.appendChild(childList);
// })

// 19章　イベント処理でフォームを作成しよ
// const countBtn = document.getElementById('count-btn');
// countBtn.addEventListener('click', () => {
//     const text = document.forms.textForm.textBox.value;

//     console.log(text.length + '文字');
// })


// const areaBtn = document.getElementById('area-btn');
// areaBtn.addEventListener('click', () => {
//     const area = document.forms.areaForm.area.value;
//     console.log(area);
// })

// const osBtn = document.getElementById('os-btn');
// osBtn.addEventListener('click', () => {
//     const items = document.forms.osForms.os;

//     for(let i = 0; i < items.length; i++){
//         if(items[i].checked){
//             console.log(items[i].value);
//         }
//     }
// });


// 20章　イベント処理でボタンの表示・非表示を切り替えよう

// const backBtn = document.getElementById('back-btn');

// window.addEventListener('scroll', () => {
//     const scrollVale = document.scrollingElement.scrollTop;

//     if(scrollVale >= 300){
//         backBtn.style.display = 'inline';
//     }
//     else{
//         backBtn.style.display = 'none';
//     }
// })

// 21章　非同期処理を理解しよう
// console.log('処理１');
// console.log('処理２');
// console.log('処理３');

// setTimeout(() => {
//     console.log('処理４(非同期処理)')
// }, 2000);

// console.log('処理５');
// console.log('処理６');



// 22章　エラーハンドリングの方法を理解しよう

// try{
//     例外が発生する可能性のあるコード
// }catch(error){
//     例外が発生した場合の処理
// }

//  try{
//     notFunction()
//  }catch(error){
//     console.log('--- putput error ---')
//     console.log(error.name)
//     console.log(error.message)
//  }
// try{
//     console.log('hello')
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }finally{
//     console.log('end')
// }



// 23章　Ajaxの使い方

const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
const button = document.getElementById('ajax-btn');

botton.addEventListener('click', () =>{
    fetch(url)

    .then((response) => response.json())
    .then((date) => {
        const weather = date[0].timeSeries[0].weather[1];
    })
})