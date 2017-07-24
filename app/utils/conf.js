/**
 * Created by Yooz on 2017/3/31.
 */

'use strict'
import Dimensions from 'Dimensions';

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
}