import React, { useState } from 'react';

//... your other imports ...

export const GitHubShareButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);  // 默认为true，显示标志

    if (!isVisible) {
        return null;  // 不渲染任何内容
    }

    return (
        //... your existing component code ...
    );
}
