login

logon:Need Login Project node before use Webservice. Get project list after logon success.

HTTP Method: GET

JSON Url: http://localhost/WaWebService/Json/Login

response:{

"Result":{
"Ret":0,
"Total":2
},
"Projects":[{
"ID":1,
"Name":" Express",
"Description":"Project Description"
},
{
"ID":2,
"Name":"WaScada",
"Description":"Project Description"
}]
}

server time:Get the Server Time. Return the date, time, and time difference with Server

HTTP method: GET

JSON URL: http://localhost/WaWebService/Json/ServerTime

{

"Date":"2014\/01\/01",
"Offset":" 08:00:00"
"Time":"10:00:00",

}

getuserinfo:Get detail information of current login user in Project.

HTTP method: GET

JSON URL: http://localhost/WaWebService/JSON/GetUserInfo/{ProjectName}

{

"Result":{
"Ret":0
},
"UserInfo":{
"ProjIdbw":0,
"UserId":48,
"UserName":"admin",
"Description":"Administrator",
"Area":[127,127,127,127,. . . . .,127,127,127,127],
"UserGraphics":[{
"UserId":48,
"GraphicNode":5,
"GraphicName":"Page1.bgr"
}],
"UserNodes":[{
"UserId":48,
"NodeIdbw":5
}]
}
}

getverison

Get the highest WebAccess version of SCADA node in the Project.

HTTP Method: GET

XML Url: http://localhost/WaWebService/GetVersion/{ProjectName}

JSON Url: http://localhost/WaWebService/JSON/GetVersion/{ProjectName}

{

"Result":{
"Ret":0
},
"Version":"8.0"
}

get client limit

Get number of Client limitation

HTTP Method: GET

XML Url: http://localhost/WaWebService/GetClientLimit/{ProjectName}

JSON Url: http://localhost/WaWebService/JSON/ GetClientLimit /{ProjectName}

{

"LimitCount":1024
}

project information

project list

List all Proect in Project node.

HTTP method: GET

XML URL: http://localhost/WaWebService/ProjectList

JSON URL: http://localhost/WaWebService/JSON/ProjectList

{

"Result":{
"Ret":0,
"Total":2
},
"Projects":[{
"ID":3,
"Name":"Express",
"Description":"Express Project"
},
{
"ID":2,
"Name":"WaScada",
"Description":"WaScada Project"
}]
}

project detail

List Project detail information.

HTTP method: GET

XML URL: http://localhost/WaWebService/ProjectDetail/{ProjectName}

JSON URL: http://localhost/WaWebService/JSON/ProjectDetail/{ProjectName}

{

"Result":{
"Ret":0
},
"Project":{
"ID":3,
"Name":"Express",
"Description":"Express Project",
"IP":"172.18.3.101",
"Port":0,
"TimeOut":0,
"AccessSecurityCode":"",
"HTTPPort":0
}
}

node information

node list

List all SCADA Node in the Project.

HTTP method: GET

XML URL: http://localhost/WaWebService/NodeList/{ProjectName}

JSON URL: http://localhost/WaWebService/JSON/NodeList/{ProjectName}

{

"Result":{
"Ret":0,
"Total":1
},
"Nodes":[{
"NodeName":"SCADA",
"Description":"Node Description"
}]
}

node detail

List SCADA Node detail information.

HTTP METHOD: GET

XML URL: http://localhost/WaWebService/NodeDetail/{ProjectName}/{NodeName}

JSON URL: http://localhost/WaWebService/Json/NodeDetail/{ProjectName}/{NodeName}

{

"Result":{
"Ret":0
},
"Node":{
"ProjectId":3,
"NodeId":4,
"NodeName":"SCADA",
"Description":"Node Description",
"Address":"172.18.3.101",
"Port1":0,
"Port2":0,
"Timeout":0
}
}

port information

port list

List all Port under Project/SCADA Node

HTTP METHOD: GET

XML URL: http://localhost/WaWebService/PortList/{ProjectName}/{NodeName}

