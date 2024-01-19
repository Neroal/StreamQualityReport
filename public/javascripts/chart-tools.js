const Chart = require('chart.js');

class ChartTools {

    DrawTest(canvasID) {
        var ctx = document.getElementById(canvasID).getContext('2d');

        // 定義數據
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Monthly Sales',
                data: [10, 20, 15, 25, 30, 22, 18],
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // 區域顏色
                borderColor: 'rgba(75, 192, 192, 1)', // 線條顏色
                borderWidth: 1 // 線條寬度
            }]
        };

        // 定義配置
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        // 創建圖表
        var myChart = new Chart(ctx, {
            type: 'line', // 折線圖
            data: data,
            options: options
        });
    }


}


module.exports = ChartTools