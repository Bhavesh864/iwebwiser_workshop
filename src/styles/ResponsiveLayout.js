import {Dimensions, PixelRatio} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// width
const wpx = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

// hight
const hpx = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

const listenOrientationChange = that => {
  Dimensions.addEventListener('change', newDimensions => {
    width = newDimensions.window.width;
    height = newDimensions.window.height;
    that?.setState({
      orientation: width < height ? 'portrait' : 'landscape',
    });
  });
};

const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

export {
  wpx,
  hpx,
  listenOrientationChange,
  removeOrientationListener,
  height,
  width,
};
