import defaultTheme from './default';
import merge from 'deepmerge';

/** 
 * @Author: ltb 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 小黄人
 */
export default merge(defaultTheme, {
    // 连线的颜色
    lineColor: '#3A3F63',
    lineWidth: 2,
    // 背景颜色
    backgroundColor: '#F0F2FA',
    // 根节点样式
    root: {
        fillColor: '#4B62FF',
        color: '#fff',
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 0,
        fontSize: 18,
        active: {
            borderColor: '#FF2855'
        }
    },
    // 二级节点样式
    first: {
        fillColor: '#4B62FF',
        color: '#fff',
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 0,
        fontSize: 18,
        active: {
            borderColor: '#FF2855'
        }
    },
    second: {
        color: '#3A3F63',
        borderColor: '',
        borderWidth: 0,
        fontSize: 14,
        active: {
            borderColor: '#FF2855'
        }
    },
    third: {
        color: '#3A3F63',
        borderColor: '',
        borderWidth: 0,
        fontSize: 12,
        active: {
            borderColor: '#FF2855'
        }
    },
    // 四级以下节点样式
    node: {
        color: '#3A3F63',
        borderColor: '',
        borderWidth: 0,
        fontSize: 10,
        active: {
            borderColor: '#FF2855'
        }
    }
})