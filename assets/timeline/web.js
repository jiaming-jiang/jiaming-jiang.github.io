var startDate = moment('2006-01-01');
var endDate = moment('2019-11-01');

var months = [];

if (endDate.isBefore(startDate)) {
    throw "End date must be greated than start date."
}      

while (startDate.isBefore(endDate)) {
    months.push(startDate.format("YYYY-MM-01"));
    startDate.add(1, 'month');
}
//var popular_events = $.getJSON({'url': "popular_events.json", 'async': false});  
async function read_json() {  
    return fetch('../assets/timeline/popular_events.json')
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
  
  }
var popular_events = await read_json();//popular_events = JSON.parse(popular_events.responseText);

popular_events = new Map(Object.entries(popular_events));
var month_texts = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var colors = {"Auto & Vehicles":"1e91d6",
"Comedy":"e15554",
"Education":"0072bb",
"Entertainment":"e18335",
"Film & Animation":"e1bc29",
"Gaming":"1c5253",
"Howto & Style":"e4cc37",
"Music":"b6174b",
"News & Politics":"8fc93a",
"Nonprofits & Activism":"f3ffc6",
"People & Blogs":"306b34",
"Pets & Animals":"3bb273",
"Science & Technology":"c3eb78",
"Sports":"7768ae",
"Travel & Events":"4d9de0"
}
colors = new Map(Object.entries(colors));
//for(var category of colors.keys()){
//    $("#legend").append(`<li><span style='background:#${colors.get(category)};'></span>${category}</li>`);
//}
for(var i=0; i<3;i++){
    var row = '<ul class="legend-labels">';
    for(var j=0;j<5;j++){
        var category = Array.from(colors.keys())[i*5+j]
        row += `<li><span style='background:#${colors.get(category)};'></span>${category}</li>`
    }
    row = row + " </ul>"
    $("#legend").append(row);
}
for(var i=0;i<months.length;i++){
    var year = months[i].split("-")[0];
    var month =  months[i].split("-")[1];
    var event_found = false;
    var date = `<p style="font-size:12px;text-align:center;"><b>${month_texts[month-1]}, ${year}</b></p>`;
    var html = '<ul style="padding-left:2em;text-align:left;padding-right:1em;">';
    for(var category of popular_events.keys()){
        var category_events = new Map(Object.entries(popular_events.get(category)));
        if(category_events.has(months[i])){
            var event_details = new Map(Object.entries(category_events.get(months[i])));
            var link = event_details.keys().next().value;
            var event_info = event_details.get(link);
            if(typeof event_info === "object"){
                html = html + `<li style="padding-left:0;vertical-align: top;"><a target="_blank" href=${link} style="text-decoration: underline;font-size:12px;color:#${colors.get(category)};">${event_info[0]}</a></li>`
            } 
            else{ 
                html = html + `<li style="padding-left:0;vertical-align: top;"><a target="_blank" href=${link} style="text-decoration: underline;font-size:12px;color:#${colors.get(category)};">${event_info}</a></li>`
            }
            event_found = true
        }
    }
    html = html + "</ul>"
    if(event_found){
        if(month%2!==0){
            $("#divRepeat").append(`<div class="timeline__item" style="padding:0;"><div class="timeline__content" style="padding:0;">${html}</div><div style="margin-bottom:1em;">${date}</div></div>`);
        }
        else{
            $("#divRepeat").append(`<div class="timeline__item"><div style="margin-top:-5em;">${date}</div><div class="timeline__content" style="padding:0;">${html}</div></div>`);
        }
    }
    else{
        if(month%2!==0){
            $("#divRepeat").append(`<div class="timeline__item" style="padding:0;"><div class="timeline__content" style="display:none;"></div><div style="margin-bottom:1em;">${date}</div></div>`);
        }
        else{
            $("#divRepeat").append(`<div class="timeline__item"><div style="margin-top:-5em;">${date}</div><div class="timeline__content" style="display:none;"></div></div>`);
        }
    }
}
timeline(document.querySelectorAll('.timeline'), {
    mode: 'horizontal',
    startIndex: 36,
    visibleItems: 6,
    moveItems:6
});