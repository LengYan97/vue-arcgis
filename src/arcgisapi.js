//url：arcgis托管版本的网址
//css：加载css样式文件
//dojo
const options = {
    url: "http://121.229.28.236/AGSAPIsnew/library/4.15/init.js",
    css: "http://121.229.28.236/AGSAPIsnew/library/4.15/esri/css/main.css",
    dojoConfig: {
        async: true,
        packages: [
            {
                //location: '/views',
                //name: 'views'
            }
        ]
    }
};
// console.log(options.dojoConfig.packages[0].location)
//地图服务url
const mapserver = {
    basemap: "http://121.229.28.236/arcgis/rest/services/CYLMap0517pczh/MapServer",
    /*other mapserver */
    server_one: "..."
}

export default {
    options,
    mapserver
}