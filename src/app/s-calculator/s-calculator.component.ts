import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scalculator',
  templateUrl: './s-calculator.component.html',
  styleUrls: ['./s-calculator.component.css']
})
export class ScalculatorComponent implements OnInit {
value1
value2
operator=''
result
  // constructor() { 
  //   this.value1=50
  //   this.value2=30
  // }

  ngOnInit() {

   //this.result=parseInt(this.value1)+this.value2
  }
// calculate(i: number){
//   if(operator==''){
//   value1=i}
//   else{}
// console.log('cl called i'+i)
//   this.result=parseInt(this.value1)+parseInt(this.value2)
// }
calculatorResult(){
  this.result=parseInt(this.value1)+parseInt(this.value2)
}
setOperator(op){
  console.log('operator='+op)
  this.operator=op

}
inputEvent(e){
  console.log('event:' +e.target.value)
}
tableEvent(){
  console.log('inside table event:')

}
}

	
	
	

