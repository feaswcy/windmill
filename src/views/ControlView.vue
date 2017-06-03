<template>
    <div id="frame-container">
        <h1>风机控制面板</h1>
        <iframe id="con-frame" src=""></iframe>
    </div>
</template>

<script>

    import api from "../api";
    const serverIp = api.serverIp;
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
            let frame = document.getElementById("con-frame");
            let url = "http://"+serverIp+'/broadweb/bwviewpg.asp?proj=test&node=node&goto=graph=main.bgr&tool=0&capt=0&stat=0';
            frame.setAttribute("src",url);


        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
    #frame-container{
        max-width:100%;
        height:600px;
        width:100%;
        margin 115px 0 0 150px
        iframe{
            margin-top:20px;
            width:900px;
            height:600px;
        }
    }
</style>