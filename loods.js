var canvas;
var ctx;
var content;
var effectsCanvas;
var effectsCtx;
var contentLoaded = false;
var isToggleActive = false; 
var clickedCoords = [];
var currentRoomName;
var currentRoom;

var deformation = {
    xSquish: 0,
    ySquish: 0,
    xOffset: 0,
    yOffset: 0,
    imgWidth: 0,
    imgHeight: 0,
}

window.onload = function() {
    canvas = document.getElementById("loods");
    ctx = canvas.getContext("2d");
    content = document.getElementById("content");
    
    effectsCanvas = document.getElementById("effects");
    effectsCtx = effectsCanvas.getContext("2d");

    startLoods();

    loodsAddEventListeners();
}

function startLoods(roomName, view){
    if (roomName){
        currentRoomName = roomName;
    } else {
        currentRoomName = localStorage.getItem('currentRoomName');
    }
    if (view){
        currentView = view;
    } else {
        currentView = localStorage.getItem('currentView');
    }

    
    currentRoom = rooms.find(room => room.name === currentRoomName);
    if (currentRoom == undefined) {
        currentRoom = rooms[0];
        currentRoomName = currentRoom.name;
    }

    
    if (currentView== undefined){
        currentView = "main";
    }

    loadRoom(currentRoom, currentView);
}

function resetLoods(){
    startLoods("begin", "main");
}

function loodsAddEventListeners(){
    content.addEventListener("click", function(event) {
        if (contentLoaded){
            unloadContent();
            contentLoaded = false;
            return;
        }
    });
    
    canvas.addEventListener("click", function(event) {
        var pos = getMouseCoordsOnCanvas(event);
        var x = pos.x;
        var y = pos.y;
    
        if (isToggleActive){
            addCoordinatesToClipboard(x,y);
        }
    
        if (contentLoaded){
            unloadContent();
            contentLoaded = false;
            return;
        }
    
        if (currentRoom?.contents?.[currentView]) {
            for (var content of currentRoom.contents[currentView]) {
                if (isPointInPolygon(x, y, content.shape)) {
                    contentLoaded = true;
                    loadContent(content);
                    return;
                }
            }
        }
        if (!isToggleActive){
            if (currentRoom?.zones?.[currentView]) {
                for (var zone of currentRoom.zones[currentView]) {
                    if (isPointInPolygon(x, y, zone.shape)) {
                        currentRoomName = zone.nextRoom;
                        currentView = zone.nextView;
                        currentRoom = rooms.find(room => room.name === currentRoomName);
                        loadRoom(currentRoom, currentView);
                        return;
                    }
                }
            }
        }
    });
    
    canvas.addEventListener("contextmenu", function(event) {
        if (!isToggleActive){
            event.preventDefault();
    
            switch (currentView) {
                case "main":
                    currentView = "reverse";
                    break;
                case "reverse":
                    currentView = "main";
                    break;
                default:
                    console.log("failed to swap view");
                    break;
            }
            loadRoom(currentRoom, currentView);
        }
    });
    
    window.addEventListener('resize', function() {
        loadRoom(currentRoom, currentView);
    });

    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            isToggleActive = !isToggleActive;
    
            if (isToggleActive){
                if (currentRoom?.zones?.[currentView]) {
                    drawPolygons(currentRoom.zones[currentView], "rgba(255, 0, 0, 0.2)");
                    if (currentRoom?.contents?.[currentView]) {
                        drawPolygons(currentRoom.contents[currentView], "rgba(0, 255, 0, 0.2)");
                    }
                }
            }
        }
    });

    canvas.addEventListener("mousemove", function(event) {
        effectsCtx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
    
        const pos = getMouseCoordsOnCanvas(event);
        const x = pos.x;
        const y = pos.y;
    
        let hoveringZone = false;
        let hoveringContent = false;
    
        if (currentRoom?.zones?.[currentView]) {
            for (let zone of currentRoom.zones[currentView]) {
                if (isPointInPolygon(x, y, zone.shape)) {
                    hoveringZone = true;
                    break;
                }
            }
        }
    
        if (currentRoom?.contents?.[currentView]) {
            for (let content of currentRoom.contents[currentView]) {
                if (isPointInPolygon(x, y, content.shape)) {
                    hoveringContent = true;
                    break;
                }
            }
        }
    
        if (hoveringContent) {
            effectsCtx.clearRect(0, 0, effectsCtx.canvas.width, effectsCtx.canvas.height);
    
            if (currentRoom?.contents?.[currentView]) {
                currentRoom.contents[currentView].forEach(content => {
                    if (isPointInPolygon(x, y, content.shape)) {
                        for (let i = 5; i >= 1; i--) {
                            effectsCtx.beginPath();
                            effectsCtx.strokeStyle = `rgba(255, 165, 0, ${0.1 * i})`;
                            effectsCtx.lineWidth = i * 6; 
                            effectsCtx.lineJoin = "round";
                            effectsCtx.lineCap = "round";
            
                            effectsCtx.moveTo(
                                content.shape[0][0] * deformation.xSquish + deformation.xOffset,
                                content.shape[0][1] * deformation.ySquish + deformation.yOffset
                            );
            
                            content.shape.forEach(([xPt, yPt]) => {
                                effectsCtx.lineTo(
                                    xPt * deformation.xSquish + deformation.xOffset,
                                    yPt * deformation.ySquish + deformation.yOffset
                                );
                            });
            
                            effectsCtx.closePath();
                            effectsCtx.stroke();
                        }
                    }
                });
            }
        
        } else if (hoveringZone) {
            effectsCtx.clearRect(0, 0, effectsCtx.canvas.width, effectsCtx.canvas.height);
    
            if (currentRoom?.zones?.[currentView]) {
                currentRoom.zones[currentView].forEach(zones => {
                    if (isPointInPolygon(x, y, zones.shape)) {
                        for (let i = 15; i >= 1; i--) {
                            effectsCtx.beginPath();
                            effectsCtx.strokeStyle = `rgba(255, 0, 0, ${0.002 * i})`;
                            effectsCtx.lineWidth = i * 8; 
                            effectsCtx.lineJoin = "round";
                            effectsCtx.lineCap = "round";
            
                            effectsCtx.moveTo(
                                zones.shape[0][0] * deformation.xSquish + deformation.xOffset,
                                zones.shape[0][1] * deformation.ySquish + deformation.yOffset
                            );
            
                            zones.shape.forEach(([xPt, yPt]) => {
                                effectsCtx.lineTo(
                                    xPt * deformation.xSquish + deformation.xOffset,
                                    yPt * deformation.ySquish + deformation.yOffset
                                );
                            });
            
                            effectsCtx.closePath();
                            effectsCtx.stroke();
                        }
                    }
                });
            }
        }
    
        if (hoveringContent && hoveringZone){
            canvas.style.cursor = "pointer";
        } else {
            canvas.style.cursor = "default";
        }
    
        if (isToggleActive) {
            effectsCtx.font = "32px Arial";
            effectsCtx.fillStyle = "red";
            effectsCtx.fillText(`(${x.toFixed(0)}, ${y.toFixed(0)})`, x + 10, y - 10);
        }
    });
}

