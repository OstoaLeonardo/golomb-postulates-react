import React from 'react';
import { abs, fft } from 'mathjs';
import { createRoot } from 'react-dom/client';
import { TextAreaCard } from '../components/TextAreaCard.jsx';
import { PostulateOneCard } from '../components/PostulateOneCard.jsx';
import { BarGraphPostulateOneCard } from '../components/BarGraphPostulateOneCard.jsx';
import { PostulateTwoCard } from '../components/PostulateTwoCard.jsx';
import { BarGraphPostulateTwoCard } from '../components/BarGraphPostulateTwoCard.jsx';
import { CorrelationCard } from '../components/CorrelationCard.jsx';
import { LineGraphCard } from '../components/LineGraphCard.jsx';

var btnUpload = document.getElementById("btn-upload");
var fileContent = "";

btnUpload.addEventListener("click", function () {
    deleteContainers();
    readFile();
});

function readFile() {
    // Crear un elemento de entrada de tipo archivo
    var input = document.createElement("input");
    input.type = "file";

    // Establecer la función de manejo de eventos para cuando se selecciona un archivo
    input.addEventListener("change", function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        // Establecer la función de manejo de eventos para cuando se completa la lectura del archivo
        reader.onload = function (event) {
            fileContent = event.target.result;
            renderTextAreaCard(fileContent);
            countOnesNZeros();
        };

        // Leer el contenido del archivo como texto
        reader.readAsText(file);
    });

    // Hacer clic en el elemento de entrada de tipo archivo para abrir el selector de archivos
    input.click();
}

function countOnesNZeros() {
    // Recorrer el contenido fileContent y contar los unos y ceros
    var ones = 0;
    var zeros = 0;

    for (var i = 0; i < fileContent.length; i++) {
        if (fileContent[i] == "1") {
            ones++;
        } else if (fileContent[i] == "0") {
            zeros++;
        }
    }

    // Obtener porcentaje de Ones y Zeros
    var total = ones + zeros;
    var onesPercentage = (ones / total) * 100;
    var zerosPercentage = (zeros / total) * 100;

    renderPostulateOneCard(zeros, ones);
    renderBarGraphPostulateOne("Numbers of Ones and Zeros", zeros, ones, zerosPercentage, onesPercentage);
    countPatternsInFile();
}

