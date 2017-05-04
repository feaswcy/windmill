<template>
    <div>
        <h3>系统信息简介</h3>
        <div id="system-container"  :style="{width:'800px',height:'600px'}">
            <ul>
                <li><span>系统时间:</span>{{info.servertime}}</li>
                <li><span>当前用户:</span>{{info.user}}</li>
                <li><span>当前版本:</span>{{info.ver}}</li>
                <li><span>客户端最大连接数:</span>{{info.clientnum}}</li>
            </ul>

        </div>
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
#system-container{
    /*padding:10px 20px;*/
    img{
        width 100%;
    }
}


</style>