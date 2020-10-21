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

    var data = {"OkPercent": 97.83759929390997, "KoPercent": 2.1624007060900263};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9598411297440423, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.7811244979919679, 500, 1500, "HTTP Request - readTasks"], "isController": false}, {"data": [0.9965635738831615, 500, 1500, "HTTP Request-DelList"], "isController": false}, {"data": [0.9627118644067797, 500, 1500, "HTTP Request-createTaskClean"], "isController": false}, {"data": [0.963855421686747, 500, 1500, "HTTP Request-createShopping"], "isController": false}, {"data": [0.9972972972972973, 500, 1500, "HTTP Request-UpdateTaskClean"], "isController": false}, {"data": [0.9941860465116279, 500, 1500, "HTTP Request-UpdateTaskEggs"], "isController": false}, {"data": [0.987220447284345, 500, 1500, "HTTP Request-createReminders"], "isController": false}, {"data": [0.9830827067669173, 500, 1500, "HTTP Request-createTaskEggs"], "isController": false}, {"data": [0.9846625766871165, 500, 1500, "HTTP Request-DelTask"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2266, 49, 2.1624007060900263, 94.87025595763468, 0, 1165, 8.0, 290.5999999999999, 479.0, 1016.0, 332.79483037156706, 392.91459373623144, 82.40773356036128], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTP Request - readTasks", 249, 49, 19.67871485943775, 194.7670682730923, 5, 1095, 34.0, 700.0, 910.0, 1074.0, 39.84, 338.99546875, 7.11984375], "isController": false}, {"data": ["HTTP Request-DelList", 291, 0, 0.0, 28.714776632302407, 1, 672, 4.0, 85.40000000000003, 179.0, 490.1999999999978, 50.47701647875109, 9.415146628360798, 10.447440101908066], "isController": false}, {"data": ["HTTP Request-createTaskClean", 295, 0, 0.0, 120.4745762711864, 1, 1165, 5.0, 433.80000000000024, 821.599999999999, 1131.0400000000004, 46.38364779874213, 14.031790487421382, 13.674024665880502], "isController": false}, {"data": ["HTTP Request-createShopping", 332, 0, 0.0, 158.4578313253011, 1, 1059, 77.5, 384.7, 823.0, 1043.3400000000001, 48.93867924528302, 14.566097619398585, 11.374419590212264], "isController": false}, {"data": ["HTTP Request-UpdateTaskClean", 185, 0, 0.0, 49.63243243243244, 1, 554, 6.0, 164.20000000000002, 260.1999999999997, 465.4199999999986, 31.40383636054999, 9.593885269903243, 9.343403868188762], "isController": false}, {"data": ["HTTP Request-UpdateTaskEggs", 172, 0, 0.0, 43.65697674418605, 1, 651, 3.0, 159.80000000000007, 260.75, 621.0700000000004, 29.39668432746539, 9.125209632968723, 8.92041691591181], "isController": false}, {"data": ["HTTP Request-createReminders", 313, 0, 0.0, 86.3610223642173, 0, 1157, 12.0, 258.60000000000014, 467.90000000000003, 1107.5800000000027, 49.15972985707555, 14.68478826370347, 11.473804136563531], "isController": false}, {"data": ["HTTP Request-createTaskEggs", 266, 0, 0.0, 70.99248120300744, 0, 1123, 4.0, 171.0, 356.14999999999975, 1000.8699999999994, 42.20212597175948, 12.769526911788038, 12.439667866492147], "isController": false}, {"data": ["HTTP Request-DelTask", 163, 0, 0.0, 45.20858895705523, 1, 795, 4.0, 101.19999999999999, 287.9999999999999, 668.279999999997, 27.858485728935225, 5.196260521705692, 5.735531319432575], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["500", 49, 100.0, 2.1624007060900263], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2266, 49, "500", 49, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request - readTasks", 249, 49, "500", 49, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
