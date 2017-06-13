<template>
    <div>
        <div id="table-container">
            <table>
                <thead>
                <tr>
                    <th>风机编号</th>
                    <th>状态</th>
                    <th>实时风速</th>
                    <th>实时功率</th>
                    <th>实时无功</th>
                    <th>叶轮转速</th>
                    <th>电机转速</th>
                    <th>变桨角度</th>
                    <th>电网频率</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in tabledata">
                    <th>{{item.name}}</th>
                    <td v-if="item.status.value==1" class="on">运行中</td>
                    <td v-else class="off">停机</td>
                    <td>{{item.windspeed.value}}</td>

                    <td>{{item.power1.value}}</td>
                    <td>{{item.power2.value}}</td>
                    <td>{{item.speed1.value}}</td>

                    <td>{{item.speed2.value}}</td>
                    <td>{{item.angle.value}}</td>
                    <td>{{item.frequency.value}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import api from "../api"
    export default{
    data (){
        return {
            total:9,
            tabledata:[
                {
                    name:"A01",
                    status:'1',
                    windspeed:{
                        value:'15'
                    },
                    power1:{
                        value:'800'
                    },
                    power2:{
                        value:'800'
                    },
                    speed1:{
                        value:'800'
                    },
                    speed2:{
                        value:'800'
                    },
                    angle:{
                        value:'800'
                    },
                    frequency:{
                        value:'800'
                    }
                }
            ]
        }
    },
    mounted (){
        let me =this;

        setInterval(function(){
            api.getvalue(2,function(data){
                me.tabledata = data;
            },function (error) {
                console.log("msg:\n"+error);
            });

        },5000)

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    #table-container{
        table{
            width:80%;
            border: 1px solid #ddd;
            th,td{
                border: 1px solid #ddd;
                padding: 8px;
                text-align center;
            }
            td.off{
                color:red
            }
            td.on{
                color:green
            }
            td.link{
                cursor:pointer;
            }
        }
    }

</style>