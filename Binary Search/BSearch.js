var arr=[];

function show()
{
	document.getElementById("space").innerHTML =arr.join(" ");
}


function add()
{

	var el=document.getElementById('EntryId').value;
	arr.push(el);
	show();
}

function search(){
	var el=document.getElementById('sEl').value;
	arr.sort();
	var low=0;
    var high=arr.length;
	bSearch(el,low,high);
}

function bSearch(el,low,high){
	var mid=parseInt((high+low)/2);
	if(arr.includes(el)){
		if(el==arr[mid]){
			document.getElementById('show').innerHTML="The element is found at index "+mid;
			return ;
		}
		else if(el<=arr[mid]){
			high=mid;
			bSearch(el,low,high);
		}
		else if(el>arr[mid]){
			low=mid;
			bSearch(el,low,high);
		}
	}
	else{
		document.getElementById('show').innerHTML="Not found";
	}
	
	
}

