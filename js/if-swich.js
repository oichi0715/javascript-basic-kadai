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