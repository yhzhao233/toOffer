//30、包含 min 函数的栈
//思路：通过构造一个对象实现，对象中包括数据栈，辅助栈和操作方法，辅助栈用于保存之前情况的最小值
//mpush 向数据栈压入数据，同时向辅助栈压入最小数据
//mpop：数据栈和辅助栈的栈顶元素同时出栈
//min：求当前最小值

function StackWithMin() {
    return createObject();
}

function createObject() {
    let variable = {
        m_data: [],
        m_min: [],
        mpush: function (val) {
            this.m_data.push(val);
            if (this.m_min.length === 0 || val < this.m_min[this.m_min.length - 1]) {
                this.m_min.push(val);
            } else {
                this.m_min.push(this.m_min[this.m_min.length - 1]);
            }
        },
        mpop: function () {
            if (this.m_data.length > 0 && this.m_min.length > 0) {
                this.m_data.pop();
                this.m_min.pop();
            }
        },
        min: function () {
            if (this.m_data.length > 0 && this.m_min.length > 0) {
                return this.m_min[this.m_min.length - 1];
            }
        }
    };
    return variable;
}

let stack = StackWithMin();
stack.mpush(3);
stack.mpush(4);
stack.mpush(2);
stack.mpush(1);
stack.mpop();
stack.mpop();
stack.mpush(0);