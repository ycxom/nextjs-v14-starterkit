'use client'

import { useEffect } from 'react'

/**
 * 一个客户端组件，用于从指定 API 获取壁纸并将其应用为页面 body 的背景。
 * 这个组件本身不渲染任何内容。
 */
const DynamicBackground = () => {
    useEffect(() => {
        const wallpaperUrl = 'https://ai.ycxom.top:3002/api/v1/wallpaper/by-ratio/standard';

        document.body.style.backgroundImage = `url(${wallpaperUrl})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.transition = 'background-image 1s ease-in-out';

        // 组件卸载时执行清理函数，移除背景样式
        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
            document.body.style.backgroundAttachment = '';
        };
    }, []); // 空依赖数组确保 effect 只在组件挂载时运行一次

    return null; // 此组件不渲染任何可见的 DOM 元素
};

export default DynamicBackground;
