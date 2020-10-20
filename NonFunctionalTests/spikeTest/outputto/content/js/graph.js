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
        data: {"result": {"minY": 310.0, "minX": 0.0, "maxY": 2957.0, "series": [{"data": [[0.0, 310.0], [0.1, 310.0], [0.2, 310.0], [0.3, 310.0], [0.4, 317.0], [0.5, 317.0], [0.6, 317.0], [0.7, 318.0], [0.8, 318.0], [0.9, 318.0], [1.0, 338.0], [1.1, 338.0], [1.2, 338.0], [1.3, 338.0], [1.4, 338.0], [1.5, 338.0], [1.6, 338.0], [1.7, 345.0], [1.8, 345.0], [1.9, 345.0], [2.0, 346.0], [2.1, 346.0], [2.2, 346.0], [2.3, 349.0], [2.4, 349.0], [2.5, 349.0], [2.6, 349.0], [2.7, 368.0], [2.8, 368.0], [2.9, 368.0], [3.0, 403.0], [3.1, 403.0], [3.2, 403.0], [3.3, 411.0], [3.4, 411.0], [3.5, 411.0], [3.6, 411.0], [3.7, 415.0], [3.8, 415.0], [3.9, 415.0], [4.0, 418.0], [4.1, 418.0], [4.2, 418.0], [4.3, 431.0], [4.4, 431.0], [4.5, 431.0], [4.6, 441.0], [4.7, 441.0], [4.8, 441.0], [4.9, 441.0], [5.0, 446.0], [5.1, 446.0], [5.2, 446.0], [5.3, 452.0], [5.4, 452.0], [5.5, 452.0], [5.6, 459.0], [5.7, 459.0], [5.8, 459.0], [5.9, 459.0], [6.0, 471.0], [6.1, 471.0], [6.2, 471.0], [6.3, 472.0], [6.4, 472.0], [6.5, 472.0], [6.6, 485.0], [6.7, 485.0], [6.8, 485.0], [6.9, 486.0], [7.0, 486.0], [7.1, 486.0], [7.2, 486.0], [7.3, 487.0], [7.4, 487.0], [7.5, 487.0], [7.6, 489.0], [7.7, 489.0], [7.8, 489.0], [7.9, 490.0], [8.0, 490.0], [8.1, 490.0], [8.2, 501.0], [8.3, 501.0], [8.4, 501.0], [8.5, 501.0], [8.6, 518.0], [8.7, 518.0], [8.8, 518.0], [8.9, 521.0], [9.0, 521.0], [9.1, 521.0], [9.2, 527.0], [9.3, 527.0], [9.4, 527.0], [9.5, 527.0], [9.6, 535.0], [9.7, 535.0], [9.8, 535.0], [9.9, 542.0], [10.0, 542.0], [10.1, 542.0], [10.2, 552.0], [10.3, 552.0], [10.4, 552.0], [10.5, 552.0], [10.6, 552.0], [10.7, 552.0], [10.8, 552.0], [10.9, 563.0], [11.0, 563.0], [11.1, 563.0], [11.2, 567.0], [11.3, 567.0], [11.4, 567.0], [11.5, 573.0], [11.6, 573.0], [11.7, 573.0], [11.8, 573.0], [11.9, 606.0], [12.0, 606.0], [12.1, 606.0], [12.2, 612.0], [12.3, 612.0], [12.4, 612.0], [12.5, 616.0], [12.6, 616.0], [12.7, 616.0], [12.8, 616.0], [12.9, 616.0], [13.0, 616.0], [13.1, 616.0], [13.2, 617.0], [13.3, 617.0], [13.4, 617.0], [13.5, 618.0], [13.6, 618.0], [13.7, 618.0], [13.8, 621.0], [13.9, 621.0], [14.0, 621.0], [14.1, 622.0], [14.2, 622.0], [14.3, 622.0], [14.4, 622.0], [14.5, 623.0], [14.6, 623.0], [14.7, 623.0], [14.8, 627.0], [14.9, 627.0], [15.0, 627.0], [15.1, 635.0], [15.2, 635.0], [15.3, 635.0], [15.4, 635.0], [15.5, 637.0], [15.6, 637.0], [15.7, 637.0], [15.8, 643.0], [15.9, 643.0], [16.0, 643.0], [16.1, 645.0], [16.2, 645.0], [16.3, 645.0], [16.4, 646.0], [16.5, 646.0], [16.6, 646.0], [16.7, 646.0], [16.8, 649.0], [16.9, 649.0], [17.0, 649.0], [17.1, 650.0], [17.2, 650.0], [17.3, 650.0], [17.4, 656.0], [17.5, 656.0], [17.6, 656.0], [17.7, 656.0], [17.8, 657.0], [17.9, 657.0], [18.0, 657.0], [18.1, 660.0], [18.2, 660.0], [18.3, 660.0], [18.4, 661.0], [18.5, 661.0], [18.6, 661.0], [18.7, 667.0], [18.8, 667.0], [18.9, 667.0], [19.0, 667.0], [19.1, 675.0], [19.2, 675.0], [19.3, 675.0], [19.4, 676.0], [19.5, 676.0], [19.6, 676.0], [19.7, 678.0], [19.8, 678.0], [19.9, 678.0], [20.0, 685.0], [20.1, 685.0], [20.2, 685.0], [20.3, 685.0], [20.4, 697.0], [20.5, 697.0], [20.6, 697.0], [20.7, 697.0], [20.8, 697.0], [20.9, 697.0], [21.0, 699.0], [21.1, 699.0], [21.2, 699.0], [21.3, 699.0], [21.4, 702.0], [21.5, 702.0], [21.6, 702.0], [21.7, 703.0], [21.8, 703.0], [21.9, 703.0], [22.0, 708.0], [22.1, 708.0], [22.2, 708.0], [22.3, 710.0], [22.4, 710.0], [22.5, 710.0], [22.6, 710.0], [22.7, 710.0], [22.8, 710.0], [22.9, 710.0], [23.0, 710.0], [23.1, 710.0], [23.2, 710.0], [23.3, 714.0], [23.4, 714.0], [23.5, 714.0], [23.6, 714.0], [23.7, 714.0], [23.8, 714.0], [23.9, 714.0], [24.0, 718.0], [24.1, 718.0], [24.2, 718.0], [24.3, 720.0], [24.4, 720.0], [24.5, 720.0], [24.6, 720.0], [24.7, 720.0], [24.8, 720.0], [24.9, 720.0], [25.0, 722.0], [25.1, 722.0], [25.2, 722.0], [25.3, 734.0], [25.4, 734.0], [25.5, 734.0], [25.6, 739.0], [25.7, 739.0], [25.8, 739.0], [25.9, 739.0], [26.0, 743.0], [26.1, 743.0], [26.2, 743.0], [26.3, 759.0], [26.4, 759.0], [26.5, 759.0], [26.6, 759.0], [26.7, 759.0], [26.8, 759.0], [26.9, 759.0], [27.0, 759.0], [27.1, 759.0], [27.2, 759.0], [27.3, 759.0], [27.4, 759.0], [27.5, 759.0], [27.6, 764.0], [27.7, 764.0], [27.8, 764.0], [27.9, 766.0], [28.0, 766.0], [28.1, 766.0], [28.2, 772.0], [28.3, 772.0], [28.4, 772.0], [28.5, 772.0], [28.6, 774.0], [28.7, 774.0], [28.8, 774.0], [28.9, 789.0], [29.0, 789.0], [29.1, 789.0], [29.2, 795.0], [29.3, 795.0], [29.4, 795.0], [29.5, 795.0], [29.6, 796.0], [29.7, 796.0], [29.8, 796.0], [29.9, 801.0], [30.0, 801.0], [30.1, 801.0], [30.2, 803.0], [30.3, 803.0], [30.4, 803.0], [30.5, 804.0], [30.6, 804.0], [30.7, 804.0], [30.8, 804.0], [30.9, 805.0], [31.0, 805.0], [31.1, 805.0], [31.2, 810.0], [31.3, 810.0], [31.4, 810.0], [31.5, 815.0], [31.6, 815.0], [31.7, 815.0], [31.8, 815.0], [31.9, 820.0], [32.0, 820.0], [32.1, 820.0], [32.2, 823.0], [32.3, 823.0], [32.4, 823.0], [32.5, 837.0], [32.6, 837.0], [32.7, 837.0], [32.8, 838.0], [32.9, 838.0], [33.0, 838.0], [33.1, 838.0], [33.2, 844.0], [33.3, 844.0], [33.4, 844.0], [33.5, 844.0], [33.6, 844.0], [33.7, 844.0], [33.8, 849.0], [33.9, 849.0], [34.0, 849.0], [34.1, 859.0], [34.2, 859.0], [34.3, 859.0], [34.4, 859.0], [34.5, 862.0], [34.6, 862.0], [34.7, 862.0], [34.8, 862.0], [34.9, 862.0], [35.0, 862.0], [35.1, 864.0], [35.2, 864.0], [35.3, 864.0], [35.4, 864.0], [35.5, 865.0], [35.6, 865.0], [35.7, 865.0], [35.8, 867.0], [35.9, 867.0], [36.0, 867.0], [36.1, 870.0], [36.2, 870.0], [36.3, 870.0], [36.4, 872.0], [36.5, 872.0], [36.6, 872.0], [36.7, 872.0], [36.8, 875.0], [36.9, 875.0], [37.0, 875.0], [37.1, 877.0], [37.2, 877.0], [37.3, 877.0], [37.4, 877.0], [37.5, 877.0], [37.6, 877.0], [37.7, 877.0], [37.8, 880.0], [37.9, 880.0], [38.0, 880.0], [38.1, 882.0], [38.2, 882.0], [38.3, 882.0], [38.4, 883.0], [38.5, 883.0], [38.6, 883.0], [38.7, 891.0], [38.8, 891.0], [38.9, 891.0], [39.0, 891.0], [39.1, 897.0], [39.2, 897.0], [39.3, 897.0], [39.4, 899.0], [39.5, 899.0], [39.6, 899.0], [39.7, 904.0], [39.8, 904.0], [39.9, 904.0], [40.0, 904.0], [40.1, 904.0], [40.2, 904.0], [40.3, 904.0], [40.4, 908.0], [40.5, 908.0], [40.6, 908.0], [40.7, 908.0], [40.8, 908.0], [40.9, 908.0], [41.0, 910.0], [41.1, 910.0], [41.2, 910.0], [41.3, 910.0], [41.4, 912.0], [41.5, 912.0], [41.6, 912.0], [41.7, 912.0], [41.8, 912.0], [41.9, 912.0], [42.0, 920.0], [42.1, 920.0], [42.2, 920.0], [42.3, 921.0], [42.4, 921.0], [42.5, 921.0], [42.6, 921.0], [42.7, 923.0], [42.8, 923.0], [42.9, 923.0], [43.0, 923.0], [43.1, 923.0], [43.2, 923.0], [43.3, 926.0], [43.4, 926.0], [43.5, 926.0], [43.6, 926.0], [43.7, 929.0], [43.8, 929.0], [43.9, 929.0], [44.0, 930.0], [44.1, 930.0], [44.2, 930.0], [44.3, 931.0], [44.4, 931.0], [44.5, 931.0], [44.6, 934.0], [44.7, 934.0], [44.8, 934.0], [44.9, 934.0], [45.0, 934.0], [45.1, 934.0], [45.2, 934.0], [45.3, 937.0], [45.4, 937.0], [45.5, 937.0], [45.6, 939.0], [45.7, 939.0], [45.8, 939.0], [45.9, 939.0], [46.0, 940.0], [46.1, 940.0], [46.2, 940.0], [46.3, 941.0], [46.4, 941.0], [46.5, 941.0], [46.6, 941.0], [46.7, 941.0], [46.8, 941.0], [46.9, 942.0], [47.0, 942.0], [47.1, 942.0], [47.2, 942.0], [47.3, 946.0], [47.4, 946.0], [47.5, 946.0], [47.6, 951.0], [47.7, 951.0], [47.8, 951.0], [47.9, 955.0], [48.0, 955.0], [48.1, 955.0], [48.2, 956.0], [48.3, 956.0], [48.4, 956.0], [48.5, 956.0], [48.6, 956.0], [48.7, 956.0], [48.8, 956.0], [48.9, 958.0], [49.0, 958.0], [49.1, 958.0], [49.2, 959.0], [49.3, 959.0], [49.4, 959.0], [49.5, 959.0], [49.6, 959.0], [49.7, 959.0], [49.8, 959.0], [49.9, 960.0], [50.0, 960.0], [50.1, 960.0], [50.2, 967.0], [50.3, 967.0], [50.4, 967.0], [50.5, 969.0], [50.6, 969.0], [50.7, 969.0], [50.8, 969.0], [50.9, 972.0], [51.0, 972.0], [51.1, 972.0], [51.2, 975.0], [51.3, 975.0], [51.4, 975.0], [51.5, 982.0], [51.6, 982.0], [51.7, 982.0], [51.8, 982.0], [51.9, 995.0], [52.0, 995.0], [52.1, 995.0], [52.2, 998.0], [52.3, 998.0], [52.4, 998.0], [52.5, 999.0], [52.6, 999.0], [52.7, 999.0], [52.8, 1001.0], [52.9, 1001.0], [53.0, 1001.0], [53.1, 1001.0], [53.2, 1001.0], [53.3, 1001.0], [53.4, 1001.0], [53.5, 1003.0], [53.6, 1003.0], [53.7, 1003.0], [53.8, 1004.0], [53.9, 1004.0], [54.0, 1004.0], [54.1, 1006.0], [54.2, 1006.0], [54.3, 1006.0], [54.4, 1006.0], [54.5, 1006.0], [54.6, 1006.0], [54.7, 1006.0], [54.8, 1011.0], [54.9, 1011.0], [55.0, 1011.0], [55.1, 1012.0], [55.2, 1012.0], [55.3, 1012.0], [55.4, 1012.0], [55.5, 1012.0], [55.6, 1012.0], [55.7, 1012.0], [55.8, 1013.0], [55.9, 1013.0], [56.0, 1013.0], [56.1, 1015.0], [56.2, 1015.0], [56.3, 1015.0], [56.4, 1016.0], [56.5, 1016.0], [56.6, 1016.0], [56.7, 1016.0], [56.8, 1016.0], [56.9, 1016.0], [57.0, 1016.0], [57.1, 1019.0], [57.2, 1019.0], [57.3, 1019.0], [57.4, 1021.0], [57.5, 1021.0], [57.6, 1021.0], [57.7, 1021.0], [57.8, 1025.0], [57.9, 1025.0], [58.0, 1025.0], [58.1, 1026.0], [58.2, 1026.0], [58.3, 1026.0], [58.4, 1028.0], [58.5, 1028.0], [58.6, 1028.0], [58.7, 1030.0], [58.8, 1030.0], [58.9, 1030.0], [59.0, 1030.0], [59.1, 1030.0], [59.2, 1030.0], [59.3, 1030.0], [59.4, 1032.0], [59.5, 1032.0], [59.6, 1032.0], [59.7, 1033.0], [59.8, 1033.0], [59.9, 1033.0], [60.0, 1033.0], [60.1, 1034.0], [60.2, 1034.0], [60.3, 1034.0], [60.4, 1037.0], [60.5, 1037.0], [60.6, 1037.0], [60.7, 1038.0], [60.8, 1038.0], [60.9, 1038.0], [61.0, 1042.0], [61.1, 1042.0], [61.2, 1042.0], [61.3, 1042.0], [61.4, 1042.0], [61.5, 1042.0], [61.6, 1042.0], [61.7, 1044.0], [61.8, 1044.0], [61.9, 1044.0], [62.0, 1047.0], [62.1, 1047.0], [62.2, 1047.0], [62.3, 1051.0], [62.4, 1051.0], [62.5, 1051.0], [62.6, 1051.0], [62.7, 1057.0], [62.8, 1057.0], [62.9, 1057.0], [63.0, 1060.0], [63.1, 1060.0], [63.2, 1060.0], [63.3, 1061.0], [63.4, 1061.0], [63.5, 1061.0], [63.6, 1061.0], [63.7, 1062.0], [63.8, 1062.0], [63.9, 1062.0], [64.0, 1063.0], [64.1, 1063.0], [64.2, 1063.0], [64.3, 1063.0], [64.4, 1063.0], [64.5, 1063.0], [64.6, 1064.0], [64.7, 1064.0], [64.8, 1064.0], [64.9, 1064.0], [65.0, 1064.0], [65.1, 1064.0], [65.2, 1064.0], [65.3, 1067.0], [65.4, 1067.0], [65.5, 1067.0], [65.6, 1068.0], [65.7, 1068.0], [65.8, 1068.0], [65.9, 1068.0], [66.0, 1069.0], [66.1, 1069.0], [66.2, 1069.0], [66.3, 1070.0], [66.4, 1070.0], [66.5, 1070.0], [66.6, 1075.0], [66.7, 1075.0], [66.8, 1075.0], [66.9, 1086.0], [67.0, 1086.0], [67.1, 1086.0], [67.2, 1086.0], [67.3, 1087.0], [67.4, 1087.0], [67.5, 1087.0], [67.6, 1088.0], [67.7, 1088.0], [67.8, 1088.0], [67.9, 1091.0], [68.0, 1091.0], [68.1, 1091.0], [68.2, 1096.0], [68.3, 1096.0], [68.4, 1096.0], [68.5, 1096.0], [68.6, 1098.0], [68.7, 1098.0], [68.8, 1098.0], [68.9, 1098.0], [69.0, 1098.0], [69.1, 1098.0], [69.2, 1099.0], [69.3, 1099.0], [69.4, 1099.0], [69.5, 1099.0], [69.6, 1102.0], [69.7, 1102.0], [69.8, 1102.0], [69.9, 1109.0], [70.0, 1109.0], [70.1, 1109.0], [70.2, 1115.0], [70.3, 1115.0], [70.4, 1115.0], [70.5, 1118.0], [70.6, 1118.0], [70.7, 1118.0], [70.8, 1118.0], [70.9, 1118.0], [71.0, 1118.0], [71.1, 1118.0], [71.2, 1122.0], [71.3, 1122.0], [71.4, 1122.0], [71.5, 1123.0], [71.6, 1123.0], [71.7, 1123.0], [71.8, 1123.0], [71.9, 1123.0], [72.0, 1123.0], [72.1, 1123.0], [72.2, 1124.0], [72.3, 1124.0], [72.4, 1124.0], [72.5, 1127.0], [72.6, 1127.0], [72.7, 1127.0], [72.8, 1132.0], [72.9, 1132.0], [73.0, 1132.0], [73.1, 1132.0], [73.2, 1134.0], [73.3, 1134.0], [73.4, 1134.0], [73.5, 1136.0], [73.6, 1136.0], [73.7, 1136.0], [73.8, 1137.0], [73.9, 1137.0], [74.0, 1137.0], [74.1, 1152.0], [74.2, 1152.0], [74.3, 1152.0], [74.4, 1152.0], [74.5, 1158.0], [74.6, 1158.0], [74.7, 1158.0], [74.8, 1160.0], [74.9, 1160.0], [75.0, 1160.0], [75.1, 1164.0], [75.2, 1164.0], [75.3, 1164.0], [75.4, 1164.0], [75.5, 1166.0], [75.6, 1166.0], [75.7, 1166.0], [75.8, 1172.0], [75.9, 1172.0], [76.0, 1172.0], [76.1, 1173.0], [76.2, 1173.0], [76.3, 1173.0], [76.4, 1178.0], [76.5, 1178.0], [76.6, 1178.0], [76.7, 1178.0], [76.8, 1184.0], [76.9, 1184.0], [77.0, 1184.0], [77.1, 1184.0], [77.2, 1184.0], [77.3, 1184.0], [77.4, 1184.0], [77.5, 1184.0], [77.6, 1184.0], [77.7, 1184.0], [77.8, 1185.0], [77.9, 1185.0], [78.0, 1185.0], [78.1, 1186.0], [78.2, 1186.0], [78.3, 1186.0], [78.4, 1190.0], [78.5, 1190.0], [78.6, 1190.0], [78.7, 1192.0], [78.8, 1192.0], [78.9, 1192.0], [79.0, 1192.0], [79.1, 1194.0], [79.2, 1194.0], [79.3, 1194.0], [79.4, 1197.0], [79.5, 1197.0], [79.6, 1197.0], [79.7, 1205.0], [79.8, 1205.0], [79.9, 1205.0], [80.0, 1205.0], [80.1, 1216.0], [80.2, 1216.0], [80.3, 1216.0], [80.4, 1218.0], [80.5, 1218.0], [80.6, 1218.0], [80.7, 1222.0], [80.8, 1222.0], [80.9, 1222.0], [81.0, 1225.0], [81.1, 1225.0], [81.2, 1225.0], [81.3, 1225.0], [81.4, 1226.0], [81.5, 1226.0], [81.6, 1226.0], [81.7, 1228.0], [81.8, 1228.0], [81.9, 1228.0], [82.0, 1228.0], [82.1, 1228.0], [82.2, 1228.0], [82.3, 1236.0], [82.4, 1236.0], [82.5, 1236.0], [82.6, 1236.0], [82.7, 1238.0], [82.8, 1238.0], [82.9, 1238.0], [83.0, 1241.0], [83.1, 1241.0], [83.2, 1241.0], [83.3, 1245.0], [83.4, 1245.0], [83.5, 1245.0], [83.6, 1245.0], [83.7, 1254.0], [83.8, 1254.0], [83.9, 1254.0], [84.0, 1264.0], [84.1, 1264.0], [84.2, 1264.0], [84.3, 1266.0], [84.4, 1266.0], [84.5, 1266.0], [84.6, 1267.0], [84.7, 1267.0], [84.8, 1267.0], [84.9, 1267.0], [85.0, 1275.0], [85.1, 1275.0], [85.2, 1275.0], [85.3, 1277.0], [85.4, 1277.0], [85.5, 1277.0], [85.6, 1278.0], [85.7, 1278.0], [85.8, 1278.0], [85.9, 1278.0], [86.0, 1281.0], [86.1, 1281.0], [86.2, 1281.0], [86.3, 1283.0], [86.4, 1283.0], [86.5, 1283.0], [86.6, 1285.0], [86.7, 1285.0], [86.8, 1285.0], [86.9, 1289.0], [87.0, 1289.0], [87.1, 1289.0], [87.2, 1289.0], [87.3, 1290.0], [87.4, 1290.0], [87.5, 1290.0], [87.6, 1303.0], [87.7, 1303.0], [87.8, 1303.0], [87.9, 1325.0], [88.0, 1325.0], [88.1, 1325.0], [88.2, 1328.0], [88.3, 1328.0], [88.4, 1328.0], [88.5, 1328.0], [88.6, 1335.0], [88.7, 1335.0], [88.8, 1335.0], [88.9, 1347.0], [89.0, 1347.0], [89.1, 1347.0], [89.2, 1347.0], [89.3, 1347.0], [89.4, 1347.0], [89.5, 1347.0], [89.6, 1359.0], [89.7, 1359.0], [89.8, 1359.0], [89.9, 1375.0], [90.0, 1375.0], [90.1, 1375.0], [90.2, 1378.0], [90.3, 1378.0], [90.4, 1378.0], [90.5, 1379.0], [90.6, 1379.0], [90.7, 1379.0], [90.8, 1379.0], [90.9, 1387.0], [91.0, 1387.0], [91.1, 1387.0], [91.2, 1394.0], [91.3, 1394.0], [91.4, 1394.0], [91.5, 1394.0], [91.6, 1394.0], [91.7, 1394.0], [91.8, 1394.0], [91.9, 1397.0], [92.0, 1397.0], [92.1, 1397.0], [92.2, 1399.0], [92.3, 1399.0], [92.4, 1399.0], [92.5, 1401.0], [92.6, 1401.0], [92.7, 1401.0], [92.8, 1406.0], [92.9, 1406.0], [93.0, 1406.0], [93.1, 1406.0], [93.2, 1416.0], [93.3, 1416.0], [93.4, 1416.0], [93.5, 1424.0], [93.6, 1424.0], [93.7, 1424.0], [93.8, 1429.0], [93.9, 1429.0], [94.0, 1429.0], [94.1, 1438.0], [94.2, 1438.0], [94.3, 1438.0], [94.4, 1438.0], [94.5, 1442.0], [94.6, 1442.0], [94.7, 1442.0], [94.8, 1451.0], [94.9, 1451.0], [95.0, 1451.0], [95.1, 1457.0], [95.2, 1457.0], [95.3, 1457.0], [95.4, 1457.0], [95.5, 1465.0], [95.6, 1465.0], [95.7, 1465.0], [95.8, 1477.0], [95.9, 1477.0], [96.0, 1477.0], [96.1, 1500.0], [96.2, 1500.0], [96.3, 1500.0], [96.4, 1512.0], [96.5, 1512.0], [96.6, 1512.0], [96.7, 1512.0], [96.8, 1532.0], [96.9, 1532.0], [97.0, 1532.0], [97.1, 1563.0], [97.2, 1563.0], [97.3, 1563.0], [97.4, 1587.0], [97.5, 1587.0], [97.6, 1587.0], [97.7, 1587.0], [97.8, 1594.0], [97.9, 1594.0], [98.0, 1594.0], [98.1, 1612.0], [98.2, 1612.0], [98.3, 1612.0], [98.4, 1622.0], [98.5, 1622.0], [98.6, 1622.0], [98.7, 1624.0], [98.8, 1624.0], [98.9, 1624.0], [99.0, 1624.0], [99.1, 1707.0], [99.2, 1707.0], [99.3, 1707.0], [99.4, 1794.0], [99.5, 1794.0], [99.6, 1794.0], [99.7, 2957.0], [99.8, 2957.0], [99.9, 2957.0], [100.0, 2957.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 51.0, "series": [{"data": [[600.0, 29.0], [700.0, 26.0], [2900.0, 1.0], [800.0, 30.0], [900.0, 40.0], [1000.0, 51.0], [1100.0, 31.0], [1200.0, 24.0], [300.0, 9.0], [1300.0, 15.0], [1400.0, 11.0], [1500.0, 6.0], [400.0, 16.0], [1600.0, 3.0], [1700.0, 2.0], [500.0, 11.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 269.0, "series": [{"data": [[0.0, 25.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 269.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 56.07627118644072, "minX": 1.60320408E12, "maxY": 66.99999999999993, "series": [{"data": [[1.60320408E12, 56.07627118644072], [1.60320414E12, 66.99999999999993]], "isOverall": false, "label": "Spike Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320414E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 646.5, "minX": 1.0, "maxY": 2112.0, "series": [{"data": [[2.0, 1507.0], [3.0, 1572.5], [4.0, 1533.0], [5.0, 1372.5], [6.0, 1445.0], [7.0, 1278.5], [8.0, 1218.0], [9.0, 1066.5], [10.0, 890.5], [11.0, 1388.0], [12.0, 1211.5], [13.0, 1063.0], [14.0, 1113.3333333333333], [15.0, 1238.5], [16.0, 1312.5], [17.0, 1201.5], [18.0, 1181.5], [19.0, 1079.0], [20.0, 1196.0], [21.0, 1050.0], [22.0, 1021.5], [23.0, 1230.5], [24.0, 1159.0], [25.0, 1228.0], [26.0, 1156.0], [27.0, 1128.0], [28.0, 1141.0], [29.0, 969.0], [30.0, 1231.5], [31.0, 1166.5], [33.0, 1101.5], [32.0, 751.0], [35.0, 1120.5], [34.0, 931.0], [37.0, 1045.0], [36.0, 1127.0], [39.0, 674.5], [38.0, 1118.5], [41.0, 1221.5], [40.0, 972.5], [43.0, 971.0], [42.0, 977.5], [45.0, 770.6666666666666], [44.0, 1033.5], [47.0, 1068.5], [46.0, 1458.5], [49.0, 1150.6666666666667], [48.0, 1033.0], [51.0, 1129.3333333333333], [50.0, 1205.0], [53.0, 1006.6666666666666], [52.0, 1030.0], [55.0, 820.25], [54.0, 759.0], [57.0, 888.3333333333334], [56.0, 1070.5], [59.0, 856.3333333333334], [58.0, 1026.0], [61.0, 1135.6666666666667], [60.0, 713.25], [62.0, 730.6666666666666], [63.0, 1011.75], [67.0, 1096.5], [66.0, 662.6666666666666], [65.0, 781.75], [64.0, 1315.5], [71.0, 1044.0], [70.0, 1059.5], [69.0, 936.0], [68.0, 1016.0], [74.0, 1318.5], [73.0, 1177.3333333333333], [75.0, 778.0], [72.0, 990.0], [79.0, 679.875], [78.0, 646.5], [77.0, 1063.0], [76.0, 1224.0], [83.0, 756.75], [82.0, 901.6666666666666], [81.0, 996.5], [80.0, 836.0], [87.0, 715.7142857142857], [86.0, 1004.0], [85.0, 1025.0], [84.0, 690.3333333333334], [91.0, 870.5], [90.0, 792.4], [89.0, 1113.5], [88.0, 874.0], [95.0, 834.8888888888889], [94.0, 860.3333333333334], [93.0, 815.4545454545454], [92.0, 839.4285714285714], [99.0, 1086.0], [98.0, 682.0], [97.0, 811.0], [96.0, 735.1999999999999], [102.0, 797.0], [101.0, 1047.0], [100.0, 1070.0], [1.0, 2112.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[62.77377049180329, 962.2983606557378]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 102.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 226.16666666666666, "minX": 1.60320408E12, "maxY": 10060.666666666666, "series": [{"data": [[1.60320408E12, 6348.4], [1.60320414E12, 10060.666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60320408E12, 226.16666666666666], [1.60320414E12, 358.4166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320414E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 889.8770053475936, "minX": 1.60320408E12, "maxY": 1077.0677966101694, "series": [{"data": [[1.60320408E12, 1077.0677966101694], [1.60320414E12, 889.8770053475936]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320414E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 889.0427807486626, "minX": 1.60320408E12, "maxY": 1076.033898305085, "series": [{"data": [[1.60320408E12, 1076.033898305085], [1.60320414E12, 889.0427807486626]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320414E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 244.807486631016, "minX": 1.60320408E12, "maxY": 421.3474576271184, "series": [{"data": [[1.60320408E12, 421.3474576271184], [1.60320414E12, 244.807486631016]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320414E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 310.0, "minX": 1.60320408E12, "maxY": 2957.0, "series": [{"data": [[1.60320408E12, 1794.0], [1.60320414E12, 2957.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60320408E12, 442.2779994893074], [1.60320414E12, 314.84399968624115]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60320408E12, 444.205800204277], [1.60320414E12, 316.02840012550354]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60320408E12, 443.3489997446537], [1.60320414E12, 315.5019998431206]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60320408E12, 441.0], [1.60320414E12, 310.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60320408E12, 1088.5], [1.60320414E12, 904.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320414E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 614.0, "minX": 4.0, "maxY": 1266.0, "series": [{"data": [[4.0, 1266.0], [32.0, 1227.0], [82.0, 1059.5], [42.0, 1122.5], [46.0, 614.0], [95.0, 897.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 613.5, "minX": 4.0, "maxY": 1265.0, "series": [{"data": [[4.0, 1265.0], [32.0, 1226.5], [82.0, 1059.5], [42.0, 1121.0], [46.0, 613.5], [95.0, 896.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.60320408E12, "maxY": 2.8666666666666667, "series": [{"data": [[1.60320408E12, 2.216666666666667], [1.60320414E12, 2.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320414E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60320408E12, "maxY": 3.1166666666666667, "series": [{"data": [[1.60320408E12, 1.9666666666666666], [1.60320414E12, 3.1166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320414E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60320408E12, "maxY": 3.1166666666666667, "series": [{"data": [[1.60320408E12, 1.9666666666666666], [1.60320414E12, 3.1166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320414E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.60320408E12, "maxY": 3.1166666666666667, "series": [{"data": [[1.60320408E12, 1.9666666666666666], [1.60320414E12, 3.1166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320414E12, "title": "Total Transactions Per Second"}},
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

