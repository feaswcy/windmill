<template>
    <div id="table-container">
        <table>
            <thead>
            <tr>
                <th>风机编号</th>
                <th>状态</th>
                <th>发电量</th>
                <th>实时风速</th>
                <th>实时功率</th>
                <th>实时无功</th>
                <th>叶轮转速</th>
                <th>电机转速</th>
                <th>扭揽角度</th>
                <th>变桨角度</th>
                <th>电网频率</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in tabledata">
                <th>{{item.num}}</th>
                <td v-if="item.status==0" class="off">停机</td>
                <td v-if="item.status==1" class="on">运行中</td>
                <td>{{item.eletric}}</td>
                <td>{{item.windspeed}}</td>
                <td>{{item.power1}}</td>
                <td>{{item.power2}}</td>
                <td>{{item.speed1}}</td>
                <td>{{item.speed2}}</td>
                <td>{{item.angle1}}</td>
                <td>{{item.angle2}}</td>
                <td>{{item.frequency}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default{
    data (){
        return {
            msg:"123",
            tabledata:[
                {
                    num:"A01",
                    status:'1',
                    eletric:'800',
                    windspeed:'15',
                    power1:'800',
                    power2:'800',
                    speed1:'800',
                    speed2:'800',
                    angle1:'800',
                    angle2:'800',
                    frequency:'100.00'
                },
                {
                    num:"A01",
                    status:'1',
                    eletric:'800',
                    windspeed:'15',
                    power1:'800',
                    power2:'800',
                    speed1:'800',
                    speed2:'800',
                    angle1:'800',
                    angle2:'800',
                    frequency:'100.00'
                },
                {
                    num:"A01",
                    status:'1',
                    eletric:'800',
                    windspeed:'15',
                    power1:'800',
                    power2:'800',
                    speed1:'800',
                    speed2:'800',
                    angle1:'800',
                    angle2:'800',
                    frequency:'100.00'
                },
                {
                    num:"A01",
                    status:'1',
                    eletric:'800',
                    windspeed:'15',
                    power1:'800',
                    power2:'800',
                    speed1:'800',
                    speed2:'800',
                    angle1:'800',
                    angle2:'800',
                    frequency:'100.00'
                }
            ]
        }
    },
    mounted (){
        let es = new EventSource("sse");

        es.addEventListener("message", function(e){
            alert('sse message');
            console.log(e.data.module3);
            me.info.user=e.data.module3.user;
            me.info.ver =e.data.module3.version;
            me.info.clientnum =e.data.module3.clientnum;
        },false);
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    #table-container{
        margin-left:200px;
        table{
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