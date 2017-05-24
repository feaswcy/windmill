
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

//获得系统信息
function getinfo(){
    axios.all([makereq('/ServerTime'),
        makereq('GetVersion/'+projectname),
        makereq('GetVersion/'+projectname),
        makereq('GetClientLimit/'+projectname)]
    ).then(axios.spread(function (data1, data2,data3,data4) {
        console.log(data1.data);
        console.log(data2.data);
        console.log(data3.data);
        console.log(data4.data);
        // res:
        // { Date: '2017/05/24', Time: '17:48:39', Offset: '08:00:00' }
        // { Result: { Ret: 0 }, Version: '8.2' }
        // { Result: { Ret: 0 }, Version: '8.2' }
        // { LimitCount: 1024 }
    }));
}

//获得报警和登陆信息
function getrecord(){
    axios.all([makereq('GetAlarmLog/'+projectname+'/'+nodename+'/0/10'),
        makereq('GetActionLog/'+projectname+'/'+nodename+'/0/10')]
    ).then(axios.spread(function (data1, data2,data3,data4) {
        console.log(data1.data);
        console.log(data2.data);
      //{  
        // Result: {
                // Ret: 0,
                // Total: 2
        // },
    //     AlarmLogs:
    //         [ { Time: '2017/05/18 14:35:21',
    //             Priority: '10',
    //             TagName: 'F1WIND01:R050',
    //             Description: '::风机无功发电量',
    //             Action: 'F1WIND01:R050 ->正常 (50.00)' },
    //             { Time: '2017/05/18 14:23:12',
    //                 Priority: '10',
    //                 TagName: 'F1WIND01:R050',
    //                 Description: '::风机无功发电量',
    //                 Action: 'F1WIND01:R050 - 高 报警 (97.30)' } ]
        // }


    // { Result: { Ret: 0, Total: 10 },
    //     ActionLogs:
    //         [ { Time: '2017/05/24 17:33:45',
    //             Priority: '',
    //             TagName: '',
    //             Description: '',
    //             Action: 'admin 注销' },
    //             { Time: '2017/05/24 17:33:42',
    //                 Priority: '',
    //                 TagName: '',
    //                 Description: '',
    //                 Action: 'admin 登录' }
    //         ] }

    }));
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

//获得风机数据
function getvalue(){
    //返回的数据结构
    let windmill = {
        info:{
            user:'',
            version:'',
            clientnum:'',
            servertime:''
        },
        data:[],
        alarm:[{
            date:"2016/04/14",
            time:"17:29:45",
            pointname:"A01",
            value:"95",
            max:'90',
            nodename:"admin注销"
        }],
        log:[{
            date:"2016/04/14",
            time:"17:29:45",
            action:"admin注销"
        },{
            date:"2016/04/14",
            time:"17:29:45",
            action:"admin注销"
        }]
    };
    for(let i= 1;i<=total;i++){
        windmill.data.push({
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

    let arr1 = windmill.data;
    let tagnamelist = function(){
        let arr2={
            Tags:[]
        };
        for(var i=1;i<=arr1.length;i++){
            //遍历每个风机对象
            let item = arr1[i];
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
        windmill.data = parseresult(windmill.data,response.data.Values);
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

getrecord();

//获得module1的数据:包括系统时间，当前用户，当前版本，系统最大连接数








