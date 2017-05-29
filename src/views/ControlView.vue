<template>
    <div id="frame-container">
        <h1>control</h1>
        <!--<iframe src="http://localhost/broadweb/bwviewpg.asp?proj=test&node=node&goto=graph=main.bgr&tool=0&capt=0&stat=0"></iframe>-->
    </div>
</template>

<script>
    export default{
        data (){
            return {
                msg:"123",
                info:{
                    "servertime":new Date(),
                    "user":'admin',
                    "ver":'10.0.2',
                    "clientnum":'100'
                }
            }
        },
        mounted (){
//            console.log(1);
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
    #frame-container{
        max-width:100%;
        height:600px;
        width:100%;
        margin 150px 0 0 150px
    }
</style>