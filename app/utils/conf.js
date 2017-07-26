/**
 * Created by Yooz on 2017/3/31.
 */

'use strict'
import Dimensions from 'Dimensions';
import {
    PixelRatio,
} from 'react-native';

module.exports = {
    header: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    },

    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),
}