// Contar los patrones en fileContent
function countPatternsInFile() {
    var pattern2 = ["00", "01", "10", "11"];
    var pattern3 = ["000", "001", "010", "011", "100", "101", "110", "111"];
    var pattern4 = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"];
    var pattern5 = ["00000", "00001", "00010", "00011", "00100", "00101", "00110", "00111", "01000", "01001", "01010", "01011", "01100", "01101", "01110", "01111", "10000", "10001", "10010", "10011", "10100", "10101", "10110", "10111", "11000", "11001", "11010", "11011", "11100", "11101", "11110", "11111"];
    var pattern6 = ["000000", "000001", "000010", "000011", "000100", "000101", "000110", "000111", "001000", "001001", "001010", "001011", "001100", "001101", "001110", "001111", "010000", "010001", "010010", "010011", "010100", "010101", "010110", "010111", "011000", "011001", "011010", "011011", "011100", "011101", "011110", "011111", "100000", "100001", "100010", "100011", "100100", "100101", "100110", "100111", "101000", "101001", "101010", "101011", "101100", "101101", "101110", "101111", "110000", "110001", "110010", "110011", "110100", "110101", "110110", "110111", "111000", "111001", "111010", "111011", "111100", "111101", "111110", "111111"];
    var pattern7 = ["0000000", "0000001", "0000010", "0000011", "0000100", "0000101", "0000110", "0000111", "0001000", "0001001", "0001010", "0001011", "0001100", "0001101", "0001110", "0001111", "0010000", "0010001", "0010010", "0010011", "0010100", "0010101", "0010110", "0010111", "0011000", "0011001", "0011010", "0011011", "0011100", "0011101", "0011110", "0011111", "0100000", "0100001", "0100010", "0100011", "0100100", "0100101", "0100110", "0100111", "0101000", "0101001", "0101010", "0101011", "0101100", "0101101", "0101110", "0101111", "0110000", "0110001", "0110010", "0110011", "0110100", "0110101", "0110110", "0110111", "0111000", "0111001", "0111010", "0111011", "0111100", "0111101", "0111110", "0111111", "1000000", "1000001", "1000010", "1000011", "1000100", "1000101", "1000110", "1000111", "1001000", "1001001", "1001010", "1001011", "1001100", "1001101", "1001110", "1001111", "1010000", "1010001", "1010010", "1010011", "1010100", "1010101", "1010110", "1010111", "1011000", "1011001", "1011010", "1011011", "1011100", "1011101", "1011110", "1011111", "1100000", "1100001", "1100010", "1100011", "1100100", "1100101", "1100110", "1100111", "1101000", "1101001", "1101010", "1101011", "1101100", "1101101", "1101110", "1101111", "1110000", "1110001", "1110010", "1110011", "1110100", "1110101", "1110110", "1110111", "1111000", "1111001", "1111010", "1111011", "1111100", "1111101", "1111110", "1111111"];
    var pattern8 = ["00000000", "00000001", "00000010", "00000011", "00000100", "00000101", "00000110", "00000111", "00001000", "00001001", "00001010", "00001011", "00001100", "00001101", "00001110", "00001111", "00010000", "00010001", "00010010", "00010011", "00010100", "00010101", "00010110", "00010111", "00011000", "00011001", "00011010", "00011011", "00011100", "00011101", "00011110", "00011111", "00100000", "00100001", "00100010", "00100011", "00100100", "00100101", "00100110", "00100111", "00101000", "00101001", "00101010", "00101011", "00101100", "00101101", "00101110", "00101111", "00110000", "00110001", "00110010", "00110011", "00110100", "00110101", "00110110", "00110111", "00111000", "00111001", "00111010", "00111011", "00111100", "00111101", "00111110", "00111111", "01000000", "01000001", "01000010", "01000011", "01000100", "01000101", "01000110", "01000111", "01001000", "01001001", "01001010", "01001011", "01001100", "01001101", "01001110", "01001111", "01010000", "01010001", "01010010", "01010011", "01010100", "01010101", "01010110", "01010111", "01011000", "01011001", "01011010", "01011011", "01011100", "01011101", "01011110", "01011111", "01100000", "01100001", "01100010", "01100011", "01100100", "01100101", "01100110", "01100111", "01101000", "01101001", "01101010", "01101011", "01101100", "01101101", "01101110", "01101111", "01110000", "01110001", "01110010", "01110011", "01110100", "01110101", "01110110", "01110111", "01111000", "01111001", "01111010", "01111011", "01111100", "01111101", "01111110", "01111111", "10000000", "10000001", "10000010", "10000011", "10000100", "10000101", "10000110", "10000111", "10001000", "10001001", "10001010", "10001011", "10001100", "10001101", "10001110", "10001111", "10010000", "10010001", "10010010", "10010011", "10010100", "10010101", "10010110", "10010111", "10011000", "10011001", "10011010", "10011011", "10011100", "10011101", "10011110", "10011111", "10100000", "10100001", "10100010", "10100011", "10100100", "10100101", "10100110", "10100111", "10101000", "10101001", "10101010", "10101011", "10101100", "10101101", "10101110", "10101111", "10110000", "10110001", "10110010", "10110011", "10110100", "10110101", "10110110", "10110111", "10111000", "10111001", "10111010", "10111011", "10111100", "10111101", "10111110", "10111111", "11000000", "11000001", "11000010", "11000011", "11000100", "11000101", "11000110", "11000111", "11001000", "11001001", "11001010", "11001011", "11001100", "11001101", "11001110", "11001111", "11010000", "11010001", "11010010", "11010011", "11010100", "11010101", "11010110", "11010111", "11011000", "11011001", "11011010", "11011011", "11011100", "11011101", "11011110", "11011111", "11100000", "11100001", "11100010", "11100011", "11100100", "11100101", "11100110", "11100111", "11101000", "11101001", "11101010", "11101011", "11101100", "11101101", "11101110", "11101111", "11110000", "11110001", "11110010", "11110011", "11110100", "11110101", "11110110", "11110111", "11111000", "11111001", "11111010", "11111011", "11111100", "11111101", "11111110", "11111111"];

    var patterns = [
        { pattern: pattern2, count: Array(pattern2.length).fill(0) },
        { pattern: pattern3, count: Array(pattern3.length).fill(0) },
        { pattern: pattern4, count: Array(pattern4.length).fill(0) },
        { pattern: pattern5, count: Array(pattern5.length).fill(0) },
        { pattern: pattern6, count: Array(pattern6.length).fill(0) },
        { pattern: pattern7, count: Array(pattern7.length).fill(0) },
        { pattern: pattern8, count: Array(pattern8.length).fill(0) }
    ];

    for (var i = 0; i < fileContent.length; i++) {
        var substring;

        for (var j = 0; j < patterns.length; j++) {
            var currentPattern = patterns[j].pattern;
            var count = patterns[j].count;

            for (var k = 0; k < currentPattern.length; k++) {
                substring = fileContent.substr(i, currentPattern[k].length);

                if (substring === currentPattern[k]) {
                    count[k]++;
                }
            }
        }
    }

    // Imprimir los resultados en la consola
    for (var m = 0; m < patterns.length; m++) {
        var pattern = patterns[m].pattern;
        var count = patterns[m].count;
    }

    // Calcular porcentaje de ocurrencia de cada patrón por array pattern#
    for (var m = 0; m < patterns.length; m++) {
        var pattern = patterns[m].pattern;
        var count = patterns[m].count;
        var total = fileContent.length;
        var patternPercentage = [];

        for (var n = 0; n < count.length; n++) {
            var percentage = (count[n] / total) * 100;
            patternPercentage.push(percentage.toFixed(2));
        }

        // console.log("Pattern", pattern, "Count:", count, "Percentage:", patternPercentage);
        renderPostulateTwoCard(pattern, count);
        renderBarGraphPostulateTwo(`Patterns Count: ${m + 2} bits`, pattern, count, patternPercentage);
    }

    calculateAutocorrelation();
}

