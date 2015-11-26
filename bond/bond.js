function nomme_agent_par_id(matricule)
{
  var tab_agents = {
    "001":"Edward Donne",
    "002":"Bill Fairbanks",
    "003":"Jason Walters",
    "004":"Scarlett Papava",
    "005":"Stuart Thomas",
    "006":"Major Jack Giddings",
    "007":"James Bond",
    "008":"Bill",
    "009":"Unnamed",
    "0010":"Unnamed",
    "0011":"Cederic",
    "0012":"Sam Johnston",
    "0013":"Briony Thorne"
  };

  for (id in tab_agents)
  {
    if(id == matricule)
    {
      if (tab_agents[id] == "Unnamed")
      {
        tab_agents[id] = prompt("Cet agent n'est pas nommé. Veuillez le faire.")
        alert(tab_agents[id]);
      }
      else
      {
        alert(tab_agents[id]);
      }
    }
  }

}


nomme_agent_par_id(prompt("Entrez le matricule d'un agent"));
