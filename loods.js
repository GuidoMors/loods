window.onload = function() {
    var canvas = document.getElementById("loods");
    var ctx = canvas.getContext("2d");
    var content = document.getElementById("content");

    var contentLoaded = false;

    var deformation = {
        xSquish: 0,
        ySquish: 0,
        xOffset: 0,
        yOffset: 0,
        imgWidth: 0,
        imgHeight: 0,
    }

    const rooms = [
        {
            name: "door",
            zones: [
                { shape: [[450, 1080], [620, 225], [1100, 225], [1125, 1080]], nextRoom: "entrance" }
            ],
        },
        {
            name: "entrance",
            zones: [
                { shape: [[870, 1050], [870, 950], [1070, 950], [1070, 1050]], nextRoom: "door" },
                { shape: [[985,621],[936,577],[935,410],[1013,384]], nextRoom: "middle" }, 
                { shape: [[599,671],[625,473],[573,285],[278,401]], nextRoom: "vamir" } 
            ],
        },
        {
            name: "vamir",
            zones: [
                { shape: [[750, 1050], [750, 950], [850, 950], [850, 1050]], nextRoom: "entrance" } 
            ],
            contents: [
                {shape: [[723,113],[735,370],[1135,441],[1135,95]], src:"https://www.youtube.com/watch?v=rLLUd-b34tc"},
            ]
        },        {
            name: "middle",
            zones: [
                { shape: [[750, 1050], [750, 950], [850, 950], [850, 1050]], nextRoom: "entrance" } 
            ],
            contents: [
                { shape: [[1164,541],[1066,565],[993,519],[1105,249],[1157,273]], src: "1", txt: "DE TOREN ONDER DE TOREN VAN BOROMIR" },
                { shape: [[764,721],[647,664],[751,82],[905,111]], src: "2", txt: "DE TOREN ONDER DE TOREN VAN OER MOE + PA" },
                
            ]
        }
    ];

    var currentRoomName = localStorage.getItem('currentRoomName');
    currentRoom = rooms.find(room => room.name === currentRoomName);
    if (currentRoom == undefined) {
        currentRoom = rooms[0];
    }

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

        if (currentRoom.zones && Array.isArray(currentRoom.zones)) {
            for (var zone of currentRoom.zones) {
                if (isPointInPolygon(x, y, zone.shape)) {
                    currentRoomName = zone.nextRoom;
                    currentRoom = rooms.find(room => room.name === currentRoomName);
                    loadImage(currentRoom);
                    localStorage.setItem('currentRoomName', currentRoomName);
                    break;
                }
            }
        }

        if (currentRoom.contents && Array.isArray(currentRoom.contents)) {
            for (var content of currentRoom.contents) {
                if (isPointInPolygon(x, y, content.shape)) {
                    contentLoaded = true;
                    loadContent(content);
                    break;
                }
            }
        }

    });

    loadImage(currentRoom);
    window.addEventListener('resize', function() {
        loadImage(currentRoom);
    });

    function loadImage(room) {
        
        if (room) {
            var img = new Image();
            img.src = "rooms/"+room.name+"/main.jpg";

            img.onerror = function() {
                img.src = "rooms/"+room.name+"/main.png";
            };

            img.onload = function() {
                drawImage(img);

                drawPolygons(room.zones, "rgba(255, 0, 0, 0.2)");
                drawPolygons(room.contents, "rgba(0, 255, 0, 0.2)");
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

    // COORDINATES ///
    var isToggleActive = false; 
    var coordCanvas = document.getElementById("coordinates");
    var coordCtx = coordCanvas.getContext("2d");
    canvas.addEventListener("mousemove", function(event) {

        coordCtx.clearRect(0, 0, coordCanvas.width, coordCanvas.height);

        if (isToggleActive){
            var pos = getMouseCoordsOnCanvas(event);
            var x = pos.x;
            var y = pos.y;
            coordCtx.font = "32px Arial";
            coordCtx.fillStyle = "red";
            coordCtx.fillText(`(${x.toFixed(0)}, ${y.toFixed(0)})`, x + 10, y - 10);
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            isToggleActive = !isToggleActive;
        }
    });

    var clickedCoords = [];

    function addCoordinatesToClipboard(x,y){
        var xSquish = deformation.xSquish;
        var ySquish = deformation.ySquish;
        var xOffset = deformation.xOffset;
        var yOffset = deformation.yOffset;

        x = (x - xOffset ) / xSquish;
        y = (y - yOffset) / ySquish; 

        var roundedCoords = [Math.trunc(x), Math.trunc(y)];

        currentRoom = rooms.find(room => room.name === currentRoomName);
        if (!currentRoom || clickedCoords.length === 0 || currentRoomName !== lastRoomName) {
            clickedCoords = [];
        }
        
        clickedCoords.push(roundedCoords);
        lastRoomName = currentRoomName; 
    
        const coordsString = JSON.stringify(clickedCoords);
        navigator.clipboard.writeText(coordsString).then(function() {
            console.log("Updated coordinates copied to clipboard:", coordsString);
        }).catch(function(err) {
            console.error("Error copying coordinates to clipboard:", err);
        });
    }


    //HELPER CALCULATIONS


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

    
};