// Calcular la autocorrelación de fileContent
function calculateAutocorrelation() {
    var autocorrelation = [];
    var correlation = 0;
    var noCorrelation = 0;

    // Crear una copia de fileContent
    var fileContentCopy = fileContent.split("");

    for (var i = 0; i < fileContent.length + 1; i++) {

        // console.log("File:", fileContent.split(""));
        // console.log("Copy:", fileContentCopy);

        for (var j = 0; j < fileContent.length; j++) {

            if (fileContent[j] === fileContentCopy[j]) {
                correlation++;
            } else {
                noCorrelation++;
            }
        }

        // console.log("Correlation:", correlation, "No Correlation:", noCorrelation);

        // Eliminar el último elemento de fileContentCopy
        var lastElement = fileContentCopy.pop();
        // console.log(" Pop:", fileContentCopy);
        // Añadir lastElement al inicio de fileContentCopy
        fileContentCopy.unshift(lastElement);
        // console.log(" Add:", fileContentCopy);

        // Calcular autocorrelación
        autocorrelation.push((correlation - noCorrelation) / fileContent.length);

        correlation = 0;
        noCorrelation = 0;
    }

    // console.log("Autocorrelation:", autocorrelation);

    renderCorrelationCard(autocorrelation);
    renderLineGraph("Autocorrelation", autocorrelation, "graph-postulate-three-container");
    calculateTransformadaFourier(autocorrelation)
}

function calculateTransformadaFourier(autocorrelation) {
    var transformadaFourier = [];

    // Calcular la transformada de Fourier de autocorrelación
    var fftResult = fft(autocorrelation);

    // Obtener el valor absoluto de cada elemento de fftResult
    for (var i = 0; i < autocorrelation.length; i++) {
        var absoluteValue = abs(fftResult[i]);
        transformadaFourier.push(absoluteValue);
    }

    renderLineGraph("Transformada de Fourier", transformadaFourier, "graph-fourier-container");
}

