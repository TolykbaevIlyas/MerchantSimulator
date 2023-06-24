let start = document.getElementById("start");
let playground = document.getElementById("playground");
let infoTable = document.getElementById("infoTable");

// Классы

class Rand{
    _getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
}

class city extends Rand{
    _RandomCity(number){
        let city = ["Алматы","Астана","Караганда","Ташкент","Шымкент"];
        return city[number];
    }

    _RandomDistance(){
        return this._getRandomInt(50,100);
    }

    getCity(){
        return this._RandomCity(this._getRandomInt(0,5));
    }
    getDistance(){
        return this._RandomDistance();
    }

}

class cart extends Rand{
    _LoadCapacity(){
        return this._getRandomInt(20,200);
    }

    getLoadCapacity(){
        return this._LoadCapacity();
    }
}

class dealer extends Rand{
    _DealerMoney(){
        return this._getRandomInt(20000,100000);
    }

    getDealerMoney(){
        return this._DealerMoney();
    }
}

class product extends Rand{
    _getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

    _AllOfProduct(){
        return{
            "0":{
                1: "name",
                2: "weight",
                3: "cost",
                4: "type",
                5: "status",
                6: "CostOfSellingPlace",
            },
            "1" : {
                1: "milk",
                2: 100,
                3: 30000,
                4: "drink",
                5: 0,
                6: 0,
                7: "<input type='checkbox' id='firstcb' >"
            },
            "2" : {
                1: "bread",
                2: 90,
                3: 50000,
                4: "Food",
                5: 0,
                6: 0,
                7: "<input type='checkbox' id='secondcb'>"
            },
            "3" : {
                1: "fish",
                2: 110,
                3: 80000,
                4: "Meat",
                5: 0,
                6: 0,
                7: "<input type='checkbox' id='thirdcb'>"
            },
            "4" : {
                1: "Steak",
                2: 50,
                3: 70000,
                4: "Meat",
                5: 0,
                6: 0,
                7: "<input type='checkbox' id='fourthcb'>"
            },
        }
    }
    getAllProducts(){
        return this._AllOfProduct();
    }
    getProducts(){
        fetch('http://zadanie.kz/user')
        .then(function (response) {
            response.json().then((data) => {
                console.log(data);
                for(let i = 0; i < data.length; i++){
                    console.log(data[i]["name"]);
                    infoTable.innerHTML += `<tr>
                    <td id="breadname">${data[i]['name']}</td>
                    <td id="breadweight">${data[i]['weight']}</td>
                    <td id="breadcost">${data[i]['cost']}</td>
                    <td id="breadtype">${data[i]['type']}</td>
                    <td id="breadstatus">${data[i]['status']}</td>
                    <td id="breadCostOfSellingPlace">${data[i]['CostOfSellingPlace']}</td>
                    <td id="breadundefined"><input type="checkbox" id="secondcb"></td>
                </tr>`
                }
            });
    })
    }

}

class gameevent extends Rand{
    _AllOfEvent(){
        return{
            1: "Обычный день - ничего не произошло. Проехали сколько-то лиг.",
            2: "Дождь - снижается скорость передвижения на 2 лиги. Есть 20% шанс, что качество одного из случайных товаров будет понижено (товар намок и подпортился)",
            3: "Ровная дорога - повышается скорость +2 лиги в день, но не выше максимально возможной",
            4: "Телега сломалась день в пустую, стоим на месте" ,
            5: "Река - потратил целый день, пока искал брод. Проехал от 1 до 2 лиг", 
            6: "Встретил местного - удалось срезать часть пути, в этот день проехали больше на 3 - 6 лиг дополнительно к скорости передвижения.",
            7: "Разбойники большой дороги - откупился или деньгами (если они есть) или частью товара. Разбойники забирают случайное количество самого лучшего товара из тех, что есть у торговца.",
            8: "Придорожный трактир - Торговец решает хочет ли остановиться на отдых. Если останавливаемся, то решаем хотим ли торговать, есть вероятность обменять/продать/купить товар. Если останавливаемся, то тратим часть денег на еду/ночлег.", 
            9: "Товар испортился - Случайно испортился один из товаров. Можно реализовать как уменьшение качества, или уничтожать полностью (выкидывать из телеги)."

        }
    }
    getAllOfEvetn(){
        return this._AllOfEvent();
    }
}

