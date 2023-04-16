import { Serie } from "./Serie.js";
import { series } from "./data.js";

/* Main document that contains the Document Object Model (DOM) for this web page */

const seriesTbody: HTMLElement = document.getElementById('Series')!; // tbody node with the name 'Series'
const avgTbody: HTMLElement = document.getElementById('avgSeasons')!; // tbody node with the name 'avgSeasons'
const card : HTMLElement = document.getElementById('serie-card')!; // tbody node with the name 'serie-card'


/* Function that puts the series information in the table format */

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td class="serie-name" data-id="${c.id}"><a>${c.name}</a></td>
                           <td>${c.platform}</td>
                           <td>${c.seasonsNumber}</td>`;
    seriesTbody.appendChild(trElement);
  });

    // Addition of click event-listeners for the series name
    const serieNameCells = document.querySelectorAll('.serie-name')!;
    serieNameCells.forEach(cell => {
      cell.addEventListener('click', () => {
        const serieId = cell.getAttribute('data-id')!;
        const serie = series.find(serie => serie.id === parseInt(serieId))!;
        showSeriesDetail(serie);
      });
    });
}

/* Function used to calculate and return the current average number of seaons in all series */

function getAvgSeasons(series: Serie[]): number {
    let avgSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => {
        totalSeries = totalSeries + 1;
        avgSeasons = avgSeasons + serie.seasonsNumber;
    });
    
    return avgSeasons/totalSeries;

} 

/* Function to update information of a series into the information card */

function showSeriesDetail(serie: Serie): void {
  const seriesCard: HTMLElement = document.getElementById('serie-card')!; // card node with the name 'seriesCard'
  seriesCard.querySelector('.card-title')!.textContent = serie.name;
  seriesCard.querySelector('.card-text')!.textContent = serie.review;
  seriesCard.querySelector('.card-img-top')!.setAttribute('src', serie.image);
  seriesCard.querySelector('.btn')!.setAttribute('href', serie.url);
}

/* Main function that initializes all other functions */

window.addEventListener("load", () => {
    renderSeriesInTable(series);
    let avgSeasons : number = getAvgSeasons(series);
    let pElement = document.createElement('p')
    let description : string = "The average seasons number is: "
    pElement.innerHTML = description +avgSeasons;
    avgTbody.appendChild(pElement);
  });

