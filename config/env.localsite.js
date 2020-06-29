const path = require('path');
const config = require('./common');

Object.assign(config, {

    host: 'http://localhost/incubator-echarts-website/examples',
    // host: 'http://localhost:8000/echarts/incubator-echarts-website/examples',

    cdnRootMap: {
        zh: 'http://localhost/incubator-echarts-website/examples',
        en: 'http://127.0.0.1:8000/echarts/incubator-echarts-website/examples'
    },

    mainSiteCDNRootMap: {
        zh: 'http://localhost/incubator-echarts-website/examples',
        // zh: 'http://127.0.0.1:8000/echarts/incubator-echarts-website',
        en: 'http://127.0.0.1:8000/echarts/incubator-echarts-website'
    },

    mainSiteHost: 'http://localhost/incubator-echarts-website',
    // mainSiteHost: 'http://localhost:8000/echarts/incubator-echarts-website',

    blogPath: 'http://efe.baidu.com/tags/ECharts/',
    releaseDestDir: path.resolve(__dirname, '../../incubator-echarts-website/examples')
});

module.exports = config;
