//// Events table & ics file
function parseDate(dateStr) {

    const months = {
        janvier: '01',
        février: '02',
        mars: '03',
        avril: '04',
        mai: '05',
        juin: '06',
        juillet: '07',
        août: '08',
        septembre: '09',
        octobre: '10',
        novembre: '11',
        décembre: '12',
    }

    dates = dateStr.split(" / ");
    dateStr = dates[0];
    dateStr = dateStr.split(" ");

    // event on several months
    if(dates.length == 2) {
        endDate = parseDate(dates[1])[0];
    }

    // if no date is defined yet, considered as soonest
    if (dateStr[0] == "-") {
        startDate = "00000000";
    }
    // if periodical date, considered as soon
    else if (dateStr.length > 3){
        startDate = "00000001";
    }
    // for other regular dates
    else {
        year = dateStr[2];
        month = months[dateStr[1]];
        days = dateStr[0].split("-");
        day = days[0].length == 1 ? "0"+dateStr[0].split("-")[0] : dateStr[0].split("-")[0];
        startDate = year+month+day;
        // event on several days
        if (days.length == 2) {
            endDay = days[1].length == 1 ? "0"+dateStr[0].split("-")[1] : dateStr[0].split("-")[1];
            endDate = year+month+endDay;
            return [startDate, endDate];
        }
    }
    endDate = startDate;
    return [startDate, endDate];
}