class serverInfo{
    _parseInfoFromServer(info){
        console.log(info);
    }
    getServerInfoFromProducts(){
    //     var setverdat;
    //     fetch('http://zadanie.kz/user')
    //     .then(function (response) {
    //         response.json().then(this._parseInfoFromServer(data));
    // })
        // const API = `http://zadanie.kz/user`;
        // let temp;
        // const fetchResult = fetch(API).then((res) => res.json()).then((data) => {temp = data.main.temp});

    }
}


 // Создание объекта класса

 let City = new city();
 let Cart = new cart();
 let Dealer = new dealer();
 let Product = new product();
 let GameEvent = new gameevent();
 let ServerInfo = new serverInfo();

 // Создание блоков разметки

 let cityName = document.createElement('div');
 let cityDistance = document.createElement('div');
 let CartLoadCapacity = document.createElement('div');
 let DealerMoney = document.createElement('div');
 let AllProducts = document.createElement('table');
 let ProductType = document.createElement('tr');
 let Button = document.createElement('button');
 let Rules = document.createElement('div');
 
 // Переменные 

 let CounttOfCartLoadCapacity = Cart.getLoadCapacity();
 let CountOfMoney = Dealer.getDealerMoney();
 let CountCityDistance = City.getDistance();
 let CityName = City.getCity();

// Айди для элементов верстки

Button.setAttribute('id','Btn');

// Читатель события кнопки старта

start.addEventListener('click', () =>{
    // удаление кнопки

    start.remove();

   // добавление блоков верстки 
    for (let i = 1; i <= 6 ; i++){
        let ProductName = document.createElement('th');
        ProductName.innerHTML = Product.getAllProducts()[0][i];
        ProductName.setAttribute('id', Product.getAllProducts()[0][i]);
        ProductType.append(ProductName);
    }

    AllProducts.append(ProductType);
    for (let i = 1; i <= 4 ; i++){
        let Products = document.createElement('tr');
        let cost = 0;
        for(let k = 1; k <=7; k++){
            let ProductName = document.createElement('td');
            
            if(k == 5){
                ProductName.innerHTML = Product.getAllProducts()[i][k];
                cost = Product._getRandomArbitrary(0,1);
                ProductName.innerHTML = cost;
            }else if( k == 6){
                ProductName.innerHTML = Product.getAllProducts()[i][k];
                ProductName.innerHTML = cost * Product.getAllProducts()[i][3];
            }
            else{
                ProductName.innerHTML = Product.getAllProducts()[i][k];
            }
            ProductName.setAttribute('id', Product.getAllProducts()[i][1] + Product.getAllProducts()[0][k]);
            Products.append(ProductName);
        }
        AllProducts.append(Products);
        
    }

    // Заполнение блоков разметки

    cityName.innerHTML = "Город:" + CityName;
    cityDistance.innerHTML = "Дистанция:" + CountCityDistance + " км";
    CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
    DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
    Button.innerHTML = "Начать путь";

     // Правила игры
     for(let i = 1; i < 5; i++){
        Rules.append(ProducsStatus()[i]) ;
     }
     
     

 //

    // Добавление блоков на разметку

    playground.append(cityName,cityDistance, CartLoadCapacity, DealerMoney,AllProducts,Button,Rules);
    

    checkboxlistener();

    let Btn = document.getElementById("Btn");

    Btn.addEventListener('click',()=>{
        ControlBtn();
    })    
    
    
})

