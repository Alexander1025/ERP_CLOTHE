<template>
    <div class="outputClotheWrap">
        这是排产单页面
        <div class="outputClotheTable">
            <div class="outputClotheButtun">
                <a-button-group class="outputClotheButtunList" :size="size">
                    <a-button disabled>
                        全部
                    </a-button>
                    <a-button disabled>
                        待发布
                    </a-button>
                    <a-button disabled>
                        未完工
                    </a-button>
                    <a-button disabled>
                        有欠料
                    </a-button>
                    <a-button disabled>
                        有异常
                    </a-button>
                </a-button-group>
                <a-button-group class="outputClotheButtunList" :size="size">
                    <a-button disabled>
                        图片
                    </a-button>
                    <a-button disabled>
                        当天
                    </a-button>
                    <a-button disabled>
                        完工
                    </a-button>
                    <a-button disabled>
                        当前任务
                    </a-button>
                </a-button-group>
                <a-button-group class="outputClotheButtunList" :size="size">
                    <a-button @click="()=>{visible=true;}">
                        导入销售新增-树形
                    </a-button>
                    <a-button @click="()=>{visible1=true;}">
                        导入销售新增-双列表
                    </a-button>
                    <a-button disabled>
                        导入订单新增
                    </a-button>
                    <a-button disabled>
                        手工新增
                    </a-button>
                    <a-button disabled>
                        删除
                    </a-button>
                </a-button-group>
            </div>
            <a-table :columns="columns" :data-source="data" :scroll="{ x: 600 }">
                <span slot="name" slot-scope="text">{{ text }}</span>
                <span slot="tags">
                    <a @click="()=>{visible2=true;}">操作</a>
                </span>
                <span slot="action">
                    <a @click="()=>{visible3=true;}">操作</a>
                </span>
            </a-table>
        </div>
        <a-modal
            title="排产单-导入销售新增-树形"
            :visible="visible"
            :confirm-loading="confirmLoading"
            :width="'90%'"
            @ok="handleOk"
            @cancel="handleCancel"
        >
            <outputTransfer></outputTransfer>
        </a-modal>
        <a-modal
            title="排产单-导入销售新增-双列表"
            :visible="visible1"
            :confirm-loading="confirmLoading1"
            :width="'90%'"
            @ok="handleOk1"
            @cancel="handleCancel1"
        >
            <outputTable></outputTable>
        </a-modal>
        <a-modal
            title="基本信息"
            :visible="visible2"
            :confirm-loading="confirmLoading2"
            :width="'90%'"
            @ok="handleOk2"
            @cancel="handleCancel2"
        >
            <outputForm></outputForm>
        </a-modal>
        <a-modal
            title="基本信息"
            :visible="visible3"
            :confirm-loading="confirmLoading3"
            :width="'90%'"
            @ok="handleOk3"
            @cancel="handleCancel3"
        >
            <outputProduction></outputProduction>
        </a-modal>
    </div>
</template>
<script>

import outputTransfer from './outputTransfer.vue';
import outputTable from './outputTable.vue';
import outputForm from './outputForm.vue';
import outputProduction from './outputProduction.vue';





const columns = [
    {
        title: '排产单号',
        dataIndex: 'name',
        key: 'name',
        scopedSlots: { customRender: 'name' },
        ellipsis: true,
        width: 160
    },
    {
        title: '基本信息',
        key: 'tags',
        dataIndex: 'tags',
        scopedSlots: { customRender: 'tags' },
    },
    {
        title: '排产信息',
        key: 'action',
        scopedSlots: { customRender: 'action' },
    },
    {
        title: '订货单号',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '客户名称',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '排产日期',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '商品编号',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '颜色',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '版型编号',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '生产合计',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '未完工合计',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'S',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'M',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'XL',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'XXL',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ellipsis: true,
    },
    
];

const data = [
    {
        key: '1',
        name: '47894526154564',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: '44152643122321',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: '127438192738283',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];
export default {
    name: '',
    data () {
        return {
            data,
            columns,
            visible: false,
            confirmLoading: false,
            size: 'default',  // default | middle | small
            visible1: false,
            confirmLoading1: false,
            visible2: false,
            confirmLoading2: false,
            visible3: false,
            confirmLoading3: false,
        };
    },
    components:{
        outputTransfer,
        outputTable,
        outputForm,
        outputProduction
    },
    computed: {

    },
    created () {

    },
    mounted(){

    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            console.log(e);
            this.confirmLoading = true;
            setTimeout(() => {
                this.visible = false;
                this.confirmLoading = false;
            }, 2000);
        },
        handleCancel(e) {
            console.log(e);
            console.log('Clicked cancel button');
            this.visible = false;
        },
        handleOk1(e) {
            console.log(e);
            this.confirmLoading1 = true;
            setTimeout(() => {
                this.visible1 = false;
                this.confirmLoading1 = false;
            }, 2000);
        },
        handleCancel1(e) {
            console.log(e);
            console.log('Clicked cancel button');
            this.visible1 = false;
        },
        handleOk2(e) {
            console.log(e);
            this.confirmLoading2 = true;
            setTimeout(() => {
                this.visible2 = false;
                this.confirmLoading2 = false;
            }, 2000);
        },
        handleCancel2(e) {
            console.log(e);
            console.log('Clicked cancel button');
            this.visible2 = false;
        },
        handleOk3(e) {
            console.log(e);
            this.confirmLoading3 = true;
            setTimeout(() => {
                this.visible3 = false;
                this.confirmLoading3 = false;
            }, 2000);
        },
        handleCancel3(e) {
            console.log(e);
            console.log('Clicked cancel button');
            this.visible3 = false;
        },
    }
};
</script>
<style lang="less" scoped>
.outputClotheWrap{
    background-color: white;
    .outputClotheTable{
        width: 80vw;
        margin: auto;
        .outputClotheButtun{
            padding: 10px 0px;
            .outputClotheButtunList{
                padding: 0 10px;
            }
        }
    }
}
</style>
