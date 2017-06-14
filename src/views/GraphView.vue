<template>
    <div>
        <div id="graph">
            <div class="graph2">
                <h3>实时功率对比图</h3>
                <div id="chart2"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts"
    import api from "../api"
    export default{
        data (){
            return {
                msg:"123",
                chart1data:{
                    0:[],
                    1:[],
                    2:[],
                    3:[],
                    4:[]
                },
                chart2data:{
                    power:[],
                    speed:[]
                }
            }
        },
        mounted (){
            let me = this;
            let myChart2 = echarts.init(document.getElementById('chart2'));
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
            setInterval(function(){
                api.getvalue(1,function (result) {

                    for(let i=0;i<result.length;i++){
                        let index = result[i].id;
                        if(index<5){
                            //功率对比图
                            me.chart2data.power.push(result[i].power1.value);
                            me.chart2data.speed.push(result[i].windspeed.value);
                        }
                    }
                    myChart2.setOption(option2);
                });
            },5000)
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #graph{
        padding:10px 20px;
        #chart2{
            width:100%;
            height:400px;
        }
        div{
            h3{
                border-bottom 1px solid #ddd;
                padding-bottom: 5px;
                margin-bottom 10px;
            }
        }

    }


</style>