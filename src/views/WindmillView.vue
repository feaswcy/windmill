<template>
    <div id="windmill-list">
        <ul>
            <!--<router-link to="/windmill">-->
            <!--<i class="iconfont">&#xe62c;</i>-->
            <!--风场信息</router-link>-->

            <li v-for="(item, index) in items" v-on:click="showdetail">
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">{{item.num}}</span></p>
                    <p>状态:
                        <span v-if="item.status==0" class="off">停机</span>
                        <span v-if="item.status==1" class="on">启动</span>
                    <p>风速:<span>{{item.speed}}</span></p>
                    <p>功率:<span>{{item.power}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data (){
            return {
                items:[
                    {
                       num:'A01',
                       status:"0",
                       speed:"15.00",
                       power:'800.00'
                    },{
                        num:'A01',
                        status:"0",
                        speed:"15.00",
                        power:'800.00'
                    },{
                        num:'A01',
                        status:"1",
                        speed:"15.00",
                        power:'800.00'
                    },{
                        num:'A01',
                        status:"1",
                        speed:"15.00",
                        power:'800.00'
                    },{
                        num:'A01',
                        status:"1",
                        speed:"15.00",
                        power:'800.00'
                    },{
                        num:'A01',
                        status:"1",
                        speed:"15.00",
                        power:'800.00'
                    },{
                        num:'A01',
                        status:"1",
                        speed:"15.00",
                        power:'800.00'
                    }

                ],
            }
        },
        methods: {
            showdetail: function () {
                alert(1);
            }
        },
        mounted (){
            let es = new EventSource("sse");

            es.addEventListener("message", function(e){
                alert('sse message');
                console.log(e.data.module2);
                me.info.user=e.data.module2.user;
                me.info.ver =e.data.module2.version;
                me.info.clientnum =e.data.module2.clientnum;
            },false);
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #windmill-list{
        margin-left:150px
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