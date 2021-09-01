import {firebaseDatabase} from './firebase';

class CupsRepository {

  syncCups(userId, onUpdate){
    const ref = firebaseDatabase.ref(`${userId}/cups`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCups(userId, cups){
    firebaseDatabase.ref(`${userId}/cups/${cups.id}`).set(cups);
  }

  removeCups(userId, cups){
    firebaseDatabase.ref(`${userId}/cups/${cups.id}`).remove();
  }
}

export default CupsRepository;