nicks = "", procede = true;

while (procede)
{
  nick = prompt("Entrez l'un apres l'autre, le prenom de vos freres et soeur.").toLowerCase();
  if (nick)
  {
    nicks += nick + " ";
  }
  else
  {
    break;
  }
}

console.log(nicks);
delete nicks;
delete nick;
delete procede
console.log(nicks);
