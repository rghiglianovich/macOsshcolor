# macOsshcolor

baesed on the work found here:

https://gist.github.com/henrytseng/f58ec119d5d989a6306d769d212b7648


usage:

put it in your home directory

create an alias:

 alias ssh="~/macOsshcolor/sshcolor.sh"
 
 you can save the alias into ~/.bash_profile
 
create your profiles in Terminal/Preferences

at least: 
* 1 profile for Local connections  ("local")
* 1 for generic remote ("remote")
* one for each remote server you'd like to colorize. The name must be the left part of the fqdn name
  for example: for a connection like
      ssh john@myserver42.remote.com
   the profile must be called "myserver42"