JSON URL: http://localhost/WaWebService/PortList/{ProjectName}/{NodeName}

{

"Result":{
"Ret":0,
"Total":2
},
"Ports":[{
"InterfaceName":"TCP",
"PortNumber":2,
"Description":"TCP PORT"
},
{
"InterfaceName":"TCP",
"PortNumber":1,
"Description":" Port Description"
}]
}

port detail

List Port detail information under Project/SCADA Node.

HTTP METHOD: GET

XML URL: http://localhost/WaWebService/PortDetail/{ProjectName}/{NodeName}/{Comport}

Json URL: http://localhost/WaWebService/Json/PortDetail/{ProjectName}/{NodeName}/{Comport}

{

"Result":{
"Ret":0
},
"Port":{
"InterfaceName":"TCPIP",
"ComportNbr":2,
"Description":"TCP PORT",
"BaudRate":9600,
"DataBit":8,
"StopBit":1,
"Parity":0,
"ScanTime":1000,
"TimeOut":1000,
"RetryCount":3,
"AutoRecoverTime":20,
"OPCServer":"",
"OPCServerType":"0"
}
}

device info

device list

Get Device list under Comport

HTTP METHOD: GET

XML URL: http://localhost/WaWebService/DeviceList/{ProjectName}/{NodeName}/{Comport}

JSON URL: http://localhost/WaWebService/DeviceList/{ProjectName}/{NodeName}/{Comport}

{

"Result":{
"Ret":0,
"Total":3
},
"Devices":[{
"DeviceName":"ADAM6017_5",
"PortNumber":2,
"Description":"ADAM-6017 8ch AI for WebAccess",
"UnitNumber":5},
{
"DeviceName":"ADAM6018_6",
"PortNumber":2,
"Description":" ADAM-6018 AI ",
"UnitNumber":6},
{
"DeviceName":"ADAM6050_10",
"PortNumber":2,
"Description":"ADAM 6050 Module",
"UnitNumber":10
}]
}

device detail

Get Device detail information.

HTTP METHOD: GET

XML URL: http://localhost/WaWebService/DeviceDetail/{ProjectName}/{NodeName}/{Comport}/{DeviceName}

JSON URL: http://localhost/WaWebService/JSON/DeviceDetail/{ProjectName}/{NodeName}/{Comport}/{DeviceName}

{

"Result":{
"Ret":0
},
"Device":{
"DeviceName":"ADAM6017_5",
"PortNumber":2,
"Description":"ADAM-6017 8ch AI for Webaccess",
"UnitNumber":5,
"DeviceType":"ADAM6K",
"Primary":{
"IPAddress":"172.18.3.237",
"PortNumber":"502",
"DeviceAddress":"1"
},
"Secondary":{
"IPAddress":"",
"PortNumber":"",
"DeviceAddress":""
}
}
}

tag info

tag list

Get all Tag list of Project Node

HTTP METHOD: GET

XML URL: http://localhost/WaWebService/TagList/{ProjName}

JSON URL: http://localhost/WaWebService/Json/TagList/{ProjName}

{

"Result":{
"Ret":0,
"Total":2
},
"Tags":[{
"Name":"Tag1"
"Description":"Description1"},
{
"Name":"Tag2",
"Description":"Description2"
}]
}

all tag list of a scada node in a project

Get all Tag list of SCADA node in the Project

HTTP METHOD: GET

JSON URL: http://localhost/WaWebService/Json/TagList/{ProjName}/{NodeName}

JSON Response: (The same as Get Tag Value in Project Node)



HTTP METHOD: POST (Use Filter)

JSON URL: http://localhost/WaWebService/Json/TagList/{ProjName}/{NodeName}

JSON Request: (The same as Get Tag Value in Project Node)

JSON Response: (The same as Get Tag Value in Project Node)

All Tag list of the Comport

Get all Tag (Tag) list of Comport of SCADA node in the Project

HTTP METHOD: GET

JSON URL: http://localhost/WaWebService/Json/TagList/{ProjName}/{NodeName}/{ComportNbr}

