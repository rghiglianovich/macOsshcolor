# macOsshcolor


This  script changes the macOS Terminal.app Profile, according to the remote server name you are SSHing. 

There are two ways to achieve the goal:  either 

you can have a custom profile for each remote server you usually use 

*OR*
you can have a json file with a collection of relations "servername":"profile name", like:

      {
        "server":"Red Sands",
        "server1":"Custom 1",
        "serverX":"Red Sands",
      }
 in this way you can use the same profile for more servers.
 


## Usage:
  
* Clone https://github.com/rghiglianovich/macOsshcolor.git in your home directory.
 If you like to save it elsewere, remember to modify the paths!

* Make an alias:

      alias ssh="~/macOsshcolor/sshcolor.sh"
 
   You should save it into ~/.bash_profile or  ~/.zshrc or wherever 
 
 * Set up your profiles in Terminal/Preferences:

    * a Profile for Local connections, named "_local_"
    * another  one for generic (or backup) remote: "_remote_"
    * all the other profiles you need.
    * copy the json file : sshcolorNames.json.demo in sshcolorNames.json and customize it

 *  The name used for the matches is always the left part of the FQDN <br />
   Example: for a connection like
           **ssh john@myserver42.remote.com**     _"myserver42"_ will be searched.<br />

 * If the name does not have an entry in the sshcolorNames.json, then a Profile with the same name is searched<br />
     
 * If the server you're connecting to  doesn't match with a custom profile 
   or with an entry on the sshcolorNames.json file, the generic one  ("_remote_") will be taken.
       

### Credits

This script is inspired by  Henry Tseng's one  found here:
https://gist.github.com/henrytseng/f58ec119d5d989a6306d769d212b7648
