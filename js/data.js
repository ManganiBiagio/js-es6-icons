const allList=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const outputCardEl=document.querySelector(".output-card");
console.log(outputCardEl);

allList.forEach((item)=>{
	outputCardEl.innerHTML+=`<div class="col">
	<div class="card my-card">
		<div class="${item.color}"><i class="fa-solid ${item.prefix+item.name}"></i></div>
		<div class="card-text">${item.name.toUpperCase()}</div>
	</div>
</div>`


	
})

const filtroEl=document.querySelector("[name='filtro']");

filtroEl.addEventListener("change",function(){
	
	let currentList=[];
	
	allList.map((item)=>{
		if(item.type==="animal" && this.value==="animal"){
			currentList.push(item);
		}
		else if(item.type==="user" && this.value==="user"){
			currentList.push(item)
		}
		else if(item.type==="vegetable" && this.value==="vegetable"){
			currentList.push(item)

		}else if(this.value==="all"){
			currentList=allList;
		}
		outputCardEl.innerHTML="";
		currentList.forEach((item)=>{
			outputCardEl.innerHTML+=`<div class="col">
			<div class="card my-card">
				<div class="${item.color}"><i class="fa-solid ${item.prefix+item.name}"></i></div>
				<div class="card-text">${item.name.toUpperCase()}</div>
			</div>
		</div>`
		
		
			
		})
	})

	
	
})