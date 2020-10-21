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
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 99.6941526822005, "KoPercent": 0.305847317799509};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.527184192522838, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0720226843100189, 500, 1500, "HTTP Request - readTasks"], "isController": false}, {"data": [0.8708218145262628, 500, 1500, "HTTP Request-DelList"], "isController": false}, {"data": [0.6606960081883316, 500, 1500, "HTTP Request-createTaskClean"], "isController": false}, {"data": [0.7077594894188781, 500, 1500, "HTTP Request-createShopping"], "isController": false}, {"data": [0.06677866442671146, 500, 1500, "HTTP Request-UpdateTaskClean"], "isController": false}, {"data": [0.18175388967468176, 500, 1500, "HTTP Request-UpdateTaskEggs"], "isController": false}, {"data": [0.8470111448834853, 500, 1500, "HTTP Request-createReminders"], "isController": false}, {"data": [0.49066243833685697, 500, 1500, "HTTP Request-createTaskEggs"], "isController": false}, {"data": [0.4742063492063492, 500, 1500, "HTTP Request-DelTask"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 24849, 76, 0.305847317799509, 2189.425852146974, 0, 24949, 754.0, 5841.0, 7110.850000000002, 12093.900000000016, 382.71623952686053, 3256.5505251971417, 94.94698394279048], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTP Request - readTasks", 2645, 76, 2.873345935727788, 5683.606427221176, 18, 24949, 4991.0, 11097.6, 13807.199999999979, 17590.32, 43.36421018116239, 3367.58838775207, 7.749658655422576], "isController": false}, {"data": ["HTTP Request-DelList", 3979, 0, 0.0, 406.8562452877601, 1, 7774, 216.0, 940.0, 1433.0, 3044.3999999999924, 105.58857870714361, 19.694744661195735, 21.934561916197858], "isController": false}, {"data": ["HTTP Request-createTaskClean", 2931, 0, 0.0, 1187.8471511429548, 0, 18664, 454.0, 3986.2000000000007, 5196.600000000002, 7931.519999999993, 47.11839884253678, 14.296134002491762, 13.942229196808938], "isController": false}, {"data": ["HTTP Request-createShopping", 2977, 0, 0.0, 640.3627813234805, 1, 6317, 219.0, 1713.0, 1969.1, 3495.679999999981, 46.17078693507863, 13.780393724409878, 10.73110086967648], "isController": false}, {"data": ["HTTP Request-UpdateTaskClean", 2381, 0, 0.0, 5753.176816463682, 2, 22397, 5314.0, 10627.0, 12145.5, 14783.72, 39.60741911336605, 12.130509622182483, 11.84502165121018], "isController": false}, {"data": ["HTTP Request-UpdateTaskEggs", 2121, 0, 0.0, 3387.062706270627, 1, 13496, 3411.0, 6394.0, 7153.9, 8738.980000000029, 43.69412055539533, 13.607719056435663, 13.347675241285897], "isController": false}, {"data": ["HTTP Request-createReminders", 2961, 0, 0.0, 544.8608578183038, 1, 9050, 190.0, 1587.4000000000015, 2276.2000000000007, 5442.38, 46.9232841544776, 14.067789591025782, 10.951821204023581], "isController": false}, {"data": ["HTTP Request-createTaskEggs", 2838, 0, 0.0, 2470.293516560956, 1, 23209, 1020.5, 6327.5, 10071.599999999959, 13804.960000000005, 46.162104133118625, 14.016759025439582, 13.641742124343272], "isController": false}, {"data": ["HTTP Request-DelTask", 2016, 0, 0.0, 1418.0471230158716, 1, 10021, 1028.5, 3291.5999999999985, 3961.199999999996, 6226.4899999999925, 48.49301229163159, 9.045083347364876, 10.018263243270873], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["500", 76, 100.0, 0.305847317799509], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 24849, 76, "500", 76, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request - readTasks", 2645, 76, "500", 76, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
