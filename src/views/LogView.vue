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
               </tr>
           </thead>
            <tbody>
                <tr v-for="key in logdatas">
                    <td><i></i></td>
                    <td class="wid150">{{key.date}}</td>
                    <td class="wid150">{{key.time}}</td>
                    <td class="wid600">{{key.action}}</td>
                </tr>
            </tbody>
       </table>
    </div>
</template>

<script>
export default{
    data (){
        return {
            total:'771',
            logdatas:[{
                date:"2016/04/14",
                time:"17:29:45",
                action:"admin注销"
            },{
                date:"2016/04/14",
                time:"17:39:45",
                action:"admin注销"
            },{
                date:"2016/04/14",
                time:"17:59:45",
                action:"admin注销"
            }]
        }
    },
    mounted (){
        let es = new EventSource("sse");

        es.addEventListener("message", function(e){
            alert('sse message');
            console.log(e.data.module6);
            me.info.user=e.data.module6.user;
            me.info.ver =e.data.module6.version;
            me.info.clientnum =e.data.module6.clientnum;
        },false);
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