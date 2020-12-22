<template>
	<textarea
		:class="['onekit-textarea',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		:value="value"
		:placeholder="placeholder"
		:placeholder-style="placeholderStyle"
		:placeholder-class="placeholderClass"
		:disabled="disabled"
		:maxlength="maxlength"
		:focus="focus"
		:auto-height="autoHeight"
		:fixed="fixed"
		:cursor-spacing="cursorSpacing"
		:cursor="cursor"
		:show-confirm-bar="showConfirmBar"
		:selection-start="selectionStart"
		:selection-end="selectionEnd"
		:adjust-position="adjustPosition"
		:hold-keyboard="holdKeyboard"
		:disable-default-padding="disableDefaultPadding"
		@focus="textarea_focus"
		@blur="textarea_blur"
	>
		<slot/>
	</textarea>
</template>

<script>
	export default{
		props:{
			onekitClass:{
				type:String,
				default:''
			},
			onekitStyle:{
				type:String,
				defaul:''
			},
			onekitId:{
				type:String,
				defaul:''
			},
			value:{
				type:String,
				default: ""
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
				default: "textarea-placeholder	"
			},
			disabled:{
				type:Boolean,
				default: false
			},
			maxlength:{
				type:Number,
				default: 140
			},
			focus:{
				type:Boolean,
				default: false
			},
			autoHeight:{
				type:Boolean,
				default: false
			},
			fixed:{
				type:Boolean,
				default: false
			},
			cursorSpacing:{
				type:Number,
				default: 0
			},
			cursor:{
				type:Number,
				default: -1
			},
			showConfirmBar:{
				type:Boolean,
				default: true
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
			disableDefaultPadding:{
				type:Boolean,
				default: false
			},
			
		},
		methods:{
			textarea_focus(e){
			        console.log("textarea_focus",e)
			        this.$emit('focus',e.details)
			       }, 
			textarea_blur(e){
			        console.log("textarea_blur",e)
			        this.$emit('blur',e.details)
			       }, 
		},
	}
</script>

<style>
</style>