function checkboxlistener(){

    let firstcheckbox = document.getElementById("firstcb");
    let secondcheckbox = document.getElementById("secondcb");
    let thirdcheckbox = document.getElementById("thirdcb");
    let fourthcheckbox = document.getElementById("fourthcb");

    firstcheckbox.addEventListener("change",(e)=>{
       if(firstcheckbox.checked == true){
            if((CountOfMoney - Product.getAllProducts()[1][3]) < 0 || (CounttOfCartLoadCapacity - Product.getAllProducts()[1][2]) < 0){
                // блокируем checkbox
                firstcheckbox.setAttribute("disabled", "disabled");
                firstcheckbox.checked = false;
            }else{
                // устанавливаем новые значения
                CountOfMoney -= Product.getAllProducts()[1][3];
                CounttOfCartLoadCapacity -= Product.getAllProducts()[1][2];
                // Перезаполняем блок разметки 
                DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
                CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
                //Проверка 
                Cheking();
            }
       
       }else{
        CountOfMoney += Product.getAllProducts()[1][3];
        CounttOfCartLoadCapacity += Product.getAllProducts()[1][2];
        // Перезаполняем блок разметки 
        DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
        CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
        //Проверка 
        Cheking();
       }
        
    })

    secondcheckbox.addEventListener("change",(e)=>{
        if(secondcheckbox.checked == true){
            if((CountOfMoney - Product.getAllProducts()[2][3]) < 0 || (CounttOfCartLoadCapacity - Product.getAllProducts()[2][2]) < 0){
                secondcheckbox.setAttribute("disabled", "disabled");
                secondcheckbox.checked = false;
            }else{
                CountOfMoney -= Product.getAllProducts()[2][3];
                CounttOfCartLoadCapacity -= Product.getAllProducts()[2][2];
                // Перезаполняем блок разметки 
                DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
                CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
                //Проверка 
                Cheking();
            }
            
        }else{
            CountOfMoney += Product.getAllProducts()[2][3];
            CounttOfCartLoadCapacity += Product.getAllProducts()[2][2];
            // Перезаполняем блок разметки 
            DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
            CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
            //Проверка 
            Cheking();
        }
            
    })

    thirdcheckbox.addEventListener("change",(e)=>{
    if(thirdcheckbox.checked == true){
        if((CountOfMoney - Product.getAllProducts()[3][3]) < 0 || (CounttOfCartLoadCapacity - Product.getAllProducts()[3][2]) < 0){
            thirdcheckbox.setAttribute("disabled", "disabled");
            thirdcheckbox.checked = false;
        }else{
            CountOfMoney -= Product.getAllProducts()[3][3];
            CounttOfCartLoadCapacity -= Product.getAllProducts()[3][2];
            // Перезаполняем блок разметки 
            DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
            CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
            //Проверка 
            Cheking();
        }
        
    }else{
        CountOfMoney += Product.getAllProducts()[3][3];
        CounttOfCartLoadCapacity += Product.getAllProducts()[3][2];
        // Перезаполняем блок разметки 
        DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
        CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
        //Проверка 
        Cheking();
    }
        
    })

    fourthcheckbox.addEventListener("change",(e)=>{
        if(fourthcheckbox.checked == true){
            if((CountOfMoney - Product.getAllProducts()[4][3]) < 0 || (CounttOfCartLoadCapacity - Product.getAllProducts()[4][2]) < 0){
                fourthcheckbox.setAttribute("disabled", "disabled");
                fourthcheckbox.checked = false;       
            }else{
                CountOfMoney -= Product.getAllProducts()[4][3];
                CounttOfCartLoadCapacity -= Product.getAllProducts()[4][2];
                // Перезаполняем блок разметки 
                DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
                CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
                //Проверка 
                Cheking();
            }
        }else{
            CountOfMoney += Product.getAllProducts()[4][3];
            CounttOfCartLoadCapacity += Product.getAllProducts()[4][2];
            // Перезаполняем блок разметки 
            DealerMoney.innerHTML = "Количество денег на счету:" + CountOfMoney + " тг";
            CartLoadCapacity.innerHTML = "Грузо Подъемность Телеги: " + CounttOfCartLoadCapacity + " кг";
            //Проверка 
            Cheking();
        }
            
    })

    function Cheking(){
        if(CountOfMoney < 0 || CounttOfCartLoadCapacity < 0){
            console.log("hello2");
            if(firstcheckbox.checked == false){
                firstcheckbox.setAttribute("disabled", "disabled");
            }if(secondcheckbox.checked == false){
                secondcheckbox.setAttribute("disabled", "disabled");
            }if(thirdcheckbox.checked == false){
                thirdcheckbox.setAttribute("disabled", "disabled");
            }if(fourthcheckbox.checked == false){
                fourthcheckbox.setAttribute("disabled", "disabled");
            }
        }else{
            firstcheckbox.removeAttribute("disabled");
            //firstcheckbox.checked = false;
            secondcheckbox.removeAttribute("disabled");
            //secondcheckbox.checked = false;
            thirdcheckbox.removeAttribute("disabled");
            //thirdcheckbox.checked = false;
            fourthcheckbox.removeAttribute("disabled");
            //fourthcheckbox.checked = false;
        }
    }
        
}
// Действия после нажатия на кнопку "НАчать путь"
function ControlBtn() {
    // Сокрытие элементов разметки
    cityName.style.visibility = "hidden";
    cityDistance.style.visibility = "hidden";
    CartLoadCapacity.style.visibility = "hidden";
    DealerMoney.style.visibility = "hidden";
    AllProducts.style.visibility = "hidden";
    ProductType.style.visibility = "hidden";
    Button.style.visibility = "hidden";
    Rules.style.visibility = "hidden";

    TravelToSell();
}

