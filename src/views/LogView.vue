<template>
    <div id="log">
       <h3>操作记录<span class="total">总数：{{total}}</span></h3>
       <table>
           <thead>
               <tr>
                   <th><i></i></th>
                   <th class="wid150">日期</th>
                   <th class="wid150">时间</th>
                   <th class="wid600">内容</th>
                   <th class="wid600">优先级</th>
               </tr>
           </thead>
            <tbody>
                <tr v-for="key in logdatas">
                    <td><i></i></td>
                    <td class="wid150">{{key.date}}</td>
                    <td class="wid150">{{key.time}}</td>
                    <td class="wid600">{{key.action}}</td>
                    <td class="wid600">{{key.priority}}</td>

                </tr>
            </tbody>
       </table>
    </div>
</template>

<script>
    import api from "../api"
    export default{
    data (){
        return {
            total:'771',
            logdatas:[{
                date:"2016/04/14",
                time:"17:29:45",
                action:"admin注销",
                priority:"1"
            },{
                date:"2016/04/14",
                time:"17:39:45",
                action:"admin注销",
                priority:"1"
            },{
                date:"2016/04/14",
                time:"17:59:45",
                action:"admin注销",
                priority:'1'
            }]
        }
    },
    mounted (){
        let me =this;
        api.getlog(function(logdata){
            let logarr = logdata.data.ActionLogs;
            let res = [];
            for(let i=0;i<logarr.length;i++){
                let obj ={};
                obj.date=logarr[i].Time.split(/\s/)[0];
                obj.time=logarr[i].Time.split(/\s/)[1];
                obj.action=logarr[i].Action;
                obj.priority=logarr[i].Priority;
                res.push(obj);
            }
            me.total = logdata.data.Result.Total;
            me.logdatas = res;
        }
    );
    }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #log{
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