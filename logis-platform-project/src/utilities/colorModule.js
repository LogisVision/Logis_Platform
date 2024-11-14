// API 정의하는 부분
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
    }
}

export { Color };