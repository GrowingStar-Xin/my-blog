import "@/mock"
import request from "./request"


export async function getMessage(page = 1, limit = 10) {
    return await request.get("/api/message", {
        params: {
            page,
            limit
        }
    })
}
//提交数据
export async function postMsg(newInfo) {
    console.log("newInfo", newInfo);
    return await request.post("/api/message", newInfo);
}

// export async function postMessage(messageInfo) {
//     return await request({
//         url: "/api/message",
//         method: "post",
//         data: {
//             ...messageInfo
//         }
//     })
// }