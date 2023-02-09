//create classes
    class Auto{
        constructor(rok, znacka, model, najeteKm){
            this.rok = rok;
            this.znacka = znacka;
            this.model = model;
            this.najeteKm = najeteKm;
        }

        display(){
            return `Znacka: ${this.znacka}, model: ${this.model}, rok vyroby: ${this.rok}, najete Km: ${this.najeteKm}`;
        }
    }

    class Autoservis{
        constructor(nazev, autoArr){
            this.nazev = nazev;
            this.autoArr = autoArr;
        }

        getAllAuta(){
            //todo
            let res = '';
            for(let i = 0; i < this.autoArr.length; i++){
                console.log(this.autoArr[i]);
                res += `${this.autoArr[i].display()}
    
                `;
            }
            return res;

            
        }

        pridatAuto(a){
            this.autoArr.push(a);
        }

        deleteAuto(idx){

            const index = this.autoArr.indexOf(idx);

            const x = this.autoArr.splice(index, idx);

            console.log(`myArray values: ${this.autoArr}`);
            console.log(`variable x value: ${x}`);
        }
    }

//DOM Elements
    //form
    let form = document.querySelector('form');

    //inputs 
    let znacka = document.querySelector('.znacka');
    let rokVyroby = document.querySelector('.rokVyroby');
    let model = document.querySelector('.model');
    let najete = document.querySelector('.najete');

    //buttons
    let submit = document.querySelector('.submit');
    let display = document.querySelector('.display');
    let del = document.querySelector('.delete');

    //display paragraph
    let allCars = document.querySelector('.allCars');
    let deletedCar = document.querySelector('.deletedCar');

    //card
    let znackaCard = document.querySelector('.znackaCard');
    let carList = document.querySelector('.carListDiv');

//declare JS var
    let myAutoArr = [];
    const myAutoser = new Autoservis('Klaus AutoServis', myAutoArr);

//function for buttons
    submit.addEventListener('click', function(){
        let auto = new Auto(rokVyroby.value, znacka.value,  model.value, najete.value);
        console.log(auto);
        myAutoser.pridatAuto(auto);
        console.log('Added successfully');
        form.reset();

        //todo save to lcStg
    });

    display.addEventListener('click', function(){
        // allCars.textContent = myAutoser.autoArr.length !== 0 ? myAutoser.getAllAuta() : "No data in your autoservice";
        // znackaCard.textContent = 
        renderCarsListDiv(myAutoArr);
    });

    function renderCarsListDiv(carArr) {
        const carsListDiv = document.querySelector('.carListDiv');
        carsListDiv.innerHTML = carArr
                .map((car) => {
                    return `
                        <div class="card m-3" style="width: 18rem;">
                        <img src="images/Audi-A6.jpg" class="card-img-top" alt="Audi-A6">
                        <div class="card-body">
                          <h5 class="card-title znackaCard">${car.znacka}</h5>
                          <p class="card-text descrb">${car.model}, najete kilometry: ${car.najeteKm}</p>
                          <button type="button" class=" delete btn btn-primary ">Delete</button>
                        </div>
                    </div>
                `;
                })
                .join('');
    }
    del.addEventListener('click', function(){
        myAutoser.deleteAuto();
        console.log('deleted clicked');

    });

