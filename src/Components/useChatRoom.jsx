import chatConnection from "./Chat";
import showNotification from "./Notification";
import { useEffect } from "react";

function useChatRoom({roomId, serverUrl, onReceiveMessage}){

    useEffect(() => {

        const options = {
            serverUrl: serverUrl,
            roomId: roomId,
            onReceiveMessage(msg) {
                showNotification('New message: ' + msg);
            }
        };

        const connection = chatConnection(options);
        connection.connect();

        connection.on('message', (msg) => {
            onReceiveMessage(msg);
        });

        return () => connection.disconnect();
    }, [roomId, serverUrl, onReceiveMessage]);

}
export default useChatRoom;