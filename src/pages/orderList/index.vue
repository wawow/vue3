<template>
    orderList
    <div @click="toDemand()">toDemand</div>
</template>

<script>

export default {
    mounted(){
        const geolocation = window.qq && new window.qq.maps.Geolocation('TTNBZ-C45K6-QEHSA-EOUKL-OI5WF-7FF6K', 'mapqq');
        geolocation.getLocation((res) => {
            console.log(res);
        }, null);
    },
    methods:{
        toDemand(){
            this.$router.push({ path: '/' })
        }
    }
}
</script>
