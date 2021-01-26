import html2canvas from "html2canvas";
import Canvas2Image from "../lib/canvas2image";

export const downloadElementAsImage = async (elementId, imageName) => {
    // 需要截图的原生 DOM 对象
    const element = document.getElementById(elementId);
    const width = element.offsetWidth; // 获取 DOM 元素宽度
    const height = element.offsetHeight; // 获取 DOM 元素高度
    const scale = 2; // 解决高清屏图片模糊
    const canvas = await html2canvas(element, {
        scale,
        width,
        height,
        dpi: window.devicePixelRatio * 2,
    });
    const img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
    downloadImg(img, imageName);
};

const downloadImg = (imgElement, imgName) => {
    const aElement = document.createElement("a");
    aElement.href = imgElement.src;
    aElement.download = imgName;
    aElement.click();
}
