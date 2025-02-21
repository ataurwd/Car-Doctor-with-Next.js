"use server"
import  dbConnect  from '@/lib/dbConnect';

const registerUser = async(payload) => {
    const userCollection = dbConnect("user")

    const isExist = await userCollection.findOne({ email: payload.email })
    if (isExist) {
        return null;
    }
    const user = await userCollection.insertOne(payload);
    return user;
};

export default registerUser;