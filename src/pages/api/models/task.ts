import mongoose, {Document,Schema, StringExpressionOperatorReturningBoolean} from 'mongoose';

interface ITask extends Document{
    name: string;
    completed: boolean;
}
const taskschema: Schema = new Schema({
    name:{type:String, required:true},
    completed:{type:Boolean, default:false},
});

const Task = mongoose.models.Task || mongoose.model<ITask>('Task',taskschema);

export default Task;