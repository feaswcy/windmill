<template>
    <div>
        <h3>风场信息简介</h3>
        <div id="map-container"  :style="{width:'800px',height:'600px'}"></div>
    </div>
</template>

<script>
    export default{
        data (){
            return {
                msg:"123"
            }
        },
        mounted (){
            function init() {
                let map = new AMap.Map('container',{
                    resizeEnable: true,
                    zoom: 10,
                    center: [116.480983, 40.0958],
                    mapStyle:'normal',
                    feature:['road']
                });
                let marker = new AMap.Marker({
                    position: [116.480983, 39.989628],//marker所在的位置
                    map:map//创建时直接赋予map属性
                });
                //也可以在创建完成后通过setMap方法执行地图对象
                marker.setMap(map);
            }
            var url = 'http://webapi.amap.com/maps?v=1.3&amp;key=7684f99ab620a58b487271d46df45644&callback=init'
            this.$http.get(url).then(function(data){
                console.log('data is:')
                console.log(data);

            },function(response){
                console.log('response is:')
                console.log(response);

            });
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
#main{
    /*padding:10px 20px;*/
    img{
        width 100%;
    }
}


</style>