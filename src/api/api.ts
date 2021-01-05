import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "ee9ed3e3-edf2-4816-99c4-fed9295b0347"}
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => {
                return response.data
            })
    }
}

export const profileApi = {
    getProfile(userId: string) {
        return instance
            .get(`profile/` + userId,
            )
            .then(response => {
                return response.data
            })
    }
}

export const authApi = {
    getAuth() {
        return instance
            .get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const unfollowApi = {
    unfollow(id: string) {
        return instance
            .delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const followApi = {
    follow(id: string) {
        return instance
            .post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}