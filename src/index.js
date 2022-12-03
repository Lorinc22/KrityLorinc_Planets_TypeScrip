"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
let CelestialBody = [];
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        let name = document.getElementById('name').value;
        let age = parseFloat(document.getElementById('age').value);
        let size = parseFloat(document.getElementById('size').value);
        let waterContent = parseFloat(document.getElementById('waterContent').value);
        console.log(name, age, size, waterContent);
        let hiba = document.getElementById('hiba');
        if (name == '') {
            hiba.textContent = 'A név nem lehet üres';
        }
        else if (!/^[a-zA-Z ,-]{1,}$/.test(name)) {
            hiba.textContent = 'A név nem felel meg a mintának!';
        }
        else if (isNaN(age) || age < 1) {
            hiba.textContent = 'Az életkor pozitív kell, hogy legyen!';
        }
        else if (isNaN(size) || size < 1500) {
            hiba.textContent = 'Az átmérője minimum 1500 km legyen!';
        }
        else if (isNaN(waterContent) || waterContent < 100 || waterContent < 0) {
            hiba.textContent = 'A vízfelület aránya 0 és 100 között legyen!';
        }
        else {
            let planet = new Planet_1.Planet(name, age, size, waterContent);
            CelestialBody.push(planet);
            document.getElementById('name').value;
            document.getElementById('age').value = '';
            document.getElementById('size').value = '';
            document.getElementById('waterContent').value = '';
            hiba.textContent = '';
            let osszeletkor = 0;
            for (let s of CelestialBody) {
                osszeletkor += s.size;
            }
            document.getElementById('db').textContent = CelestialBody.length.toString();
            document.getElementById('Atlag').textContent = (osszeletkor / CelestialBody.length).toString();
            console.log(CelestialBody);
        }
    });
});
