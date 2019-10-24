let productList = [],
    shopList = [],
    url = "https://api.m.jd.com/client.action";

function autoPost(id, type) {
    fetch(`${url}?timestamp=${new Date().getTime()}`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `functionId=raisepacket_collectScore&body={"type":${type},"ext":"${id}","appsign":1,"msgsign":2}&client=wh5`
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        console.log(res.data.biz_msg)
    })
}

function start() {
    fetch(`${url}?${new Date().getTime()}`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: 'functionId=raisepacket_getShopAndProductList&body=&client=wh5'
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        productList = res.data.result.productList;
        shopList = res.data.result.shopList;
        console.log(`获取到任务,商品：${productList.length}商品：${shopList.length}`);
        autoProductTask()
    })
}

function autoProductTask() {
    for (let i = 0, leng = productList.length; i < leng; i++) { (function (index) { setTimeout(() => {
                let item = productList[index];
                autoPost(item['id'], 4);
                console.log(`商品总任务数：${leng}当前任务数：${index+1}`);
                if (leng - 1 == index) {
                    autoShopTask()
                }
            }, index * 1500)
        })(i)
    }
}

function autoShopTask() {
    for (let i = 0, leng = shopList.length; i < leng; i++) { (function (index) { setTimeout(() => {
                let item = shopList[index];
                autoPost(item['id'], 2);
                console.log(`商铺总任务数：${leng}当前任务数：${index+1}`);
                if (leng - 1 == index) {
                    autoPlay()
                }
            }, index * 1500)
        })(i)
    }
}

function autoPlay() {
    for (let i = 0, leng = 4; i < leng; i++) { (function (index) { setTimeout(() => {
                autoPost(0, 5);
                console.log(`好玩互动：${leng}当前任务数：${index+1}`);
                if (leng - 1 == index) {
                    autoInteract()
                }
            }, index * 1000)
        })(i)
    }
}

function autoInteract() {
    for (let i = 0, leng = 4; i < leng; i++) { (function (index) { setTimeout(() => {
                autoPost(0, 10);
                console.log(`视频直播：${leng}当前任务数：${index+1}`);
                if (leng - 1 == index) {
                    autoShopping()
                }
            }, index * 1000)
        })(i)
    }
}

function autoShopping() {
    for (let i = 0, leng = 3; i < leng; i++) { (function (index) { setTimeout(() => {
                autoPost(0, 3);
                console.log(`精彩会场：${leng}当前任务数：${index+1}`)
            }, index * 1000)
        })(i)
    }
}
start();