JSON Response: (The same as Get Tag Value in Project Node)

HTTP METHOD: POST (Use Filter)

JSON URL: http://localhost/WaWebService/Json/TagList/{ProjName}/{NodeName}/{ComportNbr}

JSON Request: (The same as Get Tag Value in Project Node)

JSON Response: (The same as Get Tag Value in Project Node)

All Tag list of the Device

Get all Tag (Tag) list of the Device of Comport of SCADA node in the Project

HTTP METHOD: GET

JSON URL: http://localhost/WaWebService/Json/TagList/{ProjName}/{NodeName}/{ComportNbr}/{DeviceName}

JSON Response: (The same as Get Tag Value in Project Node)



HTTP METHOD: POST ( Use Filter)

JSON URL: http://localhost/WaWebService/Json/TagList/{ProjName}/{NodeName}/{ComportNbr}/{DeviceName}

JSON Request: (The same as Get Tag Value in Project Node)

JSON Response: (The same as Get Tag Value in Project Node)

Tag Detail Information under Project node

Get specific Tag (Point) detail information of Project node

HTTP METHOD: POST

JSON URL: http://localhost/WaWebService/Json/TagDetail/{ProjectName}

{

"Points":[{
"Name":"String",
"Attributes":[{
"Name":"String"
}]
}]
}

Tag detail information of SCADA Node

Get Tag detail information of SCADA Nodein Project

HTTP METHOD: Post

JSON URL: http://localhost/WaWebService/JSON/TagDetail/{ProjName}/{NodeName}

JSON Request: (The same as Get Text Tag Value in Project Node)

JSON Response: (The same as Get Text Tag Value in Project Node)

All Block list in Project Node

Get all Block list in Project Node

Support filter function when using POST method (only support TagName as filter).

HTTP METHOD: GET

JSON URL: http://localhost/WaWebService/Json/BlockList/{ProjectName}

All Block list in SCADA Node

Get all Block list in SCADA Node

HTTP METHOD: GET

JSON URL: http://localhost/WaWebService/Json/BlockList/{ProjName}/{NodeName}

JSON Response: (The same as GetComportStatus)



HTTP METHOD: POST (Use Filter)

JSON URL: http://localhost/WaWebService/Json/BlockList/{ProjName}/{NodeName}

JSON Request: (The same as GetComportStatus)

JSON Response: (The same as GetComportStatus)

All Block list in Comport

Get all Block list in Comport/SCADA node

HTTP METHOD: GET

JSON URL: http://localhost/WaWebService/Json/BlockList/{ProjName}/{NodeName}/{ComportNbr}

JSON Response: (The same as GetComportStatus)



HTTP METHOD: POST (Use Filter)

JSON URL: http://localhost/WaWebService/Json/BlockList/{ProjName}/{NodeName}/{ComportNbr}

JSON Request: (The same as GetComportStatus)

JSON Response: (The same as GetComportStatus)

All Block list of Device

Get all Block list in Comport /SCADA node/Project node

HTTP METHOD: GET

JSON URL: http://localhost/WaWebService/Json/BlockList/{ProjName}/{NodeName}/{ComportNbr}/{DeviceName}

JSON Response: (The same as GetComportStatus)



HTTP METHOD: POST (USE Filter)

JSON URL: http://localhost/WaWebService/Json/BlockList/{ProjName}/{NodeName}/{ComportNbr}/{DeviceName}

JSON Request: (The same as GetComportStatus)

JSON Response: (The same as GetComportStatus)

Block detail information in Project Node

Get all Block detail information in SCADA/Project Node.

HTTP METHOD: GET

JSON URL: http://localhost/WaWebService/Json/BlockDetail/{ProjectName}/{BLOCKNAME}

{

"Result":{
“Ret”:Value,
“Total”:Value
},
"Tags":[{
"TagType":"String",
"TagName":"String",
"Description":"String",
"Address":"String"
}]
}

Block detail information in SCADA Node/Project Node

Get all Block detail information in Scada node/Project Node.

HTTP METHOD: GET

