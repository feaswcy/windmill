<template>
    <div id="windmill-list">
        <ul>
            <li>
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">A01</span></p>
                    <p>状态:<span class="off">停机</span></p>
                    <p>风速:<span>15.00</span></p>
                    <p>功率:<span>800.00</span></p>
                </div>
            </li>
            <li>
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">A02</span></p>
                    <p>状态:<span class="off">停机</span></p>
                    <p>风速:<span>15.00</span></p>
                    <p>功率:<span>800.00</span></p>
                </div>
            </li>
            <li>
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">A03</span></p>
                    <p>状态:<span class="off">停机</span></p>
                    <p>风速:<span>15.00</span></p>
                    <p>功率:<span>800.00</span></p>
                </div>
            </li>
            <li>
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">A04</span></p>
                    <p>状态:<span class="off">停机</span></p>
                    <p>风速:<span>15.00</span></p>
                    <p>功率:<span>800.00</span></p>
                </div>
            </li>
            <li>
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">A05</span></p>
                    <p>状态:<span class="off">停机</span></p>
                    <p>风速:<span>15.00</span></p>
                    <p>功率:<span>800.00</span></p>
                </div>
            </li>
            <li>
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">A04</span></p>
                    <p>状态:<span class="off">停机</span></p>
                    <p>风速:<span>15.00</span></p>
                    <p>功率:<span>800.00</span></p>
                </div>
            </li>
            <li>
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">A05</span></p>
                    <p>状态:<span class="off">停机</span></p>
                    <p>风速:<span>15.00</span></p>
                    <p>功率:<span>800.00</span></p>
                </div>
            </li><li>
            <i class="iconfont">&#xe8c9;</i>
            <div>
                <p>编号:<span class="num">A04</span></p>
                <p>状态:<span class="off">停机</span></p>
                <p>风速:<span>15.00</span></p>
                <p>功率:<span>800.00</span></p>
            </div>
        </li>
            <li>
                <i class="iconfont">&#xe8c9;</i>
                <div>
                    <p>编号:<span class="num">A05</span></p>
                    <p>状态:<span class="off">停机</span></p>
                    <p>风速:<span>15.00</span></p>
                    <p>功率:<span>800.00</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
//    export default {
//        name: 'item-view',
//        components: { Spinner, Comment },
//        data () {
//            return {
//                loading: true
//            }
//        },
//        computed: {
//            item () {
//                return this.$store.state.items[this.$route.params.id]
//            }
//        },
//        // on the server, only fetch the item itself
//        preFetch: fetchItem,
//        // on the client, fetch everything
//        beforeMount () {
//            fetchItemAndComments(this.$store).then(() => {
//                this.loading = false
//            })
//        }
//    }
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
                    span.num{
                        color:blue
                    }
                }



            }
        }
    }


</style>