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
            let es = new EventSource("sse");

            es.addEventListener("message", function(e){
//                alert('sse message');
                console.log(e.data.module5);
                me.info.user=e.data.module5.user;
                me.info.ver =e.data.module5.version;
                me.info.clientnum =e.data.module5.clientnum;
            },false);
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