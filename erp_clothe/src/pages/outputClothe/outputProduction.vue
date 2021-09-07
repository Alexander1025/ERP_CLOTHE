<template>
    <div class="outputProductionWrap">
        <a-table :columns="columns" :data-source="data" :pagination="{ pageSize: 50 }" :scroll="{ y: 240 }" bordered>
            <template
                v-for="col in ['name', 'age', 'address']"
                :slot="col"
                slot-scope="text, record, index"
            >
                <div :key="col">
                    <a-input
                        v-if="record.editable"
                        style="margin: -5px 0"
                        type="number"
                        :value="text"
                        @change="e => handleChange(e.target.value, record.key, col)"
                    />
                    <template v-else>
                        {{ text }}
                    </template>
                </div>
            </template>
            <template slot="operation" slot-scope="text, record, index">
                <div class="editable-row-operations">
                    <span v-if="record.editable">
                        <a @click="() => save(record.key)">保存</a>
                        <a @click="() => cancel(record.key)">取消</a>
                    </span>
                        <span v-else>
                            <a :disabled="editingKey !== ''" @click="() => edit(record.key)">编辑</a>
                        </span>
                </div>
            </template>
        </a-table>
    </div>
</template>
<script>
const columns = [
    {
        title: 'S',
        dataIndex: 'name',
        width: '20%',
        scopedSlots: { customRender: 'name' },
    },
    {
        title: 'M',
        dataIndex: 'age',
        width: '20%',
        scopedSlots: { customRender: 'age' },
    },
    {
        title: 'XL',
        dataIndex: 'address',
        width: '20%',
        scopedSlots: { customRender: 'address' },
    },
    {
        title: 'XXL',
        dataIndex: 'address',
        width: '20%',
        scopedSlots: { customRender: 'address' },
    },
    {
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i.toString(),
        name: `${i}`,
        age: 32,
        address: `${i}`,
    });
}
export default {
    data() {
        this.cacheData = data.map(item => ({ ...item }));
        return {
            data,
            columns,
            editingKey: '',
        };
    },
    methods: {
        handleChange(value, key, column) {
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
                target[column] = value;
                this.data = newData;
            }
        },
        edit(key) {
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            this.editingKey = key;
            if (target) {
                target.editable = true;
                this.data = newData;
            }
        },
        save(key) {
            const newData = [...this.data];
            const newCacheData = [...this.cacheData];
            const target = newData.filter(item => key === item.key)[0];
            const targetCache = newCacheData.filter(item => key === item.key)[0];
            if (target && targetCache) {
                delete target.editable;
                this.data = newData;
                Object.assign(targetCache, target);
                this.cacheData = newCacheData;
            }
            this.editingKey = '';
        },
        cancel(key) {
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            this.editingKey = '';
            if (target) {
                Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
                delete target.editable;
                this.data = newData;
            }
        },
    },
};
</script>
<style scoped>
.editable-row-operations a {
    margin-right: 8px;
}
.outputProductionWrap{
    height: 60vh;
    overflow-y: auto;
}
</style>