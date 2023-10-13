// import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'api/user/'

// Register user 
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        // Store the data in localStorage under the key 'user'
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user 
const login = async (userData) => {
    console.log('logging in')
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        // Store the data in localStorage under the key 'user'
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}
export default authService