var postulateOneContainer = document.getElementById("postulate-one-container");
var textAreaContainer = document.getElementById("text-area-container");
var barGraphPostulateOneContainer = document.getElementById("bar-graph-postulate-one-container");
var postulateTwoContainer = document.getElementById("postulate-two-container");
var barGraphPostulateTwoContainer = document.getElementById("bar-graph-postulate-two-container");
var postulateThreeContainer = document.getElementById("postulate-three-container");
var graphPostulateThreeContainer = document.getElementById("graph-postulate-three-container");
var graphFourierContainer = document.getElementById("graph-fourier-container");

function renderTextAreaCard(henonText) {
    var textAreaCardComponent = React.createElement(TextAreaCard, {
        henonText: henonText,
    });

    var textAreaCardContainer = document.createElement("div");

    createRoot(textAreaCardContainer).render(textAreaCardComponent);

    textAreaContainer.appendChild(textAreaCardContainer);
}

function renderPostulateOneCard(zeros, ones) {
    var PostulateOneCardComponent = React.createElement(PostulateOneCard, {
        numberOfZeros: zeros,
        numberOfOnes: ones
    });

    var PostulateOneCardContainer = document.createElement("div");

    createRoot(PostulateOneCardContainer).render(PostulateOneCardComponent);

    postulateOneContainer.appendChild(PostulateOneCardContainer);
}

function renderBarGraphPostulateOne(title, zeros, ones, zerosPercentage, onesPercentage) {
    var barGraphCardComponent = React.createElement(BarGraphPostulateOneCard, {
        title: title,
        numberOfZeros: zeros,
        numberOfOnes: ones,
        zerosPercentage: zerosPercentage,
        onesPercentage: onesPercentage

    });

    var barGraphCardContainer = document.createElement("div");

    createRoot(barGraphCardContainer).render(barGraphCardComponent);

    barGraphPostulateOneContainer.appendChild(barGraphCardContainer);
}

function renderPostulateTwoCard(pattern, count) {
    var PostulateTwoCardComponent = React.createElement(PostulateTwoCard, {
        pattern: pattern,
        count: count
    });

    var PostulateTwoCardContainer = document.createElement("div");

    createRoot(PostulateTwoCardContainer).render(PostulateTwoCardComponent);

    postulateTwoContainer.appendChild(PostulateTwoCardContainer);
}

function renderBarGraphPostulateTwo(title, pattern, count, patternPercentage) {
    var barGraphCardComponent = React.createElement(BarGraphPostulateTwoCard, {
        title: title,
        pattern: pattern,
        count: count,
        patternPercentage: patternPercentage
    });

    var barGraphCardContainer = document.createElement("div");

    createRoot(barGraphCardContainer).render(barGraphCardComponent);

    // barGraphPostulateTwoContainer.appendChild(barGraphCardContainer);
    postulateTwoContainer.appendChild(barGraphCardContainer);
}

function renderCorrelationCard(autocorrelation) {
    var CorrelationCardComponent = React.createElement(CorrelationCard, {
        autocorrelation: autocorrelation
    });

    var CorrelationCardContainer = document.createElement("div");

    createRoot(CorrelationCardContainer).render(CorrelationCardComponent);

    postulateThreeContainer.appendChild(CorrelationCardContainer);
}

function renderLineGraph(title, data, graphContainerId) {
    var LineGraphCardComponent = React.createElement(LineGraphCard, {
        title: title,
        data: data
    });

    var LineGraphCardContainer = document.createElement("div");

    createRoot(LineGraphCardContainer).render(LineGraphCardComponent);

    var graphContainer = document.getElementById(graphContainerId);
    graphContainer.appendChild(LineGraphCardContainer);
}

function deleteContainers() {
    textAreaContainer.innerHTML = "";
    postulateOneContainer.innerHTML = "";
    barGraphPostulateOneContainer.innerHTML = "";
    postulateTwoContainer.innerHTML = "";
    barGraphPostulateTwoContainer.innerHTML = "";
    postulateThreeContainer.innerHTML = "";
    graphPostulateThreeContainer.innerHTML = "";
    graphFourierContainer.innerHTML = "";
}
