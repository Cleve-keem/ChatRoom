function chatConnection({ roomId, serverUrl }){
    // Handling expected Error
    if(typeof serverUrl !== 'string'){
        throw Error("Expected serverUrl to be a string. Received: " + serverUrl); // server url is to be string.
    }
    if(typeof roomId !== 'string'){
        throw Error("Expected roomId to be a string. Received: " + roomId); // roomId is a string
    }

    let intervalId;
    let messageCallback;

    return {
        connect(){
            console.log('Connecting to "' + roomId + '" room at ' + serverUrl + '...');
            clearInterval(intervalId); // clearing the interval before starting another one. 

            intervalId = setInterval(() => {
                if (messageCallback) {
                    if (Math.random() > 0.5) {
                        messageCallback('Hey');
                    } else {
                        messageCallback('Lol');
                    }
                }
            }, 2000);
        },

        disconnect() {
            clearInterval(intervalId);
            messageCallback = null;
            console.log('disconnecting from "' + roomId + '" room at ' + serverUrl + '...')
        },

        on(event, callback){
            if(messageCallback){
                throw Error('Cannot not add the handler twice')
            }
            if(event !== 'message'){
                throw Error('Only "message" event is supported')
            }
            messageCallback = callback;
        }

    }
}
export default chatConnection;