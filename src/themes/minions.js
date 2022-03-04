import defaultTheme from './default';
import merge from 'deepmerge';

/** 
 * @Author: ltb 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 小黄人
 */
export default merge(defaultTheme, {
    // 连线的颜色
    lineColor: 'rgb(51, 51, 51)',
    lineWidth: 3,
    // 背景颜色
    backgroundColor: 'rgb(220, 220, 220)',
    // 根节点样式
    root: {
        fillColor: 'rgb(0, 0, 255)',
        color: '#fff',
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 3,
        fontSize: 14,
        active: {
            borderColor: 'rgb(55, 165, 255)'
        }
    },
    // 二级节点样式
    second: {
        fillColor: 'rgb(0, 0, 255)',
        color: '#fff',
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 3,
        fontSize: 14,
        active: {
            borderColor: 'rgb(55, 165, 255)'
        }
    },
    // 三级及以下节点样式
    node: {
        fontSize: 12,
        color: '#222',
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 3,
        fontSize: 14,
        active: {
            borderColor: 'rgb(55, 165, 255)'
        }
    }
})