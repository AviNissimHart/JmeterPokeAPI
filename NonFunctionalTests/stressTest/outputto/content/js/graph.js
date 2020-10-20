/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 317.0, "minX": 0.0, "maxY": 5226.0, "series": [{"data": [[0.0, 317.0], [0.1, 317.0], [0.2, 317.0], [0.3, 317.0], [0.4, 320.0], [0.5, 320.0], [0.6, 320.0], [0.7, 324.0], [0.8, 324.0], [0.9, 324.0], [1.0, 324.0], [1.1, 346.0], [1.2, 346.0], [1.3, 346.0], [1.4, 374.0], [1.5, 374.0], [1.6, 374.0], [1.7, 374.0], [1.8, 385.0], [1.9, 385.0], [2.0, 385.0], [2.1, 386.0], [2.2, 386.0], [2.3, 386.0], [2.4, 391.0], [2.5, 391.0], [2.6, 391.0], [2.7, 391.0], [2.8, 393.0], [2.9, 393.0], [3.0, 393.0], [3.1, 394.0], [3.2, 394.0], [3.3, 394.0], [3.4, 394.0], [3.5, 397.0], [3.6, 397.0], [3.7, 397.0], [3.8, 415.0], [3.9, 415.0], [4.0, 415.0], [4.1, 415.0], [4.2, 417.0], [4.3, 417.0], [4.4, 417.0], [4.5, 418.0], [4.6, 418.0], [4.7, 418.0], [4.8, 434.0], [4.9, 434.0], [5.0, 434.0], [5.1, 434.0], [5.2, 446.0], [5.3, 446.0], [5.4, 446.0], [5.5, 447.0], [5.6, 447.0], [5.7, 447.0], [5.8, 447.0], [5.9, 448.0], [6.0, 448.0], [6.1, 448.0], [6.2, 452.0], [6.3, 452.0], [6.4, 452.0], [6.5, 452.0], [6.6, 478.0], [6.7, 478.0], [6.8, 478.0], [6.9, 493.0], [7.0, 493.0], [7.1, 493.0], [7.2, 494.0], [7.3, 494.0], [7.4, 494.0], [7.5, 494.0], [7.6, 503.0], [7.7, 503.0], [7.8, 503.0], [7.9, 505.0], [8.0, 505.0], [8.1, 505.0], [8.2, 505.0], [8.3, 508.0], [8.4, 508.0], [8.5, 508.0], [8.6, 514.0], [8.7, 514.0], [8.8, 514.0], [8.9, 514.0], [9.0, 525.0], [9.1, 525.0], [9.2, 525.0], [9.3, 533.0], [9.4, 533.0], [9.5, 533.0], [9.6, 536.0], [9.7, 536.0], [9.8, 536.0], [9.9, 536.0], [10.0, 539.0], [10.1, 539.0], [10.2, 539.0], [10.3, 540.0], [10.4, 540.0], [10.5, 540.0], [10.6, 540.0], [10.7, 549.0], [10.8, 549.0], [10.9, 549.0], [11.0, 552.0], [11.1, 552.0], [11.2, 552.0], [11.3, 552.0], [11.4, 556.0], [11.5, 556.0], [11.6, 556.0], [11.7, 568.0], [11.8, 568.0], [11.9, 568.0], [12.0, 606.0], [12.1, 606.0], [12.2, 606.0], [12.3, 606.0], [12.4, 615.0], [12.5, 615.0], [12.6, 615.0], [12.7, 654.0], [12.8, 654.0], [12.9, 654.0], [13.0, 654.0], [13.1, 655.0], [13.2, 655.0], [13.3, 655.0], [13.4, 673.0], [13.5, 673.0], [13.6, 673.0], [13.7, 693.0], [13.8, 693.0], [13.9, 693.0], [14.0, 693.0], [14.1, 698.0], [14.2, 698.0], [14.3, 698.0], [14.4, 702.0], [14.5, 702.0], [14.6, 702.0], [14.7, 702.0], [14.8, 702.0], [14.9, 702.0], [15.0, 702.0], [15.1, 706.0], [15.2, 706.0], [15.3, 706.0], [15.4, 706.0], [15.5, 710.0], [15.6, 710.0], [15.7, 710.0], [15.8, 713.0], [15.9, 713.0], [16.0, 713.0], [16.1, 720.0], [16.2, 720.0], [16.3, 720.0], [16.4, 720.0], [16.5, 725.0], [16.6, 725.0], [16.7, 725.0], [16.8, 734.0], [16.9, 734.0], [17.0, 734.0], [17.1, 734.0], [17.2, 741.0], [17.3, 741.0], [17.4, 741.0], [17.5, 745.0], [17.6, 745.0], [17.7, 745.0], [17.8, 745.0], [17.9, 746.0], [18.0, 746.0], [18.1, 746.0], [18.2, 749.0], [18.3, 749.0], [18.4, 749.0], [18.5, 757.0], [18.6, 757.0], [18.7, 757.0], [18.8, 757.0], [18.9, 786.0], [19.0, 786.0], [19.1, 786.0], [19.2, 789.0], [19.3, 789.0], [19.4, 789.0], [19.5, 789.0], [19.6, 791.0], [19.7, 791.0], [19.8, 791.0], [19.9, 794.0], [20.0, 794.0], [20.1, 794.0], [20.2, 794.0], [20.3, 797.0], [20.4, 797.0], [20.5, 797.0], [20.6, 798.0], [20.7, 798.0], [20.8, 798.0], [20.9, 799.0], [21.0, 799.0], [21.1, 799.0], [21.2, 799.0], [21.3, 802.0], [21.4, 802.0], [21.5, 802.0], [21.6, 803.0], [21.7, 803.0], [21.8, 803.0], [21.9, 803.0], [22.0, 809.0], [22.1, 809.0], [22.2, 809.0], [22.3, 816.0], [22.4, 816.0], [22.5, 816.0], [22.6, 816.0], [22.7, 816.0], [22.8, 816.0], [22.9, 816.0], [23.0, 818.0], [23.1, 818.0], [23.2, 818.0], [23.3, 827.0], [23.4, 827.0], [23.5, 827.0], [23.6, 827.0], [23.7, 827.0], [23.8, 827.0], [23.9, 827.0], [24.0, 827.0], [24.1, 827.0], [24.2, 827.0], [24.3, 827.0], [24.4, 831.0], [24.5, 831.0], [24.6, 831.0], [24.7, 835.0], [24.8, 835.0], [24.9, 835.0], [25.0, 845.0], [25.1, 845.0], [25.2, 845.0], [25.3, 845.0], [25.4, 849.0], [25.5, 849.0], [25.6, 849.0], [25.7, 851.0], [25.8, 851.0], [25.9, 851.0], [26.0, 851.0], [26.1, 853.0], [26.2, 853.0], [26.3, 853.0], [26.4, 853.0], [26.5, 853.0], [26.6, 853.0], [26.7, 853.0], [26.8, 856.0], [26.9, 856.0], [27.0, 856.0], [27.1, 860.0], [27.2, 860.0], [27.3, 860.0], [27.4, 861.0], [27.5, 861.0], [27.6, 861.0], [27.7, 861.0], [27.8, 865.0], [27.9, 865.0], [28.0, 865.0], [28.1, 871.0], [28.2, 871.0], [28.3, 871.0], [28.4, 871.0], [28.5, 871.0], [28.6, 871.0], [28.7, 871.0], [28.8, 873.0], [28.9, 873.0], [29.0, 873.0], [29.1, 873.0], [29.2, 876.0], [29.3, 876.0], [29.4, 876.0], [29.5, 884.0], [29.6, 884.0], [29.7, 884.0], [29.8, 886.0], [29.9, 886.0], [30.0, 886.0], [30.1, 886.0], [30.2, 887.0], [30.3, 887.0], [30.4, 887.0], [30.5, 889.0], [30.6, 889.0], [30.7, 889.0], [30.8, 889.0], [30.9, 889.0], [31.0, 889.0], [31.1, 889.0], [31.2, 890.0], [31.3, 890.0], [31.4, 890.0], [31.5, 890.0], [31.6, 894.0], [31.7, 894.0], [31.8, 894.0], [31.9, 895.0], [32.0, 895.0], [32.1, 895.0], [32.2, 896.0], [32.3, 896.0], [32.4, 896.0], [32.5, 896.0], [32.6, 903.0], [32.7, 903.0], [32.8, 903.0], [32.9, 905.0], [33.0, 905.0], [33.1, 905.0], [33.2, 905.0], [33.3, 907.0], [33.4, 907.0], [33.5, 907.0], [33.6, 908.0], [33.7, 908.0], [33.8, 908.0], [33.9, 908.0], [34.0, 909.0], [34.1, 909.0], [34.2, 909.0], [34.3, 909.0], [34.4, 909.0], [34.5, 909.0], [34.6, 913.0], [34.7, 913.0], [34.8, 913.0], [34.9, 913.0], [35.0, 915.0], [35.1, 915.0], [35.2, 915.0], [35.3, 916.0], [35.4, 916.0], [35.5, 916.0], [35.6, 916.0], [35.7, 917.0], [35.8, 917.0], [35.9, 917.0], [36.0, 920.0], [36.1, 920.0], [36.2, 920.0], [36.3, 920.0], [36.4, 922.0], [36.5, 922.0], [36.6, 922.0], [36.7, 926.0], [36.8, 926.0], [36.9, 926.0], [37.0, 933.0], [37.1, 933.0], [37.2, 933.0], [37.3, 933.0], [37.4, 935.0], [37.5, 935.0], [37.6, 935.0], [37.7, 942.0], [37.8, 942.0], [37.9, 942.0], [38.0, 942.0], [38.1, 944.0], [38.2, 944.0], [38.3, 944.0], [38.4, 955.0], [38.5, 955.0], [38.6, 955.0], [38.7, 967.0], [38.8, 967.0], [38.9, 967.0], [39.0, 967.0], [39.1, 974.0], [39.2, 974.0], [39.3, 974.0], [39.4, 980.0], [39.5, 980.0], [39.6, 980.0], [39.7, 980.0], [39.8, 987.0], [39.9, 987.0], [40.0, 987.0], [40.1, 988.0], [40.2, 988.0], [40.3, 988.0], [40.4, 988.0], [40.5, 991.0], [40.6, 991.0], [40.7, 991.0], [40.8, 993.0], [40.9, 993.0], [41.0, 993.0], [41.1, 993.0], [41.2, 993.0], [41.3, 993.0], [41.4, 993.0], [41.5, 1000.0], [41.6, 1000.0], [41.7, 1000.0], [41.8, 1008.0], [41.9, 1008.0], [42.0, 1008.0], [42.1, 1008.0], [42.2, 1010.0], [42.3, 1010.0], [42.4, 1010.0], [42.5, 1014.0], [42.6, 1014.0], [42.7, 1014.0], [42.8, 1014.0], [42.9, 1016.0], [43.0, 1016.0], [43.1, 1016.0], [43.2, 1031.0], [43.3, 1031.0], [43.4, 1031.0], [43.5, 1036.0], [43.6, 1036.0], [43.7, 1036.0], [43.8, 1036.0], [43.9, 1036.0], [44.0, 1036.0], [44.1, 1036.0], [44.2, 1038.0], [44.3, 1038.0], [44.4, 1038.0], [44.5, 1038.0], [44.6, 1042.0], [44.7, 1042.0], [44.8, 1042.0], [44.9, 1042.0], [45.0, 1042.0], [45.1, 1042.0], [45.2, 1042.0], [45.3, 1042.0], [45.4, 1042.0], [45.5, 1042.0], [45.6, 1042.0], [45.7, 1042.0], [45.8, 1042.0], [45.9, 1044.0], [46.0, 1044.0], [46.1, 1044.0], [46.2, 1044.0], [46.3, 1054.0], [46.4, 1054.0], [46.5, 1054.0], [46.6, 1055.0], [46.7, 1055.0], [46.8, 1055.0], [46.9, 1055.0], [47.0, 1057.0], [47.1, 1057.0], [47.2, 1057.0], [47.3, 1057.0], [47.4, 1057.0], [47.5, 1057.0], [47.6, 1057.0], [47.7, 1057.0], [47.8, 1057.0], [47.9, 1057.0], [48.0, 1058.0], [48.1, 1058.0], [48.2, 1058.0], [48.3, 1062.0], [48.4, 1062.0], [48.5, 1062.0], [48.6, 1062.0], [48.7, 1078.0], [48.8, 1078.0], [48.9, 1078.0], [49.0, 1085.0], [49.1, 1085.0], [49.2, 1085.0], [49.3, 1085.0], [49.4, 1088.0], [49.5, 1088.0], [49.6, 1088.0], [49.7, 1093.0], [49.8, 1093.0], [49.9, 1093.0], [50.0, 1094.0], [50.1, 1094.0], [50.2, 1094.0], [50.3, 1094.0], [50.4, 1098.0], [50.5, 1098.0], [50.6, 1098.0], [50.7, 1126.0], [50.8, 1126.0], [50.9, 1126.0], [51.0, 1126.0], [51.1, 1128.0], [51.2, 1128.0], [51.3, 1128.0], [51.4, 1138.0], [51.5, 1138.0], [51.6, 1138.0], [51.7, 1138.0], [51.8, 1147.0], [51.9, 1147.0], [52.0, 1147.0], [52.1, 1150.0], [52.2, 1150.0], [52.3, 1150.0], [52.4, 1159.0], [52.5, 1159.0], [52.6, 1159.0], [52.7, 1159.0], [52.8, 1163.0], [52.9, 1163.0], [53.0, 1163.0], [53.1, 1163.0], [53.2, 1163.0], [53.3, 1163.0], [53.4, 1163.0], [53.5, 1166.0], [53.6, 1166.0], [53.7, 1166.0], [53.8, 1176.0], [53.9, 1176.0], [54.0, 1176.0], [54.1, 1176.0], [54.2, 1178.0], [54.3, 1178.0], [54.4, 1178.0], [54.5, 1199.0], [54.6, 1199.0], [54.7, 1199.0], [54.8, 1199.0], [54.9, 1199.0], [55.0, 1199.0], [55.1, 1199.0], [55.2, 1201.0], [55.3, 1201.0], [55.4, 1201.0], [55.5, 1229.0], [55.6, 1229.0], [55.7, 1229.0], [55.8, 1229.0], [55.9, 1235.0], [56.0, 1235.0], [56.1, 1235.0], [56.2, 1243.0], [56.3, 1243.0], [56.4, 1243.0], [56.5, 1243.0], [56.6, 1249.0], [56.7, 1249.0], [56.8, 1249.0], [56.9, 1251.0], [57.0, 1251.0], [57.1, 1251.0], [57.2, 1260.0], [57.3, 1260.0], [57.4, 1260.0], [57.5, 1260.0], [57.6, 1276.0], [57.7, 1276.0], [57.8, 1276.0], [57.9, 1280.0], [58.0, 1280.0], [58.1, 1280.0], [58.2, 1280.0], [58.3, 1284.0], [58.4, 1284.0], [58.5, 1284.0], [58.6, 1286.0], [58.7, 1286.0], [58.8, 1286.0], [58.9, 1286.0], [59.0, 1288.0], [59.1, 1288.0], [59.2, 1288.0], [59.3, 1292.0], [59.4, 1292.0], [59.5, 1292.0], [59.6, 1297.0], [59.7, 1297.0], [59.8, 1297.0], [59.9, 1297.0], [60.0, 1297.0], [60.1, 1297.0], [60.2, 1297.0], [60.3, 1299.0], [60.4, 1299.0], [60.5, 1299.0], [60.6, 1299.0], [60.7, 1306.0], [60.8, 1306.0], [60.9, 1306.0], [61.0, 1307.0], [61.1, 1307.0], [61.2, 1307.0], [61.3, 1307.0], [61.4, 1315.0], [61.5, 1315.0], [61.6, 1315.0], [61.7, 1318.0], [61.8, 1318.0], [61.9, 1318.0], [62.0, 1322.0], [62.1, 1322.0], [62.2, 1322.0], [62.3, 1322.0], [62.4, 1324.0], [62.5, 1324.0], [62.6, 1324.0], [62.7, 1325.0], [62.8, 1325.0], [62.9, 1325.0], [63.0, 1325.0], [63.1, 1333.0], [63.2, 1333.0], [63.3, 1333.0], [63.4, 1334.0], [63.5, 1334.0], [63.6, 1334.0], [63.7, 1336.0], [63.8, 1336.0], [63.9, 1336.0], [64.0, 1336.0], [64.1, 1341.0], [64.2, 1341.0], [64.3, 1341.0], [64.4, 1347.0], [64.5, 1347.0], [64.6, 1347.0], [64.7, 1347.0], [64.8, 1349.0], [64.9, 1349.0], [65.0, 1349.0], [65.1, 1364.0], [65.2, 1364.0], [65.3, 1364.0], [65.4, 1364.0], [65.5, 1365.0], [65.6, 1365.0], [65.7, 1365.0], [65.8, 1366.0], [65.9, 1366.0], [66.0, 1366.0], [66.1, 1373.0], [66.2, 1373.0], [66.3, 1373.0], [66.4, 1373.0], [66.5, 1374.0], [66.6, 1374.0], [66.7, 1374.0], [66.8, 1376.0], [66.9, 1376.0], [67.0, 1376.0], [67.1, 1376.0], [67.2, 1378.0], [67.3, 1378.0], [67.4, 1378.0], [67.5, 1379.0], [67.6, 1379.0], [67.7, 1379.0], [67.8, 1379.0], [67.9, 1386.0], [68.0, 1386.0], [68.1, 1386.0], [68.2, 1395.0], [68.3, 1395.0], [68.4, 1395.0], [68.5, 1398.0], [68.6, 1398.0], [68.7, 1398.0], [68.8, 1398.0], [68.9, 1406.0], [69.0, 1406.0], [69.1, 1406.0], [69.2, 1407.0], [69.3, 1407.0], [69.4, 1407.0], [69.5, 1407.0], [69.6, 1412.0], [69.7, 1412.0], [69.8, 1412.0], [69.9, 1416.0], [70.0, 1416.0], [70.1, 1416.0], [70.2, 1416.0], [70.3, 1424.0], [70.4, 1424.0], [70.5, 1424.0], [70.6, 1426.0], [70.7, 1426.0], [70.8, 1426.0], [70.9, 1427.0], [71.0, 1427.0], [71.1, 1427.0], [71.2, 1427.0], [71.3, 1447.0], [71.4, 1447.0], [71.5, 1447.0], [71.6, 1449.0], [71.7, 1449.0], [71.8, 1449.0], [71.9, 1449.0], [72.0, 1451.0], [72.1, 1451.0], [72.2, 1451.0], [72.3, 1469.0], [72.4, 1469.0], [72.5, 1469.0], [72.6, 1469.0], [72.7, 1471.0], [72.8, 1471.0], [72.9, 1471.0], [73.0, 1473.0], [73.1, 1473.0], [73.2, 1473.0], [73.3, 1475.0], [73.4, 1475.0], [73.5, 1475.0], [73.6, 1475.0], [73.7, 1486.0], [73.8, 1486.0], [73.9, 1486.0], [74.0, 1488.0], [74.1, 1488.0], [74.2, 1488.0], [74.3, 1488.0], [74.4, 1489.0], [74.5, 1489.0], [74.6, 1489.0], [74.7, 1494.0], [74.8, 1494.0], [74.9, 1494.0], [75.0, 1498.0], [75.1, 1498.0], [75.2, 1498.0], [75.3, 1498.0], [75.4, 1500.0], [75.5, 1500.0], [75.6, 1500.0], [75.7, 1504.0], [75.8, 1504.0], [75.9, 1504.0], [76.0, 1504.0], [76.1, 1509.0], [76.2, 1509.0], [76.3, 1509.0], [76.4, 1511.0], [76.5, 1511.0], [76.6, 1511.0], [76.7, 1511.0], [76.8, 1511.0], [76.9, 1511.0], [77.0, 1511.0], [77.1, 1518.0], [77.2, 1518.0], [77.3, 1518.0], [77.4, 1528.0], [77.5, 1528.0], [77.6, 1528.0], [77.7, 1528.0], [77.8, 1536.0], [77.9, 1536.0], [78.0, 1536.0], [78.1, 1559.0], [78.2, 1559.0], [78.3, 1559.0], [78.4, 1559.0], [78.5, 1581.0], [78.6, 1581.0], [78.7, 1581.0], [78.8, 1600.0], [78.9, 1600.0], [79.0, 1600.0], [79.1, 1600.0], [79.2, 1605.0], [79.3, 1605.0], [79.4, 1605.0], [79.5, 1620.0], [79.6, 1620.0], [79.7, 1620.0], [79.8, 1628.0], [79.9, 1628.0], [80.0, 1628.0], [80.1, 1628.0], [80.2, 1631.0], [80.3, 1631.0], [80.4, 1631.0], [80.5, 1638.0], [80.6, 1638.0], [80.7, 1638.0], [80.8, 1638.0], [80.9, 1653.0], [81.0, 1653.0], [81.1, 1653.0], [81.2, 1655.0], [81.3, 1655.0], [81.4, 1655.0], [81.5, 1655.0], [81.6, 1664.0], [81.7, 1664.0], [81.8, 1664.0], [81.9, 1680.0], [82.0, 1680.0], [82.1, 1680.0], [82.2, 1681.0], [82.3, 1681.0], [82.4, 1681.0], [82.5, 1681.0], [82.6, 1721.0], [82.7, 1721.0], [82.8, 1721.0], [82.9, 1727.0], [83.0, 1727.0], [83.1, 1727.0], [83.2, 1727.0], [83.3, 1734.0], [83.4, 1734.0], [83.5, 1734.0], [83.6, 1758.0], [83.7, 1758.0], [83.8, 1758.0], [83.9, 1758.0], [84.0, 1766.0], [84.1, 1766.0], [84.2, 1766.0], [84.3, 1768.0], [84.4, 1768.0], [84.5, 1768.0], [84.6, 1778.0], [84.7, 1778.0], [84.8, 1778.0], [84.9, 1778.0], [85.0, 1790.0], [85.1, 1790.0], [85.2, 1790.0], [85.3, 1799.0], [85.4, 1799.0], [85.5, 1799.0], [85.6, 1799.0], [85.7, 1803.0], [85.8, 1803.0], [85.9, 1803.0], [86.0, 1808.0], [86.1, 1808.0], [86.2, 1808.0], [86.3, 1808.0], [86.4, 1813.0], [86.5, 1813.0], [86.6, 1813.0], [86.7, 1855.0], [86.8, 1855.0], [86.9, 1855.0], [87.0, 1857.0], [87.1, 1857.0], [87.2, 1857.0], [87.3, 1857.0], [87.4, 1859.0], [87.5, 1859.0], [87.6, 1859.0], [87.7, 1870.0], [87.8, 1870.0], [87.9, 1870.0], [88.0, 1870.0], [88.1, 1870.0], [88.2, 1870.0], [88.3, 1870.0], [88.4, 1891.0], [88.5, 1891.0], [88.6, 1891.0], [88.7, 1901.0], [88.8, 1901.0], [88.9, 1901.0], [89.0, 1901.0], [89.1, 1908.0], [89.2, 1908.0], [89.3, 1908.0], [89.4, 1911.0], [89.5, 1911.0], [89.6, 1911.0], [89.7, 1911.0], [89.8, 1912.0], [89.9, 1912.0], [90.0, 1912.0], [90.1, 1916.0], [90.2, 1916.0], [90.3, 1916.0], [90.4, 1916.0], [90.5, 1955.0], [90.6, 1955.0], [90.7, 1955.0], [90.8, 1961.0], [90.9, 1961.0], [91.0, 1961.0], [91.1, 1984.0], [91.2, 1984.0], [91.3, 1984.0], [91.4, 1984.0], [91.5, 2031.0], [91.6, 2031.0], [91.7, 2031.0], [91.8, 2036.0], [91.9, 2036.0], [92.0, 2036.0], [92.1, 2036.0], [92.2, 2044.0], [92.3, 2044.0], [92.4, 2044.0], [92.5, 2057.0], [92.6, 2057.0], [92.7, 2057.0], [92.8, 2057.0], [92.9, 2080.0], [93.0, 2080.0], [93.1, 2080.0], [93.2, 2084.0], [93.3, 2084.0], [93.4, 2084.0], [93.5, 2089.0], [93.6, 2089.0], [93.7, 2089.0], [93.8, 2089.0], [93.9, 2091.0], [94.0, 2091.0], [94.1, 2091.0], [94.2, 2141.0], [94.3, 2141.0], [94.4, 2141.0], [94.5, 2141.0], [94.6, 2205.0], [94.7, 2205.0], [94.8, 2205.0], [94.9, 2248.0], [95.0, 2248.0], [95.1, 2248.0], [95.2, 2248.0], [95.3, 2264.0], [95.4, 2264.0], [95.5, 2264.0], [95.6, 2292.0], [95.7, 2292.0], [95.8, 2292.0], [95.9, 2301.0], [96.0, 2301.0], [96.1, 2301.0], [96.2, 2301.0], [96.3, 2335.0], [96.4, 2335.0], [96.5, 2335.0], [96.6, 2375.0], [96.7, 2375.0], [96.8, 2375.0], [96.9, 2375.0], [97.0, 2710.0], [97.1, 2710.0], [97.2, 2710.0], [97.3, 2850.0], [97.4, 2850.0], [97.5, 2850.0], [97.6, 2850.0], [97.7, 3107.0], [97.8, 3107.0], [97.9, 3107.0], [98.0, 4925.0], [98.1, 4925.0], [98.2, 4925.0], [98.3, 5047.0], [98.4, 5047.0], [98.5, 5047.0], [98.6, 5047.0], [98.7, 5087.0], [98.8, 5087.0], [98.9, 5087.0], [99.0, 5104.0], [99.1, 5104.0], [99.2, 5104.0], [99.3, 5104.0], [99.4, 5125.0], [99.5, 5125.0], [99.6, 5125.0], [99.7, 5226.0], [99.8, 5226.0], [99.9, 5226.0], [100.0, 5226.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 33.0, "series": [{"data": [[600.0, 7.0], [700.0, 20.0], [800.0, 33.0], [900.0, 26.0], [1000.0, 27.0], [1100.0, 13.0], [1200.0, 16.0], [1300.0, 24.0], [1400.0, 19.0], [1500.0, 10.0], [1600.0, 11.0], [1700.0, 9.0], [1800.0, 9.0], [1900.0, 8.0], [2000.0, 8.0], [2100.0, 1.0], [2200.0, 4.0], [2300.0, 3.0], [2700.0, 1.0], [2800.0, 1.0], [3100.0, 1.0], [300.0, 11.0], [4900.0, 1.0], [5000.0, 2.0], [5100.0, 2.0], [5200.0, 1.0], [400.0, 11.0], [500.0, 13.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 199.0, "series": [{"data": [[0.0, 22.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 199.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 71.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 62.35958904109593, "minX": 1.6032042E12, "maxY": 62.35958904109593, "series": [{"data": [[1.6032042E12, 62.35958904109593]], "isOverall": false, "label": "Spike Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032042E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 682.5, "minX": 1.0, "maxY": 3713.0, "series": [{"data": [[2.0, 3321.0], [3.0, 3489.0], [4.0, 3441.0], [5.0, 3425.0], [6.0, 3226.5], [7.0, 2220.0], [8.0, 2850.0], [9.0, 2067.3333333333335], [10.0, 1664.0], [11.0, 1737.5], [12.0, 1984.5], [13.0, 2015.0], [14.0, 2008.0], [15.0, 1775.0], [16.0, 1381.0], [17.0, 2044.0], [18.0, 1525.0], [19.0, 1628.0], [20.0, 1605.0], [21.0, 1900.5], [22.0, 1533.5], [23.0, 1754.0], [24.0, 1483.5], [25.0, 2031.0], [26.0, 1835.0], [27.0, 1496.0], [28.0, 1410.0], [29.0, 1577.0], [30.0, 1678.0], [31.0, 2091.0], [33.0, 1691.0], [32.0, 1586.0], [35.0, 1365.3333333333333], [34.0, 1813.0], [37.0, 1796.0], [36.0, 1377.0], [39.0, 1427.0], [38.0, 1139.0], [41.0, 1485.5], [40.0, 1791.5], [42.0, 1363.5], [43.0, 993.0], [44.0, 1438.0], [45.0, 1559.0], [47.0, 1129.3333333333333], [46.0, 1481.6666666666667], [49.0, 1199.6666666666667], [48.0, 1330.5], [51.0, 1326.0], [50.0, 1678.5], [53.0, 1446.0], [52.0, 1693.5], [55.0, 1183.0], [54.0, 1327.0], [57.0, 1657.0], [56.0, 988.6666666666666], [58.0, 1360.5], [59.0, 1286.0], [61.0, 1588.5], [60.0, 1047.25], [63.0, 1631.5], [62.0, 880.0], [67.0, 1424.6666666666667], [66.0, 1857.0], [65.0, 1040.6666666666667], [64.0, 1067.6666666666667], [71.0, 1056.0], [70.0, 1012.3333333333334], [69.0, 915.0], [68.0, 1505.5], [73.0, 784.0], [75.0, 762.0], [74.0, 744.3333333333334], [72.0, 880.0], [79.0, 1024.6666666666667], [78.0, 1026.0], [77.0, 834.3333333333334], [76.0, 811.0], [83.0, 903.75], [82.0, 908.0], [81.0, 952.5], [80.0, 1059.5], [87.0, 796.6666666666666], [86.0, 799.5], [85.0, 1065.5], [84.0, 903.75], [90.0, 897.3333333333334], [91.0, 816.1428571428571], [89.0, 805.6666666666666], [88.0, 971.25], [95.0, 770.1666666666665], [94.0, 740.3571428571428], [93.0, 1023.5], [92.0, 864.8], [99.0, 725.75], [98.0, 763.7222222222223], [97.0, 1035.5], [96.0, 1025.0], [102.0, 682.5], [101.0, 1008.0], [100.0, 881.4], [1.0, 3713.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[62.35958904109593, 1256.6712328767123]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 102.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 559.6666666666666, "minX": 1.6032042E12, "maxY": 15709.666666666666, "series": [{"data": [[1.6032042E12, 15709.666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6032042E12, 559.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032042E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1256.6712328767123, "minX": 1.6032042E12, "maxY": 1256.6712328767123, "series": [{"data": [[1.6032042E12, 1256.6712328767123]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032042E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1255.489726027398, "minX": 1.6032042E12, "maxY": 1255.489726027398, "series": [{"data": [[1.6032042E12, 1255.489726027398]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032042E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 586.9863013698633, "minX": 1.6032042E12, "maxY": 586.9863013698633, "series": [{"data": [[1.6032042E12, 586.9863013698633]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032042E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 317.0, "minX": 1.6032042E12, "maxY": 5226.0, "series": [{"data": [[1.6032042E12, 5226.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6032042E12, 322.54799972057344]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6032042E12, 323.60280011177065]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6032042E12, 323.13399986028674]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6032042E12, 317.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6032042E12, 1093.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032042E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 798.5, "minX": 3.0, "maxY": 2850.0, "series": [{"data": [[33.0, 1511.0], [75.0, 1471.0], [76.0, 798.5], [10.0, 1746.0], [6.0, 2730.5], [3.0, 2850.0], [52.0, 1093.5], [31.0, 993.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 796.0, "minX": 3.0, "maxY": 2849.0, "series": [{"data": [[33.0, 1511.0], [75.0, 1470.0], [76.0, 796.0], [10.0, 1744.5], [6.0, 2728.5], [3.0, 2849.0], [52.0, 1092.5], [31.0, 991.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.866666666666666, "minX": 1.6032042E12, "maxY": 4.866666666666666, "series": [{"data": [[1.6032042E12, 4.866666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032042E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.866666666666666, "minX": 1.6032042E12, "maxY": 4.866666666666666, "series": [{"data": [[1.6032042E12, 4.866666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032042E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.866666666666666, "minX": 1.6032042E12, "maxY": 4.866666666666666, "series": [{"data": [[1.6032042E12, 4.866666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032042E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.866666666666666, "minX": 1.6032042E12, "maxY": 4.866666666666666, "series": [{"data": [[1.6032042E12, 4.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032042E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

