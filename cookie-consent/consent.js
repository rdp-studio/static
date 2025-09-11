import 'https://cdn.jsdmirror.com/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box inline",
            position: "bottom left",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "zh-cn",
        autoDetect: "browser",
        translations: {
            "zh-cn": {
                consentModal: {
                    title: "🍪 来点饼干？",
                    description: "我们使用 Cookies 来确保我们的网站正常运行。我们还使用匿名和隐私友好的分析 Cookie，但您可以随时拒绝它们。",
                    closeIconLabel: "",
                    acceptAllBtn: "全部接受",
                    acceptNecessaryBtn: "全部拒绝",
                    showPreferencesBtn: "管理偏好",
                    footer: ""
                },
                preferencesModal: {
                    title: "偏好中心",
                    closeIconLabel: "关闭对话框",
                    acceptAllBtn: "全部接受",
                    acceptNecessaryBtn: "全部拒绝",
                    savePreferencesBtn: "保存",
                    serviceCounterLabel: "服务|服务",
                    sections: [
                        {
                            title: "我们使用 Cookies 来做什么",
                            description: "我们使用Cookie来确保我们的网站正常运行。我们还使用匿名和隐私友好的分析 Cookie，但您可以随时拒绝它们。"
                        },
                        {
                            title: "必要 Cookies <span class=\"pm__badge\">始终启用</span>",
                            description: "这些 Cookies 用于实现登录等核心功能，为了保障您的浏览体验，无法关闭。",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "分析 Cookies",
                            description: "这些 Cookies 用于收集匿名使用数据，帮助我们改进网站的内容和功能。",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "更多信息",
                            description: "如对于我的 Cookie 政策、您的选择和隐私有任何疑问，请随时 <a class=\"cc__link\" href=\"mailto:i@launchpadx.top\">联系我</a>。"
                        }
                    ]
                }
            }
        }
    }
});

window.addEventListener('cc:onFirstConsent', ({detail}) => {
  if (detail.cookie.categories.includes("analytics")) {
    window.clarity('consent');
  } else {
    window.clarity('consent', false);
  }
});

window.addEventListener('cc:onChange', ({detail}) => {
  if (detail.cookie.categories.includes("analytics")) {
    window.clarity('consent');
  } else {
    window.clarity('consent', false);
  }
});

setInterval(() => {
    document.querySelector('a[href="/cookies-pref"]').removeEventListener("click");
    document.querySelector('a[href="/cookies-pref"]').addEventListener("click", (e) => {
        e.preventDefault();
        CookieConsent.showPreferences();
    });
}, 200);
