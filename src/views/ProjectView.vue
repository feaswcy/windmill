<template>
    <div id="table-container">
        <table>
            <thead>
            <tr>
                <th>风机编号</th>
                <th>状态</th>
                <th>发电量</th>
                <th>实时风速</th>

                <th>实时功率</th>
                <th>实时无功</th>
                <th>叶轮转速</th>
                <th>电机转速</th>

                <th>扭揽角度</th>
                <th>变桨角度</th>
                <th>电网频率</th>
                <th>详情</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>A01</th>
                <td class="off">停机</td>
                <td>800.00</td>
                <td>15.00</td>
                <td>800.00</td>
                <td>50.00</td>
                <td>50.00</td>
                <td>1000.00</td>
                <td>1000.00</td>
                <td>50.00</td>
                <td>100.00</td>
                <td class="link"><a href="javascript:;">展开</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
    #table-container{
        margin-left:200px;
        table{
            border: 1px solid #ddd;
            th,td{
                border: 1px solid #ddd;
                padding: 8px;
                text-align center;
            }
            td.off{
                color:red
            }
            td.link{
                cursor:pointer;
            }
        }
    }

</style>