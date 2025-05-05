const rooms = [
  {
    name: "begin",
    zones: {
        main: [
            { shape: [[1149,847],[770,842],[767,202],[1165,199]], nextRoom: "door-loods", nextView: "main" },

        ],
        reverse: [

        ],         
    },
    contents: {
        main: [
            { shape: [[1020,426],[1026,364],[913,367],[910,432]], src: "1", txt: "WIE ZIJN DE LOSLOPENDE MENSEN" },

        ],
        reverse: [

        ],       
    },
  },
  {
    name: "door-loods",
    zones: {
        main: [
          { shape: [[715,1075],[685,43],[1351,41],[1317,1075]], nextRoom: "entrance", nextView: "main" },
        ],
        reverse: [
          { shape: [[685,763],[657,557],[416,292],[1281,311],[1021,498],[958,786]], nextRoom: "begin", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "entrance",
    zones: {
        main: [
          { shape: [[364,821],[317,824],[272,143],[99,76],[160,829]], nextRoom: "door-gilles", nextView: "main" },
          { shape: [[889,942],[891,331],[1206,312],[1201,956]], nextRoom: "entrance-further", nextView: "main" },
        ],
        reverse: [
          { shape: [[673,1077],[604,61],[1376,58],[1351,1074]], nextRoom: "door-loods", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "door-gilles",
    zones: {
        main: [
          { shape: [[894,709],[873,210],[605,212],[635,722]], nextRoom: "recycle", nextView: "main" },
        ],
        reverse: [
          { shape: [[1574,909],[1602,22],[1906,22],[1915,1076],[1856,1077]], nextRoom: "entrance", nextView: "reverse" },
          { shape: [[225,29],[7,37],[5,1071],[146,1064],[308,914]], nextRoom: "entrance-further", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "recycle",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[1121,759],[1118,85],[764,85],[782,743]], nextRoom: "door-gilles", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "entrance-further",
    zones: {
        main: [
          { shape: [[536,733],[478,278],[301,249],[345,649],[455,773]], nextRoom: "door-vamir", nextView: "main" },
          { shape: [[1072,685],[1072,302],[1405,292],[1394,675]], nextRoom: "black-doors", nextView: "main" },
          { shape: [[1,255],[633,988],[336,1079],[7,1073]], nextRoom: "stairs-entrance-bottom", nextView: "main" },
          { shape: [[1555,311],[1836,321],[1836,798],[1508,712]], nextRoom: "stairs-house-bottom", nextView: "main" },
        ],
        reverse: [
          { shape: [[1741,1065],[1876,5],[1907,18],[1918,1075]], nextRoom: "door-gilles", nextView: "main" },
          { shape: [[1127,715],[1119,179],[778,176],[804,696]], nextRoom: "entrance", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "door-vamir",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[525,896],[462,218],[3,110],[1,1076],[382,1074]], nextRoom: "black-doors", nextView: "main" },
          { shape: [[562,729],[520,272],[842,274],[855,671]], nextRoom: "stairs-house-bottom", nextView: "main" },
          { shape: [[1190,860],[1204,271],[1397,264],[1328,946]], nextRoom: "middle-start", nextView: "main" },
          { shape: [[366,101],[355,0],[581,5],[581,120]], nextRoom: "stairs-house-top", nextView: "main" },
          { shape: [[1824,1061],[1813,117],[1905,106],[1904,1060]], nextRoom: "entrance-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "black-doors",
    zones: {
        main: [
          { shape: [[1017,1050],[1096,95],[210,35],[314,1067]], nextRoom: "black-doors-inside", nextView: "main" },
        ],
        reverse: [
          { shape: [[1423,645],[1427,349],[1361,205],[1215,205],[1213,382],[1314,441],[1295,647]], nextRoom: "entrance-further", nextView: "reverse" },
          { shape: [[1454,623],[1495,205],[1874,204],[1863,632]], nextRoom: "stairs-entrance-bottom", nextView: "main" },
          { shape: [[1787,193],[1706,7],[1358,2],[1382,198]], nextRoom: "stairs-entrance-middle", nextView: "main" },
          { shape: [[787,1002],[691,37],[4,35],[6,746],[133,1030]], nextRoom: "middle-start", nextView: "main" },
        ],         
    },
    contents: { 
        main: [

        ],
        reverse: [

        ],       
    },
  },
  {
    name: "black-doors-inside",
    zones: {
        main: [
          
        ],
        reverse: [
          { shape: [[847,987],[803,199],[451,182],[534,1008]], nextRoom: "middle-start", nextView: "main" },
          { shape: [[1284,697],[1272,468],[1224,336],[1111,341],[1127,634]], nextRoom: "entrance-further", nextView: "reverse" },
          { shape: [[1303,688],[1273,442],[1423,435],[1424,688]], nextRoom: "stairs-entrance-bottom", nextView: "main" },
          { shape: [[1265,434],[1191,197],[1366,187],[1424,299],[1440,425]], nextRoom: "stairs-entrance-middle", nextView: "main" },
        ],         
    },
    contents: { 
        main: [
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stairs-entrance-bottom",
    zones: {
        main: [
          { shape: [[658,982],[666,428],[171,409],[190,961]], nextRoom: "entrance-further", nextView: "reverse" },
          { shape: [[696,1057],[740,185],[1080,186],[1267,1053]], nextRoom: "stairs-entrance-middle", nextView: "main" },
          { shape: [[746,98],[742,6],[1081,9],[1062,97]], nextRoom: "stairs-entrance-top", nextView: "main" },
        ],
        reverse: [
          { shape: [[429,651],[286,52],[157,20],[320,790]], nextRoom: "door-vamir", nextView: "main" },
          { shape: [[1039,566],[1042,113],[1429,124],[1382,540]], nextRoom: "black-doors", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stairs-entrance-middle",
    zones: {
        main: [
          { shape: [[776,524],[797,1],[1347,6],[1421,511]], nextRoom: "stairs-entrance-top", nextView: "main" },
        ],
        reverse: [
          { shape: [[684,309],[594,37],[542,79],[654,397]], nextRoom: "door-vamir", nextView: "main" },
          { shape: [[1143,200],[1165,26],[1500,31],[1446,195]], nextRoom: "black-doors", nextView: "main" },
          { shape: [[1176,1033],[1231,802],[662,831],[701,1039]], nextRoom: "stairs-entrance-bottom", nextView: "reverse" },
          { shape: [[1228,1012],[1270,803],[1743,802],[1695,995]], nextRoom: "entrance-further", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stairs-entrance-top",
    zones: {
        main: [
          { shape: [[523,809],[470,333],[7,345],[4,822]], nextRoom: "up-left", nextView: "reverse" },
          { shape: [[1338,833],[1327,336],[1916,333],[1915,825]], nextRoom: "up-right", nextView: "main" },
        ],
        reverse: [
          { shape: [[597,257],[492,113],[512,15],[632,106]], nextRoom: "door-vamir", nextView: "main" },
          { shape: [[627,723],[603,646],[1039,661],[1075,751]], nextRoom: "stairs-entrance-bottom", nextView: "reverse" },
          { shape: [[595,1073],[595,773],[1048,776],[1070,1069]], nextRoom: "stairs-entrance-middle", nextView: "reverse" },
          { shape: [[1080,861],[1083,680],[1490,680],[1512,866]], nextRoom: "entrance-further", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stairs-house-bottom",
    zones: {
        main: [
          { shape: [[1005,897],[651,977],[399,110],[676,98],[1013,824]], nextRoom: "stairs-house-middle", nextView: "main" },
          { shape: [[1013,631],[930,626],[803,330],[1030,338]], nextRoom: "door-jan", nextView: "main" },
          { shape: [[407,94],[402,6],[781,5],[831,70]], nextRoom: "stairs-house-top", nextView: "main" },
          { shape: [[257,1076],[220,86],[1,72],[9,1076]], nextRoom: "black-doors", nextView: "main" },
          { shape: [[1915,624],[1772,651],[1795,336],[1913,330]], nextRoom: "tools", nextView: "main" },
          { shape: [[1905,642],[1828,658],[1824,1070],[1907,1074]], nextRoom: "middle-start", nextView: "main" },
        ],
        reverse: [
          { shape: [[1443,1059],[1569,44],[1805,47],[1918,34],[1910,1074]], nextRoom: "black-doors", nextView: "main" },
          { shape: [[1091,662],[1088,130],[778,126],[784,656]], nextRoom: "door-vamir", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stairs-house-middle",
    zones: {
        main: [
          { shape: [[1047,638],[992,8],[295,19],[259,663]], nextRoom: "stairs-house-top", nextView: "main" },
        ],
        reverse: [
          { shape: [[800,998],[731,693],[1441,685],[1342,1025]], nextRoom: "stairs-house-bottom", nextView: "reverse" },
          { shape: [[1869,218],[1647,232],[1423,945],[1468,1001],[1709,943],[1879,585]], nextRoom: "black-doors", nextView: "main" },
          { shape: [[1276,380],[1360,0],[1608,13],[1511,408]], nextRoom: "room", nextView: "door-vamir" },
          { shape: [[4,597],[597,301],[729,650],[564,1053],[11,1065]], nextRoom: "middle-start", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stairs-house-top",
    zones: {
        main: [
          { shape: [[1794,909],[1910,178],[1668,174],[1607,796]], nextRoom: "house-further", nextView: "main" },
        ],
        reverse: [
          { shape: [[1275,308],[1385,3],[1581,45],[1457,356]], nextRoom: "door-vamir", nextView: "main" },
          { shape: [[707,329],[781,579],[728,767],[251,871],[177,638]], nextRoom: "middle-start", nextView: "main" },
          { shape: [[1286,644],[1346,441],[1415,437],[1498,264],[1632,259],[1316,632],[1280,643]], nextRoom: "black-doors", nextView: "main" },
          { shape: [[866,741],[833,554],[1182,562],[1169,702]], nextRoom: "stairs-house-bottom", nextView: "reverse" },
          { shape: [[724,772],[3,948],[15,1065],[1910,1078],[1908,794],[1143,750]], nextRoom: "stairs-house-middle", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "middle-start",
    zones: {
        main: [
          { shape: [[1399,894],[1474,290],[1545,92],[1894,98],[1893,1057],[1607,1070]], nextRoom: "middle-middle", nextView: "main" },
          { shape: [[646,783],[580,258],[528,254],[367,384],[397,834]], nextRoom: "middle-further", nextView: "main" },
        ],
        reverse: [
          { shape: [[882,769],[907,163],[339,177],[369,736]], nextRoom: "black-doors", nextView: "main" },
          { shape: [[1905,491],[1918,7],[1478,18],[1355,607],[1559,599]], nextRoom: "stairs-house-bottom", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "middle-middle",
    zones: {
        main: [
          { shape: [[811,9],[1092,294],[1097,634],[919,726],[693,711],[583,252],[608,6]], nextRoom: "stairs-entrance-bottom", nextView: "main" },
        ],
        reverse: [
          { shape: [[556,807],[495,371],[640,271],[1500,252],[1616,353],[1567,538],[1451,598],[1404,840]], nextRoom: "tools", nextView: "main" },
          { shape: [[1907,302],[1773,425],[1781,867],[1894,922]], nextRoom: "middle-further", nextView: "main" },
          { shape: [[342,406],[378,818],[187,749],[92,746],[28,209],[201,205]], nextRoom: "hallway-jan", nextView: "main" },
          { shape: [[29,1067],[94,842],[12,14]], nextRoom: "middle-start", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "middle-further",
    zones: {
        main: [
          { shape: [[783,770],[819,162],[630,167],[426,391],[457,867]], nextRoom: "stove-start", nextView: "main" },
        ],
        reverse: [
          { shape: [[479,985],[363,436],[11,318],[1,1060],[289,1064]], nextRoom: "middle-middle", nextView: "main" },
          { shape: [[1411,807],[1430,331],[1640,176],[1918,178],[1901,840]], nextRoom: "middle-start", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "tools",
    zones: {
        main: [
          
        ],
        reverse: [
          { shape: [[497,776],[505,412],[607,343],[677,786]], nextRoom: "middle-middle", nextView: "main" },
          { shape: [[1627,783],[1635,367],[1779,157],[1893,136],[1911,833]], nextRoom: "middle-start", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stove-start",
    zones: {
        main: [
          { shape: [[1096,871],[1202,18],[1499,15],[1542,967]], nextRoom: "stove-right", nextView: "main" },
          { shape: [[5,2],[489,15],[544,687],[44,780]], nextRoom: "stove-middle", nextView: "main" },
        ],
        reverse: [
          { shape: [[793,884],[731,22],[1218,354],[1221,1003]], nextRoom: "middle-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stove-right",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[406,981],[292,105],[13,82],[29,1049]], nextRoom: "stove-start", nextView: "reverse" },
          { shape: [[945,644],[909,10],[1828,12],[1696,579]], nextRoom: "stove-left", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stove-middle",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[298,866],[142,11],[5,9],[10,1017]], nextRoom: "stove-right", nextView: "main" },
          { shape: [[1712,817],[1843,17],[1917,9],[1887,947]], nextRoom: "stove-left", nextView: "main" },
          { shape: [[1191,581],[1265,138],[1091,141],[1060,564]], nextRoom: "stove-start", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stove-left",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[538,785],[395,19],[16,17],[43,1028]], nextRoom: "stove-middle", nextView: "main" },
          { shape: [[1177,691],[1088,10],[1884,24],[1893,727],[1411,696]], nextRoom: "stove-right", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "hallway-jan",
    zones: {
        main: [
          { shape: [[66,546],[206,513],[254,471],[276,216],[207,4],[16,12],[8,353]], nextRoom: "stairs-house-middle", nextView: "main" },
          { shape: [[867,578],[756,58],[1105,36],[1138,568]], nextRoom: "door-jan", nextView: "main" },
        ],
        reverse: [
          { shape: [[994,676],[1022,239],[1191,155],[1249,156],[1495,435],[1467,730]], nextRoom: "middle-middle", nextView: "main" },
          { shape: [[1795,926],[1873,237],[1918,223],[1907,1029]], nextRoom: "middle-start", nextView: "reverse" },
          { shape: [[127,730],[73,310],[-5,421],[15,810]], nextRoom: "middle-further", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "door-jan",
    zones: {
        main: [
          { shape: [[997,714],[876,859],[761,47],[964,35]], nextRoom: "door-magazine", nextView: "main" },
        ],
        reverse: [
          { shape: [[732,832],[966,754],[828,144],[662,90]], nextRoom: "hallway-jan", nextView: "reverse" },
          { shape: [[851,142],[1093,148],[1127,540],[942,565]], nextRoom: "stairs-house-bottom", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "door-magazine",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[1420,908],[1422,22],[1835,19],[1687,987]], nextRoom: "door-jan", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },

  {
    name: "house-further",
    zones: {
        main: [
          { shape: [[1318,238],[1586,245],[1550,875],[1328,836]], nextRoom: "square-right-1", nextView: "main" },
          { shape: [[1304,613],[1246,189],[829,182],[717,229],[757,602]], nextRoom: "square-left-1", nextView: "main" },
        ],
        reverse: [
          { shape: [[527,740],[372,126],[223,94],[431,881]], nextRoom: "stairs-house-top", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "square-right-1",
    zones: {
        main: [
          { shape: [[1295,948],[1305,27],[1806,20],[1737,933]], nextRoom: "square-right-2", nextView: "main" },
        ],
        reverse: [
          { shape: [[531,769],[481,111],[690,128],[762,726]], nextRoom: "house-further", nextView: "reverse" },
          { shape: [[1463,914],[1399,433],[1660,439],[1808,561],[1764,942]], nextRoom: "square-left-1", nextView: "main" },
          
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "square-right-2",
    zones: {
        main: [
          { shape: [[540,702],[426,127],[28,182],[245,796]], nextRoom: "square-right-3", nextView: "main" },
        ],
        reverse: [
          { shape: [[358,1065],[327,836],[662,814],[726,1042]], nextRoom: "stairs-house-middle", nextView: "main" },
          { shape: [[305,719],[239,330],[562,316],[614,679]], nextRoom: "stairs-house-top", nextView: "main" },
          { shape: [[1182,540],[1671,520],[1583,881],[1210,887]], nextRoom: "square-right-1", nextView: "reverse" },
          { shape: [[1261,527],[1240,164],[1393,171],[1405,518]], nextRoom: "house-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "square-right-3",
    zones: {
        main: [
          { shape: [[1122,501],[1062,19],[1533,28],[1495,494]], nextRoom: "square-to-up", nextView: "main" },
          { shape: [[434,678],[253,278],[12,301],[18,637]], nextRoom: "square-left-3", nextView: "reverse" },
        ],
        reverse: [
          { shape: [[671,825],[577,204],[160,212],[259,897]], nextRoom: "square-right-2", nextView: "reverse" },
          { shape: [[1437,673],[1419,298],[1728,285],[1842,343],[1789,686],[1547,739]], nextRoom: "square-right-1", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "square-left-1",
    zones: {
        main: [
          { shape: [[764,813],[721,271],[501,233],[613,752]], nextRoom: "square-left-2", nextView: "main" },
          { shape: [[1572,288],[1795,305],[1732,623],[1509,577]], nextRoom: "square-left-3", nextView: "main" },
        ],
        reverse: [
          { shape: [[1476,587],[1547,32],[1885,52],[1899,706]], nextRoom: "house-further", nextView: "reverse" },
          { shape: [[312,863],[213,261],[17,318],[9,932]], nextRoom: "square-right-1", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "square-left-2",
    zones: {
        main: [
          { shape: [[1056,758],[1045,320],[1380,312],[1385,739]], nextRoom: "square-left-3", nextView: "main" },
        ],
        reverse: [
          { shape: [[347,870],[317,363],[7,386],[56,869]], nextRoom: "square-left-1", nextView: "main" },
          { shape: [[784,597],[814,157],[1025,205],[978,608]], nextRoom: "house-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "square-left-3",
    zones: {
        main: [
          { shape: [[1548,680],[1658,196],[1872,333],[1709,893]], nextRoom: "square-right-3", nextView: "reverse" },
          { shape: [[452,644],[325,13],[89,41],[283,737]], nextRoom: "square-to-up", nextView: "main" },
        ],
        reverse: [
          { shape: [[1023,1019],[1056,478],[1563,518],[1517,1030]], nextRoom: "square-left-2", nextView: "reverse" },
          { shape: [[18,146],[196,182],[294,608],[121,621]], nextRoom: "house-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "square-to-up",
    zones: {
        main: [
          { shape: [[731,883],[709,16],[1313,88],[1262,850]], nextRoom: "up-left-further", nextView: "main" },
        ],
        reverse: [
          { shape: [[506,921],[437,505],[53,434],[185,997]], nextRoom: "square-right-3", nextView: "reverse" },
          { shape: [[1776,561],[1421,627],[1454,1017],[1662,1068],[1905,1066],[1916,649]], nextRoom: "square-left-3", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "up-left",
    zones: {
        main: [
          { shape: [[1190,719],[1140,303],[1629,342],[1537,715]], nextRoom: "up-right", nextView: "main" },
          { shape: [[1567,1038],[1651,642],[1890,670],[1871,1055]], nextRoom: "stairs-entrance-top", nextView: "reverse" },
        ],
        reverse: [
          { shape: [[31,577],[265,476],[542,1055],[25,1064]], nextRoom: "stairs-entrance-top", nextView: "reverse" },
          { shape: [[737,725],[646,272],[1141,278],[1100,709]], nextRoom: "up-left-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "up-left-further",
    zones: {
        main: [
          { shape: [[589,279],[1268,276],[1240,821],[646,821]], nextRoom: "up-left", nextView: "main" },
        ],
        reverse: [
          { shape: [[92,499],[621,376],[717,838],[457,1058],[39,1059]], nextRoom: "square-to-up", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "up-right",
    zones: {
        main: [
          { shape: [[628,200],[388,289],[657,1044],[740,954]], nextRoom: "up-split-left", nextView: "main" },
          { shape: [[1171,927],[1336,38],[1674,320],[1380,1061]], nextRoom: "up-split-right", nextView: "main" },
        ],
        reverse: [
          { shape: [[1144,552],[1180,282],[918,266],[981,555]], nextRoom: "up-left", nextView: "reverse" },
          { shape: [[957,565],[913,263],[797,307],[901,642]], nextRoom: "stairs-entrance-top", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "up-split-left",
    zones: {
        main: [
        ],
        reverse: [
          { shape: [[1231,1074],[1259,44],[845,48],[580,1061]], nextRoom: "stairs-kraai-middle", nextView: "main" },
          { shape: [[1347,966],[1418,213],[1767,220],[1751,1053]], nextRoom: "up-split-right", nextView: "main" },        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "up-split-right",
    zones: {
        main: [
          { shape: [[396,930],[284,316],[872,341],[919,902]], nextRoom: "jan-kitchen-start", nextView: "main" },
        ],
        reverse: [
          { shape: [[1237,789],[1261,217],[1501,236],[1421,903]], nextRoom: "up-split-left", nextView: "main" },
          { shape: [[929,795],[842,329],[605,393],[713,993]], nextRoom: "up-right", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stairs-kraai-middle",
    zones: {
        main: [
          { shape: [[1476,532],[1402,25],[702,33],[776,518]], nextRoom: "stairs-kraai-top", nextView: "main" },
        ],
        reverse: [
          { shape: [[507,394],[470,47],[973,50],[1070,564],[599,564]], nextRoom: "up-split-left", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "stairs-kraai-top",
    zones: {
        main: [
          { shape: [[1078,836],[1094,113],[860,54],[872,1026]], nextRoom: "kraai-entrance", nextView: "main" },
          { shape: [[1188,716],[1190,416],[1467,461],[1484,770]], nextRoom: "kraai-corner", nextView: "main" },
        ],
        reverse: [
          { shape: [[500,666],[761,867],[783,993],[1044,982],[1111,752],[1445,621],[1382,1071],[523,1065]], nextRoom: "stairs-kraai-middle", nextView: "reverse" },
          { shape: [[784,913],[735,494],[1036,505],[1034,897]], nextRoom: "up-split-left", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  }, 
  {
    name: "kraai-corner",
    zones: {
        main: [
          { shape: [[1050,764],[1055,354],[1259,328],[1509,473],[1445,874]], nextRoom: "flonder-right-further", nextView: "main" },
        ],
        reverse: [
          { shape: [[1023,887],[1015,14],[1662,14],[1567,1068]], nextRoom: "kraai-entrance", nextView: "reverse" },
          { shape: [[775,685],[728,369],[493,361],[503,731]], nextRoom: "stairs-kraai-top", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "kraai-entrance",
    zones: {
        main: [
          { shape: [[1792,1051],[1829,750],[1906,752],[1907,1064]], nextRoom: "kraai-corner", nextView: "main" },
        ],
        reverse: [
          { shape: [[553,866],[507,367],[50,417],[95,926]], nextRoom: "stairs-kraai-top", nextView: "reverse" },
          { shape: [[1377,879],[1481,355],[1897,355],[1833,938]], nextRoom: "kraai-left", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "kraai-left",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[1456,955],[1520,70],[1047,60],[1092,877]], nextRoom: "kraai-entrance", nextView: "reverse" },
          { shape: [[580,775],[743,665],[467,639],[328,756]], nextRoom: "kraai-corner", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "jan-kitchen-start",
    zones: {
        main: [
          { shape: [[1383,721],[1468,106],[1904,154],[1860,794]], nextRoom: "jan-kitchen-further", nextView: "main" },
          { shape: [[539,708],[465,127],[15,203],[119,825]], nextRoom: "altar", nextView: "main" },
        ],
        reverse: [
          { shape: [[1374,1013],[1371,176],[1842,238],[1844,1054]], nextRoom: "up-split-right", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "jan-kitchen-further",
    zones: {
        main: [
          { shape: [[713,787],[713,216],[443,257],[514,943]], nextRoom: "flonder-left", nextView: "main" },
          { shape: [[976,795],[1011,265],[1401,299],[1270,742],[1048,749]], nextRoom: "flonder-right", nextView: "main" },
        ],
        reverse: [
          { shape: [[625,721],[558,258],[347,298],[470,871]], nextRoom: "jan-kitchen-start", nextView: "reverse" },
          { shape: [[1427,1015],[1493,762],[1784,722],[1874,953],[1784,1071],[1426,1070]], nextRoom: "altar", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "altar",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[1504,715],[1630,211],[1905,245],[1770,719]], nextRoom: "jan-kitchen-start", nextView: "reverse" },
          { shape: [[28,1058],[95,877],[70,190],[15,173]], nextRoom: "jan-kitchen-further", nextView: "main" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "flonder-left",
    zones: {
        main: [
          { shape: [[424,658],[232,35],[23,84],[3,791],[31,861]], nextRoom: "flonder-left-further", nextView: "main" },
        ],
        reverse: [
          { shape: [[72,968],[303,863],[179,204],[22,160],[6,678]], nextRoom: "flonder-right", nextView: "main" },
          { shape: [[1199,956],[1287,243],[1512,276],[1424,972]], nextRoom: "jan-kitchen-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "flonder-left-further",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[1028,846],[1080,320],[305,325],[356,946]], nextRoom: "flonder-left", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "flonder-right",
    zones: {
        main: [
          { shape: [[831,1014],[816,425],[1432,355],[1471,913]], nextRoom: "flonder-right-further", nextView: "main" },
        ],
        reverse: [
          { shape: [[1077,685],[1136,154],[702,178],[729,691]], nextRoom: "jan-kitchen-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
  {
    name: "flonder-right-further",
    zones: {
        main: [

        ],
        reverse: [
          { shape: [[1130,926],[1157,494],[1580,455],[1503,861]], nextRoom: "jan-kitchen-further", nextView: "reverse" },
        ],         
    },
    contents: {
        main: [
        
        ],
        reverse: [

        ],       
    },
  },
];