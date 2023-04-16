import { Serie } from "./Serie.js";
import { series } from "./data.js";

/* Main document that contains the Document Object Model (DOM) for this web page */

const seriesTbody: HTMLElement = document.getElementById('Series')!; // tbody node with the name 'Series'
const avgTbody: HTMLElement = document.getElementById('avgSeasons')!; // tbody node with the name 'avgSeasons'

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.platform}</td>
                           <td>${c.seasonsNumber}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAvgSeasons(series: Serie[]): number {
    let avgSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => {
        totalSeries = totalSeries + 1;
        avgSeasons = avgSeasons + serie.seasonsNumber;
    });
    
    return avgSeasons/totalSeries;
} 

window.addEventListener("load", () => {
    renderSeriesInTable(series);
    let avgSeasons : number = getAvgSeasons(series);
    let pElement = document.createElement('p')
    let description : string = "The average seasons number is: "
    pElement.innerHTML = description +avgSeasons;
    avgTbody.appendChild(pElement);
  });