<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
        <p>User Age: {{ age }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Callback</button>
    </div>
</template>

<script>
    import { eventBus } from "../main";
    export default{
        // props: ['myName'], this is unvalidted
        props:{
            myName:{
                type: String
            },
            resetFn:{
                type: Function
            },
            userAge: Number
            // myName: String, this forces it to type string
            // required: true, this property must be passed
            // default: 'Max'  only have this or 'required' no both
            // can be a function that returns the expected type
        },
        methods:{
            switchName(){
                console.log(this.myName);
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName = 'Max'; // dangerous when used with array/objects
                // emit a custom event to let parent know that the value has changed
                this.$emit('nameWasReset', this.myName);
            }
        },
        data:function(){
            return {
                    age: this.userAge
                };
        },
        created(){
            // setup listener to the new event bus
            // register the listener
            const self=this;
            eventBus.$on('ageEdited',function(newAge){
                console.log('ageEdited triggered', newAge);
                self.age = newAge;
            });
        }
    }
</script>

// scoped means that the styles below will only apply to this component
<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
