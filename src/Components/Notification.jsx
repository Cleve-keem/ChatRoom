import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css';

function showNotification({msg, theme = 'dark'}){
    Toastify({
        text: msg,
        duration: 2000,
        gravity: 'top',
        position: 'center',
        style: {
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black'
        },
    }).showToast()
}
export default showNotification;