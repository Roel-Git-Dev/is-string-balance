export class Stack  {
    #_previous_pointer = -1
    #_current_pointer = 0
    #_stack_array = Array()
    
   Push(item){
       this._stack_array.splice(this._current_pointer,0,item)
       this._previous_pointer = this._current_pointer
       this._current_pointer +=  1
   }

   Pop(){
       return_val = this._stack_array[this._current_pointer]
       this._stack_array.splice(this._previous_pointer,1)
       this._current_pointer = this._previous_pointer
       this._previous_pointer -= 1
       return return_val
   }

   Peek(){
       const return_val =  this._stack_array[this._current_pointer]
       return return_val
   }

   Count(){
       return this._stack_array.length
   }
}