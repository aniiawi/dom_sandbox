
	var contents_byTag = document.getElementsByTagName("div"); //ищем все элементы с тегом div
	console.log(contents_byTag);
	var contents_byid = document.querySelector('#header'); //ищем все элемены с id = header. классы будем искать .class_name
	contents_byid.style.color = 'green'; //работа со стилями

	var contents_byClass = document.querySelector(".my_list");
	//contents_byClass.classList.add("other_list") // работа с классом other_list через первый класс my_list - добавление css класса. можно добавить несколько классов одновременно
	//my_list.classList.remove("other_list") //удаляем класс

	var my_button = document.querySelector(".my_button");
	my_button.onclick = function(){
		this.classList.toggle("other_list"); //на клик меняет цвет в соответсвии со стилями other_list
	}


	var data_work = document.querySelector(".other_list_p"); //вывести значения атрибута класса в консоль
	console.log(data_work.getAttribute("data"));
	console.log(document.querySelectorAll("div")[2].getAttribute("class")); //вывести значения атрибута class второго (третьего) элемента с тегом div
	data_work.setAttribute("id", 'my');//добавить новый атрибут и задать ему какое нибудь значение

