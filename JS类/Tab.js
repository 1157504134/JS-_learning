// 定义tab类
// 1、具有切换功能
// 2、具有添加功能
// 3、具有删除功能
// 4、具有修改功能
class Tab{
    constructor(id) {
        // 获取元素
        this.main = document.querySelector(id);
        // 获取li
        this.lis = this.main.querySelectorAll("li");
        // 获取section
        this.section = this.main.querySelectorAll("section");
        // 直接调用init方法
        this.init();
    }
    // li 的初始化
    init() {
        for (var i =0;i<this.lis.length;i++) {
            // 添加index属性
            this.lis[i].index = i;
            // 设置函数
            this.lis[i].onclick = function() {
                    console.log(this.index);
            }
        }
    }
    // 1、具有切换功能
    toggleTab(){

        }
    // 2、具有添加功能
    addTab(){

    }
    // 3、具有删除功能
    removeTab(){

    }
    // 4、具有修改功能
    editTab(){

    }
}

var tab = new Tab("#tab");