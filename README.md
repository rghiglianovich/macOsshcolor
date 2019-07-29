# macOsshcolor

### credits
baesed on Henry Tseng's work  found here:
https://gist.github.com/henrytseng/f58ec119d5d989a6306d769d212b7648

## usage:
 
 clone it (https://github.com/rghiglianovich/macOsshcolor)  in your home directory.
 If you like to save it elsewere, remember to modify the paths!

create an alias:

 alias ssh="~/macOsshcolor/sshcolor.sh"
 
 you should save it into ~/.bash_profile or  ~/.zshrc or wherever 
 
create your profiles in Terminal/Preferences

at least: 
* a profile for Local connections, named "local"
* another  one for generic (or backup) remote: "remote"
* one for each remote server you'd like to colorize. The name must be the left part of the fqdn name 
  for example: for a connection like
      ssh john@myserver42.remote.com
   the profile must be called "myserver42"