(The same as GetDeviceStatus)

JSON URL: http://localhost/WaWebService/BlockDetail/{ProjectName}/{NodeName}/{BLOCKNAME}

JSON Response: (http://localhost/WaWebService/Json/BlockList/Express/Scada/0206A6018)

(The same as GetDeviceStatus)

tag value

Tag Value in Project Node

HTTP METHOD: POST

JSON URL: http://localhost/WaWebService/Json/GetTagValue/{ProjectName}

{

"Tags":[{
"Name":"String"
}]
}

Get  Tag Value Text in Project Node

HTTP METHOD: POST

JSON URL: http://localhost/WaWebService/Json/GetTagValue/{ProjectName}

{

"Tags":[{
"Name":"String"
}]
}

Set Tag Value in Project Node

HTTP METHOD: POST

JSON URL: http://localhost/WaWebService/Json/SetTagValue/{ProjectName}

{

"Tags":[{
"Name":"String",
"Value":1.26743233E+15
}]
}

Set Tag Value Text

HTTP METHOD: POST

JSON URL: http://localhost/WaWebService/Json/SetTagValueText/{ProjectName}

{

"Tags":[{
"Name":"String",
"Value":"String"
}]
}
##SubscribeRealTimeTag

Subscribe Real-Time Tag

HTTP Method: POST

JSON Url: http://localhost/WaWebService/Json/SubscribeRealTimeTag/{ProjectName}

{

"Interval":Value,
"Records":Value,
"Tags": {[
{ "Name": "String" },
{ "Name": "String" }
]}
}

UnsubscribeRealTimeTag

Unsubscribe Real-Time Tag

HTTP Method: POST

JSON Url: http://localhost/WaWebService/Json/UnsubscribeRealTimeTag/{ProjectName}

{

"UnsubscriptionID":Value,
}

GetRealTimeTagValue

Get Real-Time Tag Value

HTTP Method: POST

JSON Url: http://localhost/WaWebService/Json/GetRealTimeTagValue/{ProjectName}

{

"SubscriptionID":Value,
}

Comport Status

Get comport status

HTTP METHOD: GET

JSON Url: http://localhost/WaWebService/Json/GetComportStatus/{ProjectName}/{NodeName}

{

"Result":{
“Ret”:Value,
“Total”:Value
},
"Comports":[{
"Port":Value,
"Status":Value,
"TotalDevice":Value
}]
}

GetDeviceStatus

Get Devices Status

HTTP METHOD: GET

JSON Url: http://localhost/WaWebService/Json/GetDeviceStatus/{ProjectName}/{NodeName}/{PORT}

{

"Result":{
“Ret”:Value,
“Total”:Value
},
"Devices":[{
"Unit":Value,
"Status":Value
}]
}

GetStationStatus

Get Port Status and Device status in Comport.

HTTP METHOD: GET

JSON Url: http://localhost/WaWebService/Json/GetStationStatus/{ProjectName}/{NodeName}

XML Response:

{

"Result":{
“Ret”:Value,
“Total”:Value
},
"Comports":[{
"Port":Value,
"Status":Value,
"TotalDevice":Value,
"Devices":[{
"Unit":Value,
"Status":Value
}]
}]
}

SetComportStatus

Set Port status.

HTTP METHOD: GET

JSON Url: http://localhost/WaWebService/Json/SetComportStatus/{ProjectName}/{NodeName}/{PORT}/{State}

{

“Ret”:Value

}

SetDeviceStatus

Set Device status

HTTP METHOD: GET

JSON Url: http://localhost/WaWebService/Json/SetDeviceStatus/{ProjectName}/{NodeName}/{PORT}/{UNIT}/{STATE}

{

“Ret”:Value

}

Data Log

Get Data log.

HTTP METHOD: POST

JSON URL: http://localhost/WaWebService/Json/GetDataLog /{ProjectName}

http://localhost/WaWebService/Json//GetDataLog /{ProjectName}/{NodeName}

{

"StartTime":"String",
"IntervalType":"String",
"Interval":Value,
"Records":Value,
"Tags":[{
"Name":"String",
"DataType":"String"
}]


}

alarm

Alarm Summary Count

Get Alarm Summary count data

HTTP METHOD: GET

JSON URL:          http://localhost/WaWebService/Json/GetAlarmSummaryCount/{ProjectName}

GetAlarmSummary

Get Alarm Summary data

HTTP METHOD: GET

JSON URL:          http://localhost/WaWebService/Json/GetTagValue/{ProjectName}/{start}/{count}

{

"Result":{
“Ret”:Value,
“Total”:Value
},
"AlarmTagList":[{
"Name":"String",
"Time":"String",
"AlarmPriority":Value,
"AckStatus":Value,
"AlarmGroup":Value,
"AlarmValue":1.26743233E+15,
"AlarmLimit":1.26743233E+15,
"AlarmType":Value
“NodeName”:”String”
"Locked":Value

}]
}

GetAlarmLogCount

Get Alarm log count data

HTTP METHOD: GET

JSON URL:           http://localhost/WaWebService/Json/GetAlarmLogCount/{ProjectName}/{NodeName}

{

“Ret”:Value,
“Total”:Value
}

GetAlarmLog

Get Alarm Log

HTTP Method: GET

JSON Url:  http://localhost/WaWebService/Json/GetAlarmLog/{ProjectName}/{NodeName}/{Start}/{Count}

{

"Result":{
“Ret”:Value,
“Total”:Value
},
"AlarmLogs":[{
"Time":"String",
"Priority":"String",
"TagName":"String",
"Description":"String",
"Action":"String"
}]


}

AlarmAck

Acknowledge alarms

HTTP METHOD: POST

JSON URL:          URL: http://localhost/WaWebService/Json/AlarmAck/{ProjectName}/{NodeName}

{

"IpAddress":"String",
"Computer":"String",
"User":"String",
"Tags":[{
"Name":"String"
}]

}

AlarmAckAll

Acknowledge alarms

HTTP METHOD: POST

Acknowledge Alarm in Project

JSON Url: http://localhost/WaWebService/Json/AlarmAck/{ProjectName}



Acknowledge Alarm in SCADA

JSON URL:  http://localhost/WaWebService/Json/AlarmAck/{ProjectName}/{NodeName}

{

"IpAddress":"String",
"Computer":"String",
"User":"String",
"Tags":[{
"Name":"String"
}]
}

GetAlarmLogIndex

Since the maximum count of alarm log in WebAccess is 5000, while the total number of alarm log above 5000, WebAccess will circularly overwrite the first record and so on. Using GetAlarmLogIndex service can get newest record’s index position (between 1~5000). You can use this service periodically and compare the index with previous index. If the index position has been changed, it means that the Alarm Log has been updated.

{

“Ret”:Value,
“Index”:Value

}

action log

Get Action log count data.

HTTP METHOD: GET

JSON URL:          http://localhost/WaWebService/Json/GetActionLogCount/{ProjectName}/{NodeName}

{

“Ret”:Value,
“Total”:Value
}

GetActionLog

Get Action log data.

HTTP METHOD: GET

JSON URL:          http://localhost/WaWebService/Json/GetActionLog/{ProjectName}/{NodeName}/{Start}/{Count}

{

"Result":{
“Ret”:Value,
“Total”:Value
},
"ActionLogs":[{
"Time":"String",
"Priority":"String",
"TagName":"String",
"Description":"String",
"Action":"String"
}]
}

GetActionLogIndex



Since the maximum count of action log in WebAccess is 5000, while the total number of action log above 5000, WebAccess will circularly overwrite the first record and so on. Using GetActionLogIndex service can get newest record’s index position (between 1~5000). You can use this service periodically and compare the index with previous index. If the index position has been changed, it means that the Action Log has been updated.



HTTP Method : GET

JSON Url:  http://localhost/WaWebService/Json/GetActionLogIndex/{ProjectName}/{NodeName}

{

“Index”:Value,
“Ret”:Value
}