// игровой текст

function ProducsStatus(){
    let text= {
        1:"• нормальное - 1.2",
        2:"• слегка испорчен - 0.95" ,
        3:"• половина испортилась - 0.55 ",
        4:"• почти весь пропал - 0.25" ,
        5:"• испорчен в хлам - 0.1",
    }
    return text;
}

// Начало пути

function TravelToSell(){

    let firstcheckbox = document.getElementById("firstcb");
    let secondcheckbox = document.getElementById("secondcb");
    let thirdcheckbox = document.getElementById("thirdcb");
    let fourthcheckbox = document.getElementById("fourthcb");
    let CountOfProducts = 0;
    let ProductName;
    let ProductCost;
    let ProductWeight;
    let ProductStatus;
    let ProductType;
    let SellingCost;
    let TravelText =document.createElement('div'); 
    let EventText = document.createElement('div');
    let RandEvent = RandomEvent();

    if(firstcheckbox.checked == true){
        CountOfProducts = CountOfProducts + 1;
        ProductName +=  Product.getAllProducts()[1][1];
        ProductCost += Product.getAllProducts()[1][2];
        ProductWeight += Product.getAllProducts()[1][3];
        ProductStatus += Product.getAllProducts()[1][4];
        ProductType += Product.getAllProducts()[1][5];
        SellingCost += Product.getAllProducts()[1][6];
        console.log("1")
    }
    if(secondcheckbox.checked == true){
        CountOfProducts = CountOfProducts + 1;
        ProductName +=  Product.getAllProducts()[2][1];
        ProductCost += Product.getAllProducts()[2][2];
        ProductWeight += Product.getAllProducts()[2][3];
        ProductStatus += Product.getAllProducts()[2][4];
        ProductType += Product.getAllProducts()[2][5];
        SellingCost += Product.getAllProducts()[2][6];
        console.log("2")
    }
    if(thirdcheckbox.checked == true){
        CountOfProducts = CountOfProducts + 1;
        ProductName +=  Product.getAllProducts()[3][1];
        ProductCost += Product.getAllProducts()[3][2];
        ProductWeight += Product.getAllProducts()[3][3];
        ProductStatus += Product.getAllProducts()[3][4];
        ProductType += Product.getAllProducts()[3][5];
        SellingCost += Product.getAllProducts()[3][6];
        console.log("3")
    }
    if(fourthcheckbox.checked == true){
        CountOfProducts = CountOfProducts + 1;
        ProductName +=  Product.getAllProducts()[4][1];
        ProductCost += Product.getAllProducts()[4][2];
        ProductWeight += Product.getAllProducts()[4][3];
        ProductStatus += Product.getAllProducts()[4][4];
        ProductType += Product.getAllProducts()[4][5];
        SellingCost += Product.getAllProducts()[4][6];
        console.log("4")
    }

    TravelText.innerHTML = "Вы в пути";
    EventText.innerHTML = RandEvent;

    TravelText.classList.add('TravelText');
    EventText.classList.add('RandEvent');

    playground.append(TravelText,EventText);

    // Проработать показ рандомных событий + запись данных и вывод из вне + дороботка интерфейса + добавления своих товаров.
}

function RandomEvent(){
    return GameEvent.getAllOfEvetn()[GameEvent._getRandomInt(1,9)];
}
