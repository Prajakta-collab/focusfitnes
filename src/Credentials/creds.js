import {jwtDecode} from 'jwt-decode';
import { baseUrl } from '../configs/urlConfigs';
import localStorage from 'localStorage';
import { useHistory } from 'react-router-dom';



export const setCredentials = (keys) => {
  try {
    // Save tokens to localStorage
    localStorage.setItem('token', JSON.stringify(keys));
  } catch (e) {
    console.log(e);
  }
};

export const getCredentials = () => {
  try {
    // Retrieve tokens from localStorage
    let credentials = localStorage.getItem('token');
    console.log("creds ", credentials)

    if (credentials) {
      let parsedCredentials = JSON.parse(credentials);
      let verifiedKeys = getVerifiedKeys(parsedCredentials);

      if (verifiedKeys) {
        return verifiedKeys;
      }
    }
  } catch (e) {
    console.log(e);
  }

  return null;
};

export function isTokenExpired(token) {
    console.log("token got in isTokenExpired",token)
  try {
    let decoded = jwtDecode(token);
    console.log("decoded token",decoded.exp);
    if (decoded.exp < Date.now() / 1000) {
      console.log('Token expired');
      return true;
    }
    return false;
  } catch (e) {
    console.log('Error decoding token', e);
    return true;
  }
}

async function getVerifiedKeys(token) {

  console.log('Loading keys from storage');

  if (token) {
    console.log('Checking access token');

    if (!isTokenExpired(token)) {
      console.log('Returning valid access token');
      return token;
    } else {

     console.log('Access token expired, checking refresh token');
    //   console.log('Fetching new access token using refresh token');

        let decoded = jwtDecode(token);

        // call API to get refresh token from username that is decoded from the access token
        const responseRefToken=await getRefreshToken(decoded?.sub);
        console.log("decoded username",decoded.sub)

        if(responseRefToken?.success==true){
          console.log("refresh token got from res", responseRefToken)
          const response = await getAccessUsingRefresh(responseRefToken?.refreshToken);
          console.log('Response from token refresh:', response);
  
          //refresh token is expired 
          if(response?.success == false){
            //redirect pendign
            
  
          }
          else if (response && response?.token){
            localStorage.setItem('token', JSON.stringify(response?.token));
            console.log('Updated tokens in localStorage');
            return response.token;
          }
       
        }else{
          
        }
        
    }
  } else {
    console.log('No tokens available, please login');
    return null;
  }






}

export async function getAccessUsingRefresh(refreshToken) {
    console.log('getting new accessToken using refresh token')
  try {
    const response = await fetch(`${baseUrl}/auth/refreshToken`, {
      method: 'POST',
      
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'token':refreshToken})

    });
    return await response.json();
  } catch (e) {
    console.log('Error fetching new access token:', e);
  }
}

export async function getRefreshToken(username) {
    console.log('getting refresh token using username')
  try {
    const response = await fetch(`${baseUrl}/auth/by-email`, {
      method: 'POST',
      
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'email':username
      },
      

    });
    return await response.json();
  } catch (e) {
    console.log('Error fetching refresh token by username:', e);
  }
}

