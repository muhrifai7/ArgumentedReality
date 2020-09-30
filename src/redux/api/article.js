import fetchRequest from '../../utils/api/fetchRequest';

export async function GetArticle() {
  try {
    const response = await fetchRequest('GET', 'albums');
    return response;
  } catch (error) {
    throw error;
  }
}
