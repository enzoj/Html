// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDR5xVWWZEe4QZDDflNbOTojgbydvU2Ay0",
    authDomain: "enzo-unifacs-contatos.firebaseapp.com",
    databaseURL: "https://enzo-unifacs-contatos.firebaseio.com",
    projectId: "enzo-unifacs-contatos",
    storageBucket: "enzo-unifacs-contatos.appspot.com",
    messagingSenderId: "680953162833"
  };
  firebase.initializeApp(config);

	function listarContatos() {

		firebase.database().ref("contatos").on("value", function(snapshot){

			var html = "";

			snapshot.forEach(function(child){

				html += '<tr>'+
						    '<td>'+child.val().nome+'</td>'+
						    '<td>'+child.val().nome+'</td>'+
						    '<td class="hidden-xs">'+child.val().nome+'</td>'+
						    '<td> <a class="btn btn-warning" href="editar.html"><span class="glyphicon glyphicon-pencil"></span></a></td>'+
						    '<td> <button class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></td>'+
					  	'</tr>';
			});

			$("#tblConteudo").html(html);
		});

	}


  function cadastrarContato(){

  	var nome = $("#nome").val();
  	var telefone = $("#telefone").val();
  	var email = $("#email").val();

  	var contato = {
  		nome: nome,
  		telefone: telefone,
  		email: email
  	};

  	firebase.database()
  		.ref("contatos")
  		.push(contato)
  		.then(function(result){

	  		alert("Cadastrado com sucesso!");
	  		console.log(result);
	  		location.href = "listar.html";

	  	})
	  	.catch(function(result){

	  		alert("Erro ao cadastrar");
	  		console.log(error.message);
	  	});

  }