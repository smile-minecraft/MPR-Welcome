const { MessageEmbed } = require('discord.js');
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
    "link":"https://github.com/smile-minecraft/MPR-Welcome", // 插件 GitHub 鏈接
    "resources":["AGPL-3.0"], // 插件 開源協議
    "description":"加入/離開訊息" // 插件介紹
}

async function guildMemberAdd(client, member) {

    console.log("偵測到有人加入伺服器"+ member.user.username);
    try{
        if (addRole){
        member.roles.add(welcomeRoleID);
        }
        const embed  = new MessageEmbed()
            .setColor('#7CFC00')
            .setTitle(`${member.user.username}加入了伺服器`)
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            client.guilds.cache.get(guildID).channels.cache.get(welcomeChannelID).send({embeds:[embed]});
        
            }catch(e){
                console.error(e);
            }
}

async function guildMemberRemove(client, member) {
    console.log("偵測到有人離開伺服器" + member.user.username);
    try{
        const embed  = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${member.user.username}離開了伺服器`)
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            client.guilds.cache.get(guildID).channels.cache.get(leaveChannelID).send({embeds:[embed]});
    }catch(e){
        console.error(e);
    }
}
