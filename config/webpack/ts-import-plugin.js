const tsImportPluginFactory = require("ts-import-plugin");

const ts_antd_options=[
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }
]

module.exports=()=>({    
    before:[
        tsImportPluginFactory(ts_antd_options)
    ]
})