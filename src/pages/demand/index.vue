<template>
    demand
    <div @click="toOrderList()">toOrderList</div>
</template>

<script>

export default {
    mounted(){
        // this.$axios.get('api/v1/basis/flatEnums/getByGroup',{
        //     params:{
        //         group:'customer.user.demand'
        //     }
        // }).then(res => {
        //     console.log(res);
        // })
    },
    methods:{
        toOrderList(){
            this.$router.push({ path: '/orderList' })
        }
    }
}
</script>
