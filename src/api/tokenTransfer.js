import {signalR} from "@microsoft/signalr";

export async function tokenTransfer() {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://api.tzkt.io/v1/events")
        .build();

    async function init() {
        // open connection
        await connection.start();
        // subscribe to head
        await connection.invoke("SubscribeToHead");
        // subscribe to account transactions
        await connection.invoke("SubscribeToTokenTransfers", {
            address: 'KT19kgnqC5VWoxktLRdRUERbyUPku9YioE8W',
            types: 'transaction'
        });
    };

    connection.onclose(init);
    // auto-reconnect

// connection.on("head", (msg) => {
//     console.log(msg);
// });



    await init();

    return connection;



}



