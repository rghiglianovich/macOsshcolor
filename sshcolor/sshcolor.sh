#!/bin/sh




# alias ssh="~/sshcolor/sshcolor.sh"



LOCAL="local"

osascript -l JavaScript ~/macOsshcolor/sshcolor.js $@  > /dev/null

/usr/bin/ssh "$@"

# Change the color of the terminal back to what it was before
osascript -l JavaScript  ~/macOsshcolor/sshcolor.js $LOCAL > /dev/null
