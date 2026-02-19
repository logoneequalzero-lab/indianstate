var map = L.map('map',{
zoomControl:false,
scrollWheelZoom:false,
dragging:false
}).setView([22,80],5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var marker;

const states = {

"Andhra Pradesh":{capital:"Amaravati",lat:16.5,lon:80.6,dance:"Kuchipudi",other:"Rice Bowl of India",river:"Krishna",mountain:"Eastern Ghats"},
"Arunachal Pradesh":{capital:"Itanagar",lat:27.1,lon:93.6,dance:"Bardo Chham",other:"Land of Rising Sun",river:"Siang",mountain:"Himalaya"},
"Assam":{capital:"Dispur",lat:26.14,lon:91.77,dance:"Bihu",other:"Ahom Kingdom",river:"Brahmaputra",mountain:"Karbi Hills"},
"Bihar":{capital:"Patna",lat:25.6,lon:85.1,dance:"Jat-Jatin",other:"Magadha",river:"Ganga",mountain:""},
"Chhattisgarh":{capital:"Raipur",lat:21.2,lon:81.6,dance:"Panthi",other:"Rice Bowl",river:"Mahanadi",mountain:"Maikal Hills"},
"Goa":{capital:"Panaji",lat:15.5,lon:73.8,dance:"Fugdi",other:"Pearl of Orient",river:"Mandovi",mountain:"Western Ghats"},
"Gujarat":{capital:"Gandhinagar",lat:23.2,lon:72.6,dance:"Garba",other:"Gurjaratra",river:"Narmada",mountain:"Gir Hills"},
"Haryana":{capital:"Chandigarh",lat:30.7,lon:76.7,dance:"Phag",other:"Green Land",river:"Yamuna",mountain:""},
"Himachal Pradesh":{capital:"Shimla",lat:31.1,lon:77.1,dance:"Nati",other:"Land of Gods",river:"Beas",mountain:"Himalaya"},
"Jharkhand":{capital:"Ranchi",lat:23.3,lon:85.3,dance:"Chhau",other:"Forest State",river:"Damodar",mountain:"Parasnath"},
"Karnataka":{capital:"Bengaluru",lat:12.97,lon:77.59,dance:"Yakshagana",other:"Mysore State",river:"Kaveri",mountain:"Western Ghats"},
"Kerala":{capital:"Thiruvananthapuram",lat:8.5,lon:76.9,dance:"Kathakali",other:"God’s Own Country",river:"Periyar",mountain:"Western Ghats"},
"Madhya Pradesh":{capital:"Bhopal",lat:23.25,lon:77.4,dance:"Matki",other:"Heart of India",river:"Narmada",mountain:"Vindhya"},
"Maharashtra":{capital:"Mumbai",lat:19.07,lon:72.87,dance:"Lavani",other:"Bombay State",river:"Godavari",mountain:"Western Ghats"},
"Manipur":{capital:"Imphal",lat:24.8,lon:93.9,dance:"Ras Lila",other:"Jewel of India",river:"Barak",mountain:"Patkai"},
"Meghalaya":{capital:"Shillong",lat:25.6,lon:91.8,dance:"Wangala",other:"Abode of Clouds",river:"Umiam",mountain:"Garo Hills"},
"Mizoram":{capital:"Aizawl",lat:23.7,lon:92.7,dance:"Cheraw",other:"Land of Hills",river:"Tlawng",mountain:"Lushai Hills"},
"Nagaland":{capital:"Kohima",lat:25.6,lon:94.1,dance:"War Dance",other:"Land of Festivals",river:"Doyang",mountain:"Naga Hills"},
"Odisha":{capital:"Bhubaneswar",lat:20.3,lon:85.8,dance:"Odissi",other:"Kalinga",river:"Mahanadi",mountain:"Eastern Ghats"},
"Punjab":{capital:"Chandigarh",lat:30.7,lon:76.7,dance:"Bhangra",other:"Sapta Sindhu",river:"Satluj",mountain:""},
"Rajasthan":{capital:"Jaipur",lat:26.9,lon:75.8,dance:"Ghoomar",other:"Rajputana",river:"Luni",mountain:"Aravalli"},
"Sikkim":{capital:"Gangtok",lat:27.3,lon:88.6,dance:"Cham",other:"Land of Snow",river:"Teesta",mountain:"Himalaya"},
"Tamil Nadu":{capital:"Chennai",lat:13.08,lon:80.27,dance:"Bharatanatyam",other:"Madras State",river:"Kaveri",mountain:"Western Ghats"},
"Telangana":{capital:"Hyderabad",lat:17.38,lon:78.48,dance:"Perini",other:"Youngest State",river:"Godavari",mountain:"Deccan Plateau"},
"Tripura":{capital:"Agartala",lat:23.8,lon:91.3,dance:"Hojagiri",other:"Hill State",river:"Gomati",mountain:"Jampui Hills"},
"Uttar Pradesh":{capital:"Lucknow",lat:26.84,lon:80.94,dance:"Kathak",other:"United Provinces",river:"Ganga",mountain:""},
"Uttarakhand":{capital:"Dehradun",lat:30.3,lon:78.0,dance:"Langvir",other:"Dev Bhoomi",river:"Ganga",mountain:"Himalaya"},
"West Bengal":{capital:"Kolkata",lat:22.57,lon:88.36,dance:"Chhau",other:"Paschim Banga",river:"Ganga",mountain:"Darjeeling Himalaya"}

};

const dropdown = document.getElementById("state");

for(let s in states){
let opt=document.createElement("option");
opt.text=s;
opt.value=s;
dropdown.add(opt);
}

function showState(){

let sname=dropdown.value;

if(!states[sname]) return;

let s=states[sname];

if(marker) map.removeLayer(marker);

map.setView([s.lat,s.lon],6);

marker=L.marker([s.lat,s.lon]).addTo(map)
.bindPopup("Capital: "+s.capital).openPopup();

let info=`<b>${sname}</b><br>
Capital: ${s.capital}<br>
Dance: ${s.dance}<br>
Other Name: ${s.other}<br>
River: ${s.river}`;

if(s.mountain) info+=`<br>Mountain: ${s.mountain}`;

document.getElementById("info").innerHTML=info;

}