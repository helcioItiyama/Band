import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

  export const storage = {
    get: async(key: string) => {
      try {
        const item = await AsyncStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch(err: any) {
        Alert.alert('Aviso', 'Houve um imprevisto. Por favor, tente mais tarde novamente.');
      }
    },
    set: async<T>(key: string, data:T) => {
      try {
        if(!key) return;
        if(!data) return;
        await AsyncStorage.setItem(key, JSON.stringify(data));
      } catch(err: any) {
        Alert.alert('Aviso', 'Houve um imprevisto. Por favor, tente mais tarde novamente.');
      }
    }
  };
