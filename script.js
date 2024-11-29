function firstWord(s) {

	let len=s.length;
	let i=0;

	while(i<len && s.charAt(i)===" ")
		{
			i++;
		}

	let ans="";

	while(i<len && s.charAt(i)!==" ")
		{
			ans+=s.charAt(i);
			i++;
		}

	return ans;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
