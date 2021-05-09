import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img03.sogoucdn.com/app/a/100520093/f9d5c084396d06f6-0c7006bf1d0bb8d5-91234bccfdd2f9ec49fc7cd61ec9822f.jpg",
        siteTitle: "星空物语",
        icp: "星空物语出版qqqq",
        githubName: "DuYi-Edu",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
        contact: [
            {
                type: "github",
                name: "DuYi-Edu",
            },
            {
                type: "mail",
                name: "123@qq.com",
            },
            {
                type: "qq",
                name: "1136159384",
                href:
                    "tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
                src: "http://tool.ckd.cc/qr/qrpng/20210411/19dd0a80.png",
            },
            {
                type: "weixin",
                name: "WuLinx",
                src: "http://tool.ckd.cc/qr/qrpng/20210411/19dd0a80.png",
            },
        ],
    },
});
