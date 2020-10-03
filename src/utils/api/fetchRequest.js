// @flow
import axios from 'axios';
import Config from 'react-native-config';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH';

export default async function fetchRequest(
  method: Method,
  path: string,
  data: any,
): any {
  try {
    const token = undefined;
    if (token != undefined) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos${''}`,
        {
          method,
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    } else {
      console.log('tidak ada token44');
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
        {
          method,
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: data,
        },
      );
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchFormData(path, imageFile) {
  // console.log(imageFile);
  const url = `${Config.REACT_APP_API_URL}${path}`;
  try {
    const formData = new FormData();
    if (imageFile instanceof Array) {
      await imageFile.map((item) => {
        formData.append('image', item);
      });
    } else {
      formData.append('image', imageFile);
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios.post(url, formData, config);
    const result = await response.data;
    return result;
  } catch (error) {
    throw error;
  }
}
