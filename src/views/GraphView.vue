<template>
    <div id="graph">
        <div class="graph1">
            <h3>实时趋势图</h3>
            <div id="chart1" :style="{width:'800px',height:'400px'}"></div>
        </div>
        <div class="graph2">
            <h3>实时功率对比图</h3>
            <div id="chart2" :style="{width:'800px',height:'400px'}"></div>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts"
    export default{
        data (){
            return {
                msg:"123",
                chart1data:{
                    data1:[[{
                        name:(new Date()).toString(),
                        value:['2017/5/2 12:00',690]
                    },{
                        name:(new Date()).toString(),
                        value:['2017/5/3 12:00',1290]
                    },{
                        name:(new Date()).toString(),
                        value:['2017/5/4 12:00',1590]
                    }]],
                    data2:[{
                        name:(new Date()).toString(),
                        value:['2017/5/2 12:00',790]
                    },{
                        name:(new Date()).toString(),
                        value:['2017/5/3 12:00',1390]
                    },{
                        name:(new Date()).toString(),
                        value:['2017/5/4 12:00',1690]
                    }],
                    data3:[{
                        name:(new Date()).toString(),
                        value:['2017/5/2 12:00',890]
                    },{
                        name:(new Date()).toString(),
                        value:['2017/5/3 12:00',1490]
                    },{
                        name:(new Date()).toString(),
                        value:['2017/5/4 12:00',1690]
                    }]
                },
                chart2data:{
                    power:[2.0, 4.9, 7.0, 23.2, 25.6],
                    speed:[2.6, 5.9, 9.0, 26.4, 28.7],
                }
            }
        },
        mounted (){
            let me = this;

            let myChart1 = echarts.init(document.getElementById('chart1'));
            let myChart2 = echarts.init(document.getElementById('chart2'));
            let option1 = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        animation: false
                    }
                },
                legend:{
                    show:true,
                    data:['A1','A2']
                },
                xAxis: {
                    type: 'time',
                },
                yAxis: {
                    type: 'value',
//                    boundaryGap: [0, '100%'],
                },
                series: [{
                    name: 'A1风机',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: me.chart1data.data1
                },{
                    name: 'A2风机',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: me.chart1data.data2
                },{
                    name: 'A3风机',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: me.chart1data.data3
                }]
            };
            let option2 = {
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['功率','风速']
                },
                toolbox: {
                    show : true,
                    feature : {
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['A01','A02','A03','A04','A05']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'功率',
                        type:'bar',
                        data: me.chart2data.power,
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'风速',
                        type:'bar',
                        data:me.chart2data.speed,
                        markPoint : {
                            data : [
                                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            };

            myChart1.setOption(option1);
            myChart2.setOption(option2);
//            setInterval(function () {
//
//                for (var i = 0; i < 5; i++) {
//                    data.shift();
//                    data.push(randomData());
//                }
//
//                myChart1.setOption({
//                    series: [{
//                        data: me.data
//                    }]
//                });
//            }, 5000);

        }

    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #graph{

        margin-left:220px;
        margin-top:100px;
        padding:10px 20px;
        div{
            h3{
                border-bottom 1px solid #ddd;
                padding-bottom: 5px;
                margin-bottom 10px;
            }
        }

    }


</style>