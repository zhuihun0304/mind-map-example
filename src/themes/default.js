/** 
 * @Author: ltb 
 * @Date: 2021-04-11 10:19:55 
 * @Desc: 默认主题 
 */
 export default {
    // 节点内边距
    paddingX: 10,
    paddingY: 10,
    // 图片显示的最大宽度
    imgMaxWidth: 100,
    // 图片显示的最大高度
    imgMaxHeight: 100,
    // icon的大小
    iconSize: 20,
    // 连线的粗细
    lineWidth: 1,
    // 连线的颜色
    lineColor: '#549688',
    // 背景颜色
    backgroundColor: '#fafafa',
    // 背景图片
    backgroundImage: 'none',
    // 背景重复
    backgroundRepeat: 'no-repeat',
    // 根节点样式
    root: {
        fillColor: '#549688',
        fontFamily: 'PingFangSC-Medium, PingFang SC',
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 1.5,
        paddingX: 0,
        paddingY: 0,
        borderColor: '#fff',
        borderWidth: 0,
        borderDasharray: 'none',
        borderRadius: 4,
        textDecoration: 'none',
        active: {
            borderColor: '#fff',
            borderWidth: 1,
            borderDasharray: 'none',
        }
    },
    // 一级节点样式
    first: {
        marginX: 0,
        marginY: 34,
        fillColor: '#fff',
        fontFamily: 'PingFangSC-Medium, PingFang SC',
        color: '#565656',
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 1.5,
        paddingX: 42,
        paddingY: 13,
        borderColor: '#549688',
        borderWidth: 1,
        borderDasharray: 'none',
        borderRadius: 4,
        textDecoration: 'none',
        active: {
            borderColor: 'rgb(57, 80, 96)',
            borderWidth: 1,
            borderDasharray: 'none',
        }
    },
    // 二级节点样式
    second: {
        marginX: 61,
        marginY: 52,
        fillColor: '#fff',
        fontFamily: 'PingFangSC-Medium, PingFang SC',
        color: '#565656',
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 1.5,
        borderColor: '#549688',
        paddingX: 26,
        paddingY: 9,
        borderWidth: 1,
        borderDasharray: 'none',
        borderRadius: 4,
        textDecoration: 'none',
        active: {
            borderColor: 'rgb(57, 80, 96)',
            borderWidth: 1,
            borderDasharray: 'none',
        }
    },
    // 三级节点样式
    third: {
        marginX: 59,
        marginY: 52,
        fillColor: '#fff',
        fontFamily: 'PingFangSC-Medium, PingFang SC',
        color: '#565656',
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 1.5,
        paddingX: 24,
        paddingY: 5,
        borderColor: '#549688',
        borderWidth: 1,
        borderDasharray: 'none',
        borderRadius: 4,
        textDecoration: 'none',
        active: {
            borderColor: 'rgb(57, 80, 96)',
            borderWidth: 1,
            borderDasharray: 'none',
        }
    },
    // 四级及以下节点样式
    node: {
        marginX: 59,
        marginY: 52,
        fillColor: '#FFFFFF',
        fontFamily: 'PingFangSC-Regular, PingFang SC',
        color: '#6a6d6c',
        fontSize: 14,
        fontWeight: 'noraml',
        fontStyle: 'normal',
        lineHeight: 1.5,
        paddingX: 14,
        paddingY: 5,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 4,
        borderDasharray: 'none',
        textDecoration: 'none',
        active: {
            borderColor: 'rgb(57, 80, 96)',
            borderWidth: 1,
            borderDasharray: 'none',
        }
    }
}