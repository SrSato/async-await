let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmpleado = (id)=>{
	let empleado =new Promise((resolve,reject) =>{	
		employees.forEach(employe=>{
			if(employe.id==id){	
				resolve(employe);				
			}
		});		
		reject(new Error("El id no aparece en el registro de empleados"));	
	});
	return empleado;
}

let getSalario =(empleado)=>{
	let salario = new Promise((resolve,reject)=>{
		salaries.forEach(mount=>{
			if(mount.id==empleado.id){
					resolve(mount.salary);
			}
		});
		reject(new Error("Esta personita no cobra"));	
	});
	return salario;
}


async function imprimePersonaSalario(id){
	let persona="";
	try{
		persona = await getEmpleado(id);
		salario = await getSalario(persona);
		console.log(`La persona llamada ${persona.name} cobra ${salario}.`);			
	}catch (err) {
		console.log(err.message);
	}
				
}

imprimePersonaSalario(1);