function loadRoom(room, view) {
    
    if (room) {
        var img = new Image();
        img.src = "rooms/"+room.name+"/"+view+".jpg";

        img.onerror = function() {
            img.src = "rooms/"+room.name+"/"+view+".png";
        };

        img.onload = function() {
            drawImage(img);
            localStorage.setItem('currentRoomName', currentRoomName);
            localStorage.setItem('currentView', currentView);
        };
    }
}

function drawImage(img){
    var imgWidth = parseFloat(img.width);
    var imgHeight = parseFloat(img.height);
    var canvasHeight = parseFloat(canvas.height);
    var canvasWidth = parseFloat(canvas.width);
    var style = window.getComputedStyle(canvas);
    var styleWidth = parseFloat(style.width);
    var styleHeight = parseFloat(style.height);

    if ((imgWidth / imgHeight) > (styleWidth / styleHeight)){
        var newWidthRatio = 1;
        var newHeightRatio = (styleWidth / styleHeight )/ (imgWidth / imgHeight);
    } else {
        var newHeightRatio = 1;
        var newWidthRatio = (styleHeight / styleWidth) / (imgHeight / imgWidth);
    }

    var newWidth = canvasWidth * newWidthRatio;
    var newHeight = canvasHeight * newHeightRatio;

    var xOffset = (canvasWidth - newWidth) / 2;
    var yOffset = (canvasHeight - newHeight) / 2;


    deformation = {xOffset: xOffset, yOffset: yOffset, xSquish: newWidthRatio, ySquish: newHeightRatio, imgWidth: newWidth, imgHeight: newHeight};

    effectsCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);

}

