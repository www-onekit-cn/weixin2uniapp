<template>
	<input
		:class="['onekit-input',class_]"
		:style="style_"
		:value="value"	
		:type="type"
		:password="password"
		:placeholder="placeholder"
		:placeholder-style="placeholderStyle"
		:placeholder-class="placeholderClass"
		:disabled="disabled"
		:maxlength="maxlength"
		:cursor-spacing="cursorSpacing"	
		:focus="focus"
		:confirm-type="confirmType"	
		:confirm-hold="confirmHold"
		:cursor="cursor"
		:selection-start="selectionStart"
		:selection-end="selectionEnd"
		:adjust-position="adjustPosition"
		:hold-keyboard="holdKeyboard"
		@input="input_input"
		@focus="input_focus"
		@blur="input_blur"
		@confirm="input_confirm"
		@keyboardheightchange="input_keyboardheightchange"
	
	
	>
	
	</input>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
		props:{
			class_:{
				type:String,
				default:''
			},
			style_:{
				type:String,
				defaul:''
			},
			value:{
				type:String,
				default: ""
			},
			type:{
				type:String,
				default: "text"
			},
			password:{
				type:Boolean,
				default: false
			},
			placeholder:{
				type:String,
				default: ""
			},
			placeholderStyle:{
				type:String,
				default: ""
			},
			placeholderClass:{
				type:String,
				default: "input-placeholder	"
			},
			disabled:{
				type:Boolean,
				default: false
			},
			maxlength:{
				type:Number,
				default: 140
			},
			cursorSpacing:{
				type:Number,
				default: 0
			},
			focus:{
				type:Boolean,
				default: false
			},
			confirmType:{
				type:String,
				default: "done"
			},
			confirmHold:{
				type:Boolean,
				default: false
			},
			cursor:{
				type:Number,
				default: 1
			},
			selectionStart:{
				type:Number,
				default: -1
			},
			selectionEnd:{
				type:Number,
				default: -1
			},
			adjustPosition:{
				type:Boolean,
				default: true
			},
			holdKeyboard:{
				type:Boolean,
				default: false
			},
		},
		methods:{
		  	input_input(e){
		  	        console.log("input_input",e)
		  	        this.$emit('input',e.details)
		  	       }, 
		  	input_focus(e){
		  	        console.log("input_focus",e)
		  	        this.$emit('focus',e.details)
		  	       }, 
		  	input_blur(e){
		  	        console.log("input_blur",e)
		  	        this.$emit('blur',e.details)
		  	       }, 
		  	input_confirm(e){
		  	        console.log("input_confirm",e)
		  	        this.$emit('confirm',e.details)
		  	       }, 
		  	input_keyboardheightchange(e){
		  	        console.log("input_keyboardheightchange",e)
		  	        this.$emit('keyboardheightchange',e.details)
		  	       }, 
			
		},
	}
</script>

<style>
</style>
