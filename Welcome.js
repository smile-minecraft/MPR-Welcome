const Plugin={
    "name": "WelcomeMessage", // 插件 名稱
    "version": "1.1.0", // 插件 版本
    "depends":{ // 依賴
        "pluginLoader":">=3.5.0", // pluginLoader 版本
    },
    "Events":["guildMemberAdd","guildMemberRemove"],// 事件註冊
    "Commands":[ // 指令註冊
    ],
    "author": ["smile"], // 插件 作者
    "link":"", // 插件 GitHub 鏈接
    "resources":["AGPL-3.0"], // 插件 開源協議
    "description":"加入/離開訊息" // 插件介紹
}