function drawPolygons(polygons, fillStyle) {
    if (polygons == null){return;}

    var xSquish = deformation.xSquish;
    var ySquish = deformation.ySquish;
    var xOffset = deformation.xOffset;
    var yOffset = deformation.yOffset;

    ctx.fillStyle = fillStyle;

    polygons.forEach(polygon => {
        ctx.beginPath();

        ctx.moveTo((polygon.shape[0][0]*xSquish)+xOffset, (polygon.shape[0][1]*ySquish)+yOffset);

        polygon.shape.forEach(([x, y]) => {
            ctx.lineTo((x*xSquish)+xOffset, (y*ySquish)+yOffset);
        });

        ctx.closePath();
        ctx.fill();
    });
}

function loadContent(content) {
    var contentElement = document.getElementById("content");
    var floatElement = document.getElementById("float");

    contentElement.classList.add("overlay");

    floatElement.innerHTML = "";

    if (content.src.includes("youtube")){
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + content.src.split("youtube.com/watch?v=")[1];
        iframe.width = "560";
        iframe.height = "315";
        iframe.frameborder = "0";
        iframe.allowfullscreen = true;

        floatElement.appendChild(iframe);
    } else {
        var img = document.createElement("img");
        img.src = "rooms/"+currentRoom.name+"/"+content.src+".jpg";
        img.onerror = function() {
            img.src = "rooms/"+currentRoom.name+"/"+content.src+".png";
        };

        img.alt = "Loaded Image";

    }

    var text = document.createElement("p");
    text.textContent = content.txt;

    floatElement.appendChild(img);
    floatElement.appendChild(text);
}

function unloadContent(){
    var contentElement = document.getElementById("content");
    var floatElement = document.getElementById("float");
    contentElement.classList.remove("overlay"); 
    floatElement.innerHTML = "";
}

function addCoordinatesToClipboard(x,y){
    var xSquish = deformation.xSquish;
    var ySquish = deformation.ySquish;
    var xOffset = deformation.xOffset;
    var yOffset = deformation.yOffset;

    x = (x - xOffset ) / xSquish;
    y = (y - yOffset) / ySquish; 

    var roundedCoords = [Math.trunc(x), Math.trunc(y)];

    if (!currentRoom || clickedCoords.length === 0 || currentRoomName !== lastRoomName) {
        clickedCoords = [];
    }
    
    clickedCoords.push(roundedCoords);
    lastRoomName = currentRoomName; 

    var coordsString = JSON.stringify(clickedCoords);
    var clipboardString = "{ shape: "+coordsString+', nextRoom: "room", nextView: "main" },';
    navigator.clipboard.writeText(clipboardString).then(function() {
        console.log("Updated coordinates copied to clipboard:", coordsString);
    }).catch(function(err) {
        console.error("Error copying coordinates to clipboard:", err);
    });
}

function getMouseCoordsOnCanvas(event) {
    var xSquish = deformation.xSquish;
    var ySquish = deformation.ySquish;
    var xOffset = deformation.xOffset;
    var yOffset = deformation.yOffset;

    var myX = event.clientX;
    var myY = event.clientY;

    var style = window.getComputedStyle(canvas);

    var firstCanvasPixelLeft = parseFloat(style.marginLeft);
    var firstCanvasPixelTop = parseFloat(style.marginTop);

    if (myX < firstCanvasPixelLeft || myY < firstCanvasPixelTop) {
        return { x: NaN, y: NaN};
    }

    var percentageFromLeft = (myX - firstCanvasPixelLeft) / parseFloat(style.width);
    var percentageFromTop = (myY - firstCanvasPixelTop) / parseFloat(style.height);

    var mapWidth = canvas.width;
    var x = percentageFromLeft *mapWidth;
    var mapHeight = canvas.height;
    var y = percentageFromTop * mapHeight;
    
    return { x: x, y: y };
    
}

function isPointInPolygon(x, y, polygon) {
    var xSquish = deformation.xSquish;
    var ySquish = deformation.ySquish;
    var xOffset = deformation.xOffset;
    var yOffset = deformation.yOffset;

    x = (x - xOffset ) / xSquish;
    y = (y - yOffset) / ySquish; 

    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        let xi = polygon[i][0], yi = polygon[i][1];
        let xj = polygon[j][0], yj = polygon[j][1];
        let intersect = ((yi > y) !== (yj > y)) && 
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

