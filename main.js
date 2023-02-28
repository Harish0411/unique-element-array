/ unique element in array

let arrD = [12,11,67,12,5,5,8,9,6,11,67,35,100,100];
let al =[];

let fil = arrD.filter((x,i,arr) => arr.indexOf(x) === i);
console.log(fil)

function findDuplicate(a){
      for(i=0; i<a.length; i++){
	  let c = 0;
	      for(j=0; j<i-1; j++){
		       if(a[i] == a[j] ){
    			  // break;
				  c++;
				  }
			for(k=i+1; k<a.length; k++){
			     if(a[i] == a[k]){
				    c++;
				}
			}
	
				if(c = 0) {
				console.log(a[i]);
				}
			  }
		  }
	 }
findDuplicate(arrD);
console.log(al);

