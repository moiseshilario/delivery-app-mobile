import AsyncStorage from '@react-native-community/async-storage';

export async function setItemAsync(name, item) {
  try {
    await AsyncStorage.setItem(name, item);
  } catch (error) {
    // console.tron.log(`AsyncStorage error during ${name} store:`, error);
  }
}

export async function getItemAsync(item) {
  try {
    const data = await AsyncStorage.getItem(item);
    return data;
  } catch (error) {
    // console.tron.log(`AsyncStorage error during ${item} get:`, error);
    return null;
  }
}

export async function clearAsync() {
  AsyncStorage.clear();
}
