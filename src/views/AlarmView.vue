<template>
    <div id="alarm">
        <h3>报警记录<span class="total">总数：{{total}}</span></h3>
        <table>
            <thead>
            <tr>
                <th><i></i></th>
                <th class="wid150">日期</th>
                <th class="wid150">时间</th>
                <th class="wid600">点名称</th>
                <th class="wid150">描述</th>
                <th class="wid600">优先级</th>
                <th class="wid150">详情</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in alarmdatas">
                <td><i></i></td>
                <td class="wid150">{{item.date}}</td>
                <td class="wid150">{{item.time}}</td>
                <td class="wid600">{{item.pointname}}</td>
                <td class="wid150">{{item.describe}}</td>
                <td class="wid150">{{item.priority}}</td>
                <td class="wid600">{{item.action}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import api from "../api";

    export default{
        data (){
            return {
                total:"",
                alarmdatas:[{
                    date:"",
                    time:"",
                    pointname:"",
                    describe:"",
                    action:'',
                    priority:'',
                }]
            }
        },
        mounted (){
            let me =this;
            setInterval(function(){
                api.getalarm(function(data){
                    let arr2 = data.data.AlarmLogs;
                    let res = [];
                    for(let i=0;i<arr2.length;i++){
                        let obj = {};
                        obj.date=arr2[i].Time.split(/\s/)[0];
                        obj.time=arr2[i].Time.split(/\s/)[1];
                        obj.pointname=arr2[i].TagName;
                        obj.describe=arr2[i].Description;
                        obj.action=arr2[i].Action;
                        obj.priority=arr2[i].Priority;
                        res.push(obj);
                    }
                    me.alarmdatas = res;
                    me.total = data.data.Result.Total;
                })
            },5000)

        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #alarm{
        padding:10px 20px;
        h3{
            border-bottom: 1px solid #ddd;
            padding-bottom:5px;
            margin-bottom:30px;
            span.total{
                float:right;
            }
        }
        table{
            border: 1px solid #ddd;
            th{
                text-align center
                background-color #fff
            }
            td{
                border: 1px solid #ddd;
                padding: 8px;
                text-align center;
            }
            span.total{
                float:right;
            }
            .wid150{
                width:150px;
            }
            .wid600{
                width:600px;
            }
        }
    }


</style>