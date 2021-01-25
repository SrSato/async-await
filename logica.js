async function yaCasiEsta(){
	let estado = new Promise((resolve,reject) =>{	
		setTimeout(() => {
			resolve("Completado!");
		}, 2000);		
		setTimeout(() => {
			reject(new Error("No dio tiempo!"));
		}, 2500);
	});	
	return estado;
}

async function compruebaSiYa(){
	try{		
		let respuesta  = await yaCasiEsta();
		console.log(respuesta);
	}catch (err){
		console.log(err.message);
	}
}

compruebaSiYa();


