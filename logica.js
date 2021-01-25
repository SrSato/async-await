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

//simplifico la getEmpleado, que en el primer ejercicio
//me vine muy arriba. Ahora simplemente devuelve el 
//objeto empleado asociado al id que le pasen
let getEmpleado = (id)=>{
	let empleado =new Promise((resolve,reject) =>{	
		employees.forEach(employe=>{
			if(employe.id==id){	
				resolve(employe);				
			}
		});
		
		reject("El id no aparece en el registro de empleados");	
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
		reject("Esta personita no cobra");	
	});
	return salario;
}

//Te va a devolver el sueldo de alguien o los errores que se encuentre
//al buscarlo entre los empleados y entre los salarios.
getEmpleado(1).then(getSalario).then(console.log).catch(console.log);
