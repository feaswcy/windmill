<template>
    <div id="system-container">
        <div class="title-container">

            <h3>欢迎来到毕业设计-风电监控系统</h3>

            <div class="system-info">
                <ul>
                    <li><span>系统时间:</span>{{info.date}}&nbsp;&nbsp;{{info.time}}</li>
                    <li><span>当前用户:</span>{{info.user}}</li>
                    <li><span>当前版本:</span>{{info.ver}}</li>
                    <li><span>系统最大连接数:</span>{{info.clientnum}}</li>
                </ul>

            </div>
        </div>

    </div>
</template>

<script>
    import api from "../api"
    export default{
        data (){
            return {
                msg:"123",
                info:{
                    "date":'',
                    "time":'',
                    "user":'admin',
                    "ver":'10.0.2',
                    "clientnum":'100'
                }
            }
        },
        mounted (){
            let me = this;

//            setInterval(function(){
                api.getinfo(function (data1, data2,data3,data4) {
                    console.log(data1);
                    me.info.date = data1.data.Date;
                    me.info.time = data1.data.Time;
                    me.info.user = data2.data.UserInfo.UserName;
                    me.info.ver = data3.data.Version;
                    me.info.clientnum = data4.data.LimitCount;
                });

//            },5000);

//            let es = new EventSource("sse");
//
//            es.addEventListener("message", function(e){
//                alert('sse message');
//                console.log(e.data.info);
//                me.info.user=e.data.info.user;
//                me.info.ver =e.data.info.version;
//                me.info.clientnum =e.data.info.clientnum;
//            },false);

        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
#system-container{
    max-width:100%;
    height:600px;
    width:100%;
    margin 80px 0 0 70px
    background-image url('/public/bg.jpeg')
    background-size cover
    img{
        width 100%;
    }
    .title-container{
        margin: 0 auto;
        padding-top:200px;
        height 400px;
        width 600px;
        color #fff
        h3{
            font-size 30px;
        }
        .system-info{
            margin-top:20px;
            ul{
                li{
                    margin-top:5px;
                    span{
                        margin-right:10px;
                    }
                }
            }
        }
    }
}


</style>