<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="(server, index) in servers" :key="index">
                <!-- custom components cannot have events apply to dom elements -->
                <!-- instead treat these events as as props -->
                <one-server :appServer="server"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'
    export default{
        data: function(){
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                ]
            }
        },
        components: {
            oneServer: Server
        },
        methods: {
            
        }
    }
</script>

<style>
    li {
        cursor: pointer;
    }

</style>
