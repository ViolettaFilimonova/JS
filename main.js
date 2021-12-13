
//////////////////DOM//////////////////////////////

//*1
// var button = document.createElement('button');
// var body = document.querySelector('body')

// button.innerText = 'Нажми на меня!'
// body.append(button)

// button.addEventListener('click', function(){
//     alert('Улыбнись кисанька!)))))')
// })


//*2
// var button = document.createElement('button');
// var body = document.querySelector('body');
// var input = document.createElement('input');

// button.innerText = 'Нажми на меня!';
//  body.append(button);

// input.value = '!!!'
// body.append(input)

// button.addEventListener('click', function(){
//     input.value = 'Ты лучшая!!!!'
//     alert(input.value);
// })


//*3
// var button = document.createElement('button');
// var body = document.querySelector('body')
// var input = document.createElement('input');

// button.innerText = 'Нажми на меня!'
// body.append(button)

// input.value = 'Ведите число'
// body.append(input)

// button.addEventListener('click', function(){
//     if(isNaN(input.value)){
//         alert('Введите число')
//     }else{
//         alert(input.value * input.value)
//     }
     
//  })


//*4
//  var button = document.createElement('button');
//  var body = document.querySelector('body')
 

//  button.innerText = 'Нажми на меня!'
//  body.append(button)


//     var input1 = document.createElement('input');
//     var input2 = document.createElement('input');

//     body.append(input1, input2)
    

// button.addEventListener('click', function f(){
//     var inputChange1 = input1.value
//     var inputChange2 = input2.value

//     input1.value = inputChange2
//     input2.value = inputChange1

//  })

//*5
// var button = document.createElement('button')
// button.innerText = 'Нажми на меня'
// var body = document.querySelector('body')

// body.append(button)

// button.addEventListener('click', function(e){
//     e.target.innerText = 'Новый текст кнопки'
// })


//6*
// var button = document.createElement('button')
// var input = document.createElement('input')
// var body = document.querySelector('body')

// button.innerText = 'Измени цвет'
// input.value = 'Красный'
// body.append(button, input)

// button.addEventListener('click', function(){
//     input.style.color = 'red'
// })


//*7
// var button1 = document.createElement('button')
// var button2 = document.createElement('button')
// var input = document.createElement('input')
// var body = document.querySelector('body')

// button1.innerText = 'Заблокировать'
// button1.type = 'submit'
// button2.innerText = 'Разблокировать'
// input.value = 'Какой-то текст'

// body.append(button1,button2, input)

// button1.addEventListener('click', function(){
//      input.disabled = true
// })

// button2.addEventListener('click', function(){
//     input.disabled = false
// })

//*8
// var button = document.createElement('button')
// button.innerText = 'Переключить картинку'
// var body = document.querySelector('body')
// var img = document.createElement('img')
// img.src = 'http://dgdesign.ru/uploads/posts/2018-11/1542022566_novogodniy-png-klipart-13135.png'

// body.append(button, img)

// button.addEventListener('click', function(){
//     img.src = 'https://is2-ssl.mzstatic.com/image/thumb/Purple22/v4/77/1b/90/771b90a5-708f-82d9-1a93-3696dfe00f1b/source/256x256bb.jpg'
// })

//*9
// var button = document.createElement('button')
// button.innerText = 'HI'
// var body = document.querySelector('body')

// body.append(button)

// document.addEventListener('click', function(){
//     button.disabled = true
//     button.innerText = 'BYE'
// })

//*10
// var button1 = document.createElement('button')
// var button2 = document.createElement('button')
// var input = document.createElement('input')
// var body = document.querySelector('body')

// button1.innerText = 'Убрать'
// button2.innerText = 'Добавить'
// input.value = 'Какой-то текст'

// body.append(button1,button2, input)

// button1.addEventListener('click', function(){
//     input.remove() 
// })

// button2.addEventListener('click', function(){
//     document.createElement('input')
//     body.append(input)
// })

//*11
// var button1 = document.createElement('button')
// var body = document.querySelector('body')

// button1.innerText = 'На меня можно нажать'

// body.append(button1)