function fillTable() {
    column = `<tr class="table-light">
                <th scope="row"><a href="SITE_PLACEHOLDER">NAME_PLACEHOLDER</th>
                <td>DATE_PLACEHOLDER</td><td>LIEU_PLACEHOLDER</td>
                <td><div class="form-check"><input class="form-check-input" type="checkbox" value="true" id="flexCheckChecked" CTF_PLACEHOLDER disabled=""></td>
                <td>PRIX_PLACEHOLDER</td>
                <td>LAST_PLACEHOLDER</td>
            </tr>`

    json = [
    {
    name:"SSTIC",
    date:"5-7 juin 2024",
    lieu:"Rennes",
    site:"https://www.sstic.org/",
    prix:"355€",
    ctf:true,
    last:"7-9 juin 2023"
    },
    {
    name:"Meetup HTB France",
    date:"-",
    lieu:"Discord/IRL",
    site:"https://www.meetup.com/fr-FR/hack-the-box-meetup-france",
    prix:"Gratuit",
    ctf:true,
    last:"11 janvier 2024"
    },
    {
    name:"UYBHYS",
    date:"8-9 novembre 2024",
    lieu:"Brest",
    site:"https://www.unlockyourbrain.bzh/",
    prix:"42€",
    ctf:true,
    last:"3-4 novembre 2023"
    },
    {
    name:"GreHack",
    date:"-",
    lieu:"Grenoble",
    site:"https://grehack.fr/",
    prix:"75€",
    ctf:true,
    last:"17-18 novembre 2023"
    },
    {
    name:"THCon",
    date:"-",
    lieu:"Toulouse",
    site:"https://thcon.party/",
    prix:"100€",
    ctf:true,
    last:"4-5 avril 2024"
    },
    {
    name:"LeHack",
    date:"5-6 juillet 2024",
    lieu:"Paris",
    site:"https://lehack.org/",
    prix:"56€",
    ctf:true,
    last:"30 juin 2023 / 1 juillet 2023"
    },
    {
    name:"BarbHack",
    date:"-",
    lieu:"Toulon",
    site:"https://www.barbhack.fr/",
    prix:"89€",
    ctf:true,
    last:"26 août 2023"
    },
    {
    name:"BreizhCTF",
    date:"17 mai 2024",
    lieu:"Rennes",
    site:"https://www.breizhctf.com/",
    prix:"Gratuit",
    ctf:true,
    last:"17-18 mars 2023"
    },
    {
    name:"ECW",
    date:"-",
    lieu:"Rennes",
    site:"https://www.european-cyber-week.eu/",
    prix:"330€",
    ctf:true,
    last:"19-21 novembre 2024"
    },
    {
    name:"Botconf",
    date:"-",
    lieu:"Nice",
    site:"https://www.botconf.eu/",
    prix:"N/A",
    ctf:false,
    last:"23-26 avril 2024"
    },
    {
    name:"Pass The Salt",
    date:"3-5 juillet 2024",
    lieu:"Lille",
    site:"https://2024.pass-the-salt.org/",
    prix:"Gratuit",
    ctf:false,
    last:"3-5 juillet 2023"
    },
    {
    name:"Hexacon",
    date:"4-5 octobre 2024",
    lieu:"Paris",
    site:"https://www.hexacon.fr/",
    prix:"900€",
    ctf:true,
    last:"13-14 octobre 2023"
    },
    {
    name:"Mars@Hack",
    date:"-",
    lieu:"Mont-de-Marsan",
    site:"http://www.montdemarsan-agglo.fr/agglo/jsp/site/Portal.jsp?page_id=434",
    prix:"Gratuit",
    ctf:true,
    last:"4 avril 2024"
    },
    {
    name:"StHack",
    date:"24 mai 2024",
    lieu:"Bordeaux",
    site:"http://sthack.fr/",
    prix:"3€",
    ctf:true,
    last:"12 mai 2023"
    },
    {
    name:"INCYBER (FIC)",
    date:"-",
    lieu:"Lille",
    site:"https://europe.forum-fic.com/",
    prix:"Gratuit",
    ctf:true,
    last:"26-28 mars 2024"
    },
    {
    name:"DefCon Paris",
    date:"-",
    lieu:"Paris",
    site:"http://defconparis.org/",
    prix:"Gratuit",
    ctf:false,
    last:"22 avril 2024"
    },
    {
    name:"SecSea",
    date:"-",
    lieu:"La Ciotat",
    site:"https://secsea.org/",
    prix:"60€",
    ctf:true,
    last:"13-14 octobre 2023"
    },  
    {
    name:"Phown",
    date:"29-30 novembre 2024",
    lieu:"Sophia Antipolis",
    site:"https://ph0wn.org/",
    prix:"Gratuit",
    ctf:true,
    last:"24-25 novembre 2023"
    },  
    {
    name:"BiereSecuTLS",
    date:"-",
    lieu:"Toulouse",
    site:"https://twitter.com/BiereSecu/",
    prix:"Gratuit",
    ctf:false,
    last:"13 septembre 2023"
    },  
    {
    name:"HackInParis",
    date:"-",
    lieu:"Paris",
    site:"https://www.hackinparis.com/",
    prix:"660€",
    ctf:false,
    last:"25-29 septembre 2023"
    }, 
    {
    name:"Defcon 11333",
    date: "Dernier lundi du mois",
    lieu:"Lille",
    site:"https://twitter.com/defcon11333",
    prix:"Gratuit",
    ctf:false,
    last:"-"
    },
    {
    name:"Biere Secu Lyon",
    date:"-",
    lieu:"Lyon",
    site:"https://twitter.com/BiereSecuLyon",
    prix:"Gratuit",
    ctf:false,
    last:"16 avril 2024"
    },
    {
    name:"Hackvens",
    date:"-",
    lieu:"Lyon",
    site:"https://hackvens.fr/",
    prix:"5€",
    ctf:true,
    last:"13 octobre 2023"
    },
    {
    name:"Ambrosia",
    date:"-",
    lieu:"Rennes",
    site:"https://esnhack.fr/",
    prix:"15€",
    ctf:false,
    last:"13 janvier 2023"
    },
    {
    name:"ESIEA Secure Edition",
    date:"25 mai 2024",
    lieu:"Paris",
    site:"https://ese.esiea.fr/",
    prix:"10€",
    ctf:false,
    last:"17 juin 2023"
    },
    {
    name:"Cycom",
    date:"-",
    lieu:"Montpellier",
    site:"https://www.cycomhackingconference.com/",      prix:"50€",
    ctf:true,
    last:"12 avril 2024"
    },
    {
    name:"BSides Paris",
    date:"-",
    lieu:"Paris",
    site:"https://bsidesparis.fr/",
    prix:"20€",
    ctf:true,
    last:"4 avril 2024"
    },
    {
    name:"WineRump",
    date:"6 septembre 2024",
    lieu:"Bordeaux",
    site:"https://rump.wine/",
    prix:"N/A",
    ctf:false,
    last:"-"
    },{
name:"CAID",
date:"19-20 novembre 2024",
site:"https://caid-conference.eu/",
prix:"255€",
ctf:true,
last:"-"}]

    const totalSpan = document.getElementById('total-events');
    totalSpan.textContent = json.length;
    cal = ics();

    // Generate events table (ordered by name) and ics file
    for (let [k,event] of Object.entries(json).sort((a,b) => a[1].name > b[1].name)) {
        // Events table construction
        tmpcol = column
        tmpcol = tmpcol.replace("NAME_PLACEHOLDER",event.name)
        tmpcol = tmpcol.replace("DATE_PLACEHOLDER",event.date)
        tmpcol = tmpcol.replace("LIEU_PLACEHOLDER",event.lieu)
        tmpcol = tmpcol.replace("SITE_PLACEHOLDER",event.site)
        tmpcol = tmpcol.replace("PRIX_PLACEHOLDER",event.prix)
        tmpcol = tmpcol.replace("CTF_PLACEHOLDER", event.ctf ? 'checked' : '')
        tmpcol = tmpcol.replace("LAST_PLACEHOLDER",event.last)
        document.getElementsByClassName("table-events")[0].innerHTML += tmpcol

        // ics file construction
        startDate = parseDate(event.date)[0];
        endDate = parseDate(event.date)[1];
        startDate = startDate.slice(4,6)+"/"+startDate.slice(6,8)+"/"+startDate.slice(0,4);
        endDate = endDate.slice(4,6)+"/"+endDate.slice(6,8)+"/"+endDate.slice(0,4);
        cal.addEvent(event.name, event.name+": "+event.prix, event.lieu, startDate, endDate);
    }
    // Unordered :
    // json.forEach(event => {
    //   tmpcol = column
    //   tmpcol = tmpcol.replace("NAME_PLACEHOLDER",event.name)
    //   tmpcol = tmpcol.replace("DATE_PLACEHOLDER",event.date)
    //   tmpcol = tmpcol.replace("LIEU_PLACEHOLDER",event.lieu)
    //   tmpcol = tmpcol.replace("SITE_PLACEHOLDER",event.site)
    //   tmpcol = tmpcol.replace("CTF_PLACEHOLDER",event.ctf)
    //   tmpcol = tmpcol.replace("LAST_PLACEHOLDER",event.last)
    //   document.getElementsByClassName("table-events")[0].innerHTML += tmpcol
    // })
}

