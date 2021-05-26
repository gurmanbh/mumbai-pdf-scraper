const DASHBOARD = 'http://stopcoronavirus.mcgm.gov.in/assets/docs/Dashboard.pdf'
const CONTAINMENT = 'http://stopcoronavirus.mcgm.gov.in/assets/docs/Containment-Zones.pdf#toolbar=0'
const SB = 'http://stopcoronavirus.mcgm.gov.in/assets/docs/Sealed-Buildings.pdf#toolbar=0'

const http = require('http');
const fs = require('fs')
const time = require('d3-time-format')


const date = new Date()

const format = time.timeFormat('%d-%m-%Y')
const formattedDate = format(date)
const base = './files/'
// downloadPDF(`${base}dashboard/${formattedDate}`,DASHBOARD)
downloadPDF(`${base}containment-zones/${formattedDate}`,CONTAINMENT)
downloadPDF(`${base}sealed-buildings/${formattedDate}`,SB)



function downloadPDF(fileName, URL){
	const file = fs.createWriteStream(fileName+'.pdf');
	const request = http.get(URL, function(response) {
	  response.pipe(file);
	});
}

