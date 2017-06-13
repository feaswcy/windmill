<template>
    <div>
        <div id="windmill-list">
            <ul>
                <li v-for="(item, index) in items" >
                    <i class="iconfont">&#xe8c9;</i>
                    <div>
                        <p>编号:<span class="num">{{item.name}}</span></p>
                        <router-link to="/control"><p>状态:
                            <span v-if="item.status.value==1" class="on">启动</span>
                            <span v-else class="off">停机</span>
                        </p>
                        </router-link>
                        <p>风速:<span>{{item.windspeed.value==''?500:item.windspeed.value}}</span></p>
                        <p>功率:<span>{{item.power1.value==''?800:item.power1.value}}</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import api from "../api"

    export default{
        data (){
            return {
                items:[
                    {
                       num:'',
                       status:"",
                       windspeed:{
                           value:""
                       },
                       power1:{
                           value:""
                       }
                    }
                ],
            }
        },
        methods: {

        },
        mounted (){
            let me = this;

            setInterval(function(){
                api.getvalue(1,function(finaldata){
                    console.log(finaldata)
                    me.items = finaldata
                },function(error){
                    console.log("msg:\n"+error);
                });
            },5000);

        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #windmill-list{

        ul{
            overflow hidden
            li{
                float left
                background-color #ffffff
                border-radius 3px
                width 300px
                margin-bottom 50px
                margin-right 30px
                i{
                    display block
                    float left
                    color: #000
                    font-size:100px;
                }
                div{
                    float left;
                    margin-left 10px;
                    p{
                        margin-bottom:5px;
                    }
                    span.off{
                        color:red
                    }
                    span.on{
                        color:green;
                    }
                    span.num{
                        color:blue
                    }
                }



            }
        }
    }


</style>