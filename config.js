// 配置信息
module.exports = {
  fromDisplayText: 'Githubt通知', // 收件箱展示的来件人名字
  fromDisplaySubText: 'cloudbase-templates项目已成功部署腾讯云', // 收件箱展示的次级标题
  user: process.env.SENDEMAIL, // 发送者邮箱
  pass: process.env.EMAILPASS, // 发送者邮箱MTP协议密码
  to: process.env.TOEMAIL, // 发送到谁，填邮箱
  // 书签文件
  bookmarksFile: './bookmarks/index.html',
  // 生成目录
  mdFilePath: './docs/guides/bookmarks/post/',
  READMEPATH: './docs/guides/bookmarks/',
  // 排除目录
  unlessPath: []
}
