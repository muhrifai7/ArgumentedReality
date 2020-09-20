import fetchRequest from '../../utils/fetchRequest';

export async function Logout() {
  try {
    const response = await fetchRequest('POST', 'accounts/logout');
    return response;
  } catch (error) {
    throw error;
  }
}
