import request from './request'
import '@/mock'

export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    //console.log(page, limit, categoryId)
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryId
        }
    }
    );
}

export async function getBlogType() {
    return await request.get('/api/blogType');
}


//获取单个blog
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}

//提交评论
export async function postComment(commentInfo) {
    return await request.post('/api/comment', commentInfo)
}

export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,
        },
    });
}
