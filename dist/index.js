"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Planet_1 = require("./Planet");
var CelestialBody = [];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var age = parseFloat(document.getElementById('age').value);
        var size = parseFloat(document.getElementById('size').value);
        var waterContent = parseFloat(document.getElementById('waterContent').value);
        console.log(name, age, size, waterContent);
        var hiba = document.getElementById('hiba');
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
            var planet = new Planet_1.Planet(name, age, size, waterContent);
            CelestialBody.push(planet);
            document.getElementById('name').value;
            document.getElementById('age').value = '';
            document.getElementById('size').value = '';
            document.getElementById('waterContent').value = '';
            hiba.textContent = '';
            var osszeletkor = 0;
            for (var _i = 0, CelestialBody_1 = CelestialBody; _i < CelestialBody_1.length; _i++) {
                var s = CelestialBody_1[_i];
                osszeletkor += s.size;
            }
            document.getElementById('db').textContent = CelestialBody.length.toString();
            document.getElementById('Atlag').textContent = (osszeletkor / CelestialBody.length).toString();
            console.log(CelestialBody);
        }
    });
});
