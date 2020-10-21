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

    var data = {"OkPercent": 98.30508474576271, "KoPercent": 1.694915254237288};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9823446327683616, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.8372093023255814, 500, 1500, "HTTP Request - readTasks"], "isController": false}, {"data": [0.9994511525795828, 500, 1500, "HTTP Request-DelList"], "isController": false}, {"data": [0.9980952380952381, 500, 1500, "HTTP Request-createTaskClean"], "isController": false}, {"data": [0.9972627737226277, 500, 1500, "HTTP Request-createShopping"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-UpdateTaskClean"], "isController": false}, {"data": [0.9989247311827957, 500, 1500, "HTTP Request-UpdateTaskEggs"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-createReminders"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-createTaskEggs"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-DelTask"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 4956, 84, 1.694915254237288, 49.00040355125104, 0, 901, 18.0, 140.30000000000018, 231.0, 420.8600000000006, 1000.0, 753.3582636576876, 245.81552032889425], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTP Request - readTasks", 516, 84, 16.27906976744186, 104.38759689922483, 2, 901, 32.5, 340.90000000000003, 513.9499999999997, 721.9799999999999, 111.88204683434519, 552.7386098764093, 19.994545479184737], "isController": false}, {"data": ["HTTP Request-DelList", 911, 0, 0.0, 37.47639956092203, 1, 556, 13.0, 94.0, 171.39999999999998, 320.88, 210.78204534937527, 39.31579166184637, 43.61700493116613], "isController": false}, {"data": ["HTTP Request-createTaskClean", 525, 0, 0.0, 38.52571428571428, 0, 512, 10.0, 114.40000000000003, 200.39999999999998, 361.3200000000006, 114.32926829268293, 34.60353093695558, 33.715224847560975], "isController": false}, {"data": ["HTTP Request-createShopping", 548, 0, 0.0, 71.22445255474456, 1, 512, 40.0, 191.0, 278.0, 409.17999999999984, 111.90524811108841, 33.32736401112926, 26.009227588319376], "isController": false}, {"data": ["HTTP Request-UpdateTaskClean", 470, 0, 0.0, 42.49787234042553, 1, 457, 20.5, 114.90000000000003, 202.79999999999995, 311.77000000000027, 105.95130748422002, 32.37317896190262, 31.533106261271417], "isController": false}, {"data": ["HTTP Request-UpdateTaskEggs", 465, 0, 0.0, 39.65806451612906, 0, 524, 11.0, 123.40000000000003, 209.09999999999997, 276.7399999999997, 107.01956271576525, 33.22425201380898, 32.48210946490219], "isController": false}, {"data": ["HTTP Request-createReminders", 535, 0, 0.0, 38.491588785046716, 0, 419, 16.0, 116.80000000000007, 174.39999999999992, 282.19999999999993, 116.07724018225211, 34.68608463061402, 27.09224648784986], "isController": false}, {"data": ["HTTP Request-createTaskEggs", 522, 0, 0.0, 35.07471264367816, 0, 386, 14.0, 99.0, 164.69999999999993, 294.15999999999985, 114.59934138309549, 34.68822893798024, 33.789705680570805], "isController": false}, {"data": ["HTTP Request-DelTask", 464, 0, 0.0, 39.36853448275861, 0, 439, 13.5, 108.0, 180.5, 306.7000000000005, 105.64663023679417, 19.705572632058285, 21.75564236111111], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["500", 84, 100.0, 1.694915254237288], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 4956, 84, "500", 84, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request - readTasks", 516, 84, "500", 84, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
