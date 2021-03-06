import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        required :true,
        minLength: 20
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    done:{
        type:Boolean,
        default:false
    }
});

