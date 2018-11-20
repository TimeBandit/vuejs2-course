<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <p>
            Passing data to siblings
            <button @click="editAge">Edit Age</button>
        </p>
    </div>
</template>

<script>
    export default{
        props:{
            // can also stick to an array to keep it simple
            userAge:{
                type: Number
            }
        },
        methods:{
            editAge: function(){
                this.userAge = 30;
                this.$emit('ageEdited', this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
