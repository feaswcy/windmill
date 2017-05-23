
const axios = require('axios');

const serverIp = "127.0.0.1";
const userName = "admin";
const passWord = "";
const projectname = "test";
const nodename = 'node';

const baseUrl = 'http://'+serverIp+'/WaWebService/Json/';

function base64_encode(s){
    if(window.btoa)return window.btoa(s);
    var Base64={K:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this.K.charAt(s)+this.K.charAt(o)+this.K.charAt(u)+this.K.charAt(a)}return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t}}
    return Base64.encode(s);
}

//封装请求
function makereq(url){
    let instance = axios.create({
        baseURL: baseUrl,
        timeout: 1000,
        headers: {'Authorization': 'Basic'+base64_encode(userName+":"+passWord)}
        // headers: {"Authorization":"Basic YWRtaW46"},
    });
    return instance.get(url);
}
//返回的数据结构
let data = {
    module1:{
        user:'',
        version:'',
        clientnum:'',
        servertime:''
    },
    module2:[{
        num:'A01',
        status:"0",
        speed:"15.00",
        power:'800.00'
    }],
    module3:[{
        num:"A01",
        status:'1',
        eletric:'800',
        windspeed:'15',
        power1:'800',
        power2:'800',
        speed1:'800',
        speed2:'800',
        angle1:'800',
        angle2:'800',
        frequency:'100.00'
    }],
    module4:{

    },
    module5:{

    },
    module6:[{
        date:"2016/04/14",
        time:"17:29:45",
        action:"admin注销"
    },{
        date:"2016/04/14",
        time:"17:29:45",
        action:"admin注销"
    }]
}


//获得module1的数据:包括系统时间，当前用户，当前版本，系统最大连接数
function getdata1(){
    axios.all([makereq('/ServerTime'),
        makereq('/GetVersion/'+projectname),
        makereq('GetVersion/'+projectname),
        makereq('/GetClientLimit/'+projectname)]
    ).then(axios.spread(function (data1, data2,data3,data4) {
            console.log(data1);
    }));
}

function getdata2(){
    //先获取点名称 TagList/{ProjName}
    let taglist = []
    makereq('TagList/'+projectname).then(function(data){
        console.log(data);
        taglist = data;
    });

    makereq('TagList/'+projectname).then(function(data){
        console.log(data);
        taglist = data;
    });

    axios.all([makereq('/ServerTime'),
        makereq('/GetVersion/'+projectname),
        makereq('GetVersion/'+projectname),
        makereq('/GetClientLimit/'+projectname)]
    ).then(axios.spread(function (data1, data2,data3,data4) {
        console.log(data1);
    }));
}





