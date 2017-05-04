<template>
    <div id="log">
       <h3>操作记录<span class="total">总数：771</span></h3>
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
                <tr>
                    <td><i></i></td>
                    <td class="wid150">2016/04/14</td>
                    <td class="wid150">17:29:45</td>
                    <td class="wid600">admin注销</td>
                </tr>
                <tr>
                    <td><i></i></td>
                    <td class="wid150">2016/04/14</td>
                    <td class="wid150">17:30:21</td>
                    <td class="wid600">admin登陆</td>
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
            info:{
                "servertime":new Date(),
                "user":'',
                "ver":'',
                "clientnum":''
            }
        }
    },
    mounted (){
        //http://192.168.43.174/WaWebService/Json/GetActionLog/WPMSServer/Node/0/10

        const domain = 'http://192.168.191.2';
        const projectname = 'WPMSServer';
        let verurl = domain+'/WaWebService/Json/GetVersion/'+projectname;
        let userurl = domain+'/WaWebService/JSON/GetUserInfo/'+projectname;
        let me = this;

        function getuser() {
            return me.$http({
                url: userurl,
                method: 'get',
                headers: {"Authorization":"Basic YWRtaW46"},
            });
        }
        function getver() {
            return me.$http({
                url: verurl,
                method: 'get',
                headers: {"Authorization":"Basic YWRtaW46"},
            });
        }

        me.$http.all([getuser(), getver()])
            .then(me.$http.spread(function (userre, verre) {
                me.info.user = userre.data.UserInfo.UserName;
                me.info.ver = verre.data.Version;
            }));
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