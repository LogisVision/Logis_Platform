// ┏━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃ Logis Vision Color API ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━┛

// 필요한 Vibrant 라이브러리 불러오기
import * as Vibrant from "node-vibrant";

// Logis Vision의 Color 관련 API
const Color = {
    // 색상의 밝기를 계산하는 함수 (color: map[red, green, blue])
    getBrightness: (color) => {
        // 밝기를 계산, 값이 클수록 밝은 색상
        return (color.red * 299 + color.green * 587 + color.blue * 114) / 1000;
    },

    // 배경 색상에 따라 텍스트 색상을 결정하는 함수 (color: map[red, green, blue])
    getTextColor: (color) => {
        // 밝기를 기반으로 텍스트 색상 결정
        const brightness = Color.getBrightness(color);
        return brightness > 127.5 ? '#000000' : '#FFFFFF';
    },

    // 컬러 정보를 Hex String으로 가공하는 기능 (color: map[red, green, blue])
    colorDataToHex: (color) => {
        let colorHEX = "#";
        colorHEX += color.red.toString(16).toUpperCase().padStart(2, "0");
        colorHEX += color.green.toString(16).toUpperCase().padStart(2, "0");
        colorHEX += color.blue.toString(16).toUpperCase().padStart(2, "0");

        return colorHEX;
    },

    // 컬러 Hex String을 컬러 배열 정보로 가공하는 기능 (colorHex: string)
    colorHexToData: (colorHEX) => {
        let color = { red: 0, green: 0, blue: 0 };
        color.red = parseInt(colorHEX.substring(1, 3), 16);
        color.green = parseInt(colorHEX.substring(3, 5), 16);
        color.blue = parseInt(colorHEX.substring(5, 7), 16);


        return color;
    },

    // 이미지에서 대표 색상을 결정하는 함수 (imageSrc: URL)
    getPrimaryColor: async (imageSrc) => {
        const palette = await Vibrant.from(imageSrc).getPalette();
        return {
            red: Math.floor(palette.Vibrant.r),
            green: Math.floor(palette.Vibrant.g),
            blue: Math.floor(palette.Vibrant.b),
        };
    }
}

export { Color };