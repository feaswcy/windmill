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
                    "date":'default',
                    "time":'default',
                    "user":'default',
                    "ver":'default',
                    "clientnum":'default'
                }
            }
        },
        mounted (){
            let me = this;
            setInterval(function(){
                api.getinfo(function (data1, data2,data3,data4) {
                    console.log(data2);
                    me.info.date = data1.data.Date;
                    me.info.time = data1.data.Time;
                    me.info.ver = data2.data.Version;
                    me.info.user = data3.data.UserInfo.UserName;
                    me.info.clientnum = data4.data.LimitCount;
                });

            },5000);
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