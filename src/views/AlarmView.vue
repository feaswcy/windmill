<template>
    <div id="alarm">
        alarm view
    </div>
</template>

<script>
    export default{
        data (){
            return {
                msg:"123",
                info:{
                    "alarmcount":'',
                    "user":'',
                    "ver":'',
                    "clientnum":''
                }
            }
        },
        mounted (){
            const domain = 'http://192.168.43.174';
            const projectname = 'WPMSServer';
            let url1 = domain+'/WaWebService/GetAlarmSummaryCount/'+projectname;
            let url2 = domain+'WaWebService/Json/GetAlarmLog/'+projectname+'/Node/0/10'+projectname;
            let me = this;

            function geturl1() {
                return me.$http({
                    url: url1,
                    method: 'get',
                    headers: {"Authorization":"Basic YWRtaW46"},
                });
            }
            function geturl2() {
                return me.$http({
                    url: url2,
                    method: 'get',
                    headers: {"Authorization":"Basic YWRtaW46"},
                });
            }

            me.$http.all([geturl1(), geturl2()])
                .then(me.$http.spread(function (res1, res2) {
                    me.info.user = res1.data.UserInfo.UserName;
                    me.info.ver = res2.data.Version;
                }));
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #alarm{
        padding:10px 20px;
        img{
            width:800px;
            display block
            margin:0 auto;
        }
    }


</style>