import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  stdform= new FormGroup({
    name:new FormControl('',[Validators.required]),
    rollno:new FormControl('',[Validators.required,Validators.pattern('[0-9]{0,3}')]),
    address: new FormGroup({
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required])

    })
  })
get nam(){
  return this.stdform.get('name')
}
get rno(){
  return this.stdform.get('rollno')

}
get cit(){
  return this.stdform.get('address.city')
}
get stat(){
  return this.stdform.get('address.state')
}
  arr:Array<any>=[]

    add(){
        this.arr.push({name:this.stdform.value.name,rollno:this.stdform.value.rollno,address:{city:this.stdform.value.address?.city,state:this.stdform.value.address?.state}})
        console.log(this.arr[0].address.city);

        
    }
    //  i = 0;
     pat(){
      //  console.log(x);
      //  if(this.i==x){
 
         this.stdform.patchValue({
           name:"aman",
           rollno:"25",
           address:{
             city:"ahmedabad",
             state:"Gujarat" 
         }
         })
        //  console.log(this.i);
      //  };
      //  this.i++;
      }
    
      
      
}
