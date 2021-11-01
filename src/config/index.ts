export default{
  // 天气接口配置
  weather: {
    appid: '45235668',
    appsecret: '5uiv7PNV',
  },
  // 测试 微信公众号
  weChat: {
    appId: 'wx0370703cd0b2c0c6',
    secret: '2b01f2f94fff287f3f5039aa441a22a3',
    // 用户的openid
    users: [
      'o2BuJ6C1JeJghf2m2MpyeJOcj-VI',
      'o2BuJ6JK-W7VQNw3Pk2DPnKxSx-A', // 小新没蜡笔
    ],
    daily: 'TD4RGxyjxD1C411-pG6LBdZRw2feJRxubrKJ9V4nAwE', // 普通模板
    marry: '********************', // 结婚纪念日模板
    wageDay: '*****************', // 工资日模板
    birthday: 'Z4qWXPuvLexMejvjaunhimLd9LcMOBWVqiaM5wCj0uQ', // 生日模板
    birthdayUrl: 'http://birthday.wowmonkey.cn'
  },
  // 时间
  time: {
    wageDay: 15, // 工资日
    love: '2020-10-22', // 相爱日期
    marry: '2020-11-27', // 结婚纪念日
    // 生日配置
    // 老家过阴历生日，这里暂时写死
    birthday: {
      2021: '2021-10-30',
      2022: '2022-10-20',
      2023: '2023-11-8',
    }, // 每年生日 阳历
    birthYear: 1995,
  }
};
