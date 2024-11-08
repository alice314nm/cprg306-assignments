import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function dbAddItem (userId, itemObj){
    try {
        const newItemReference = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(newItemReference, itemObj);
        console.log(newItemPromise.id)
    }
    catch (error){
        console.log(error)
    }
}

export async function dbGetItemsByUser(userId, itemListStateSetter){
    try {
        const allItemsReference = collection(db, "users", userId, "items");
        const allItemsQuery = query(allItemsReference);
        const querySnapshot = await getDocs(allItemsQuery);

        let itemsList = [];
        
        querySnapshot.forEach((docSnap)=>{
            let thisItem = {
                id: docSnap.id,
                ...docSnap.data()
            }

            itemsList.push(thisItem)
        });        

        itemListStateSetter(itemsList)
    }
    catch (error){
        console.log(error)
    }
}