// button1.addEventListener('click', function(){
//     button1.disabled = true
//     button1.innerText = 'На меня больше нельзя нажимать'
//     var button2 = document.createElement('button')
//     button2.innerText = 'Можешь нажать на меня))))'
//     body.append(button2)

//     button2.addEventListener('click', function(){
//         button1.disabled = false
//         button1.innerText = 'На меня можно нажать'
//         button2.remove()
//     })
// })


//*11
// var button = document.createElement('button')
// var body = document.querySelector('body')
// button.innerText = 0
// button.style.padding = '10px 50px'

// body.append(button)

// button.addEventListener('click', function(){
//     button.innerText ++
// })


//*12
// var button = document.createElement('button')
// var input = document.createElement('input')
// var body = document.querySelector('body')
// var div = document.createElement('div')
// button.innerText = 'Поменять местами'

// div.append(button, input)
// body.append(div)

// button.addEventListener('click', function(){
//     div.style.display = 'flex'
//     div.style.flexFlow = 'wrap'
//     button.style.order = '1'
//     button.innerText = 'Теперь я справа'
// })


//*13
// var input1 = document.createElement('input')
// var input2 = document.createElement('input')
// var button = document.createElement('button')
// var body = document.querySelector('body')

// button.innerText = 'Возвести число в квадрат'
// input1.value = 'Введите число'
// body.append(input1, input2, button)

// button.addEventListener('click', function(){
//     if (input1.value != NaN ) {
//         input2.value = input1.value * input1.value   
//     }else{
//         input2.value = 'NaN'
//     }
// })


//*14
// var button = document.createElement('button')
// button.innerText = 'Изменить курсор мышки'
// var body = document.querySelector('body')

// body.append(button)

// button.addEventListener('click', function(){
//     button.disabled = true
//     button.style.cursor = 'not-allowed '
// })

//*15
// var input = document.createElement('input')
// var button1 = document.createElement('button')
// button1.innerText = '+'
// button1.value = '+'
// var button2 = document.createElement('button')
// button2.innerText = '-'
// button2.value = '-'
// var button3 = document.createElement('button')
// button3.innerText = '/'
// var button4 = document.createElement('button')
// button4.innerText = '*'
// var button5 = document.createElement('button')
// button5.innerText = '0'
// var button6 = document.createElement('button')
// button6.innerText = '1'
// var button7 = document.createElement('button')
// button7.innerText = '2'
// var button8 = document.createElement('button')
// button8.innerText = '3'
// var button9 = document.createElement('button')
// button9.innerText = '4'
// var button10 = document.createElement('button')
// button10.innerText = '5'
// var button11 = document.createElement('button')
// button11.innerText = '6'
// var button12 = document.createElement('button')
// button12.innerText = '7'
// var button13 = document.createElement('button')
// button13.innerText = '8'
// var button14 = document.createElement('button')
// button14.innerText = '9'
// var body = document.querySelector('body')

// body.append(button1, button2, button3, button4, button5, button6, button7, button8, button9, button10,
//     button11, button12, button13, button14, input)

// this.addEventListener('click', function(e){
//     input.value += e.target.value
//     console.log(e.target)
// })





/////////////////////////ARRAY/////////////////////////////////
//*1
// var a = [1, 2, 3, 4]
// var b = [5, 6, 7, 8]

// var c = a.concat(b)
// console.log(c)


//*2
// var arr = ['a', 'b', 'c']
// arr.push(1,2,3)
// console.log(arr)


//*3
// var arr = [1,2,3]
// var c = arr.reverse()
// console.log(c)


//*4
// var arr = [1,2,3]
// arr.push(2,2,2)
// arr.unshift(2,2,2)
// console.log(arr)


//*5
// var arr = [1,2,3]
// console.log(arr.pop())
// console.log(arr.shift())


// //*6
// var a = [1, 2, 3, 4]
// var b = [5, 6, 7, 8]

// var c = a.slice(1,3)

// console.log(c)



//*7
// var a = [1, 2, 3, 4]

// // var arr = a.splice(1,2)
// a.splice(1,0, 'g', 'r')
// a.splice(4,0, 'w')

// console.log(a)


//*8
// var arr = [3,1,5,8,2,5,0]
// arr.sort()
// console.log(arr)


//*9
// var arr = [];
// var obj = {js:'test', jq: 'hello', css: 'world'}
// console.log(Object.keys(obj))



