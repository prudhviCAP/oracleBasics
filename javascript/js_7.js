<html>
	<head>
		<script>
		function compundInt(){
		p=document.getElementById("p").value;
		n=document.getElementById("n").value;
		r=document.getElementById("r").value;
		t=document.getElementById("t").value;
		A = (p* Math.pow((1 + (r/100), n)));
	
		document.write("Total amount to be paid is "+A);
		document.write("Interest is "+(A-p));
		}
		</script>
	</head>
	<body>
		<script>
			compoundInt();
		</script>
</html>