<template>
  <div class="outputTransferWrap">
    <a-table
        :columns="columns"
        :data-source="data"
        :row-selection="rowSelection"
        :expanded-row-keys.sync="expandedRowKeys"
    />
  </div>
</template>
<script>
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '12%',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        width: '30%',
        key: 'address',
    },
];

const data = [
    {
        key: 1,
        name: 'John Brown sr.',
        age: 60,
        children: [
            {
                key: 11,
                name: 'John Brown',
                age: 42,
            },
            {
                key: 12,
                name: 'John Brown jr.',
                age: 30,
                children: [
                    {
                        key: 12231,
                        name: 'Jimmy Brown',
                        age: 16,
                    },
                    {
                        key: 1311,
                        name: 'Jim Green jr.',
                        age: 25,
                    },
                    {
                        key: 12341,
                        name: 'Jimmy Green sr.',
                        age: 18,
                    },
                ],
            },
            {
                key: 13,
                name: 'Jim Green sr.',
                age: 72,
            },
            {
                key: 1312341,
                name: 'Jim Green jr.',
                age: 25,
            },
            {
                key: 4123123,
                name: 'Jimmy Green sr.',
                age: 18,
            },
        ],
    },
    {
        key: 2,
        name: 'Joe Black',
        age: 32,
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};


export default {
  data() {
    return {
        data,
        columns,
        rowSelection,
        expandedRowKeys: [],
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
<style lang="less" scoped>
.outputTransferWrap{
    height: 60vh;
}
</style>
