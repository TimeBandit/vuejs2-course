<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- the name prop is bound to the data specified on the right hand side -->
                <app-user-detail
                :myName="name" 
                @nameWasReset="name = $event"
                
                :resetFn="resetName"
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                @ageEdited="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    // data can be passed from a child to a component via emitting an event
    // or by executing a callback function passes from parent -> child
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
            return {
                name: 'Max',
                age: 27
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName(){
                this.name =' Anna';
            },
            resetName(){
                this.name = 'Max';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
