<template>
    <div class="outputFormWrap">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="排产单号">
                <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="订货单号">
                <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="商品颜色">
                <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="商品编号">
                <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="排产日期">
                <a-date-picker
                    v-model="form.date1"
                    show-time
                    type="date"
                    placeholder="Pick a date"
                    style="width: 100%;"
                />
            </a-form-model-item>
            <a-form-model-item label="优先级">
                <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="图案">
                <a-checkbox-group v-model="form.type">
                    <a-checkbox value="1" name="type">
                    正
                    </a-checkbox>
                    <a-checkbox value="2" name="type">
                    背
                    </a-checkbox>
                </a-checkbox-group>
            </a-form-model-item>
            <a-form-model-item label="商品编号">
                <a-select v-model="form.region" placeholder="please select your zone">
                    <a-select-option value="shanghai">
                    Zone one
                    </a-select-option>
                    <a-select-option value="beijing">
                    Zone two
                    </a-select-option>
                </a-select>
            </a-form-model-item>
        
            <a-form-model-item label="多选">
                <a-radio-group v-model="form.resource">
                    <a-radio value="1">
                    Sponsor
                    </a-radio>
                    <a-radio value="2">
                    Venue
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>
                <a-form-model-item label="备注">
                <a-input v-model="form.desc" type="textarea" />
                </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">
                    Create
                </a-button>
                <a-button style="margin-left: 10px;">
                    Cancel
                </a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
  },
};
</script>
<style lang="less" scoped>
.outputFormWrap{
    height: 60vh;
    overflow-y: auto;
}
</style>