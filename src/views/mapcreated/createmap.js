import { loadModules } from 'esri-loader';//引用arcgis api加载模块
import config from '@/arcgisapi'//获取地图url
export default {
    name: "Home",
    components: {
    },
    created() {
        loadModules([
            "esri/Map",
            "esri/views/MapView",
            "esri/Basemap",
            "esri/layers/TileLayer",
        ], config.options).then(([
            Map,
            MapView,
            Basemap,
            TileLayer,
        ]) => {
            //create tilelayer
            const tilelayer = new TileLayer({
                id: "basemap",
                url: config.mapserver.basemap
            })
            //create basemap from tilelayer
            const basemap = new Basemap({
                baseLayers: [tilelayer],
                title: "Custom Basemap",
                id: "myBasemap"
            })
            //create map
            const map = new Map({
                basemap
            })
            //全局map
            this.$store.commit('initMap', map)
            window.map = map
            const view = new MapView({
                container: "mymap",
                map
            })
            //全局view
            this.$store.commit('initView', view)
        })
    }
};