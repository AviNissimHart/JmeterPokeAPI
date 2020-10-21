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

    var data = {"OkPercent": 96.45682942975128, "KoPercent": 3.5431705702487153};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.3718437726570627, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.2046139927623643, 500, 1500, "HTTP Request - readTasks"], "isController": false}, {"data": [0.4800073032682125, 500, 1500, "HTTP Request-DelList"], "isController": false}, {"data": [0.37474892395982784, 500, 1500, "HTTP Request-createTaskClean"], "isController": false}, {"data": [0.44686387291153107, 500, 1500, "HTTP Request-createShopping"], "isController": false}, {"data": [0.2338153138350312, 500, 1500, "HTTP Request-UpdateTaskClean"], "isController": false}, {"data": [0.3606194690265487, 500, 1500, "HTTP Request-UpdateTaskEggs"], "isController": false}, {"data": [0.3806179775280899, 500, 1500, "HTTP Request-createReminders"], "isController": false}, {"data": [0.3450352526439483, 500, 1500, "HTTP Request-createTaskEggs"], "isController": false}, {"data": [0.43892593892593895, 500, 1500, "HTTP Request-DelTask"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 31723, 1124, 3.5431705702487153, 1846.099233994266, 0, 23547, 1539.0, 3168.0, 3842.9500000000007, 11556.900000000016, 510.79623218742455, 2503.4658416190323, 126.31732549714194], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTP Request - readTasks", 3316, 1124, 33.8962605548854, 4509.613088057917, 8, 23547, 2949.0, 10560.100000000002, 11944.299999999992, 13416.98, 55.79485798896217, 2487.364399912926, 9.971151378886795], "isController": false}, {"data": ["HTTP Request-DelList", 5477, 0, 0.0, 1190.6967317874744, 0, 9944, 951.0, 2350.0, 3308.4999999999973, 6641.080000000016, 95.123137309389, 17.74269455673174, 19.767580228125325], "isController": false}, {"data": ["HTTP Request-createTaskClean", 3485, 0, 0.0, 1464.95954088953, 0, 11135, 1381.0, 2935.8, 3562.0999999999995, 5738.139999999999, 58.933946629688506, 17.88710941463456, 17.435886477111307], "isController": false}, {"data": ["HTTP Request-createShopping", 3651, 0, 0.0, 1189.5143796220214, 2, 8791, 996.0, 2151.4000000000015, 2710.199999999999, 4912.000000000001, 59.29354445797807, 17.703496117539586, 13.781116778319122], "isController": false}, {"data": ["HTTP Request-UpdateTaskClean", 3043, 0, 0.0, 2334.246138678932, 1, 11312, 1912.0, 4948.6, 6548.5999999999985, 7967.519999999991, 52.07139068088092, 15.955288981887096, 15.587417408537107], "isController": false}, {"data": ["HTTP Request-UpdateTaskEggs", 2938, 0, 0.0, 1855.5500340367594, 0, 11821, 1550.0, 3882.2999999999997, 6042.099999999999, 7885.930000000002, 50.414400192185596, 15.698664889235891, 15.396665654975376], "isController": false}, {"data": ["HTTP Request-createReminders", 3560, 0, 0.0, 1310.584831460676, 0, 8396, 1271.0, 2319.5000000000005, 2852.7999999999993, 4117.509999999998, 59.21490352628078, 17.750371652528276, 13.820665959747172], "isController": false}, {"data": ["HTTP Request-createTaskEggs", 3404, 0, 0.0, 1815.7423619271465, 0, 10441, 1714.5, 3805.0, 4929.5, 7830.9, 57.78011644289036, 17.541922251879893, 17.081282065291195], "isController": false}, {"data": ["HTTP Request-DelTask", 2849, 0, 0.0, 1487.889083889085, 0, 11935, 1091.0, 3408.0, 4879.5, 7433.5, 48.93339287554533, 9.127224647684724, 10.118782284832195], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["500", 1124, 100.0, 3.5431705702487153], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 31723, 1124, "500", 1124, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request - readTasks", 3316, 1124, "500", 1124, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
