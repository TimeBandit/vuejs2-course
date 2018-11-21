<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ age }}</p>
        <p>
            Passing data to siblings
            <button @click="editAge">Edit Age</button>
        </p>
    </div>
</template>

<script>
    // importing this event bus means you can emit events
    import { eventBus, eventBus2 }from '../main';

    export default{
        props:{
            // can also stick to an array to keep it simple
            userAge:{
                type: Number
            }
        },
        data: function(){
            return {
                age: this.userAge
            }
        },
        methods:{
            editAge: function(){
                this.age = 30;
                // this.$emit('ageEdited', this.userAge);
                // use the bus to emit events instead
                console.log('emmiting ageEdited event');
                eventBus.$emit('ageEdited', this.age);
                
                // with the centralized event bus
                // eventBus2.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
