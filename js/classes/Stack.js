export class Stack  {
     #_previous_pointer = -1
     #_current_pointer = 0
     #_stack_array = new Array()

   Push(item){
       this.#_stack_array.splice(this.#_current_pointer,0,item)
       this.#_previous_pointer = this.#_current_pointer
       this.#_current_pointer +=  1
   }

   Pop(){
       let return_val = this.#_stack_array[this.#_previous_pointer]
       this.#_stack_array.splice(this.#_previous_pointer,1)
       this.#_current_pointer = this.#_previous_pointer
       this.#_previous_pointer -= 1
       return return_val
   }

   Peek(){
       return this.#_stack_array[this.#_previous_pointer]
   }

   Count(){
       return this.#_stack_array.length
   }
}