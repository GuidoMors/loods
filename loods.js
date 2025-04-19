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
                { shape: [[1296,936],[1315,8],[706,16],[756,929]], nextRoom: "entrance" }
            ],
            contents: [
                { shape: [[852,246],[860,387],[1136,380],[1140,243]], src: "1", txt: "WIE ZIJN DE LOSLOPENDE MENSEN" },
            ]
            
        },
        {
            name: "entrance",
            zones: [
                { shape: [[511,190],[540,916],[1312,914],[1368,195]], nextRoom: "further_entrance" },
                { shape: [[438,976],[389,75],[51,19],[46,1023]], nextRoom: "gilles_entrance" },
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "door" },
            ],
        }, 
        {
            name: "further_entrance",
            zones: [
                { shape: [[372,23],[536,961],[408,1074],[12,1068],[15,11]], nextRoom: "gilles_entrance" },
                { shape: [[1906,8],[1472,21],[1218,944],[1351,1063],[1886,1063]], nextRoom: "furthest_entrance" },
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "entrance" },
            ],
        },
        {
            name: "furthest_entrance",
            zones: [
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "further_entrance" },
                { shape: [[859,874],[712,924],[430,1038],[33,1043],[96,8],[845,14]], nextRoom: "next_to_stairs" },
                
            ],
        },
        {
            name: "gilles_entrance",
            zones: [
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "further_entrance" },
            ],
        },
        {
            name: "next_to_stairs",
            zones: [
                { shape: [[1169,916],[1497,748],[1484,18],[467,16],[817,579],[825,922]], nextRoom: "before_vamir" },
                { shape: [[1882,17],[1506,35],[1527,743],[1263,935],[1375,1063],[1890,1064]], nextRoom: "entrance_to_middle" },
                { shape: [[731,531],[364,8],[43,29],[41,1051],[740,863]], nextRoom: "before_stairs" },
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "furthest_entrance" },     
            ],
        },
        {
            name: "before_vamir",
            zones: [
                { shape: [[710,849],[666,72],[40,25],[37,1025],[431,1060]], nextRoom: "vamir_doors" },
                { shape: [[1878,18],[1088,151],[1071,844],[1339,1049],[1868,1056]], nextRoom: "black_doors" },
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "next_to_stairs" },
                
            ],
        },
        {
            name: "vamir_doors",
            zones: [
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "before_stairs" },
            ],
        },
        {
            name: "entrance_to_middle",
            zones: [
                
                { shape: [[574,903],[555,238],[55,31],[73,969],[68,1062],[469,1056]], nextRoom: "black_doors" },
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "next_to_stairs" },
            ],
        },
        {
            name: "before_stairs",
            zones: [
                { shape: [[287,1071],[252,655],[431,616],[406,11],[33,17],[20,1061]], nextRoom: "middle_blocks" },
                { shape: [[897,769],[892,102],[1262,3],[1897,11],[1889,1062],[1629,1065]], nextRoom: "vamir_doors" },
                { shape: [[728,962],[694,1063],[332,1069],[304,698],[479,649]], nextRoom: "next_to_stairs" },
            ],
        },
        {
            name: "black_doors",
            zones: [
                { shape: [[1626,1048],[1632,743],[1664,379],[1908,340],[1883,1042]], nextRoom: "middle_blocks" },
                { shape: [[1303,1080],[1154,955],[743,953],[541,1080]], nextRoom: "before_vamir" },
            ],
        },
        {
            name: "middle_blocks",
            zones: [
                { shape: [[1360,1052],[1357,620],[1457,485],[1860,475],[1866,1041]], nextRoom: "before_stairs" } 
            ],

        },
        // {
        //     name: "middle",
        //     zones: [
        //         { shape: [[750, 1050], [750, 950], [850, 950], [850, 1050]], nextRoom: "entrance" } 
        //     ],
        //     contents: [
        //         { shape: [[1164,541],[1066,565],[993,519],[1105,249],[1157,273]], src: "1", txt: "DE TOREN ONDER DE TOREN VAN BOROMIR" },
        //         { shape: [[764,721],[647,664],[751,82],[905,111]], src: "2", txt: "DE TOREN ONDER DE TOREN VAN OER MOE + PA" },
        //         {shape: [[723,113],[735,370],[1135,441],[1135,95]], src:"https://www.youtube.com/watch?v=rLLUd-b34tc"},
        //     ]
        // },
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

        if (currentRoom.contents && Array.isArray(currentRoom.contents)) {
            for (var content of currentRoom.contents) {
                if (isPointInPolygon(x, y, content.shape)) {
                    contentLoaded = true;
                    loadContent(content);
                    return;
                }
            }
        }
        if (!isToggleActive){
            if (currentRoom.zones && Array.isArray(currentRoom.zones)) {
                for (var zone of currentRoom.zones) {
                    if (isPointInPolygon(x, y, zone.shape)) {
                        currentRoomName = zone.nextRoom;
                        currentRoom = rooms.find(room => room.name === currentRoomName);
                        loadImage(currentRoom);
                        localStorage.setItem('currentRoomName', currentRoomName);
                        return;
                    }
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

    // COORDINATES ///
    var isToggleActive = false; 
    var effectsCanvas = document.getElementById("effects");
    var effectsCtx = effectsCanvas.getContext("2d");
    canvas.addEventListener("mousemove", function(event) {
        effectsCtx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);

        const pos = getMouseCoordsOnCanvas(event);
        const x = pos.x;
        const y = pos.y;

        let hoveringZone = false;
        let hoveringContent = false;

        if (currentRoom.zones && Array.isArray(currentRoom.zones)) {
            for (let zone of currentRoom.zones) {
                if (isPointInPolygon(x, y, zone.shape)) {
                    hoveringZone = true;
                    break;
                }
            }
        }

        if (currentRoom.contents && Array.isArray(currentRoom.contents)) {
            for (let content of currentRoom.contents) {
                if (isPointInPolygon(x, y, content.shape)) {
                    hoveringContent = true;
                    break;
                }
            }
        }

        if (hoveringContent) {
            effectsCtx.clearRect(0, 0, effectsCtx.canvas.width, effectsCtx.canvas.height);
        
            currentRoom.contents.forEach(content => {
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
        } else if (hoveringZone) {
            effectsCtx.clearRect(0, 0, effectsCtx.canvas.width, effectsCtx.canvas.height);
        
            currentRoom.zones.forEach(zones => {
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

        if (hoveringContent && hoveringZone){
            canvas.style.cursor = "pointer";
        } else {
            canvas.style.cursor = "default";
        }

        //draw coordinates in toggled mode
        if (isToggleActive) {
            effectsCtx.font = "32px Arial";
            effectsCtx.fillStyle = "red";
            effectsCtx.fillText(`(${x.toFixed(0)}, ${y.toFixed(0)})`, x + 10, y - 10);
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            isToggleActive = !isToggleActive;

            if (isToggleActive){
                drawPolygons(currentRoom.zones, "rgba(255, 0, 0, 0.2)");
                if (currentRoom.contents && Array.isArray(currentRoom.contents)) {
                    drawPolygons(currentRoom.contents, "rgba(0, 255, 0, 0.2)");
                }
            }
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
