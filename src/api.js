
const axios = require('axios');
// const serverIp = "127.0.0.1";
const serverIp = "10.3.51.118";
const userName = "admin";
const passWord = "";
const projectname = "test";
const nodename = 'node';
const total =9;
const baseUrl = 'http://'+serverIp+'/WaWebService/Json/';

function base64_encode(s){
    if(window.btoa)return window.btoa(s);
    var Base64={K:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this.K.charAt(s)+this.K.charAt(o)+this.K.charAt(u)+this.K.charAt(a)}return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t}}
    return Base64.encode(s);
}

//封装请求
function makereq(url){
    let instance = axios.create({
        baseURL: baseUrl+url,
        timeout: 1000,
        // headers: {'Authorization': 'Basic'+base64_encode(userName+":"+passWord)}
        headers: {"Authorization":"Basic YWRtaW46"},
    });
    return instance.get();
}

// 点名称与相关含义:
// F1WIND0*:RO31: 有功功率
// F1WIND0*:RO32: 无功功率
// F1WIND0*:R036: zhuangtai
// F1WIND0*:R053: 风轮转速
// F1WIND0*:R052： 发电机转速
// F1WIND0*:R137: 平均桨距角
// F1WIND0*:R030: 电网频率
// F1WIND0*:R130: 风速
// F1WIND10*


module.exports={
    //数据集合
    init:function(){
        this.getinfo();
        this.getrecord();
        this.getvalue();
    },
    data:{
        info:'',
        paramdata:'',
        action:'',
        alarm:'',

    },
    //获得系统信息
    getinfo:function(){
        let me =this;
        axios.all([makereq('ServerTime'),
            makereq('GetVersion/'+projectname),
            makereq('GetUserInfo/'+projectname),
            makereq('GetClientLimit/'+projectname)]
        ).then(axios.spread(function (data1, data2,data3,data4) {
            let data = {
                servertime:data1.data.Date+data1.data.Time,
                user: data2.data.Version,
                version:data3.data.UserInfo.UserName,
                clientnum:data4.data.LimitCount
            };
            me.data.info = data;
        }));
    },

    //获得报警和登陆信息
    getrecord:function(){
        let me = this;
        axios.all([makereq('GetAlarmLog/'+projectname+'/'+nodename+'/0/10'),
            makereq('GetActionLog/'+projectname+'/'+nodename+'/0/10')]
        ).then(axios.spread(function (data1, data2) {
            let res = {
                alarm:{
                    count:data1.data.Result.Total,
                    logs:function(){
                        let arr = data1.data.AlarmLogs;
                        let res = [];
                        let obj ={};
                        for(let i=0;i<arr.length;i++){
                            obj.date=arr[i].Time.split('')[0];
                            obj.time=arr[i].Time.split('')[1];
                            obj.pointname=arr[i].TagName;
                            obj.describe=arr[i].Description;
                            obj.action=arr[i].Action;
                            obj.priority=arr[i].Priority;
                            res.push(obj);
                        }
                        return res;
                    }()
                },
                action:{
                    count:data2.data.Result.Total,
                    logs:function(){
                        let arr = data2.data.AlarmLogs;
                        let res = [];
                        let obj ={};
                        for(let i=0;i<arr.length;i++){
                            obj.date=arr[i].Time.split('')[0];
                            obj.time=arr[i].Time.split('')[1];
                            obj.pointname=arr[i].TagName;
                            obj.describe=arr[i].Description;
                            obj.action=arr[i].Action;
                            obj.priority=arr[i].Priority;
                            res.push(obj);
                        }
                        return res;
                    }()
                }
            };
            me.data.alarm = res.alarm;
            me.data.action = res.action;
        }));
    },
    //获得所有风机的参数信息
    getvalue:function(){
        let me =this;

        let paramdata = [];
        for(let i= 1;i<=total;i++){
            paramdata.push({
                id:i,
                name:"A0"+i,
                status:{
                    pointname:'F1WIND0'+i+':R036',
                    value:''
                },
                windspeed:{
                    pointname:'F1WIND0'+i+':R130',
                    value:''
                },
                power1:{
                    pointname:'F1WIND0'+i+':RO31',
                    value:''
                },
                power2:{
                    pointname:'F1WIND0'+i+':RO32',
                    value:''
                },
                speed1:{
                    pointname:'F1WIND0'+i+':R053',
                    value:''
                },
                speed2:{
                    pointname:'F1WIND0'+i+':R052',
                    value:''
                },
                angle:{
                    pointname:'F1WIND0'+i+':R137',
                    value:''
                },
                frequency:{
                    pointname:'F1WIND0'+i+':R030',
                    value:''
                }
            })
        }
        let tagnamelist = function(){
            let arr2={
                Tags:[]
            };
            for(var i=1;i<=paramdata.length;i++){
                //遍历每个风机对象
                let item = paramdata[i];
                for(let key in item){
                    if(item[key].pointname){
                        arr2.Tags.push({
                            "Name":item[key].pointname
                        })
                    }
                }
            }
            return arr2;
        }();

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios({
            url: baseUrl+'GetTagValue/'+projectname,
            data:JSON.stringify(tagnamelist),
            method:'post',
            dataType:'json',
            headers: {"Authorization":"Basic YWRtaW46"},
        }).then(function(response){
            me.data.paramdata = parseresult(paramdata,response.data.Values);

        }).catch(function(error){
            console.log("msg:\n"+error);
        });

        //此函数返回上面定义结构的风机data
        function parseresult(windmillarr,valuelist){
            let arr = [];
            for(let j=0;j<windmillarr.length;j++){
                let item = windmillarr[j];

                for(let key in item){
                    for(let i=0;i<valuelist.length;i++){
                        if(item[key].pointname==valuelist[i].Name){
                            item[key].value = valuelist[i].Value;
                        }
                    }
                }
                arr.push(item);
            }
            return arr;
        }
    }

}








