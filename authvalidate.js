import * as jose from 'jose'
import axios from 'axios'

const openidDiscoveryURI = 'https://login.microsoftonline.com/d2f6c0f3-9039-4a02-9e93-b489a6944a07/v2.0/.well-known/openid-configuration'
let JWKSUri = ''
let JWKS = ''
const jwtOptions = {
    audience: 'api://26581cea-19ca-4e02-8e64-68676836db6c',
    issuer: 'https://sts.windows.net/d2f6c0f3-9039-4a02-9e93-b489a6944a07/',
}
async function getJWKSUri() {
    await axios.get(openidDiscoveryURI).then((response) => {
        JWKSUri = response.data.jwks_uri
        JWKS = jose.createRemoteJWKSet(new URL(JWKSUri))
        console.log('OK '+ JWKSUri)
    })
    .catch(err => {
        throw err
    })
}


getJWKSUri()

/**
 * Validate JWT and check authentication
 * @param {string} bearerToken 
 */
export async function validateAuthToken(bearerToken) {
    console.log(bearerToken)
    if (bearerToken === undefined) {
        throw [401, 'Unauthenticated!']
    }
    let token = bearerToken.replace('Bearer ', '')
    return await jose.jwtVerify(token, JWKS, jwtOptions).then((response) => {
        if (response.payload.scp = 'CadetData.ReadAll') {
            //\\console.log(response.payload.scp)
            return response
        } else {
            throw [403, 'Invalid Scope!']
        }
    }).catch((err) => {
        if (err[0] == 403) {
            throw err
        } else {
            throw [401, 'Unauthenticated! ' + err]
        }
    })
}