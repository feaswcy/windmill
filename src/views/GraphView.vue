<template>
    <div id="graph">
        <div class="graph1">
            <h3>实时趋势图</h3>
            <div id="chart1" :style="{width:'600px',height:'400px'}"></div>
        </div>
        <div class="graph2">
            <h3>实时功率对比图</h3>
            <div id="chart2" :style="{width:'600px',height:'400px'}"></div>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts"
    export default{
        data (){
            return {
                msg:"123"
            }
        },
        mounted (){
            let myChart1 = echarts.init(document.getElementById('chart1'));
            let myChart2 = echarts.init(document.getElementById('chart2'));


            myChart1.setOption({
//                title: { text: '功率趋势图' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });

            myChart2.setOption({
//                title: { text: '功率对比图' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }

    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #graph{
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