///////////////////РАНДОМНЫЕ ЗАДАЧИ///////////////////////

//*10
// var str = 'hello'
// var a;
// a = str.split('').reverse().join('')
// console.log(a)


//*11
//Проверьте, что строка начинается на http://.

// var str = prompt('')

// if (str.substr(0,7) === 'http://') {
//     console.log('true')
// }else{
//     console.log('false')
// }


//*12
// Проверьте, что строка заканчивается на .html. 

// var str = prompt('')

// if (str.substr(-5) === '.html') {
//     console.log('true')
// }else{
//     console.log('false')
// }



//Задачи на основы работы с пользовательскими функциями в JavaScript//

//*1
//Сделайте функцию, которая возвращает куб числа. Число передается параметром.
// function f(){
//     var s = +prompt('Введите сторону куба')
//     var result = s * s;
//     return result
// }
// var a = f();
// alert(a)


//*2
// Сделайте функцию, которая принимает параметром число от 1 до 7, 
//а возвращает день недели на русском языке.


// var num = +prompt('Введите число от 0 до 7')
// function day(day){
//     switch (day) {
//         case 1:
//             return 'понедельник'
//             break;
//         case 2:
//             return 'вторник'
//             break;
//         case 3:
//             return 'среда'
//             break;
//         case 4:
//             return 'четверг'
//             break;
//         case 5:
//             return 'пятница'
//             break;
//         case 6:
//             return 'суббота'
//             break;
//         case 7:
//             return 'воскресенье'
//             break;
//         default:
//             return 'вы ввели число внедиапозона'
//             break;
//     }
// }
// var c = day(num);

// alert(c)



///////////Loops///////////////////

