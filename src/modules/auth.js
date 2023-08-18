import { setItem } from "../persistane/persistaneStorage"
import AuthService from "../service/auth"
const state = {
	isLoading: false,
	user: null,
	errors: null,
    isLogedin:null
}
// const getters = {
//  [getterTypes.currentuser]: state => {
//        return state.user
//     },
//     [getterTypes.isLogedin]: state => {
//         return Boolean(state.isLogedin)
//     },
//     [getterTypes.isAnyonms]: state => {
//         return state.isLogedin === false
//     }

// }
const mutations = {
	registerStart(state) {
		state.isLoading = true
		state.user = null
		state.errors = null
        state.isLogedin = null
		
	},
	registerSuccess(state, payload) {
		state.isLoading = false
		state.user = payload
        state.isLogedin = true
		
	},
	registerFailure(state, payload) {
		state.isLoading = false
		state.errors = payload.errors
        state.isLogedin = false
		
	},
    loginStart(state) {
		state.isLoading = true
		state.user = null
		state.errors = null
        state.isLogedin = null

		
	},
	loginSuccess(state, payload) {
		state.isLoading = false
		state.user = payload
        state.isLogedin = true
		
	},
	loginFailure(state, payload) {
		state.isLoading = false
		state.errors = payload.errors
        state.isLogedin = false
		
	},
    currentuserStart(state){
        state.isLoading = true
    },
    currentuserSuccess(state,payload){
        state.isLoading = false,
        state.user = payload,
        state.isLogedin = true
    },
    currentuserFailure(state){
        state.isLoading = false,
        state.user = null,
        state.isLogedin = false
    },
    logout(state){
        state.user = null,
        state.isLogedin = false

    }
    




}
    const actions = {
        register(context, user){
        return new Promise((resolve, reject) => {
            context.commit('registerStart')

            AuthService.register(user)
            .then(response => {
                context.commit('registerSuccess', response.data.user)
                setItem('token',response.data.user.token)
                resolve(response.data.user)
            })
            .catch(error => {
                context.commit('registerFailure', error.response.data)
                reject(error.response.data)
            })
        })
        },
        login(context, user){
            return new Promise((resolve,reject) => {
                context.commit('loginStart')
    
                AuthService.login(user)
                .then(response => {
                    context.commit('loginSuccess', response.data.user)
                    setItem('token',response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(error => {
                    context.commit('loginFailure', error.response.data)
                    reject(error.response.data)
                })
            })
            },
            getuser(context){
                return new Promise(resolve => {
                    context.commit('currentuserStart')
                    AuthService.getUser().then(response => {
                        context.commit('currentuserSuccess', response.data.user)
                        resolve(response.data.user)
                    }).catch(() => {
                        context.commit('currentuserFailure')
                        
                    })
                })
            },
            logout(context){
               context.commit('logout') 
               removeitem('token')
            }
            
    }
            export default {
                state,
                mutations,
                actions,
            }