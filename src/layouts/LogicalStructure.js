import Base from './Base';
import {
    walk,
    asyncRun
} from '../utils'

/** 
 * @Author: ltb 
 * @Date: 2021-04-12 22:25:58 
 * @Desc: 逻辑结构图 
 */
class LogicalStructure extends Base {
    /** 
     * @Author: ltb 
     * @Date: 2021-04-12 22:26:31 
     * @Desc: 构造函数 
     */
    constructor(opt = {}) {
        super(opt)
    }

    /** 
     * javascript comment 
     * @Author: ltb25 
     * @Date: 2021-04-06 14:04:20 
     * @Desc: 布局
     */
    doLayout(callback) {
        let task = [() => {
            this.computedBaseValue()
        }, () => {
            this.computedTopValue()
        }, () => {
            this.adjustTopValue()
        }, () => {
            callback(this.root)
        }]
        asyncRun(task)
    }

    /** 
     * javascript comment 
     * @Author: ltb25 
     * @Date: 2021-04-08 09:49:32 
     * @Desc: 遍历数据计算节点的left、width、height
     */
    computedBaseValue() {
        walk(this.renderer.renderTree, null, (cur, parent, isRoot, layerIndex,index) => {
            let newNode = this.createNode(cur, parent, isRoot, layerIndex)
            // 根节点定位在画布中心位置
            if (isRoot) {
                this.setNodeCenter(newNode)
            } else {
                // 非根节点
                // 定位到父节点右侧
                if (parent._node.dir) {
                    newNode.dir = parent._node.dir
                } else { // 节点生长方向
                    newNode.dir = index % 2 === 0 ? 'right' : 'left'
                }
                console.log('liutongbin===newNode.dir',newNode)
                if(layerIndex === 1){
                    newNode.left = parent._node.left + parent._node.width/2 - newNode.width/2
                } else if(newNode.dir === 'right') {
                    newNode.left = parent._node.left + parent._node.width + this.getMarginX(layerIndex)
                } else if(newNode.dir === 'left') {
                    newNode.left = parent._node.left - newNode.width - this.getMarginX(layerIndex)

                }
                
            }
            if (!cur.data.expand) {
                return true;
            }
        }, (cur, parent, isRoot, layerIndex) => {
            // 返回时计算节点的areaHeight，也就是子节点所占的高度之和，包括外边距
            let len = cur.data.expand === false ? 0 : cur._node.children.length
            cur._node.childrenAreaHeight = len ? cur._node.children.reduce((h, item) => {
                return h + item.height
            }, 0) + (len + 1) * this.getMarginY(layerIndex + 1) : 0
        }, true, 0)
    }

    /** 
     * javascript comment 
     * @Author: ltb25 
     * @Date: 2021-04-08 09:59:25 
     * @Desc: 遍历节点树计算节点的top 
     */
    computedTopValue() {
        walk(this.root, null, (node, parent, isRoot, layerIndex) => {
            if (node.nodeData.data.expand && node.children && node.children.length) {
                if(layerIndex == 0){
                    let marginY = this.getMarginY(layerIndex + 1)
                    // 第一个子节点的top值 = 该节点中心的top值 - 子节点的高度之和的一半
                    let totalTop = node.top + node.height + marginY
                    node.children.forEach((cur) => {
                        cur.top = totalTop
                        totalTop += cur.height + marginY
                    })
                } else {
                    let marginY = this.getMarginY(layerIndex + 1)
                    // 第一个子节点的top值 = 该节点中心的top值 - 子节点的高度之和的一半
                    let top = node.top + node.height / 2 - node.childrenAreaHeight / 2
                    let totalTop = top + marginY
                    node.children.forEach((cur) => {
                        cur.top = totalTop
                        totalTop += cur.height + marginY
                    })
                }
            }
        }, null, true)
    }

    /** 
     * javascript comment 
     * @Author: ltb25 
     * @Date: 2021-04-08 10:04:05 
     * @Desc: 调整节点top 
     */
    adjustTopValue() {
        walk(this.root, null, (node, parent, isRoot, layerIndex) => {
            if (!node.nodeData.data.expand) {
                return;
            }
            // 判断子节点所占的高度之和是否大于该节点自身，大于则需要调整位置
            let difference = node.childrenAreaHeight - this.getMarginY(layerIndex + 1) * 2 - node.height
            if (difference > 0) {
                this.updateBrothers(node, difference / 2, layerIndex)
            }
        }, null, true)
    }

    /** 
     * javascript comment 
     * @Author: ltb25 
     * @Date: 2021-04-07 14:26:03 
     * @Desc: 更新兄弟节点的top
     */
    updateBrothers(node, addHeight, layerIndex) {
        if (node.parent) {
            let childrenList = node.parent.children
            let index = childrenList.findIndex((item) => {
                return item === node
            })
            childrenList.forEach((item, _index) => {
                    let _offset = 0
                    if(layerIndex === 1) {
                        if (_index < index) {
                            return
                        } else if (_index === index) { // 下面的节点往下移
                            _offset = addHeight
                        }
                        else if (_index > index) { // 下面的节点往下移
                            _offset = addHeight * 2
                        }
                        item.top += _offset
                        // 同步更新子节点的位置
                        if (item.children && item.children.length) {
                            this.updateChildren(item.children, 'top', _offset)
                        }
                    }else {
                        if (item === node) {
                            return
                        }
                        // 上面的节点往上移
                        if (_index < index) {
                            _offset = -addHeight
                        } else if (_index > index) { // 下面的节点往下移
                            _offset = addHeight
                        }
                        item.top += _offset
                        if (item.children && item.children.length) {
                            this.updateChildren(item.children, 'top', _offset)
                        }
                    }
                    
    
                })
            
            // 更新父节点的位置
            this.updateBrothers(node.parent, addHeight, layerIndex-1)
        }
    }

    /** 
     * @Author: ltb 
     * @Date: 2021-04-11 14:42:48 
     * @Desc: 绘制连线，连接该节点到其子节点
     */
    renderLine(node, lines) {
        if (node.children.length <= 0) {
            return [];
        }
        let {
            left,
            top,
            width,
            height,
            translateY
        } = node
        let lastHeight = node.top + node.height + translateY
        node.children.forEach((item, index) => {
            let x1 = node.layerIndex === 0 ? left + width / 2 : item.dir === 'left' ? left : left + width
            let y1 = top + height / 2
            let x2 = item.dir === 'left' ? item.left + item.width : item.left
            let y2 = item.top + item.height / 2
            let path = ''
            if (node.isRoot) {
                path = this.quadraticCurvePath(x1, lastHeight, x2, y2 - item.height / 2)
            } else {
                path = this.cubicBezierPath(x1, y1, x2, y2)
            }
            lastHeight = item.top + item.height
            lines[index].plot(path)
        })
    }

    /** 
     * @Author: ltb 
     * @Date: 2021-04-11 19:54:26 
     * @Desc: 渲染按钮 
     */
    renderExpandBtn(node, btn) {
        let {
            width,
            height,
            expandBtnSize
        } = node
        let {
            translateX,
            translateY
        } = btn.transform()
        // btn.translate(width - translateX, height / 2 - translateY)
        let x = (node.dir === 'left' ? 0 - expandBtnSize - 25 : width + 25) - translateX
        let y = height / 2 - translateY
        btn.translate(x, y)
    }
}

export default LogicalStructure