//*1
//выведем на экран строку '111222333444555666777888999'
// var arr = []
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 4; j++) {
//         arr.push(i)  
//     }
// }
// console.log(arr.toString())


//*2
/*  x
    xx
    xxx
    xxxx
    xxxxx*/

// var x = ''
// for (let i = 0; i < 5; i++) {
//     x += 'x'
//     console.log(x)
    
// }


//*3
//Давайте сделаем строку '123456789'
// var str = ''
// for (let i = 1; i < 10; i++) {
//     str += i 
// }
// console.log(str)


//*4
/*  111
    222
    333
    444
    555
    666
    777
    888
    999*/

// var str = ''
// for (let i = 1; i < 10; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i)
//     }
// }


//*5
/*
1
22
333
4444
55555
666666
7777777
88888888
999999999*/

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(i)
//     }
// }


//*6
//С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' 
//и запишите ее в переменную str.

// var str = ''
// for (let i = 1; i < 10; i++) {
//     str += '-' + i
// }
// str += '-'
// console.log(str)


//*7
/*
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx*/

// var str = ''
// for (let i = 1; i < 6; i++) {
//         str += 'xx'
//         console.log(str)
// }




/////////////////////FLAGS////////////////////

//*1
// Дан массив с числами. Проверьте, что в этом массиве есть число 5. 
//Если есть - выведите 'да', а если нет - выведите 'нет'.

// let array = [1,2,3,1,2,5,7,3,8,9,0,5]
// let flag = 'false'

// function num(array){
//     for (let i = 0; i < array.length; i++) {
//        if (array[i] == 4) {
//            return flag = 'true';
//            break;
//        }
        
//     }
//     return flag == 'false'
    
// }

// if (num(array) == 'true') {
//     alert('Числo 4 - есть')
// }else{
//     alert('Числa 4 - нет')
// }


//*2
/*Дано число, например 31. Проверьте, что это число не делится 
ни на одно другое число кроме себя самого и единицы. То есть в 
нашем случае нужно проверить, что число 31 не делится на все 
числа от 2 до 30. Если число не делится - выведите 'false', а 
если делится - выведите 'true'.*/
// let flag = 'false'

// function num(number){
//     for (let i = 2; i < 31; i++) {
//         if (number % i == 0) {
//             return flag = 'true'
//             break
//         }
        
//     }
//     return flag = 'false'
// }

// if (num(31) == 'true') {
//     alert('true')
// }else{
//     alert('false')
// }


//*3
/* Дан массив с числами. Проверьте, есть ли в нем два 
одинаковых числа подряд. Если есть - выведите 'да', а 
если нет - выведите 'нет'.*/

// let arr = [1,2,3,5,5,6,7,8,92,8,9]
// let flag = false

// function num(){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i+1] ) {
//             return flag = true
//         }
        
//     }
//     return flag = false
// } 

// if (num(arr) == true) {
//     alert('Да')
// }else{
//     alert('Нет')
// }

//вариант без флага
// let arr = [1,2,2,5,6,7,8,92,8,9]


// function num(){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i+1] ) {
//             return true
//         }else if(arr[i+1] > arr.length){
//             break
//         }
        
//     }
//     return false
// } 

// if (num(arr) === true) {
//     alert('Да')
// }else{
//     alert('Нет')
// }




///////////////////логическими значениями////////////////////

//*1 Сделайте функцию, которая параметрами принимает 2 числа. 
//Если эти числа равны - пусть функция вернет true, а если не равны 
//- false.

// function num(num1, num2){
//     if (num1 == num2) {
//         return true
//     }else if (num1 > num2 || num2 > num1) {
//         return false
//     }
// }
// alert(num(4,2))


//*2 Сделайте функцию, которая параметрами принимает 2 числа. 
//Если их сумма больше 10 - пусть функция вернет true, а если нет 
//- false.

// function num(num1, num2){
//     let sum = num1 + num2
//     if (sum > 10) {
//         return true
//     }else if (sum = 10 || 10 > sum) {
//         return false
//     }
// }
// alert(num(4,7))


//*3 Сделайте функцию, которая параметром принимает число и проверяет 
//- отрицательное оно или нет. Если отрицательное - пусть функция 
//вернет true, а если нет - false.

// function num(num1){
//     if (num1 > 0) {
//         return true
//     }else{
//         return false
//     }
    
// }
// alert(num(-4))



////////////////////приемы работы с циклами/////////////////////

//*1  С помощью цикла for сформируйте строку '123456789' и запишите 
//ее в переменную str.
// let str = ''
// for (let i = 1; i < 10; i++) {
//     str += i
// }
// console.log(str)


//*2 С помощью цикла for сформируйте строку '987654321' и запишите 
//ее в переменную str.
// let str = ''
// for (let i = 9; i > 0; i--) {
//     str += i
    
// }
// console.log(str)

//*3  С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' 
//и запишите ее в переменную str.
// let str = ''
// for (let i = 1; i < 10; i++) {
//     str += '-' + i 
    
// }
// str += '-'
// console.log(str)

//*4 Нарисуйте пирамиду, как показано на рисунке, только у вашей 
//пирамиды должно быть 20 рядов, а не 5:
/*
x
xx
xxx
xxxx
xxxxx*/
// str = ''
// for (let i = 1; i < 21; i++) {
//     str += 'x' 
//     console.log(str)
// }


//*5 С помощью двух вложенных циклов нарисуйте следующую пирамидку:
/*
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/ 

// for (let i = 1; i < 10; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write(i)
        
//     }
//     document.write('<br>')
// }


//*6 Нарисуйте пирамиду, как показано на рисунке, воспользовавшись 
//циклом for:
/*
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx
*/

// let str = ''
// for (let i = 0; i < 5; i++) {
//     str += 'xx'
//     console.log(str)
// }



/////////////////////ARRAY//////////////////////////
//*1 Переворот массива
// var arr = ['a', 'b', 'c', 'd', 'e'];
// var result = [];

// for (var i = arr.length - 1 ; i >= 0; i--) {
// 	result.push(arr[i]);
// }

// console.log(result); //выведет ['e', 'd', 'c', 'b', 'a']

//------------------------------------------------------------
// var arr = ['a', 'b', 'c', 'd', 'e'];
// var result = arr.reverse()
// console.log(result)


//*2 Переворот объекта
// var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// var result = {};

// for(key in obj){
//     result[obj[key]] = key
// }


// console.log(Object.entries(obj))


/*
2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал 
подсчета стоимости корзины в зависимости от находящихся в ней товаров.
*/

// let basket = [
//     {
//         name: 'iphone13',
//         price: 100000,
//         count: 2
//     },
//     {
//         name: 'iphone12',
//         price: 90000,
//         count: 1
//     },
//     {
//         name: 'iphone11',
//         price: 60000,
//         count: 4
//     }
// ]

// function sum(mas){
//     let sumBasket = 0;
//     for (let i = 0; i < basket.length; i++) {
//         sumBasket += basket[i].price * basket[i].count
        
//     }
//     return sumBasket
// }

// console.log(sum(basket))

//-----------------------------------------------------------------------
//Игра быки и коровы
//Компьютер загадывает уникальное 4ех значнре число 
//Если игрок  угадывает все 4 числа(все быки), то выйграл
//Если число есть, но позиция не совпадает, то это коровы

// let attempts = 0
// let numbersRandom = [];
// let i = 0
// while (numbersRandom.length < 4){
//     i++
//     let numberRandom = (Math.random() * (9-1)+1).toFixed(0)
//        if (i == 0 ) {
//         numbersRandom.push(numberRandom)
//        }else if (numbersRandom.indexOf(numberRandom) == -1 ) {
//         numbersRandom.push(numberRandom)
//        }
       
// }

// console.log(numbersRandom)




// function user(){
//     while(true){
//         let userAnswer = prompt('Угадайте 4ех значное число, если хотите выйти из игры введите -1',0);
//         if (isNaN(userAnswer)) {
//             userAnswer = prompt('Вы ввели не число.Введите 4ех значное число, если хотите выйти из игры введите -1',0);
            
//         }else if(userAnswer.length < 4 || userAnswer.length > 4){
//             userAnswer = prompt('Вы ввели некорректное число.Введите 4ех значное число, если хотите выйти из игры введите -1',0);
            
//         }else{
//             return userAnswer
//             break
//         }
//     }
// }

// let getUserAnswer = user();

//result = [false, 0, 0]
//result[0] - выиграл или проиграл
//result[0] - быки
//result[0] - коровы
// let result = [false, 0, 0]

// comparsionOfNum()

// function comparsionOfNum(){
//     while(!result[0]){
//         attempts++
//         getUserAnswer = user();
//         console.log(getUserAnswer)
//         for (let i = 0; i < getUserAnswer.length; i++) {
//                 if (getUserAnswer[i] == numbersRandom[i]) {
//                     result[1] += 1
//                     result[0] = false
//                 }else if(numbersRandom.indexOf(getUserAnswer[i]) !== -1){
//                     result[2] += 1
        //             result[0] = false
        //         }
        //         if (result[1] == 4) {
        //             result[0] = true
        //             alert('Вы победили!')
        //             break
        //         }
                
        //     }
        //     alert('Быки: ' + result[1] + '. Коровы: ' + result[2])
        //     if (result[1] !== 4) {
        //         result = [false, 0, 0]
        //     }   
        // }
        // alert('Число ваших попыток: ' + attempts)
        // console.log(result)
        // alert('Быки: ' + result[1] + '. Коровы: ' + result[2])
        

// }


    // if (result[1] == 4) {
    //     result[0] == true
    //     alert('Вы победили!')
    // }
//--------------------------------------------------------------------------


//////////////////////////OBJECT/////////////////////////////

// let car = {
//     name: 'Audi',
//     price: 1200,
//     isEnginStarted: false
// }

// let car2 = {
//     name: 'BMW',
//     price: 1500,
//     isEnginStarted: false
// }

// let ca3 = {
//     name: 'Mazda',
//     price: 1000,
//     isEnginStarted: false
// }
// car2.start = enginStart;
// car2.start()
// car.start = enginStart;
// car.start()
// function enginStart(){
//     if (!this.isEnginStarted) {
//         this.isEnginStarted = true
//         console.log('двинатель ' + this.name + 'запущен')
//     }
// }


//--------------------------------------------------------------------
//---------------------QUEST GAME-------------------------------------
//--------------------------------------------------------------------

// let answer;
// let game = false

// let i = 0
// let history = [];


// function num(q00, q01, q02){
//     do{
//         answer = +prompt(q00 +q01 + q02)
//         if (answer == 1) {
//             history.push([q00, q01])
//         }else{
//             history.push([q00, q02])
//         }
        
//         if (answer > quest.a0 || isNaN(answer) || answer < 1) {
//             alert('Вы ввели неккоректное число')
//             game = false
//         }else{
//             game = true
//         }

//      }while(!game);
// }
// num(quest.a00, quest.a01, quest.a02)




// switch (answer) {
//     case 1:
//         num(quest.b00, quest.b01, quest.b02)
//         switch (answer) {
//             case 1:
//                 num(quest.d00, quest.d01, quest.d02) 
//             break;
//             case 2:
//                 num(quest.e00, quest.e01, quest.e02)
//             break;
        
//             default:
//                 break;
//         }
//         break
//      case 2:
//         num(quest.c00, quest.c01, quest.c02)
//         switch (answer) {
//             case 1:
//                 num(quest.e00, quest.e01, quest.e02) 
//             break;
//             case 2:
//                 num(quest.e00, quest.e01, quest.e02) 
//             break;
        
//             default:
//                 break;
//         }
//         break
//         break;
//     default:
//         break;
// }

// console.log(history)

// do{
//     answer = +prompt('На какой ход вы хотите получить ответ?')
//     if (answer > 3) {
//         alert('Вы ввели некоректное значение')
//         game = false
//     }else if (isNaN(answer)) {
//         alert('Вы ввели некоректное значение')
//         game = false
//     }
//     else{
//         game = true
//     }
// }while(!game)
// switch (answer) {
//     case 1:
//         alert(history[answer-1])
//         break;


//     case 2:
//         alert(history[answer-1])
//         break;
    
//     case 3:
//         alert(history[answer-1])
//         break;
        
//     default:
//         break;
// }


/*
Написать функцию, преобразующую число в объект
Передавая на вход число от 0 до 999, мы должны получить на выходе 
объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 мы должны получить 
следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее 
сообщение с помощью console.log и вернуть пустой объект.
*/
// mass = []
// let num = prompt('Введите 3ех значное число');
// obj = {}

// number()
// function number(){
// for (let i = 0; i < 3; i++) {
//     mass.push(num[i])
// }
//     obj.unit = num[2]
//     obj.dozens = num[1]
//     obj.hundreds = num[0]
// }

// console.log(obj)


//--------------------------------------------------------------------
//------------------------Кто хочет стать миллионером-----------------
//--------------------------------------------------------------------


// let answer;
// let game = false
// let sum = 0;



// function num(q00, q01, q02){
//     do{
//         answer = +prompt(q00 +q01 + q02)
        
//         if (answer > quest.a0 || isNaN(answer) || answer < 1) {
//             alert('Вы ввели неккоректное число')
//             game = false
//         }else{
//             game = true
//         }

//      }while(!game);
// }
// num(millioner.a00, millioner.a1, millioner.a2)
// examination(1, 2)

// num(millioner.b00, millioner.b1, millioner.b2)
// examination(1, 2)
// num(millioner.c00, millioner.c1, millioner.c2)
// examination(2, 1)
// num(millioner.d00, millioner.d1, millioner.d2)
// examination(1, 2)
// function examination(one, two){
//     switch (answer) {
//         case one:
//             alert('Вы получили + ' +  1000 + ' баллов. Сумма ваших баллов: ' + (sum += 1000))
//             break;
//         case two:
//             alert('Отвкт неверный! Вы получили + ' + 0 + ' баллов')
//             break;
    
//         default:
//             break;
//     }
// }

// alert('У вас ' +  sum + ' баллов')



//---------------------------------------------------------------
//----------------------------DOM--------------------------------
//---------------------------------------------------------------

//*1
// let text = document.querySelector('h1')
// let div = document.querySelector('div')
// let button = document.querySelector('button')
// let color = []

// for (let i = 0, size = 20; i < 10; i++, size += 5) {
//     let h2 = document.createElement('h2')
//     h2.innerText = 'Element' + (i + 1)
//     h2.style.fontSize = size + 'px'
//     div.append(h2)
    
//     if (i % 2 == 0) {
//         h2.className = 'red'
//     }else{
//         h2.className  = 'blue'
//     }
//     h2.onclick = function(){
//         if (!this.classList.contains('gray')) {
//             color.push(this.className)
//             this.classList.remove(this.className)
//             this.classList.add('gray')
//         }else{
//             this.classList.remove('gray')
//             this.classList.add(color[i])
//         }
        
//     }
// }
// button.onclick = function (){
//     text.style.color = 'orange'
// }


//*2
// let link = document.createElement('a')
// link.href = 'https://google.com'
// link.innerText = 'Google'
// document.body.append(link)


//*3
// let table = document.createElement('table')
// var rows = [' ','8','7','6','5','4','3','2','1',' ']
//     cols = [' ','A','B','C','D','E','F','G','H',' ']
//     black1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],
//     white1 = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1' ],
//     black2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
//     white2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];

// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr')
//     for (let j = 0; j < 10; j++) {
//         let td = document.createElement('td')
     
//         if ( i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
//             td.className = 'gray'
//         }else{
//             td.className = 'beige'
//         }

//         if (j == 0 ) {
//             td.innerText = rows[i]
//             td.style.background = 'none' 
//         }else if (j == 9) {
//             td.innerText = rows[i] 
//             td.style.background = 'none'  
//             td.classList.add('reverse')
//         }else if (i == 1) {
//             td.innerHTML = black1[j]
//         }else if (i == 2) {
//             td.innerHTML = black2[j]
//         }else if (i == 8) {
//             td.innerHTML = white1[j]
//         }else if (i == 7) {
//             td.innerHTML = white2[j]
//         }else if (i == 0) {
//             td.innerHTML = cols[j]
//             td.style.background = 'none' 
            
//         }else if (i == 9) {
//             td.innerHTML = cols[j]
//             td.style.background = 'none' 
//         }
//         tr.append(td)
//     }
//     table.append(tr)
// }
// document.body.append(table)

// let mass = cols.reverse()


//---------------------------------------------------------------
//----------------------------События--------------------------------
//---------------------------------------------------------------

//*1

// let text = document.querySelector('h1')
// let button = document.querySelector('button')
// let select = document.querySelector('select')

// button.onclick = function(){
    
//     text.style.color = getRandomColor()
// }
// select.onchange = function(){
//     text.style.color = this.value
// }

// function getRandomColor(){
//     let red = (Math.random() * 255).toFixed(0)
//     let green = (Math.random() * 255).toFixed(0)
//     let blue = (Math.random() * 255).toFixed(0)

//     return 'rgb(' + red  + ','+ green + ',' + blue + ')'
// }

// console.log(getRandomColor())


//*2
// let links = document.querySelectorAll('a')
// let buttons = document.querySelectorAll('button')
// for (let link of links) {
//     link.onclick = function f(){
//         switch (this) {
//             case links[0]:
//                 for (let i = 0; i < buttons.length; i++) {
//                    if (i % 2 == 0) {
//                        buttons[i].style.color = 'red'
//                    }else{
//                     buttons[i].style.color = 'blue'
//                    }
//                 }
//                 break
//             case links[1]:
//                 for (let i = 0; i < 3; i++) {
//                     buttons[i].remove()  
//                 }
//                 break;
//             case links[2]:
//                 for (let i = 0; i < buttons.length; i++) {
//                     buttons[i].style.color = getRandomColor()
//                 }
//             default:
//                 break;
//         }
//     }
// }



//*3
// let buttons = document.querySelectorAll('button')


//    for (let i = 0; i < 3; i++) {
//        buttons[i].onclick = function (){
//         let img = document.createElement('img')
//         img.src = '/img' + (i + 1) + '.jpg'
//         document.body.append(img)
//        }
//    }

//*2
// let buttons = document.querySelectorAll('button')
// let saveImg = [null, null, null]
// for (let i = 0; i < 3; i++){
//     buttons[i].onclick = function (){
//         console.log(buttons[i])
//         if ( saveImg[i] == null) {
//             // let img = document.createElement('img')
//             let imges = document.querySelectorAll("img")
//             imges[i].src = '/img' + (i + 1) + '.jpg'
//             console.log(saveImg)
//             // saveImg[i] = img
//             saveImg[i] = i
//             console.log(saveImg)
//             document.body.append(img)
        
//          }else{
//             let imgArr = document.querySelectorAll('img')
//             imgArr[i].src = ''
//             saveImg[i] = null
            
             

//          }
//     }
// }


//*4
// let buttons = document.querySelectorAll("button");
// let saveImg = [null, null, null];
// for (let i = 0; i < 3; i++) {
//   buttons[i].onclick = function () {
//     let imgArr = document.querySelectorAll("img");
//     console.log(buttons[i]);
//     if (saveImg[i] == null) {
//       imgArr[i].src = "/img" + (i + 1) + ".jpg";
//       console.log(saveImg);
//       saveImg[i] = i;
//     } else {
//       imgArr[i].src = "";
//       saveImg[i] = null;
//     }
//   }
// }

//*5
// let button = document.querySelector("button");
// function f1 (){
//     console.log('1 start')
// }

// function f2 (e){
//     console.log('2 start')
//     e.target.removeEventListener('click', f2)
// }

// button.addEventListener('click', f1)
// button.addEventListener('click', f2)


//*6
//Если есть все картинки
// let buttons = document.querySelectorAll('button')
// let imagesArr = [null, null, null]

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function(){
//         let images = document.querySelectorAll('.big')
//         if (imagesArr[i] == null) {
//             images[i].src = '/img' + (i + 1) + '.jpg'
//             imagesArr[i] = images[i]
//         }else{
//             images[i].src = ''
//             imagesArr[i] = null
//         }
//     }
    
// }

//Если нет последней картинки
// let buttons = document.querySelectorAll('button')
// let imagesArr = []

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function(){
//         let images = document.querySelectorAll('.big')
//         if (imagesArr[i] == null) {
//             images[i].src = '/img' + (i + 1) + '.jpg'
//             imagesArr[i] = images[i]    
//         }
//         else{
//             images[i].src = ''
//             imagesArr[i] = null
//         }
//     }
    
// }


//*7

// let buttons = document.querySelectorAll('button')
// let block = document.querySelector('.item:nth-child(3)')
// let block2 = document.querySelector('.item:nth-child(4)')

// let sum = 0
// let count = 0
// let count2 = 0

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function(){
//         if (i == 0) {
//             let title = document.createElement('p')
//             let price = document.createElement('p')
//             title.innerText = products.name1
//             price.innerHTML = products.price1
//             sum += price  * count
            

//             count++
//             count.innerHTML
//             block.append(title, count, sum)
            
            

            
//         }else if (i == 1) {
           
//                 let title = document.createElement('p')
//                 let price = document.createElement('p')
//                 title.innerText = products.name2
//                 price.innerHTML = products.price2
    
    
//                 count2++
//                 count.innerHTML
//                 block2.append(title, count, price)
//                 sum += price * count2
                
//         }
//         console.log(sum)
//     }
// }



//*8
//Даны картинки. Привяжите к каждой картинке событие, 
//чтобы по клику на картинку алертом выводился ее src.

// for (let i = 0; i < 3; i++) {
//    let img =document.createElement('img')
//     img.src = 'img' + (i+1) + '.jpg'
//     document.body.append(img)

//     img.onclick = function(){
//         alert(this.getAttribute('src'));
//     }
// }


//*9
// Даны ссылки. Привяжите всем ссылкам событие - по наведению 
//на ссылку в атрибут title запишется ее текст.




// for (let i = 0; i < 3; i++) {
//        let link = document.createElement('a')
//        link.innerText = 'Link' + (i+1)
//        link.style.padding = 10 +'px'
//        document.body.append(link)

//        link.onmouseover = function(){
//             let title = document.createElement('title')
//             title.innerText = link.innerText
//             document.body.append(title.innerText)
//        }
// }


//*10
//Привяжите всем ссылкам событие - по наведению на ссылку в 
//конец ее текста дописывается ее href в круглых скобках.

for (let i = 0; i < 3; i++) {
       let link = document.createElement('a')
       link.innerText = 'text Link' + (i+1)
       link.innerHTML
       link.href = '//https:' + (i+1)
       link.style.padding = 10 +'px'
       document.body.append(link)

       link.addEventListener = ('mouseover' , f);
}
function f(){
    this.innerHTML= this.innerHTML + ' (' + this.href + ')';
}

// var elems = document.getElementsByTagName('a');
// for (var i = 0; i < elems.length; i++) {
// 	elems[i].addEventListener('mouseover', func);
// }

// function func() {
// 	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
// }
