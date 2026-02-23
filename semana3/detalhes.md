23/02/2026
Inicio dos estudos com angular

requisitos
node instalado: node -v 
verificar angular: ng version
para instalar angular: npm install -g @angular/cli  



PS C:\desenvolvimento\imersao\semana3\aula1> node -v
v22.20.0
PS C:\desenvolvimento\imersao\semana3\aula1> npm -v
10.9.3
PS C:\desenvolvimento\imersao\semana3\aula1> npm config get prefix
PS C:\desenvolvimento\imersao\semana3\aula1> where ng
PS C:\desenvolvimento\imersao\semana3\aula1> $env:PATH = "C:\desenvolvimento\node-v12.22.9-win-x64;" + $env:PATH
PS C:\desenvolvimento\imersao\semana3\aula1> $npmGlobal = $(npm config get prefix)
PS C:\desenvolvimento\imersao\semana3\aula1> $env:Path = "$env:Path;$npmGlobal"
PS C:\desenvolvimento\imersao\semana3\aula1> ng version

ng serve --open

1º Estilizar o blog do cliente
 
 
2º Desafio: Sistema de Suporte ao Cliente (Help Desk)
 
"Você foi contratado para criar uma ferramenta interna para o time de suporte. 

O sistema deve permitir que o atendente registre o nome do cliente e a dúvida/problema.
 
 
Além disso, deve ser possível:
 
Cadastrar um novo ticket.
 
Marcar como Resolvido (Excluir o ticket da lista).
 
Editar as informações caso o atendente tenha digitado algo errado.
 
Mostrar uma mensagem caso não haja nenhum atendimento pendente."
 
Estilizado
 