//// Sort table columns
$(function() {
    // parser to sort date columns
    $.tablesorter.addParser({
        id: 'datesorter',
        is: function(s) {
        return false;
        },
        format: function(dateStr) {
        return parseDate(dateStr)[0];
        },
        type: 'numeric'
    });
    // parser to sort price column
    $.tablesorter.addParser({
        id: 'pricesorter',
        is: function(s) {
        return false;
        },
        format: function(priceStr) {
        priceStr = priceStr.split("€")[0];

        if (priceStr === "Gratuit") {
            price = 0;
        }
        else if (priceStr === "N/A") {
            price = 1;
        }
        else {
            price = priceStr;
        }

        return price;
        },
        type: 'numeric'
    });
    $("#tablesorter").tablesorter({
        cssAsc: 'up',
        cssDesc: 'down',
        headers : {
        1: {
            sorter: 'datesorter'
        },
        3: {
            sorter : 'checkbox'
        },
        4: {
            sorter: 'priceSorter'
        },
        5: {
            sorter: 'datesorter'
        }
        }
    });
});

//// Misc
// Main button
document.addEventListener("DOMContentLoaded", function() {
    const scrollToEventsButton = document.getElementById("scrollToEvents");
    const scrollToEventsImage = document.getElementById("scrollToEventsImage");
    const eventsSection = document.getElementById("events");

    scrollToEventsButton.addEventListener("click", function() {
        eventsSection.scrollIntoView({ behavior: "smooth" });
    });

    scrollToEventsImage.addEventListener("click", function() {
        eventsSection.scrollIntoView({ behavior: "smooth" });
    });
});

// animation
nameState = 0
function cycleName() {
  nameState += 1
  nameState %= 2
  names = ['H<span style="text-transform: lowercase;">exagon</span>','F<span style="text-transform: lowercase;">rance</span>']
  const nameSpan = document.getElementById('name-animation')
  nameSpan.innerHTML = names[nameState]
}
setInterval(cycleName,2000);
