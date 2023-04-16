import { series } from "./data.js";
/* Main document that contains the Document Object Model (DOM) for this web page */
var seriesTbody = document.getElementById('Series'); // tbody node with the name 'Series'
var avgTbody = document.getElementById('avgSeasons'); // tbody node with the name 'avgSeasons'
var card = document.getElementById('serie-card'); // tbody node with the name 'serie-card'
/* Function that puts the series information in the table format */
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td class=\"serie-name\" data-id=\"").concat(c.id, "\"><a>").concat(c.name, "</a></td>\n                           <td>").concat(c.platform, "</td>\n                           <td>").concat(c.seasonsNumber, "</td>");
        seriesTbody.appendChild(trElement);
    });
    // Addition of click event-listeners for the series name
    var serieNameCells = document.querySelectorAll('.serie-name');
    serieNameCells.forEach(function (cell) {
        cell.addEventListener('click', function () {
            var serieId = cell.getAttribute('data-id');
            var serie = series.find(function (serie) { return serie.id === parseInt(serieId); });
            showSeriesDetail(serie);
        });
    });
}
/* Function used to calculate and return the current average number of seaons in all series */
function getAvgSeasons(series) {
    var avgSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) {
        totalSeries = totalSeries + 1;
        avgSeasons = avgSeasons + serie.seasonsNumber;
    });
    return avgSeasons / totalSeries;
}
/* Function to update information of a series into the information card */
function showSeriesDetail(serie) {
    var seriesCard = document.getElementById('serie-card'); // card node with the name 'seriesCard'
    seriesCard.querySelector('.card-title').textContent = serie.name;
    seriesCard.querySelector('.card-text').textContent = serie.review;
    seriesCard.querySelector('.card-img-top').setAttribute('src', serie.image);
    seriesCard.querySelector('.btn').setAttribute('href', serie.url);
}
/* Main function that initializes all other functions */
window.addEventListener("load", function () {
    renderSeriesInTable(series);
    var avgSeasons = getAvgSeasons(series);
    var pElement = document.createElement('p');
    var description = "The average seasons number is: ";
    pElement.innerHTML = description + avgSeasons;
    avgTbody.appendChild(pElement);
});
