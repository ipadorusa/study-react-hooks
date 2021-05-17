import React, {useState, useEffect} from 'react'

function WidthPrinter() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        console.log('useEffect1');
        return () => {
            window.removeEventListener('resize', onResize);
            console.log('useEffect2');
        }
    },[]); // 빈배열 있고 없고 차이(부수효과 함수 실행여부)
    return (
        <div>
            {`width is ${width}`}
        </div>
    )
}

export default WidthPrinter
