<template>
	<view class="basic-form uni-pa-4">
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form
				labelWidth="auto"
				labelPosition="left"
				:model="formModel"
				:rules="rules"
				ref="form"
		>
			<u-form-item
					label="姓名"
					prop="name"
					borderBottom
					ref="item1"
			>
				<u--input
						v-model="formModel.name"
						border="none"
				></u--input>
			</u-form-item>
			<u-form-item
					label="性别"
					prop="sex"
					borderBottom
					@click="showSex = true;"
			>
				<u--input
						v-model="formModel.sex"
						disabled
						disabledColor="#ffffff"
						placeholder="请选择性别"
						border="none"
				></u--input>
				<u-icon
						slot="right"
						name="arrow-right"
				></u-icon>
			</u-form-item>
			<u-form-item
				label="水果"
				prop="fruit"
				borderBottom
			>
				<u-radio-group 
				    v-model="formModel.fruit"
				    placement="row">
					<u-radio class="uni-mr-6" v-for="(item,radioindex) in radiolist" :key="radioindex"  :label="item.name" :name="item.name"></u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item
				label="兴趣爱好"
				prop="hobby"
				borderBottom
			>
				<u-checkbox-group v-model="formModel.hobby" placement="row">
					<u-checkbox 
					class="uni-mr-6"
					v-for="(checkboxItem,checkboxIndex) in checkboxList" 
					:key="checkboxIndex" 
					:label="checkboxItem.name" 
					:name="checkboxItem.name"></u-checkbox>
				</u-checkbox-group>

			</u-form-item>
			<u-form-item
				label="简介"
				prop="desc"
				borderBottom
			>
				<u--textarea  v-model="formModel.desc" placeholder="请输入内容" ></u--textarea>
			</u-form-item>
			<u-form-item
				label="住店时间"
				prop="time"
				borderBottom
				@tap="showCalendar = true"
			>
				<u--input
						v-model="formModel.time"
						disabled
						disabledColor="#ffffff"
						placeholder="请选择时间"
						border="none"
				></u--input>
				<u-icon
						slot="right"
						name="arrow-right"
				></u-icon>
			</u-form-item>
			<u-form-item
					label="验证码"
					prop="code"
					borderBottom
					
			>
				<u--input
						v-model="formModel.code"
						
						placeholder="验证码"
						border="none"
				></u--input>
				<com-vcode></com-vcode>
			</u-form-item>
			<u-form-item
					label="生日"
					prop="birthday"
					borderBottom
					@tap="showDatetime = true"
			>
				<u--input
						type="date"
						v-model="formModel.birthday"
						placeholder="选择日期"
						border="none"
						readonly
				></u--input>
			
				<u-icon
						slot="right"
						name="arrow-right"
				></u-icon>
			</u-form-item>
		</u--form>
		<u-button class="uni-mt-4 uni-mb-4" text="提交" type="primary" @click="submit"></u-button>
		<u-button text="重置" type="error" @click="reset"></u-button>
		<u-action-sheet
				:show="showSex"
				:actions="actions"
				title="请选择性别"
				description="如果选择保密会报错"
				@close="showSex = false"
				@select="sexSelect"
		>
		</u-action-sheet>
		<u-calendar 
		:formatter="calendarFormatter" 
		:show="showCalendar"
		mode="range" 
		startText="住店" 
		endText="离店" 
		@confirm="calendarConfirm"
		@close="showCalendar = false"></u-calendar>
		<u-datetime-picker
				:show="showDatetime"
				v-model="nowDate"
				mode="date"
				@cancel="showDatetime = false"
				@confirm="datetimeConfirm"
		></u-datetime-picker>
	</view>
</template>

<script>
export default {
	data() {
		return {
			nowDate:Number(new Date()),
			showSex: false,
			showCalendar:false,
			showDatetime:false,
			formModel:{
				name:'Brightness',
				sex: '',
				fruit:'苹果',
				hobby:[],
				desc:'',
				time:'',
				code:'',
				birthday:'',
			},
			actions: [{
				name: '男',
				},
				{
					name: '女',
				},
				{
					name: '保密',
				},
			],
			radiolist: [
				{
					name: '苹果',
					disabled: false
				},
				{
					name: '香蕉',
					disabled: false
				},
				
			],
			checkboxList:[
				{
					name: '羽毛球',
					disabled: false
				},
				{
					name: '跑步',
					disabled: false
				},
				{
					name: '篮球',
					disabled: false
				},
			],
			rules:{
				'name': {
					type: 'string',
					required: true,
					message: '请填写姓名',
					trigger: ['blur', 'change']
				},
				'sex': {
					type: 'string',
					max: 1,
					required: true,
					message: '请选择男或女',
					trigger: ['blur', 'change']
				},
				'fruit':{
					type: 'string',
					required: true,
					message: '请选择一种水果',
					trigger: ['blur', 'change']
				},
				'hobby':{
					type:'array',
					min:2,
					required: true,
					message: '不能太宅，至少选两个',
					trigger: ['blur','change']
				}
			},
		};
	},
	methods: {
		sexSelect(e) {
			this.formModel.sex = e.name
			this.$refs.form.validateField('sex')
		},
		calendarConfirm(value){
			
			let start = value[0]
			let end = value.pop()
			this.formModel.time = start + '/' + end
			this.showCalendar = false
		},
		calendarFormatter(day){
			const d = new Date()
			let month = d.getMonth() + 1
			const date = d.getDate()
			if(day.month == month && day.day == date + 3)
			{
				day.bottomInfo = '有优惠'
				day.dot = true
			}
			return day
		},
		datetimeConfirm(e){
			this.showDatetime = false
			let date = this.$u.timeFormat(e.value,'yyyy-mm-dd')
			this.formModel.birthday = date
		},
		submit(){
			this.$refs.form.validate().then(res=>{
				if(res){
					console.log('ok');
				}
			}).catch(err=>{
				uni.showToast({
					title:"请检查表单",
					icon:"error"
				})
			})
		},
		reset(){
			this.$refs.form.resetFields()
		},
	},
	onReady() {
		//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
    	this.$refs.form.setRules(this.rules)
    },
};
</script>

<style lang="scss" scoped>
	.basic-form{
		background-color: #fff;
	}
</style>